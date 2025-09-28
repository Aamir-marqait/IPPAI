import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
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
import eventsData from "../../data/events.json";

const events = eventsData.events;

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white mt-10">
      <div className="w-full max-w-[1100px] mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <h1 className="font-inter font-bold text-[32px] leading-none text-[#141414]">
            Our Events
          </h1>
          <Select defaultValue="default">
            <SelectTrigger className="w-full sm:w-[140px] bg-white">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Sort By</SelectItem>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="status">Status</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.slug}`}
              className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow block cursor-pointer"
            >
              {/* Event Image */}
              <div className="relative">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={300}
                  height={160}
                  className="w-full h-40 object-cover"
                />

                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-3 py-1 rounded-full font-inter font-semibold text-xs leading-none text-[#D3363B] ${
                      event.status === "upcoming"
                        ? "bg-orange-100"
                        : "bg-gray-100"
                    }`}
                  >
                    {event.statusLabel}
                  </span>
                </div>

                {/* White Background for Button */}
                <div
                  className="absolute top-0 right-0  bg-white w-16 h-16"
                  style={{
                    borderRadius: "0px 8px 0px 50px",
                  }}
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

                <p className="font-poppins font-normal text-base leading-6 text-[#161C2D]/90 mb-4 line-clamp-3">
                  {event.description}
                </p>

                {/* Location */}
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                  <span className="font-inter font-normal text-sm leading-6 text-[#161C2D]/80">
                    {event.location}
                  </span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <span className="font-inter font-normal text-sm leading-6 text-[#161C2D]/80">
                    {event.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
