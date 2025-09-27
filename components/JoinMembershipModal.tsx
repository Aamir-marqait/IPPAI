"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface JoinUsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function JoinUsModal({ open, onOpenChange }: JoinUsModalProps) {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Handle form submission here
      onOpenChange(false);
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

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
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
                  className="w-full h-[37.625px] bg-[#D3363B] hover:bg-[#B8303A] text-white font-work-sans font-semibold text-base leading-[12.31px] tracking-[0%] text-center rounded-[20.52px] pt-[12.31px] pr-[16.42px] pb-[12.31px] pl-[16.42px] opacity-100"
                >
                  Join
                </Button>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
