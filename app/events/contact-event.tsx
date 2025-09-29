"use client";

import React from "react";
import Image from "next/image";

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
            CONTACT US FOR <br className="hidden md:block" />
            FURTHER INFORMATION
          </div>
          <div className="font-poppins font-normal text-base leading-[24px] text-[#696A87] mb-7 max-w-[400px]">
            Quam amet tristique adipisicing incididunt arcu, excepturi molestie
            turpis deserunt ducimus malesuada minus mauris veniam.
          </div>
          <div className="flex items-start gap-4 mb-5">
            <div className="w-[56px] h-[56px] flex items-center justify-center rounded-full border border-[#C84B4B]">
              <Image
                src="/event/contact1.svg"
                alt="Event Venue"
                width={30}
                height={30}
                className="w-[56px] h-[56px] "
              />
            </div>
            <div>
              <div className="font-bold text-[#232A34] text-[17px] uppercase mb-1">
                Event Venue :
              </div>
              <div className="text-[#757B84] text-[16px] font-medium">
                Hollywood Banquet Hall , Riverside Building Area
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div>
              <Image
                src="/event/contact2.svg"
                alt="Location Address"
                width={30}
                height={30}
                className="w-[56px] h-[56px] "
              />
            </div>
            <div>
              <div className="font-bold text-[#232A34] text-[17px] uppercase mb-1">
                Location Address :
              </div>
              <div className="text-[#757B84] text-[16px] font-medium">
                5214 Sunset Blvd, Los Angeles CA 90027, USA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
