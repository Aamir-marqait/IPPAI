"use client";

import Image from "next/image";
import { useState } from "react";
import type { SpecialCourseDetail } from "@/lib/sanity/queries/specialCourses";

interface RegisterNowSectionProps {
  selectedCourse: SpecialCourseDetail | null;
}

export default function RegisterNowSection({ selectedCourse }: RegisterNowSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ⭐ CRITICAL: Store form reference BEFORE any async operations
    const form = e.currentTarget;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // ⭐ Determine source based on selected course
    const source = selectedCourse 
      ? `Special Course: ${selectedCourse.title}`
      : "Special Courses Page - Register Now";

    // Prepare form data for Web3Forms
    const web3FormData = new FormData();
    web3FormData.append("access_key", "b082e58d-c43a-4b9c-b64d-61b8d709971f");
    web3FormData.append("subject", "Special Course Registration");
    web3FormData.append("name", formData.name);
    web3FormData.append("email", formData.email);
    web3FormData.append("phone", formData.phone);
    web3FormData.append("message", formData.message);
    web3FormData.append("source", source);
    web3FormData.append("course_title", selectedCourse?.title || "N/A");

    // Prepare data for Google Sheets
    const sheetsData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: "", // Not collected in this form
      message: formData.message,
      source: source,
      article_title: "", // Not applicable
      event_name: selectedCourse?.title || "", // Use course title as event name
    };

    console.log("📝 Special course registration started", sheetsData);
    console.log("📚 Selected course:", selectedCourse?.title || "None");

    try {
      // Submit to Web3Forms (email notification)
      console.log("📧 Sending to Web3Forms...");
      const web3FormsResponse = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: web3FormData,
        }
      );

      console.log("📧 Web3Forms response status:", web3FormsResponse.status);
      console.log("📧 Web3Forms response ok:", web3FormsResponse.ok);

      // Submit to Google Sheets (fire and forget)
      console.log("📊 Sending to Google Sheets...");
      fetch(
        "https://script.google.com/macros/s/AKfycbzundmFjoaZr-aaGk9rIyWL_CdZYtu16nduh4MrNTkN2L-ft2hsgf8hHQGLUZpfOK6jXg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sheetsData),
        }
      )
        .then(() => console.log("📊 Google Sheets request sent"))
        .catch((err) => console.error("📊 Google Sheets error:", err));

      // Check Web3Forms response
      let responseData;
      try {
        responseData = await web3FormsResponse.json();
        console.log("📧 Web3Forms response data:", responseData);
      } catch (jsonError) {
        console.error("❌ Failed to parse Web3Forms response:", jsonError);
        // If can't parse but status ok, continue anyway
        if (web3FormsResponse.ok) {
          responseData = { success: true };
        } else {
          throw new Error(
            `HTTP error! status: ${web3FormsResponse.status}`
          );
        }
      }

      if (responseData && responseData.success) {
        console.log("✅ Special course registration successful!");
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for registering! We'll be in touch with course details soon.",
        });

        // Reset form
        form.reset();
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 5000);
      } else {
        console.error("❌ Web3Forms returned success: false", responseData);
        setSubmitStatus({
          type: "error",
          message:
            responseData?.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("❌ Special course registration error:", error);
      console.error("Error details:", {
        name: error instanceof Error ? error.name : "Unknown",
        message: error instanceof Error ? error.message : String(error),
      });
      setSubmitStatus({
        type: "error",
        message: "Failed to submit registration. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
      console.log("🏁 Special course registration completed");
    }
  };

  const handleInputChange = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="register-now"
      className="relative w-full min-h-[480px] flex items-center justify-center overflow-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Background Image */}
      <Image
        src="/course/bci.png"
        alt="Library background"
        fill
        className="object-cover w-full h-full"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1100px] flex flex-col md:flex-row items-start justify-between px-3 sm:px-6 py-12 gap-8">
        {/* Left Column */}
        <div className="flex-1 flex flex-col items-start justify-center gap-6 min-w-[290px] max-w-md">
          {/* Main Heading */}
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-2 font-red-hat-display">
            Register Now
          </h1>
          <p className="text-white/80 text-base font-normal leading-relaxed max-w-xs mb-2">
            {selectedCourse ? (
              <>
                Register your interest for <span className="font-semibold">{selectedCourse.title}</span>. 
                We will get back to you with course details and next steps.
              </>
            ) : (
              <>
                Join IRPRI to access exclusive courses, research resources, and
                expert insights that will advance your knowledge in India&apos;s
                power sector and energy policy.
              </>
            )}
          </p>
        </div>

        {/* Right Column: Form */}
        <div className="flex-1 flex items-center justify-center w-full min-w-[320px] max-w-md relative">
          {/* Glass Effect Card */}
          <div className="w-full max-w-[540px] lg:w-[540px] lg:h-[625px] rounded-[20px] bg-gradient-to-br from-[rgba(13,13,13,0.4032)] via-[rgba(14,14,14,0.55)] to-[rgba(16,16,16,0.6984)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)_inset,_0px_-2px_4px_12px_rgba(255,255,255,0.08)] backdrop-blur-sm p-4 sm:p-6 lg:p-7">
            <h2 className="font-red-hat-display max-w-md font-bold text-2xl sm:text-3xl lg:text-[36px] leading-tight lg:leading-[48px] align-middle capitalize text-white mb-6 lg:mb-8">
              Register Now
            </h2>

            {/* Show selected course */}
            {selectedCourse && (
              <div className="mb-4 p-3 bg-white/10 rounded-lg border border-white/20">
                <p className="text-white/70 text-xs mb-1">Registering for:</p>
                <p className="text-white font-medium text-sm">{selectedCourse.title}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-6">
              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className="w-full max-w-[456px] lg:w-[456px] h-[50px] sm:h-[54px] lg:h-[58px] rounded-[30px] px-4 lg:px-5 py-3 text-sm lg:text-base font-normal bg-white text-[#232323] border border-[#6D6D6D] outline-none placeholder:text-[#8D8D8D] focus:border-[#D3363B] focus:ring-2 focus:ring-[#D3363B]/20"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="w-full max-w-[456px] lg:w-[456px] h-[50px] sm:h-[54px] lg:h-[58px] rounded-[30px] px-4 lg:px-5 py-3 text-sm lg:text-base font-normal bg-white text-[#232323] border border-[#6D6D6D] outline-none placeholder:text-[#8D8D8D] focus:border-[#D3363B] focus:ring-2 focus:ring-[#D3363B]/20"
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
                className="w-full max-w-[456px] lg:w-[456px] h-[50px] sm:h-[54px] lg:h-[58px] rounded-[30px] px-4 lg:px-5 py-3 text-sm lg:text-base font-normal bg-white text-[#232323] border border-[#6D6D6D] outline-none placeholder:text-[#8D8D8D] focus:border-[#D3363B] focus:ring-2 focus:ring-[#D3363B]/20"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="w-full max-w-[456px] lg:w-[456px] h-[100px] lg:h-[120px] rounded-[15px] px-4 lg:px-5 py-3 text-sm lg:text-base font-normal bg-white text-[#232323] border border-[#6D6D6D] outline-none placeholder:text-[#8D8D8D] resize-none focus:border-[#D3363B] focus:ring-2 focus:ring-[#D3363B]/20"
              />

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg text-sm font-medium ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#D3363B] shadow-[0px_4px_4px_0px_rgba(211,54,59,0.31)] font-work-sans font-medium text-[16px] leading-[100%] text-center text-white rounded-full px-7 py-3 mt-2 transition hover:bg-[#b12c2c] disabled:opacity-50 disabled:cursor-not-allowed w-fit flex items-center gap-2"
              >
                {isSubmitting && (
                  <svg
                    className="animate-spin h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                )}
                {isSubmitting ? "Registering..." : "Register Now"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}