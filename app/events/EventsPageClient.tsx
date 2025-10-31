"use client";

import { Calendar, MapPin, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect, useRef } from "react";

interface Event {
  _id: string;
  title: string;
  slug: { current: string };
  clickable?: boolean;
  description: string;
  location: string;
  date: string;
  dateTime: string;
  image: string;
  status?: string;  // ✅ Made optional to match Sanity type
  statusLabel?: string;
  redirectTo?: string;
}

interface EventsPageProps {
  initialEvents: Event[];
}

export default function EventsPageClient({ initialEvents }: EventsPageProps) {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [sortBy, setSortBy] = useState("status");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;
  const eventsHeaderRef = useRef<HTMLDivElement>(null);

  // Sort events
  useEffect(() => {
    const sortedEvents = [...initialEvents];
    
    switch (sortBy) {
      case "date-newest":
        sortedEvents.sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());
        break;
      case "date-oldest":
        sortedEvents.sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());
        break;
      case "name-asc":
        sortedEvents.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        sortedEvents.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "status":
        const statusOrder = { upcoming: 1, ongoing: 2, past: 3 };
        sortedEvents.sort((a, b) => (statusOrder[a.status as keyof typeof statusOrder] || 99) - (statusOrder[b.status as keyof typeof statusOrder] || 99));
        break;
      default:
        // Default: reverse chronological (newest first)
        sortedEvents.reverse();
    }
    
    setEvents(sortedEvents);
    setCurrentPage(1); // Reset to first page when sorting changes
  }, [sortBy, initialEvents]);

  // Pagination
  const totalPages = Math.ceil(events.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const currentEvents = events.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll to events header (not page top)
    if (eventsHeaderRef.current) {
      const headerOffset = 100; // Offset for fixed header if you have one
      const elementPosition = eventsHeaderRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white mt-10">
      <div className="w-full max-w-[1100px] mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div ref={eventsHeaderRef} className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 className="font-inter font-bold text-[32px] leading-none text-[#141414]">
              Our Events
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Showing {startIndex + 1}-{Math.min(endIndex, events.length)} of {events.length} events
            </p>
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[180px] bg-white">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Latest First</SelectItem>
              <SelectItem value="date-newest">Date: Newest</SelectItem>
              <SelectItem value="date-oldest">Date: Oldest</SelectItem>
              <SelectItem value="name-asc">Name: A-Z</SelectItem>
              <SelectItem value="name-desc">Name: Z-A</SelectItem>
              <SelectItem value="status">Status</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 mb-8">
          {currentEvents.map((event: Event) => {
            const slug = event.slug?.current || event.slug;
            const isClickable = event.clickable === true;
            
            // Render clickable card
            if (isClickable) {
              return (
                <Link
                  key={event._id}
                  href={event.redirectTo || `/events/${slug}`}
                  className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow block cursor-pointer"
                >
                  {/* Event Image */}
                  <div className="relative">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={600}
                      height={320}
                      className="w-full h-56 object-cover"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full font-inter font-semibold text-xs leading-none ${
                        event.status === "upcoming" 
                          ? "bg-orange-100 text-[#D3363B]" 
                          : event.status === "ongoing"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}>
                        {event.statusLabel}
                      </span>
                    </div>

                    {/* White Background for Button */}
                    <div
                      className="absolute top-0 right-0 bg-white w-16 h-16"
                      style={{ borderRadius: "0px 8px 0px 50px" }}
                    ></div>

                    {/* Arrow Button */}
                    <div className="absolute top-3 right-3">
                      <Button
                        size="sm"
                        className="w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 text-white p-0"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="p-6">
                    <h3 className="font-red-hat-display font-semibold text-2xl leading-none text-[#243C4B] mb-3 line-clamp-2">
                      {event.title}
                    </h3>

                    <p className="font-poppins font-normal text-base leading-6 text-[#161C2D]/90 mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    {/* Location */}
                    <div className="flex items-start gap-2 mb-3">
                      <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                      <span className="font-inter font-semibold text-sm leading-6 text-[#161C2D]/80">
                        {event.location}
                      </span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      <span className="font-inter font-semibold text-sm leading-6 text-[#161C2D]/80">
                        {event.date}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            } 
            
            // Render non-clickable card
            else {
              return (
                <div
                  key={event._id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden transition-shadow block cursor-default"
                >
                  {/* Event Image */}
                  <div className="relative">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={600}
                      height={320}
                      className="w-full h-56 object-cover"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full font-inter font-semibold text-xs leading-none ${
                        event.status === "upcoming" 
                          ? "bg-orange-100 text-[#D3363B]" 
                          : event.status === "ongoing"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}>
                        {event.statusLabel}
                      </span>
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="p-6">
                    <h3 className="font-red-hat-display font-semibold text-2xl leading-none text-[#243C4B] mb-3 line-clamp-2">
                      {event.title}
                    </h3>

                    <p className="font-poppins font-normal text-base leading-6 text-[#161C2D]/90 mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    {/* Location */}
                    <div className="flex items-start gap-2 mb-3">
                      <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                      <span className="font-inter font-semibold text-sm leading-6 text-[#161C2D]/80">
                        {event.location}
                      </span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      <span className="font-inter font-semibold text-sm leading-6 text-[#161C2D]/80">
                        {event.date}
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            {/* Previous Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-1 hover:cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Show first page, last page, current page, and pages around current
                const showPage = 
                  page === 1 || 
                  page === totalPages || 
                  (page >= currentPage - 1 && page <= currentPage + 1);
                
                const showEllipsis = 
                  (page === currentPage - 2 && currentPage > 3) ||
                  (page === currentPage + 2 && currentPage < totalPages - 2);

                if (showEllipsis) {
                  return (
                    <span key={page} className="px-2 text-gray-400">
                      ...
                    </span>
                  );
                }

                if (!showPage) return null;

                return (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => goToPage(page)}
                    className={`min-w-[40px] ${
                      currentPage === page 
                        ? "bg-[#D3363B] hover:bg-[#B8303A] text-white hover:cursor-pointer" 
                        : "hover:cursor-pointer"
                    }`}
                  >
                    {page}
                  </Button>
                );
              })}
            </div>

            {/* Next Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 hover:cursor-pointer"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* No Events Message */}
        {events.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found.</p>
          </div>
        )}
      </div>
    </div>
  );
}