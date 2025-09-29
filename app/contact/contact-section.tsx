import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col lg:flex-row gap-10">
        {/* Left Side: Contact Info */}
        <div className="flex-1">
          <h2 className="text-[32px] font-bold text-[#141414] mb-2 font-red-hat-display leading-[60px]">
            Contact Information
          </h2>
          <p className="text-[#585858] mb-8 font-poppins text-base leading-6 max-w-lg">
            Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in
            lectus tincidunt tincidunt ultrices. Diam convallis morbi pellentesque adipiscing
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
            {/* Call */}
            <div className="flex flex-col items-start">
              <Phone size={24} className="text-[#C24A48] mb-2" />
              <div>
                <div className="font-bold text-[24px] text-[#243C4B] font-red-hat-display mb-1 leading-6">
                  Call for inquiry
                </div>
                <div className="text-base text-[#141414] font-poppins font-normal leading-6">
                  +91-11-41635700
                </div>
              </div>
            </div>
            {/* Email */}
            <div className="flex flex-col items-start">
              <Mail size={24} className="text-[#C24A48] mb-2" />
              <div>
                <div className="font-bold text-[24px] text-[#243C4B] font-red-hat-display mb-1 leading-6">
                  Send us email
                </div>
                <div className="text-base text-[#141414] font-poppins font-normal leading-6">
                  info@ippai.org
                </div>
              </div>
            </div>
            {/* Hours */}
            <div className="flex flex-col items-start">
              <Clock size={24} className="text-[#C24A48] mb-2" />
              <div>
                <div className="font-bold text-[24px] text-[#243C4B] font-red-hat-display mb-1 leading-6">
                  Opening hours
                </div>
                <div className="text-base text-[#141414] font-poppins font-normal leading-6">
                  Mon – Fri: 10AM – 10PM
                </div>
              </div>
            </div>
            {/* Address */}
            <div className="flex flex-col items-start">
              <MapPin size={24} className="text-[#C24A48] mb-2" />
              <div>
                <div className="font-bold text-[24px] text-[#243C4B] font-red-hat-display mb-1 leading-6">
                  Office
                </div>
                <div className="text-base text-[#141414] font-poppins font-normal leading-6">
                  Diamond House, 2nd Floor, 11, Primrose Road, Bengaluru -
                  560025
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side: Contact Form */}
        <div className="flex-1 flex items-stretch">
          <div className="w-full bg-white border border-[#E3E3E3] rounded-2xl p-8 shadow-sm">
            <h3 className="text-[30.1px] font-bold mb-6 font-red-hat-display text-[#141414] leading-[34.2px]">
              Get In Touch
            </h3>
            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-[12.31px] font-medium mb-1 text-[#121212] font-poppins leading-[12.31px]">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-full border border-[#E3E3E3] px-5 py-3 bg-[#FCFCFC] text-[12.31px] font-poppins font-normal leading-[12.31px] placeholder:text-[#888] focus:outline-none focus:border-[#C24A48] transition"
                  placeholder="John Carter"
                />
              </div>
              {/* Email */}
              <div>
                <label className="block text-[12.31px] font-medium mb-1 text-[#121212] font-poppins leading-[12.31px]">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-full border border-[#E3E3E3] px-5 py-3 bg-[#FCFCFC] text-[12.31px] font-poppins font-normal leading-[12.31px] placeholder:text-[#888] focus:outline-none focus:border-[#C24A48] transition"
                  placeholder="example@email.com"
                />
              </div>
              {/* Company Name */}
              <div>
                <label className="block text-[12.31px] font-medium mb-1 text-[#121212] font-poppins leading-[12.31px]">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-full border border-[#E3E3E3] px-5 py-3 bg-[#FCFCFC] text-[12.31px] font-poppins font-normal leading-[12.31px] placeholder:text-[#888] focus:outline-none focus:border-[#C24A48] transition"
                  placeholder="Tech Solutions"
                />
              </div>
              {/* Message */}
              <div>
                <label className="block text-[12.31px] font-medium mb-1 text-[#121212] font-poppins leading-[12.31px]">
                  Leave us message
                </label>
                <textarea
                  className="w-full rounded-2xl border border-[#E3E3E3] px-5 py-3 bg-[#FCFCFC] text-[12.31px] font-poppins font-normal leading-[12.31px] placeholder:text-[#888] focus:outline-none focus:border-[#C24A48] transition min-h-[90px] resize-none"
                  placeholder="Please type your message here..."
                />
              </div>
              {/* Submit */}
              <button
                type="submit"
                className="rounded-[20.52px] bg-[#D3363B] text-white font-semibold py-3 px-6 mt-2 transition hover:bg-[#B8292E] font-work-sans text-base leading-[12.31px] text-center w-fit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
