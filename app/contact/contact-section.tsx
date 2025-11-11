"use client";

import { Mail, Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [showMoreEmails, setShowMoreEmails] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      message: formData.get("message"),
      source: formData.get("source"),
    };

    try {
      // Submit to Web3Forms (email notification)
      const web3FormsResponse = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      // Submit to Google Sheets
      await fetch(
        "https://script.google.com/macros/s/AKfycbzundmFjoaZr-aaGk9rIyWL_CdZYtu16nduh4MrNTkN2L-ft2hsgf8hHQGLUZpfOK6jXg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (web3FormsResponse.ok) {
        alert("Thank you! Your message has been submitted successfully.");
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col lg:flex-row gap-10">
        {/* Left Side: Contact Info */}
        <div className="flex-1">
          <h2 className="text-[32px] font-bold text-[#141414] mb-2 font-red-hat-display leading-[60px]">
            Contact Information
          </h2>
          <p className="text-[#585858] mb-8 font-poppins text-base leading-6 max-w-lg">
            Get in touch with IPPAI for inquiries about our events, research,
            policy recommendations, or membership opportunities. We&apos;re here
            to support India&apos;s power sector advancement.
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
                  080 41256661
                </div>
              </div>
            </div>
            {/* Email */}
            <div className="flex flex-col items-start relative">
              <Mail size={24} className="text-[#C24A48] mb-2" />
              <div>
                <div className="font-bold text-[24px] text-[#243C4B] font-red-hat-display mb-1 leading-6">
                  Send us email
                </div>
                <div className="text-base text-[#141414] font-poppins font-normal leading-6">
                  <a
                    href="mailto:info@ippai.org"
                    className="hover:text-[#C24A48] transition"
                  >
                    info@ippai.org
                  </a>
                  <button
                    onClick={() => setShowMoreEmails(!showMoreEmails)}
                    className="ml-2 cursor-pointer text-[#C24A48] hover:underline inline-flex items-center gap-1 text-sm"
                  >
                    and more
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        showMoreEmails ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {showMoreEmails && (
                  <div className="mt-3 space-y-1.5 bg-white border border-[#E3E3E3] rounded-lg p-3 shadow-md absolute top-full left-0 z-10 min-w-[250px]">
                    <a
                      href="mailto:dharun@ippaimail.org"
                      className="block text-sm text-[#141414] hover:text-[#C24A48] transition"
                    >
                      dharun@ippaimail.org
                    </a>
                    <a
                      href="mailto:anil@ippaimail.org"
                      className="block text-sm text-[#141414] hover:text-[#C24A48] transition"
                    >
                      anil@ippaimail.org
                    </a>
                    <a
                      href="mailto:gulrez@ippaimail.org"
                      className="block text-sm text-[#141414] hover:text-[#C24A48] transition"
                    >
                      gulrez@ippaimail.org
                    </a>
                    <a
                      href="mailto:divya@ippaimail.org"
                      className="block text-sm text-[#141414] hover:text-[#C24A48] transition"
                    >
                      divya@ippaimail.org
                    </a>
                    <a
                      href="mailto:aren@ippaimail.org"
                      className="block text-sm text-[#141414] hover:text-[#C24A48] transition"
                    >
                      aren@ippaimail.org
                    </a>
                    <a
                      href="mailto:purabi@ippaimail.org"
                      className="block text-sm text-[#141414] hover:text-[#C24A48] transition"
                    >
                      purabi@ippaimail.org
                    </a>
                    <a
                      href="mailto:shelton@ippaimail.org"
                      className="block text-sm text-[#141414] hover:text-[#C24A48] transition"
                    >
                      shelton@ippaimail.org
                    </a>
                  </div>
                )}
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="hidden"
                name="access_key"
                value="b082e58d-c43a-4b9c-b64d-61b8d709971f"
              />
              <input
                type="hidden"
                name="subject"
                value="Contact Form Submission"
              />
              <input
                type="hidden"
                name="source"
                value="Contact Page"
              />
              {/* Name */}
              <div>
                <label className="block text-[12.31px] font-medium mb-1 text-[#121212] font-poppins leading-[12.31px]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
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
                  name="email"
                  required
                  className="w-full rounded-full border border-[#E3E3E3] px-5 py-3 bg-[#FCFCFC] text-[12.31px] font-poppins font-normal leading-[12.31px] placeholder:text-[#888] focus:outline-none focus:border-[#C24A48] transition"
                  placeholder="example@email.com"
                />
              </div>
              {/* Phone Number */}
              <div>
                <label className="block text-[12.31px] font-medium mb-1 text-[#121212] font-poppins leading-[12.31px]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full rounded-full border border-[#E3E3E3] px-5 py-3 bg-[#FCFCFC] text-[12.31px] font-poppins font-normal leading-[12.31px] placeholder:text-[#888] focus:outline-none focus:border-[#C24A48] transition"
                  placeholder="+91 98765 43210"
                />
              </div>
              {/* Company Name */}
              <div>
                <label className="block text-[12.31px] font-medium mb-1 text-[#121212] font-poppins leading-[12.31px]">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  required
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
                  name="message"
                  className="w-full rounded-2xl border border-[#E3E3E3] px-5 py-3 bg-[#FCFCFC] text-[12.31px] font-poppins font-normal leading-[12.31px] placeholder:text-[#888] focus:outline-none focus:border-[#C24A48] transition min-h-[90px] resize-none"
                  placeholder="Please type your message here..."
                />
              </div>
              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-[20.52px] bg-[#D3363B] text-white font-semibold py-3 px-6 mt-2 transition hover:bg-[#B8292E] font-work-sans text-base leading-[12.31px] text-center w-fit disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}