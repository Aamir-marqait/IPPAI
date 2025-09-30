"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUsSection() {
  return (
    <section className="bg-[#F9F1F1] w-full flex justify-center border-t border-[#ECECEC]">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col md:flex-row gap-10 px-4 py-12 md:py-20">
        {/* Left: Form */}
        <form
          className="flex-1 flex flex-col gap-6 justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name.."
              className="flex-1 bg-white rounded-full px-6 py-4 text-[#B6B6B6] text-base outline-none border-none placeholder:text-[#B6B6B6] font-normal"
            />
            <input
              type="email"
              placeholder="Your Email.."
              className="flex-1 bg-white rounded-full px-6 py-4 text-[#B6B6B6] text-base outline-none border-none placeholder:text-[#B6B6B6] font-normal"
            />
          </div>
          <textarea
            placeholder="Enter Message.."
            rows={5}
            className="bg-white rounded-[28px] px-6 py-4 text-[#B6B6B6] text-base outline-none border-none placeholder:text-[#B6B6B6] font-normal resize-none"
          />
          <button
            type="submit"
            className="bg-[#D3363B] border border-[#FA0368] hover:bg-[#b83a3a] transition-colors w-full rounded-full py-4 mt-2 text-white font-bold text-lg tracking-wide shadow-none outline-none"
          >
            SEND MESSAGE
          </button>
        </form>
        {/* Right: Details */}
        <div className="flex-1 flex flex-col justify-center md:pl-8">
          <div className="font-poppins font-bold text-[13px] leading-[15.6px] text-[#D3363B] uppercase mb-2">
            Get in touch
          </div>
          <div className="font-poppins font-bold text-[40px] leading-[48px] text-[#223645] mb-3">
            CONTACT US FOR MEDIA <br className="hidden md:block" />
            QUERIES
          </div>
          <div className="font-poppins font-normal text-base leading-[24px] text-[#696A87] mb-7 max-w-[400px]">
            Quam amet tristique adipisicing incididunt arcu, excepturi molestie
            turpis deserunt ducimus malesuada minus mauris veniam.
          </div>
          <ul className="text-sm font-normal font-poppins space-y-3 mt-2">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#D3363B] flex-shrink-0" />
              <span>Email: info@ippai.org</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#D3363B] flex-shrink-0" />
              <span>Phone: +91-11-41635700</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin
                size={16}
                className="text-[#D3363B] flex-shrink-0 mt-0.5"
              />
              <span>
                Diamond House, 2nd Floor, 11, Primrose Road, Bengaluru – 560025
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
