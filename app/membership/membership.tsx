"use client";

import React, { useState } from "react";
import { FaUsers } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { JoinUsModal } from "@/components/JoinMembershipModal";

const TABS = [
  {
    label: "Corporate Member",
    key: "corporate",
    icon: (
      <div className="w-12 h-12 rounded-[14px] bg-[#D3363B]/10 bg-opacity-10 flex items-center justify-center mr-2">
        <FaUsers className="w-5 h-5 text-[#D3363B]" />
      </div>
    ),
    image: "/membership/corporate.jpg", // replace with your image path
    badge: "CORPORATE MEMBER",
    title: "For professionals advancing their energy sector careers",
    items: [
      {
        icon: (
          <Image
            src="/membership/icon1.svg"
            alt="Policy access"
            width={20}
            height={20}
            className="object-contain"
          />
        ),
        text: "Policy access and regulatory updates.",
      },
      {
        icon: (
          <Image
            src="/membership/icon2.svg"
            alt="Networking"
            width={20}
            height={20}
            className="object-contain"
          />
        ),
        text: "Networking opportunities with industry leaders",
      },
      {
        icon: (
          <Image
            src="/membership/icon3.svg"
            alt="Professional development"
            width={20}
            height={20}
            className="object-contain"
          />
        ),
        text: "Professional development workshops.",
      },
      {
        icon: (
          <Image
            src="/membership/icon4.svg"
            alt="Career advancement"
            width={20}
            height={20}
            className="object-contain"
          />
        ),
        text: "Career advancement support.",
      },
      {
        icon: (
          <Image
            src="/membership/icon5.svg"
            alt="Certification"
            width={20}
            height={20}
            className="object-contain"
          />
        ),
        text: "Certification program eligibility.",
      },
    ],
  },
  {
    label: "Associate Member",
    key: "associate",
    icon: (
      <div className="w-12 h-12 rounded-[14px] bg-[#D3363B]/10 bg-opacity-10 flex items-center justify-center mr-2">
        <FaGlobe className="w-5 h-5 text-[#D3363B]" />
      </div>
    ),
    image: "/membership/corporate.jpg", // replace with your image path
    badge: "ASSOCIATE MEMBER",
    title: "For aspiring professionals in the energy sector",
    items: [
      {
        icon: (
          <Image
            src="/membership/icon1.svg"
            alt="Access to resources"
            width={20}
            height={20}
            className="object-contain"
          />
        ),
        text: "Access to curated energy sector resources.",
      },
      {
        icon: (
          <Image
            src="/membership/icon2.svg"
            alt="Mentorship"
            width={20}
            height={20}
            className="object-contain"
          />
        ),
        text: "Mentorship with experienced professionals.",
      },
      {
        icon: (
          <Image
            src="/membership/icon3.svg"
            alt="Skill building"
            width={20}
            height={20}
            className="object-contain"
          />
        ),
        text: "Skill-building workshops and webinars.",
      },
      {
        icon: (
          <Image
            src="/membership/icon4.svg"
            alt="Career guidance"
            width={20}
            height={20}
            className="object-contain"
          />
        ),
        text: "Career guidance and job listings.",
      },
      {
        icon: (
          <Image
            src="/membership/icon5.svg"
            alt="Student awards"
            width={20}
            height={20}
            className="object-contain"
          />
        ),
        text: "Eligibility for student awards.",
      },
    ],
  },
];

export default function MembershipTabs() {
  const [tab, setTab] = useState("corporate");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const active = TABS.find((t) => t.key === tab)!;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl xl:text-[34px] font-bold text-center mb-8 leading-[46px] text-[#141414] font-['Red_Hat_Display']">
          Membership
        </h2>
        {/* Tab Buttons */}
        <div className="flex justify-center mb-8 gap-2">
          {TABS.map((t) => (
            <button
              key={t.key}
              className={cn(
                "flex items-center px-6 py-3 rounded-lg font-semibold border transition focus:outline-none cursor-pointer",
                tab === t.key
                  ? "bg-white border-[#D3363B] text-[#D3363B] shadow rounded-[20px] font-semibold text-lg leading-5 font-work-sans"
                  : "bg-[#fafbfc] border-[#ececec] text-gray-500 rounded-[20px] font-semibold text-lg leading-5 ont-work-sans"
              )}
              onClick={() => setTab(t.key)}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>
        {/* Card */}
        <div className="bg-white rounded-3xl border border-[#EFF0F6] shadow-[0px_5px_14px_0px_rgba(8,15,52,0.04)] flex flex-col md:flex-row items-center md:items-stretch px-8 py-10 md:py-12 md:px-10 gap-8 md:gap-12 transition-all duration-300 max-w-[1000px] mx-auto">
          {/* Left: Image */}
          <div className="w-full md:w-96 flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <Image
                src={active.image}
                alt={active.badge}
                fill
                className="rounded-full object-cover border-4 border-red-50"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 80vw, 350px"
                priority
              />
            </div>
          </div>
          {/* Right: Content */}
          <div className="flex-1 flex flex-col justify-center gap-3 mt-8 md:mt-0">
            <div className="uppercase text-base font-bold text-[#D3363B] leading-none mb-2 font-['Red_Hat_Display']">
              {active.badge}
            </div>
            <h3 className="text-2xl md:text-3xl xl:text-[36px] font-bold text-[#141414] mb-6 leading-none font-['Red_Hat_Display']">
              {active.title}
            </h3>
            <ul className="space-y-6 mb-10">
              {active.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center font-medium text-gray-700 text-lg"
                >
                  {item.icon}
                  <span className="ml-3 font-bold text-base leading-[1.4] tracking-[0.15px] text-[#121212] font-poppins align-middle">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer w-fit rounded-full bg-[#D3363B] hover:bg-[#B8303A] text-white font-medium px-8 py-2 text-base leading-none text-center shadow-[0px_4px_4px_0px_rgba(211,54,59,0.31)] transition font-['Work_Sans']"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
      <JoinUsModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
}
