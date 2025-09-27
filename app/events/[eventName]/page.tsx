"use client";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import eventsData from "../../../data/events.json";

export default function EventDetailPage() {
  const params = useParams();
  const eventName = params.eventName as string;

  const event = eventsData.events.find((e) => e.slug === eventName);

  if (!event) {
    notFound();
  }

  return (
    <div
      style={{ maxWidth: "1100px", margin: "0px auto 0 auto" }}
      className="pt-30 pb-20"
    >
      {/* Breadcrumb */}
      <nav className=" mb-[40px]">
        <span className="font-inter font-semibold text-sm leading-5 text-[#4B5563]">
          Events
        </span>
        <span className="mx-2">{">"}</span>
        <span className="font-inter font-semibold text-sm leading-5 text-[#4B5563]">
          {event.breadcrumb.category}
        </span>
        <span className="mx-2">{">"}</span>
        <span className="font-inter font-semibold text-sm leading-5 text-[#757575]">
          {event.breadcrumb.eventTitle}
        </span>
      </nav>

      {/* Event Image */}
      <div
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Image
          src={event.image}
          alt="Event presentation"
          width={1100}
          height={400}
          style={{
            display: "block",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Event Content + Form */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "38px",
        }}
      >
        {/* Left: Event Details */}
        <div
          style={{ flex: 1, maxWidth: "620px", fontFamily: "Inter,sans-serif" }}
        >
          <h1 className="font-red-hat-display font-bold text-[32px] leading-[150%] text-[#141414] m-0">
            {event.title}
          </h1>
          {/* Date and Time */}
          <div className="mt-[22px] font-red-hat-display font-bold text-[24px] leading-[100%] text-[#141414]">
            Date and Time
          </div>
          <div className="flex items-center text-[16px] text-[#333931] font-inter font-normal leading-[24px] mt-2 mb-[14px]">
            <svg
              style={{ width: "19px", height: "19px", marginRight: "8px" }}
              fill="none"
              stroke="#616161"
              strokeWidth="1.7"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M12 6v6l4 2"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {event.dateTime}
          </div>
          {/* Location */}
          <div className="font-red-hat-display font-bold text-[24px] leading-[100%] text-[#141414] mt-8">
            Location
          </div>
          <div className="flex items-center text-[16px] text-[#333931] font-inter font-normal leading-[24px] mt-2 mb-5">
            <svg
              style={{ width: "19px", height: "19px", marginRight: "8px" }}
              fill="none"
              stroke="#616161"
              strokeWidth="1.7"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 21c-6-5.5-8-8.5-8-12a8 8 0 1116 0c0 3.5-2 6.5-8 12z"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <circle
                cx="12"
                cy="9"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1.7"
              />
            </svg>
            {event.location}
          </div>
          {/* About Event */}
          <div className="font-red-hat-display font-bold text-[24px] leading-[100%] text-[#141414] mb-4 mt-8">
            About This Event
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "15px",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                background: "#F7F4FF",
                color: "#A37CFE",
                fontWeight: 600,
                fontSize: "13.5px",
                borderRadius: "7px",
                padding: "4px 10px",
                marginRight: "10px",
              }}
            >
              {event.eventDuration}
            </span>
          </div>
          <div className="text-[#333931] text-[16px] font-inter font-normal leading-[24px] mb-5 mt-2">
            {event.aboutEvent.mainDescription}
            <br />
            <br />
            <div className="flex items-start mb-1">
              <svg
                className="w-4 h-4 mr-2 mt-1 flex-shrink-0"
                fill="none"
                stroke="#616161"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="1.7"/>
                <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.7"/>
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1.7"/>
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.7"/>
              </svg>
              <span className="text-[#333931] text-[16px] font-inter font-normal leading-[24px]">{event.aboutEvent.details[0]?.text}</span>
            </div>
            <div className="flex items-start mb-1">
              <svg
                className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="#616161"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M12 6v6l4 2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[#333931] text-[16px] font-inter font-normal leading-[24px]">{event.aboutEvent.details[1]?.text}</span>
            </div>
            <div className="flex items-start mb-1">
              <svg
                className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="#616161"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 21c-6-5.5-8-8.5-8-12a8 8 0 1116 0c0 3.5-2 6.5-8 12z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <circle
                  cx="12"
                  cy="9"
                  r="2.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
              </svg>
              <span className="text-[#333931] text-[16px] font-inter font-normal leading-[24px]">{event.aboutEvent.details[2]?.text}</span>
            </div>
          </div>
          <div
            style={{ fontWeight: 600, fontSize: "16px", margin: "12px 0 6px" }}
          >
            {event.highlights.title}
          </div>
          <ul
            style={{
              color: "#373737",
              fontSize: "15.5px",
              marginBottom: "23px",
              marginLeft: "12px",
              paddingLeft: "18px",
              lineHeight: "1.8",
            }}
          >
            {event.highlights.items.map((item, index) => (
              <li key={index}>
                <span
                  style={{
                    color: item.color,
                    fontWeight: 500,
                    marginRight: "4px",
                  }}
                >
                  {item.emoji} {item.title}
                </span>
                {item.description}
              </li>
            ))}
          </ul>
          <div
            style={{ fontWeight: 600, fontSize: "16px", margin: "12px 0 6px" }}
          >
            {event.whyAttend.title}
          </div>
          <div className="text-[#333931] text-[16px] font-inter font-normal leading-[24px] mb-[22px]">
            {event.whyAttend.description}
          </div>
          <div
            style={{ fontWeight: 600, fontSize: "16px", margin: "12px 0 6px" }}
          >
            {event.prizes.title}
          </div>
          <div className="space-y-3">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF6B6B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="8" width="18" height="4" rx="1"/>
                <path d="M12 8v13"/>
                <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/>
                <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>
              </svg>
              <span className="text-[#333931] text-[16px] font-inter font-normal leading-[24px]">
                1 Policy Research Grant worth $5,000 as the grand prize!
              </span>
            </div>
            <div className="flex items-start">
              <svg
                className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4ECDC4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="8" width="18" height="4" rx="1"/>
                <path d="M12 8v13"/>
                <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/>
                <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>
              </svg>
              <span className="text-[#333931] text-[16px] font-inter font-normal leading-[24px]">
                Gift Cards worth INR 30,000 from Amazon, Flipkart, and professional development platforms!
              </span>
            </div>
            <div className="flex items-start">
              <svg
                className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <defs>
                  <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: "#3B82F6", stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: "#FDE047", stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" stroke="url(#rocketGradient)"/>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke="url(#rocketGradient)"/>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke="url(#rocketGradient)"/>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="url(#rocketGradient)"/>
              </svg>
              <span className="text-[#333931] text-[16px] font-inter font-normal leading-[24px]">
                <span className="text-[#A37CFE] font-medium">Pro Tip:</span> Bring a colleague along! The more, the merrier! Share this with your network and get them to register, too—it's always more fun to start this journey together.
              </span>
            </div>
          </div>
          <div className="text-[#333931] text-[16px] font-inter font-normal leading-[24px] mt-[18px]">
            {event.conclusion}
          </div>
        </div>
        {/* Right: Form */}
        <div
          style={{
            minWidth: "400px",
            maxWidth: "450px",
            background: "#F7F7F7",
            borderRadius: "10px",
            padding: "24px 24px 22px 24px",
            marginLeft: "52px",
            height: "fit-content",
            boxShadow: "0px 0.5px 5.5px 0px #0000000A",
          }}
        >
          <div className="font-red-hat-display font-bold text-[24px] leading-[44px] text-[#1F2937] mb-[18px]">
            Inquire about this event
          </div>
          <form>
            <label className="block font-inter font-semibold text-[14px] leading-[20px] text-[#374151] mb-[7px] mt-3">
              Full Name
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full mt-[6px] mb-1 px-3 py-[10px] rounded-md border border-[#D1D5DB] bg-white font-inter font-normal text-[16px] leading-[24px] text-[#9CA3AF] outline-none focus:border-[#D3363B] focus:ring-1 focus:ring-[#D3363B] shadow-[0px_1px_2px_0px_#0000000D]"
              />
            </label>
            <label className="block font-inter font-semibold text-[14px] leading-[20px] text-[#374151] mb-[7px] mt-3">
              Email Address
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full mt-[6px] mb-1 px-3 py-[10px] rounded-md border border-[#D1D5DB] bg-white font-inter font-normal text-[16px] leading-[24px] text-[#9CA3AF] outline-none focus:border-[#D3363B] focus:ring-1 focus:ring-[#D3363B] shadow-[0px_1px_2px_0px_#0000000D]"
              />
            </label>
            <label className="block font-inter font-semibold text-[14px] leading-[20px] text-[#374151] mb-[7px] mt-3">
              Phone Number
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="w-full mt-[6px] mb-1 px-3 py-[10px] rounded-md border border-[#D1D5DB] bg-white font-inter font-normal text-[16px] leading-[24px] text-[#9CA3AF] outline-none focus:border-[#D3363B] focus:ring-1 focus:ring-[#D3363B] shadow-[0px_1px_2px_0px_#0000000D]"
              />
            </label>
            <label className="block font-inter font-semibold text-[14px] leading-[20px] text-[#374151] mb-[7px] mt-3">
              Company Name
              <input
                type="text"
                placeholder="Enter Company Name"
                className="w-full mt-[6px] mb-1 px-3 py-[10px] rounded-md border border-[#D1D5DB] bg-white font-inter font-normal text-[16px] leading-[24px] text-[#9CA3AF] outline-none focus:border-[#D3363B] focus:ring-1 focus:ring-[#D3363B] shadow-[0px_1px_2px_0px_#0000000D]"
              />
            </label>
            <label className="block font-inter font-semibold text-[14px] leading-[20px] text-[#374151] mb-[9px] mt-3">
              Message
              <textarea
                placeholder="Enter your Message"
                rows={3}
                className="w-full mt-[6px] mb-1 px-3 py-[10px] rounded-md border border-[#D1D5DB] bg-white font-inter font-normal text-[16px] leading-[24px] text-[#9CA3AF] outline-none focus:border-[#D3363B] focus:ring-1 focus:ring-[#D3363B] shadow-[0px_1px_2px_0px_#0000000D] resize-vertical"
              />
            </label>
            <button
              type="submit"
              className="mt-3 bg-[#D3363B] text-white text-center border-none rounded-[25px] py-3 px-8 font-work-sans font-medium text-[16px] leading-[100%] cursor-pointer shadow-[0px_4px_4px_0px_#D3363B4F] hover:bg-[#B8292E] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
