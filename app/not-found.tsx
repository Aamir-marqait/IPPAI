"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-40">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Illustration */}
        <div className="mb-8">
          <div className="relative w-64 h-64 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D3363B]/10 to-[#EA7A7D]/10 rounded-full"></div>
            <div className="absolute inset-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="text-center">
                <h1 className="font-red-hat-display font-bold text-6xl text-[#D3363B] mb-2">
                  404
                </h1>
                <div className="w-16 h-1 bg-gradient-to-r from-[#D3363B] to-[#EA7A7D] mx-auto rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Content */}
        <div className="mb-8">
          <h2 className="font-red-hat-display font-bold text-3xl md:text-4xl text-white mb-4">
            Page Not Found
          </h2>
          <p className="font-poppins font-normal text-base md:text-lg text-white/60 leading-relaxed max-w-lg mx-auto mb-6">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back to exploring IPPAI&apos;s energy
            policy insights and regulatory frameworks.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button className="bg-[#D3363B] hover:bg-[#D3363B]/90 text-white font-work-sans font-medium text-base leading-none px-8 py-3 rounded-[25px] shadow-[0px_4px_4px_0px_#D3363B4F] transition-all duration-300">
              Back to Home
            </Button>
          </Link>

          <Button
            onClick={() => router.back()}
            variant="outline"
            className="border-[#D3363B] text-[#D3363B] hover:bg-[#D3363B]/5 font-work-sans font-medium text-base leading-none px-8 py-3 rounded-[25px] transition-all duration-300"
          >
            Go Back
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-[#DEDEDE]">
          <p className="font-poppins font-light text-sm text-white/60 mb-4">
            Or explore these sections:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="font-poppins text-sm text-[#D3363B] hover:text-[#D3363B]/80 transition-colors"
            >
              About IPPAI
            </Link>
            <span className="text-[#DEDEDE]">|</span>
            <Link
              href="/events"
              className="font-poppins text-sm text-[#D3363B] hover:text-[#D3363B]/80 transition-colors"
            >
              Events
            </Link>
            <span className="text-[#DEDEDE]">|</span>
            <Link
              href="/knowledge-hub"
              className="font-poppins text-sm text-[#D3363B] hover:text-[#D3363B]/80 transition-colors"
            >
              Knowledge Hub
            </Link>
            <span className="text-[#DEDEDE]">|</span>
            <Link
              href="/contact"
              className="font-poppins text-sm text-[#D3363B] hover:text-[#D3363B]/80 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Brand Footer */}
        <div className="mt-8 pt-6 border-t border-[#DEDEDE]">
          <p className="font-briem-hand text-sm text-white/70">
            Powering India&apos;s Energy Future Since 1994
          </p>
        </div>
      </div>
    </div>
  );
}
