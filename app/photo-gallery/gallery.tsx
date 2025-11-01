"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  _id: string;
  image: string;
  caption?: string;
  dateTaken?: string;
  event?: string;
  customEvent?: string;
  location?: string;
  year?: string;
  order?: number;
  status?: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
  events: string[];
  years: string[];
}

export default function PhotoGallery({ 
  images, 
  events, 
  years 
}: PhotoGalleryProps) {
  const [selectedEvent, setSelectedEvent] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [displayCount, setDisplayCount] = useState(9);

  // Filter images
  const filteredImages = useMemo(() => {
    let filtered = [...images];

    // Filter by event
    if (selectedEvent !== "all") {
      filtered = filtered.filter((img) => {
        const imgEvent = img.event === "Other" && img.customEvent 
          ? img.customEvent 
          : img.event;
        return imgEvent === selectedEvent;
      });
    }

    // Filter by year
    if (selectedYear !== "all") {
      filtered = filtered.filter((img) => img.year === selectedYear);
    }

    return filtered;
  }, [images, selectedEvent, selectedYear]);

  // Get visible images (with pagination)
  const visibleImages = filteredImages.slice(0, displayCount);
  const hasMore = displayCount < filteredImages.length;

  // Load more handler
  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 9);
  };

  // Reset filters
  const handleResetFilters = () => {
    setSelectedEvent("all");
    setSelectedYear("all");
    setDisplayCount(9);
  };

  // Format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  // Get display event name
  const getEventName = (img: GalleryImage) => {
    if (img.event === "Other" && img.customEvent) {
      return img.customEvent;
    }
    return img.event;
  };

  return (
    <section className="py-10 sm:py-14 px-2 sm:px-6 bg-white">
      <div className="mx-auto w-full max-w-[1100px] flex flex-col items-center">
        {/* Heading */}
        <h2 className="font-red-hat-display font-bold text-[36px] leading-[48px] text-[#141414] text-center capitalize mb-2">
          Photo Gallery
        </h2>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-[#4D5756] text-center mb-8 max-w-2xl">
          See the faces behind the impact, witness the transformative power of our programmes and explore visual stories of hope and resilience.
        </p>

        {/* Filters */}
        {(events.length > 0 || years.length > 0) && (
          <div className="w-full mb-8 flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* Event Filter */}
            {events.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center justify-center">
                <span className="text-sm font-medium text-gray-700">Event:</span>
                <Button
                  variant={selectedEvent === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedEvent("all");
                    setDisplayCount(9);
                  }}
                  className={selectedEvent === "all" ? "bg-[#D3363B] hover:bg-[#B8303A] text-white" : ""}
                >
                  All Events
                </Button>
                {events.map((event) => (
                  <Button
                    key={event}
                    variant={selectedEvent === event ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setSelectedEvent(event);
                      setDisplayCount(9);
                    }}
                    className={selectedEvent === event ? "bg-[#D3363B] hover:bg-[#B8303A] text-white" : ""}
                  >
                    {event}
                  </Button>
                ))}
              </div>
            )}

            {/* Year Filter */}
            {years.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center justify-center">
                <span className="text-sm font-medium text-gray-700">Year:</span>
                <Button
                  variant={selectedYear === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedYear("all");
                    setDisplayCount(9);
                  }}
                  className={selectedYear === "all" ? "bg-[#D3363B] hover:bg-[#B8303A] text-white" : ""}
                >
                  All Years
                </Button>
                {years.map((year) => (
                  <Button
                    key={year}
                    variant={selectedYear === year ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setSelectedYear(year);
                      setDisplayCount(9);
                    }}
                    className={selectedYear === year ? "bg-[#D3363B] hover:bg-[#B8303A] text-white" : ""}
                  >
                    {year}
                  </Button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Results Info */}
        {filteredImages.length > 0 && (
          <div className="w-full mb-4 text-sm text-gray-600 text-center">
            Showing {visibleImages.length} of {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
          </div>
        )}

        {/* Gallery Grid */}
        {visibleImages.length > 0 ? (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center">
            {visibleImages.map((img, idx) => (
              <Dialog key={img._id}>
                <DialogTrigger asChild>
                  <div className="relative bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 group"
                    style={{
                      width: "350.6px",
                      height: "231px",
                      maxWidth: "100%",
                    }}
                  >
                    <Image
                      src={img.image}
                      alt={img.caption || `Gallery Image ${idx + 1}`}
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "12px",
                      }}
                      sizes="(max-width: 700px) 90vw, (max-width: 1200px) 45vw, 350px"
                      priority={idx < 3}
                    />
                    
                    {/* Overlay with info on hover */}
                    {(img.caption || img.event || img.location) && (
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-lg">
                        {img.caption && (
                          <p className="text-white font-semibold text-sm mb-1">
                            {img.caption}
                          </p>
                        )}
                        {getEventName(img) && (
                          <p className="text-white/90 text-xs">
                            {getEventName(img)}
                          </p>
                        )}
                        {img.location && (
                          <p className="text-white/80 text-xs">
                            📍 {img.location}
                          </p>
                        )}
                        {img.dateTaken && (
                          <p className="text-white/70 text-xs">
                            📅 {formatDate(img.dateTaken)}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </DialogTrigger>
                
                <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                  <DialogTitle className="sr-only">
                    {img.caption || `Gallery Image ${idx + 1}`}
                  </DialogTitle>
                  <div className="relative w-full h-[80vh]">
                    <Image
                      src={img.image}
                      alt={img.caption || `Gallery Image ${idx + 1}`}
                      fill
                      style={{
                        objectFit: "contain",
                        objectPosition: "center",
                      }}
                      sizes="(max-width: 1200px) 90vw, 80vw"
                    />
                    
                    {/* Image info in modal */}
                    {(img.caption || img.event || img.location || img.dateTaken) && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4">
                        {img.caption && (
                          <h3 className="font-bold text-lg mb-2">{img.caption}</h3>
                        )}
                        <div className="flex flex-wrap gap-4 text-sm">
                          {getEventName(img) && (
                            <span>🎉 {getEventName(img)}</span>
                          )}
                          {img.location && (
                            <span>📍 {img.location}</span>
                          )}
                          {img.dateTaken && (
                            <span>📅 {formatDate(img.dateTaken)}</span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">No images found.</p>
            <Button variant="outline" onClick={handleResetFilters}>
              Reset Filters
            </Button>
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-8">
            <Button
              onClick={handleLoadMore}
              className="bg-[#D3363B] hover:bg-[#B8303A] text-white px-8 py-3"
            >
              Load More Images
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}