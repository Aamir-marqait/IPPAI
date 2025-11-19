"use client";
import { useParams, notFound } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getEventBySlug, type Event } from "@/lib/sanity/queries";
import Link from "next/link";

// Proper TypeScript interfaces
interface EventDetail {
  icon?: string;
  text?: string;
}

interface HighlightItem {
  emoji?: string;
  title?: string;
  description?: string;
  color?: string;
}

interface ContactItem {
  name?: string;
  email?: string;
  phone?: string;
}

export default function EventDetailPage() {
  const params = useParams();
  const eventName = params.eventName as string;
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    async function fetchEvent() {
      try {
        const eventData = await getEventBySlug(eventName);
        if (!eventData) {
          notFound();
        }
        setEvent(eventData);
      } catch (error) {
        console.error("Error fetching event:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    }

    fetchEvent();
  }, [eventName]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // ⭐ CRITICAL: Store form reference BEFORE any async operations
    // React's synthetic event will be nullified after async operations
    const form = e.currentTarget;
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(form);
    
    // Extract data for Google Sheets
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      message: formData.get("message"),
      source: formData.get("source"),
      event_name: formData.get("event_name"),
    };

    console.log("📝 Form submission started", data);

    try {
      // Submit to Web3Forms (email notification)
      console.log("📧 Sending to Web3Forms...");
      const web3FormsResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      console.log("📧 Web3Forms response status:", web3FormsResponse.status);
      console.log("📧 Web3Forms response ok:", web3FormsResponse.ok);

      // Submit to Google Sheets (don't wait for it, send in parallel)
      console.log("📊 Sending to Google Sheets...");
      fetch(
        "https://script.google.com/macros/s/AKfycbzundmFjoaZr-aaGk9rIyWL_CdZYtu16nduh4MrNTkN2L-ft2hsgf8hHQGLUZpfOK6jXg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      ).then(() => console.log("📊 Google Sheets request sent (no-cors mode)"))
       .catch(err => console.error("📊 Google Sheets error:", err));

      // Try to parse response
      let responseData;
      try {
        responseData = await web3FormsResponse.json();
        console.log("📧 Web3Forms response data:", responseData);
      } catch (jsonError) {
        console.error("❌ Failed to parse Web3Forms response as JSON:", jsonError);
        const responseText = await web3FormsResponse.text();
        console.log("📧 Web3Forms response text:", responseText);
        
        // If we can't parse JSON but status is ok, treat as success
        if (web3FormsResponse.ok) {
          setSubmitStatus({
            type: "success",
            message: "Thank you! Your inquiry has been submitted successfully.",
          });
          form.reset(); // ⭐ Use stored form reference
          return;
        } else {
          throw new Error(`Invalid response format. Status: ${web3FormsResponse.status}`);
        }
      }

      // Check response data
      if (responseData && responseData.success) {
        console.log("✅ Form submission successful!");
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your inquiry has been submitted successfully.",
        });
        form.reset(); // ⭐ Use stored form reference
      } else {
        console.error("❌ Web3Forms returned success: false", responseData);
        setSubmitStatus({
          type: "error",
          message: responseData?.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("❌ Form submission error:", error);
      console.error("Error details:", {
        name: error instanceof Error ? error.name : 'Unknown',
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined
      });
      
      setSubmitStatus({
        type: "error",
        message: "Failed to submit inquiry. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
      console.log("🏁 Form submission completed");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-gray-900">Loading event details...</p>
        </div>
      </div>
    );
  }

  if (!event) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto pt-20 sm:pt-28 pb-16 px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center text-sm">
          <Link href="/events" className="font-semibold text-gray-600 hover:text-red-600 transition-colors">
            Events
          </Link>
          <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="font-semibold text-gray-900">
            {(() => {
              if (typeof event.breadcrumb === 'string') {
                return event.breadcrumb;
              } else if (event.breadcrumb && typeof event.breadcrumb === 'object') {
                return event.breadcrumb.eventTitle || event.title;
              } else {
                return event.title;
              }
            })()}
          </span>
        </nav>

        {/* Hero Image */}
        <div className="mb-8 border-2 border-gray-200 rounded-lg overflow-hidden">
          {event.image ? (
            <Image
              src={event.image}
              alt={event.title}
              width={1200}
              height={500}
              className="w-full object-cover"
              priority
            />
          ) : (
            <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center">
              <p className="text-gray-400">Event Image</p>
            </div>
          )}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title Section */}
            <div>
              <h1 className="font-bold text-3xl sm:text-4xl text-gray-900 mb-4 leading-tight">
                {event.title}
              </h1>
              
              {event.theme && (
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-md border border-red-200 font-semibold">
                  {event.theme}
                </div>
              )}
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-gray-200">
              {/* Date & Time */}
              <div className="flex items-start gap-3">
                <div className="bg-red-600 rounded-lg p-3 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Date & Time</p>
                  <p className="font-bold text-gray-900">{event.date}</p>
                  {event.time && <p className="text-sm text-gray-600 mt-1">{event.time}</p>}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="bg-black rounded-lg p-3 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 21c-6-5.5-8-8.5-8-12a8 8 0 1116 0c0 3.5-2 6.5-8 12z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Location</p>
                  <p className="font-bold text-gray-900 text-sm leading-tight">{event.location}</p>
                </div>
              </div>

              {/* Capacity - if exists */}
              {event.capacity && (
                <div className="flex items-start gap-3">
                  <div className="bg-gray-900 rounded-lg p-3 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Capacity</p>
                    <p className="font-bold text-gray-900">{event.capacity}</p>
                  </div>
                </div>
              )}

              {/* Organizer - if exists */}
              {event.organizer && (
                <div className="flex items-start gap-3">
                  <div className="bg-red-600 rounded-lg p-3 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Organized By</p>
                    <p className="font-bold text-gray-900">{event.organizer}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Concept Note */}
            {event.conceptNote && (
              <div className="border-l-4 border-red-600 bg-red-50 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Concept Note</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {event.conceptNote}
                </p>
              </div>
            )}

            {/* About Event */}
            {event.aboutEvent?.mainDescription && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
                
                {event.eventDuration && (
                  <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md mb-4 font-semibold">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {event.eventDuration}
                  </div>
                )}
                
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {event.aboutEvent.mainDescription}
                </p>
                
                {event.aboutEvent.details && event.aboutEvent.details.length > 0 && (
                  <div className="space-y-3">
                    {event.aboutEvent.details.map((detail: EventDetail, i: number) => (
                      <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <div className="bg-red-600 rounded p-2">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700 leading-relaxed flex-1">{detail.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Venue Information */}
                {event.aboutEvent.venue && (
                  <div className="mt-6 bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {event.aboutEvent.venue.title || 'Venue Information'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{event.aboutEvent.venue.description}</p>
                  </div>
                )}
              </div>
            )}

            {/* Event Highlights */}
            {event.highlights && event.highlights.items && event.highlights.items.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {event.highlights.title || 'Event Highlights'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.highlights.items.map((item: HighlightItem, index: number) => (
                    <div 
                      key={index} 
                      className="bg-gray-50 p-5 rounded-lg border-l-4 hover:shadow-md transition-shadow"
                      style={{ borderColor: item.color || '#DC2626' }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-3xl">{item.emoji}</span>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-700 leading-relaxed text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Critical Issues */}
            {event.criticalIssues && event.criticalIssues.items && event.criticalIssues.items.length > 0 && (
              <div className="border-l-4 border-red-600 bg-red-50 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {event.criticalIssues.title || 'Critical Issues'}
                </h2>
                <ul className="space-y-2">
                  {event.criticalIssues.items.map((issue: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      -
                      <span className="text-gray-800 leading-relaxed">{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Why Attend */}
            {event.whyAttend && (
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {event.whyAttend.title || 'Why Attend'}
                </h2>
                <p className="text-gray-800 text-base leading-relaxed">{event.whyAttend.description}</p>
              </div>
            )}

            {/* Who Should Attend */}
            {event.whoShouldAttend && event.whoShouldAttend.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Should Attend</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {event.whoShouldAttend.map((attendee: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800 font-medium">{attendee}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Delegate Fees */}
            {event.delegateFees && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration Fees</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {event.delegateFees.privateEntities && (
                    <div className="bg-gray-50 p-5 rounded-lg border-2 border-gray-200">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Private Entities</p>
                      <p className="text-2xl font-bold text-gray-900">{event.delegateFees.privateEntities}</p>
                    </div>
                  )}
                  {event.delegateFees.governmentEntities && (
                    <div className="bg-gray-50 p-5 rounded-lg border-2 border-gray-200">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Government Entities</p>
                      <p className="text-2xl font-bold text-gray-900">{event.delegateFees.governmentEntities}</p>
                    </div>
                  )}
                  {event.delegateFees.sercChairmenMembers && (
                    <div className="bg-gray-50 p-5 rounded-lg border-2 border-gray-200">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">SERC Chairmen & Members</p>
                      <p className="text-2xl font-bold text-gray-900">{event.delegateFees.sercChairmenMembers}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Awards Information */}
            {event.awards && (
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {event.awards.title || 'Awards'}
                </h2>
                {event.awards.description && (
                  <p className="text-gray-800 leading-relaxed mb-4">{event.awards.description}</p>
                )}
                {event.awards.date && (
                  <p className="text-gray-700 mb-4"><strong>Awards Date:</strong> {event.awards.date}</p>
                )}
                {event.awards.categories && event.awards.categories.length > 0 && (
                  <div>
                    <p className="font-bold text-gray-900 mb-3">Award Categories:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {event.awards.categories.map((category: string, index: number) => (
                        <div key={index} className="flex items-center gap-2 bg-white p-3 rounded border border-gray-200">
                          <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-800 text-sm">{category}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Prizes */}
            {event.prizes && event.prizes.items && event.prizes.items.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {event.prizes.title || 'Prizes'}
                </h2>
                <div className="space-y-3">
                  {event.prizes.items.map((prize: string, index: number) => (
                    <div key={index} className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg border-l-4 border-red-600">
                      <svg className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <p className="text-gray-800 leading-relaxed">{prize}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contacts */}
            {event.contacts && event.contacts.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.contacts.map((contact: ContactItem, index: number) => (
                    <div key={index} className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                      {contact.name && (
                        <p className="font-bold text-gray-900 text-lg mb-3">{contact.name}</p>
                      )}
                      {contact.email && (
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <a href={`mailto:${contact.email}`} className="text-red-600 hover:underline text-sm">{contact.email}</a>
                        </div>
                      )}
                      {contact.phone && (
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <a href={`tel:${contact.phone}`} className="text-red-600 hover:underline text-sm">{contact.phone}</a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Conclusion */}
            {event.conclusion && (
              <div className="bg-gray-900 p-6 rounded-lg text-white">
                <h2 className="text-2xl font-bold mb-4">In Conclusion</h2>
                <p className="text-gray-200 leading-relaxed">{event.conclusion}</p>
              </div>
            )}

            {/* Photo Gallery */}
            {event.gallery && event.gallery.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {event.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square overflow-hidden rounded-lg border-2 border-gray-200 hover:border-red-600 transition-colors cursor-pointer"
                    >
                      <Image
                        src={image.url}
                        alt={image.alt || `Event gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                      />
                      {image.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2">
                          {image.caption}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Inquiry Form (Sticky) */}
          {event.status !== 'past' && (
              <div className="lg:col-span-1 space-y-0">
            <div className="lg:sticky lg:top-24">

              {/* Brochure Download Button */}
              {event.brochure?.url && (
                <a
                  href={event.brochure.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-4 bg-black hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-lg transition-colors text-center"
                >
                  <div className="flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>{event.brochure.title || 'Download Event Brochure'}</span>
                  </div>
                </a>
              )}

              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-3">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Inquire About This Event</h3>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="hidden" name="access_key" value="b082e58d-c43a-4b9c-b64d-61b8d709971f" />
                  <input type="hidden" name="event_name" value={event.title} />
                  <input type="hidden" name="source" value={`Event: ${event.title}`} />

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your organization"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your inquiry..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors resize-vertical"
                      required
                    />
                  </div>

                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-lg text-center font-medium ${
                        submitStatus.type === "success"
                          ? "bg-green-50 text-green-700 border-2 border-green-200"
                          : "bg-red-50 text-red-700 border-2 border-red-200"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 text-white font-bold py-3 cursor-pointer rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Registring..." : "Register"}
                  </button>
                </form>

               
              </div>
            </div>
          </div>
          )}
        
        </div>
      </div>
    </div>
  );
}