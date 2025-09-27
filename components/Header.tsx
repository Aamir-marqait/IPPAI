"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if we're on an event detail page
  const isEventDetailPage = pathname?.startsWith('/events/') && pathname !== '/events';

  if (!mounted) {
    return (
      <header className="w-full absolute z-50 left-0 right-0 pt-4">
        <div className="mx-auto max-w-[1100px] py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/header/logo.png"
                alt="IPPAI Logo"
                width={116}
                height={53}
                className="w-20 h-9 sm:w-24 sm:h-11 md:w-28 md:h-12 lg:w-[116px] lg:h-[53px] xl:w-32 xl:h-14 2xl:w-36 2xl:h-16 rotate-0 opacity-100"
              />
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-2 group"
              >
                HOME
                <div className="absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 scale-x-0 origin-center"></div>
              </Link>
              <Link
                href="/about"
                className="font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-2 group"
              >
                ABOUT US
                <div className="absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 scale-x-0 origin-center"></div>
              </Link>
              <Link
                href="/membership"
                className="font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-2 group"
              >
                MEMBERSHIP
                <div className="absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 scale-x-0 origin-center"></div>
              </Link>
              <Link
                href="/events"
                className="font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-2 group"
              >
                EVENTS
                <div className="absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 scale-x-0 origin-center"></div>
              </Link>
              <Link
                href="/irpri"
                className="font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-2 group"
              >
                IRPRI
                <div className="absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 scale-x-0 origin-center"></div>
              </Link>
              <Link
                href="/news"
                className="font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-2 group"
              >
                NEWS
                <div className="absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 scale-x-0 origin-center"></div>
              </Link>
              <Link
                href="/podcast"
                className="font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-2 group"
              >
                PODCAST
                <div className="absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 scale-x-0 origin-center"></div>
              </Link>
            </nav>
            <button
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
              aria-label="Toggle menu"
            >
              <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
              <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
              <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
            </button>
            <Button className="hidden lg:flex cursor-pointer bg-[#D3363B] hover:bg-[#B8292E] font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white px-6 py-2 rounded-full transition-colors">
              CONTACT US
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="w-full absolute z-50 left-0 right-0 pt-4">
      <div className="mx-auto max-w-[1100px] py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/header/logo.png"
              alt="IPPAI Logo"
              width={116}
              height={53}
              className="w-20 h-9 sm:w-24 sm:h-11 md:w-28 md:h-12 lg:w-[116px] lg:h-[53px] xl:w-32 xl:h-14 2xl:w-36 2xl:h-16 rotate-0 opacity-100"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase transition-colors relative pb-2 group ${
                isEventDetailPage 
                  ? "text-black hover:text-gray-600" 
                  : "text-white hover:text-red-500"
              }`}
            >
              HOME
              <div
                className={`absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 ${
                  pathname === "/"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } origin-center`}
              ></div>
            </Link>
            <Link
              href="/about"
              className={`font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase transition-colors relative pb-2 group ${
                isEventDetailPage 
                  ? "text-black hover:text-gray-600" 
                  : "text-white hover:text-red-500"
              }`}
            >
              ABOUT US
              <div
                className={`absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 ${
                  pathname === "/about"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } origin-center`}
              ></div>
            </Link>
            <Link
              href="/membership"
              className={`font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase transition-colors relative pb-2 group ${
                isEventDetailPage 
                  ? "text-black hover:text-gray-600" 
                  : "text-white hover:text-red-500"
              }`}
            >
              MEMBERSHIP
              <div
                className={`absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 ${
                  pathname === "/membership"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } origin-center`}
              ></div>
            </Link>
            <Link
              href="/events"
              className={`font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase transition-colors relative pb-2 group ${
                isEventDetailPage 
                  ? "text-black hover:text-gray-600" 
                  : "text-white hover:text-red-500"
              }`}
            >
              EVENTS
              <div
                className={`absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 ${
                  pathname === "/events" || pathname?.startsWith("/events/")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } origin-center`}
              ></div>
            </Link>
            <Link
              href="/irpri"
              className={`font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase transition-colors relative pb-2 group ${
                isEventDetailPage 
                  ? "text-black hover:text-gray-600" 
                  : "text-white hover:text-red-500"
              }`}
            >
              IRPRI
              <div
                className={`absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 ${
                  pathname === "/irpri"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } origin-center`}
              ></div>
            </Link>
            <Link
              href="/news"
              className={`font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase transition-colors relative pb-2 group ${
                isEventDetailPage 
                  ? "text-black hover:text-gray-600" 
                  : "text-white hover:text-red-500"
              }`}
            >
              NEWS
              <div
                className={`absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 ${
                  pathname === "/news"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } origin-center`}
              ></div>
            </Link>
            <Link
              href="/podcast"
              className={`font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase transition-colors relative pb-2 group ${
                isEventDetailPage 
                  ? "text-black hover:text-gray-600" 
                  : "text-white hover:text-red-500"
              }`}
            >
              PODCAST
              <div
                className={`absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 ${
                  pathname === "/podcast"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } origin-center`}
              ></div>
            </Link>
          </nav>

          {/* Hamburger Menu Button - Mobile/Tablet */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Contact Button - Desktop Only */}
          <Button className="hidden  lg:flex cursor-pointer bg-[#D3363B] hover:bg-[#B8292E] font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white px-6 py-2 rounded-full transition-colors">
            CONTACT US
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        ></div>

        {/* Mobile Menu */}
        <nav
          className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-black z-50 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-6 space-y-6 mt-16">
            <Link
              href="/"
              className="font-work-sans font-medium text-lg leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-3 group"
              onClick={toggleMenu}
            >
              HOME
              <div
                className={`absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 ${
                  pathname === "/"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } origin-center`}
              ></div>
            </Link>
            <Link
              href="/about"
              className="font-work-sans font-medium text-lg leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-3 group"
              onClick={toggleMenu}
            >
              ABOUT US
              <div
                className={`absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 ${
                  pathname === "/about"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } origin-center`}
              ></div>
            </Link>
            <Link
              href="/events"
              className="font-work-sans font-medium text-lg leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-3 group"
              onClick={toggleMenu}
            >
              EVENTS
              <div
                className={`absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 ${
                  pathname === "/events"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } origin-center`}
              ></div>
            </Link>
            <Link
              href="/irpri"
              className="font-work-sans font-medium text-lg leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-3 group"
              onClick={toggleMenu}
            >
              IRPRI
              <div
                className={`absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 ${
                  pathname === "/irpri"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } origin-center`}
              ></div>
            </Link>
            <Link
              href="/news"
              className="font-work-sans font-medium text-lg leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-3 group"
              onClick={toggleMenu}
            >
              NEWS
              <div
                className={`absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 ${
                  pathname === "/news"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } origin-center`}
              ></div>
            </Link>
            <Link
              href="/podcast"
              className="font-work-sans font-medium text-lg leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-3 group"
              onClick={toggleMenu}
            >
              PODCAST
              <div
                className={`absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 ${
                  pathname === "/podcast"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } origin-center`}
              ></div>
            </Link>

            {/* Contact Button - Mobile Menu */}
            <Button
              className="cursor-pointer bg-[#D3363B] hover:bg-[#B8292E] font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white px-6 py-2 rounded-full transition-colors mt-6"
              onClick={toggleMenu}
            >
              CONTACT US
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
