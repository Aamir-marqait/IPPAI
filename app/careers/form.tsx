"use client";
import Image from "next/image";
import { useRef } from "react";

export default function ApplicationFormSection() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#f7f7f7] px-2 sm:px-6 py-20">
      <div className="w-full max-w-6xl bg-white rounded-tl-3xl  rounded-bl-3xl  shadow-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Left: Form */}
        <div className="w-full lg:w-[56%] p-6 sm:p-12 flex flex-col justify-center">
          <div>
            <h2 className="font-bold text-[36px] text-[#000000] mb-3 font-red-hat-display leading-[150%]">
              Be a Part Of Change
            </h2>
            <p className="text-[#7c7c7c] mb-7 font-poppins text-base leading-6 max-w-xl font-normal">
              Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in
              lectus tincidunt tincidunt ultrices. Diam convallis morbi
              pellentesque adipiscing
            </p>
          </div>

          <form className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 mb-2">
              {/* Name */}
              <div>
                <label className="font-bold text-[#141414] text-[18px] mb-1 block font-dm-sans leading-[18px]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Carter"
                  className="w-full rounded-full border border-[#f2f2f2] bg-[#fafafa] px-6 py-3 text-[#] text-base font-poppins outline-none focus:border-[#d3363b] transition"
                />
              </div>
              {/* Email */}
              <div>
                <label className="font-bold text-[#141414] text-[18px] mb-1 block font-dm-sans leading-[18px]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full rounded-full border border-[#f2f2f2] bg-[#fafafa] px-6 py-3 text-[#] text-base font-poppins outline-none focus:border-[#d3363b] transition"
                />
              </div>
              {/* Position */}
              <div>
                <label className="font-bold text-[#141414] text-[18px] mb-1 block font-dm-sans leading-[18px]">
                  Position
                </label>
                <input
                  type="text"
                  placeholder="(123) 456 - 789"
                  className="w-full rounded-full border border-[#f2f2f2] bg-[#fafafa] px-6 py-3 text-[#] text-base font-poppins outline-none focus:border-[#d3363b] transition"
                />
              </div>
              {/* Linked in Profile */}
              <div>
                <label className="font-bold text-[#141414] text-[18px] mb-1 block font-dm-sans leading-[18px]">
                  Linkedin Profile
                </label>
                <input
                  type="text"
                  placeholder="Profile"
                  className="w-full rounded-full border border-[#f2f2f2] bg-[#fafafa] px-6 py-3 text-[#] text-base font-poppins outline-none focus:border-[#d3363b] transition"
                />
              </div>
              {/* Phone No */}
              <div>
                <label className="font-bold text-[#141414] text-[18px] mb-1 block font-dm-sans leading-[18px]">
                  Phone No
                </label>
                <input
                  type="text"
                  placeholder="John Carter"
                  className="w-full rounded-full border border-[#f2f2f2] bg-[#fafafa] px-6 py-3 text-[#] text-base font-poppins outline-none focus:border-[#d3363b] transition"
                />
              </div>
              {/* Portfolio */}
              <div>
                <label className="font-bold text-[#141414] text-[18px] mb-1 block font-dm-sans leading-[18px]">
                  Portfilio
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full rounded-full border border-[#f2f2f2] bg-[#fafafa] px-6 py-3 text-[#] text-base font-poppins outline-none focus:border-[#d3363b] transition"
                />
              </div>
            </div>

            {/* Upload Additional file */}
            <div
              className="w-full border border-dashed border-[#8E8E8E] rounded-[50px] flex items-center justify-center pt-10 pb-10 pr-4 pl-4 mt-12 mb-0 cursor-pointer transition hover:border-[#d3363b] gap-[10px] min-h-[104px]"
              onClick={() => fileInputRef.current?.click()}
              style={{ borderStyle: "dashed", strokeDasharray: "4 4" }}
            >
              <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
              />
              <span className="flex items-center gap-2 text-[#8E8E8E] font-inter text-[14px] font-normal leading-[160%] tracking-[0.5px]">
                <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                  <path
                    d="M11 15V7M7 11l4-4 4 4"
                    stroke="#8E8E8E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="1"
                    y="1"
                    width="20"
                    height="20"
                    rx="10"
                    stroke="#8E8E8E"
                    strokeWidth="1.5"
                  />
                </svg>
                Upload Additional file
              </span>
            </div>
            <div className="text-xs text-center text-[#b6b6b6] mt-1 mb-4">
              Attach file. File size of your documents should not exceed 10MB
            </div>

            {/* Cover Letter */}
            <div className="mb-7">
              <label className="font-bold text-[#141414] text-[18px] mb-1 block font-dm-sans leading-[18px]">
                Cover Letter
              </label>
              <textarea
                placeholder="Please type your message here..."
                rows={4}
                className="w-full rounded-2xl border border-[#f2f2f2] bg-[#fafafa] px-6 py-4 text-[#b6b6b6] text-base font-poppins outline-none focus:border-[#d3363b] transition resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#D3363B] hover:bg-[#ae322b] transition-colors text-white font-medium rounded-full py-3 px-10 text-base font-poppins text-center leading-[100%] block"
              style={{ boxShadow: '0px 4px 4px 0px #D3363B4F' }}
            >
              Submit
            </button>
          </form>
        </div>
        {/* Right: Image */}
        <div className="w-full lg:w-[44%] min-h-[360px] h-80 sm:h-[420px] md:h-[520px] lg:h-auto relative">
          <Image
            src="/careers/a.png"
            alt="Application Form"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
