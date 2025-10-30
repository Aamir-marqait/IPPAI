/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useParams, notFound } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getEventBySlug, type Event } from "@/lib/sanity/queries";
import Link from "next/link";

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
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your inquiry has been submitted successfully.",
        });
        e.currentTarget.reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to submit inquiry. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!event) {
    notFound();
  }

  return (
    <div className="max-w-[1100px] mx-auto pt-20 sm:pt-32 pb-10 px-2 sm:px-4 w-full">
      {/* Breadcrumb */}
      <nav className="mb-8 sm:mb-[40px] flex flex-wrap items-center text-sm">
        <Link href="/events" className="font-inter font-semibold text-[#4B5563] hover:underline">
          <span className="font-inter font-semibold text-[#4B5563]">Events</span>
        </Link>
        <span className="mx-2">{">"}</span>
        <span className="font-inter font-semibold text-[#757575]">
  {(() => {
    if (typeof event.breadcrumb === 'string') {
      return event.breadcrumb;
    } else if (event.breadcrumb && typeof event.breadcrumb === 'object') {
      return (event.breadcrumb).eventTitle || event.title;
    } else {
      return event.title;
    }
  })()}
</span>
      </nav>

      {/* Event Image */}
      <div className="rounded-xl overflow-hidden w-full">
        {event.image ? (
          <Image
            src={event.image}
            alt="Event presentation"
            width={1100}
            height={400}
            className="w-full object-cover"
          />
        ) : (
          <div className="w-full h-[400px] bg-gray-100" aria-hidden />
        )}
      </div>

      {/* Event Content + Form */}
      <div className="flex flex-col lg:flex-row justify-between mt-10 lg:mt-[38px] gap-8">
        {/* Left: Event Details */}
        <div className="flex-1 font-inter" style={{ maxWidth: "620px" }}>
          <h1 className="font-red-hat-display font-bold text-2xl sm:text-3xl md:text-[32px] leading-[140%] text-[#141414] m-0">
            {event.title}
          </h1>
          
          {/* Date and Time */}
          <div className="mt-6 sm:mt-[22px] font-red-hat-display font-bold text-lg sm:text-2xl leading-[100%] text-[#141414]">Date and Time</div>
          <div className="flex items-center text-base sm:text-[16px] text-[#333931] font-normal leading-[24px] mt-2 mb-3 sm:mb-[14px]">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="#616161" strokeWidth="1.7" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.7" />
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {event.dateTime}
          </div>
          
          {/* Location */}
          <div className="font-red-hat-display font-bold text-lg sm:text-2xl leading-[100%] text-[#141414] mt-6 sm:mt-8">Location</div>
          <div className="flex items-center text-base sm:text-[16px] text-[#333931] font-normal leading-[24px] mt-2 mb-4 sm:mb-5">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="#616161" strokeWidth="1.7" viewBox="0 0 24 24">
              <path d="M12 21c-6-5.5-8-8.5-8-12a8 8 0 1116 0c0 3.5-2 6.5-8 12z" stroke="currentColor" strokeWidth="1.7" />
              <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.7" />
            </svg>
            {event.location}
          </div>
          
          {/* About Event */}
          <div className="font-red-hat-display font-bold text-lg sm:text-2xl leading-[100%] text-[#141414] mb-3 sm:mb-4 mt-6 sm:mt-8">
            About This Event
          </div>
          <div className="flex items-center text-xs sm:text-[13.5px] font-semibold mb-2">
            <span className="bg-[#F7F4FF] text-[#A37CFE] rounded-md px-3 py-1">
              {event.eventDuration}
            </span>
          </div>
          <div className="text-[#333931] text-base sm:text-[16px] font-normal leading-[24px] mb-4 sm:mb-5 mt-2">
            {event.aboutEvent?.mainDescription}
            <br />
            <br />
            {event.aboutEvent?.details?.map((detail: { text?: string }, i: number) => (
              <div className="flex items-start mb-2" key={i}>
                {i === 0 && (
                  <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0" fill="none" stroke="#616161" strokeWidth="1.7" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="1.7" />
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.7" />
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1.7" />
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
                )}
                {i === 1 && (
                  <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0" fill="none" stroke="#616161" strokeWidth="1.7" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {i === 2 && (
                  <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0" fill="none" stroke="#616161" strokeWidth="1.7" viewBox="0 0 24 24">
                    <path d="M12 21c-6-5.5-8-8.5-8-12a8 8 0 1116 0c0 3.5-2 6.5-8 12z" stroke="currentColor" strokeWidth="1.7" />
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
                )}
                <span className="text-[#333931] text-base sm:text-[16px] font-normal leading-[24px]">{detail.text}</span>
              </div>
            ))}
          </div>
          
          {/* Highlights */}
          {event.highlights && (
            <>
              <div className="font-semibold text-base sm:text-[16px] mt-3 mb-2">{event.highlights.title}</div>
              <ul className="text-[#373737] text-sm sm:text-[15.5px] mb-4 sm:mb-[23px] ml-3 sm:ml-[12px] pl-3 sm:pl-[18px] leading-relaxed sm:leading-[1.8]">
                {event.highlights.items?.map((item: { emoji?: string; title?: string; description?: string }, index: number) => (
                  <li key={index} className="mb-1 sm:mb-1.5">
                    <strong>{item.emoji} {item.title}</strong> {item.description}
                  </li>
                ))}
              </ul>
            </>
          )}
          
          {/* Prizes - Only show if prizes field exists */}
          {event.prizes && (
            <>
              <div className="font-semibold text-base sm:text-[16px] mt-3 mb-2">{event.prizes.title}</div>
              <div className="space-y-3">
                {event.prizes.items?.map((prize: string, index: number) => (
                  <div className="flex items-start" key={index}>
                    <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="8" width="18" height="4" rx="1" />
                      <path d="M12 8v13" />
                      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
                      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
                    </svg>
                    <span className="text-[#333931] text-base sm:text-[16px] font-normal leading-[24px]">
                      {prize}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
          
          <div className="text-[#333931] text-base sm:text-[16px] font-normal leading-[24px] mt-4 sm:mt-[18px]">
            {event.conclusion}
          </div>

          {/* Photo Gallery Section */}
         
        </div>

        {/* Right: Form */}
        <div className="w-full max-w-full sm:max-w-[450px] lg:max-w-[450px] min-w-0 bg-[#F7F7F7] rounded-[10px] p-5 sm:p-6 shadow-[0px_0.5px_5.5px_0px_#0000000A] lg:ml-[52px] h-fit">
          <div className="font-red-hat-display font-bold text-lg sm:text-[24px] leading-[44px] text-[#1F2937] mb-4 sm:mb-[18px]">
            Inquire about this event
          </div>
          <form onSubmit={handleSubmit}>
            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="b082e58d-c43a-4b9c-b64d-61b8d709971f"
            />
            {/* Event Name for context in email */}
            <input
              type="hidden"
              name="event_name"
              value={event.title}
            />

            <label className="block font-inter font-semibold text-[13px] sm:text-[14px] leading-[20px] text-[#374151] mb-2 mt-3">
              Full Name
              <input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                className="w-full mt-1 mb-1 px-3 py-2 sm:py-[10px] rounded-md border border-[#D1D5DB] bg-white font-inter font-normal text-base sm:text-[16px] leading-[24px] text-[#9CA3AF] outline-none focus:border-[#D3363B] focus:ring-1 focus:ring-[#D3363B] shadow-[0px_1px_2px_0px_#0000000D]"
                required
              />
            </label>
            <label className="block font-inter font-semibold text-[13px] sm:text-[14px] leading-[20px] text-[#374151] mb-2 mt-3">
              Email Address
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="w-full mt-1 mb-1 px-3 py-2 sm:py-[10px] rounded-md border border-[#D1D5DB] bg-white font-inter font-normal text-base sm:text-[16px] leading-[24px] text-[#9CA3AF] outline-none focus:border-[#D3363B] focus:ring-1 focus:ring-[#D3363B] shadow-[0px_1px_2px_0px_#0000000D]"
                required
              />
            </label>
            <label className="block font-inter font-semibold text-[13px] sm:text-[14px] leading-[20px] text-[#374151] mb-2 mt-3">
              Phone Number
              <input
                type="tel"
                name="phone"
                placeholder="Enter Phone Number"
                className="w-full mt-1 mb-1 px-3 py-2 sm:py-[10px] rounded-md border border-[#D1D5DB] bg-white font-inter font-normal text-base sm:text-[16px] leading-[24px] text-[#9CA3AF] outline-none focus:border-[#D3363B] focus:ring-1 focus:ring-[#D3363B] shadow-[0px_1px_2px_0px_#0000000D]"
                required
              />
            </label>
            <label className="block font-inter font-semibold text-[13px] sm:text-[14px] leading-[20px] text-[#374151] mb-2 mt-3">
              Company Name
              <input
                type="text"
                name="company"
                placeholder="Enter Company Name"
                className="w-full mt-1 mb-1 px-3 py-2 sm:py-[10px] rounded-md border border-[#D1D5DB] bg-white font-inter font-normal text-base sm:text-[16px] leading-[24px] text-[#9CA3AF] outline-none focus:border-[#D3363B] focus:ring-1 focus:ring-[#D3363B] shadow-[0px_1px_2px_0px_#0000000D]"
              />
            </label>
            <label className="block font-inter font-semibold text-[13px] sm:text-[14px] leading-[20px] text-[#374151] mb-3 mt-3">
              Message
              <textarea
                name="message"
                placeholder="Enter your Message"
                rows={3}
                className="w-full mt-1 mb-1 px-3 py-2 sm:py-[10px] rounded-md border border-[#D1D5DB] bg-white font-inter font-normal text-base sm:text-[16px] leading-[24px] text-[#9CA3AF] outline-none focus:border-[#D3363B] focus:ring-1 focus:ring-[#D3363B] shadow-[0px_1px_2px_0px_#0000000D] resize-vertical"
                required
              />
            </label>

            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`text-center py-3 px-4 rounded-md mb-3 ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : "bg-red-100 text-red-700 border border-red-300"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 sm:mt-3 bg-[#D3363B] text-white text-center border-none rounded-[25px] py-2.5 sm:py-3 px-8 font-work-sans font-medium text-base sm:text-[16px] leading-[100%] cursor-pointer shadow-[0px_4px_4px_0px_#D3363B4F] hover:bg-[#B8292E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
       {event.gallery && event.gallery.length > 0 && (
            <div className="mt-8 sm:mt-12">
              <h2 className="font-red-hat-display font-bold text-center text-xl sm:text-2xl leading-[100%] text-[#141414] mb-6">
                Photo Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {event.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    <Image
                      src={image.url}
                      alt={image.alt || `Event gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2">
                        {image.caption}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
    </div>
  );
}