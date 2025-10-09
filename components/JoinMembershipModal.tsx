"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Article {
  image: string;
  title: string;
  summary: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  pdfFile: string;
}

interface JoinUsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  article?: Article | null;
}

export function JoinUsModal({ open, onOpenChange, article }: JoinUsModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      company: "",
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };

  const downloadPDF = () => {
    if (article?.pdfFile) {
      const link = document.createElement('a');
      link.href = article.pdfFile;
      link.download = `${article.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate API call with 2 second delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Form submitted:", formData);
      
      // Download the PDF after successful form submission (only if article is provided)
      if (article) {
        downloadPDF();
      }
      
      setIsLoading(false);
      setShowThankYou(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
      setErrors({
        name: "",
        email: "",
        company: "",
      });
    }
  };

  const handleThankYouClose = () => {
    setShowThankYou(false);
    onOpenChange(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <>
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-white">
        <DialogTitle className="sr-only">
          Join Us Today - Membership Registration
        </DialogTitle>
        <div className="flex h-[600px]">
          {/* Left side - Image */}
          <div className="flex-1 relative">
            <Image
              src="/membership/join.png"
              alt="Professional handshake with network overlay"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right side - Form */}
          <div className="flex-1 bg-gray-50 p-8 relative">
            {/* Close button */}
            {/* <button
              onClick={() => onOpenChange(false)}
              className="absolute top-4 right-4 p-1 hover:bg-gray-200 rounded-sm transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button> */}

            <div className="max-w-sm mx-auto">
              <h2 
                className="mb-8 text-left font-red-hat-display"
                style={{
                  fontWeight: 700,
                  fontSize: '30.1px',
                  lineHeight: '34.2px',
                  letterSpacing: '0px',
                  color: '#D3363B'
                }}
              >
                Join Us Today!
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    className="block mb-2 font-poppins"
                    style={{
                      fontWeight: 500,
                      fontSize: '12.31px',
                      lineHeight: '12.31px',
                      letterSpacing: '0%',
                      color: '#121212'
                    }}
                  >
                    Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John Carter"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`w-full h-[49.25px] rounded-[34.2px] border-[0.68px] bg-white font-poppins text-[12.31px] leading-[12.31px] font-normal tracking-[0px] opacity-100 ${
                      errors.name ? 'border-red-500' : 'border-black/[0.13]'
                    }`}
                  />
                  {/* {errors.name && (
                    <p className="text-red-500 text-xs mt-1 font-poppins">{errors.name}</p>
                  )} */}
                </div>

                <div>
                  <label 
                    className="block mb-2 font-poppins"
                    style={{
                      fontWeight: 500,
                      fontSize: '12.31px',
                      lineHeight: '12.31px',
                      letterSpacing: '0%',
                      color: '#121212'
                    }}
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full h-[49.25px] rounded-[34.2px] border-[0.68px] bg-white font-poppins text-[12.31px] leading-[12.31px] font-normal tracking-[0px] opacity-100 ${
                      errors.email ? 'border-red-500' : 'border-black/[0.13]'
                    }`}
                  />
                  {/* {errors.email && (
                    <p className="text-red-500 text-xs mt-1 font-poppins">{errors.email}</p>
                  )} */}
                </div>

                <div>
                  <label 
                    className="block mb-2 font-poppins"
                    style={{
                      fontWeight: 500,
                      fontSize: '12.31px',
                      lineHeight: '12.31px',
                      letterSpacing: '0%',
                      color: '#121212'
                    }}
                  >
                    Company Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Tech Solutions"
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                    className={`w-full h-[49.25px] rounded-[34.2px] border-[0.68px] bg-white font-poppins text-[12.31px] leading-[12.31px] font-normal tracking-[0px] opacity-100 ${
                      errors.company ? 'border-red-500' : 'border-black/[0.13]'
                    }`}
                  />
                  {/* {errors.company && (
                    <p className="text-red-500 text-xs mt-1 font-poppins">{errors.company}</p>
                  )} */}
                </div>

                <div>
                  <label 
                    className="block mb-2 font-poppins"
                    style={{
                      fontWeight: 500,
                      fontSize: '12.31px',
                      lineHeight: '12.31px',
                      letterSpacing: '0%',
                      color: '#121212'
                    }}
                  >
                    Leave us a message
                  </label>
                  <Textarea
                    placeholder="Please type your message here..."
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="w-full h-[97.82px] rounded-[13.68px] border-[0.68px] border-black/[0.13] bg-white font-poppins text-[12.31px] leading-[12.31px] font-normal tracking-[0px] opacity-100 resize-none pt-[16.42px] pr-[16.42px] pb-[68.4px] pl-[16.42px]"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-[37.625px] bg-[#D3363B] hover:bg-[#B8303A] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-work-sans font-semibold text-base leading-[12.31px] tracking-[0%] text-center rounded-[20.52px] pt-[12.31px] pr-[16.42px] pb-[12.31px] pl-[16.42px] opacity-100 flex items-center justify-center gap-2"
                >
                  {isLoading && (
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
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
                  {isLoading ? "Processing..." : "Join"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>

    {/* Thank You Modal */}
    <Dialog open={showThankYou} onOpenChange={handleThankYouClose}>
      <DialogContent className="max-w-md w-full p-0 overflow-hidden bg-white">
        <DialogTitle className="sr-only">
          Thank You for Joining
        </DialogTitle>
        <div className="p-8 text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h2 className="font-red-hat-display font-bold text-2xl text-[#141414] mb-3">
            Thank You for Joining!
          </h2>
          
          <p className="font-poppins font-normal text-base text-[#4D5756] mb-6 leading-relaxed">
            {article 
              ? "We appreciate your interest in IPPAI. Your article will be downloaded shortly, and we'll be in touch with more valuable insights."
              : "We appreciate your interest in IPPAI. We'll be in touch with valuable insights and opportunities to collaborate with us."
            }
          </p>
          
          <Button
            onClick={handleThankYouClose}
            className="w-full h-[37.625px] bg-[#D3363B] hover:bg-[#B8303A] text-white font-work-sans font-semibold text-base rounded-[20.52px]"
          >
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
}
