"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);
  const [mediaCenterDropdown, setMediaCenterDropdown] = useState(false);
  const [resourcesDropdownMain, setResourcesDropdownMain] = useState(false);
  const [mediaCenterDropdownMain, setMediaCenterDropdownMain] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if we're on an event detail page, course detail page, or podcast page
  const isEventDetailPage =
    (pathname?.startsWith("/events/") && pathname !== "/events") ||
    (pathname?.startsWith("/courses/") && pathname !== "/courses") ||
    pathname?.startsWith("/podcast");

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
                href="/courses"
                className="font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-2 group"
              >
                IRPRI
                <div className="absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 scale-x-0 origin-center"></div>
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setResourcesDropdown(true)}
                onMouseLeave={() => setResourcesDropdown(false)}
              >
                <button className="font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-2 group flex items-center gap-1">
                  RESOURCES
                  <ChevronDown className="w-4 h-4" />
                  <div className="absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 scale-x-0 origin-center"></div>
                </button>

                {/* Resources Dropdown */}
                {resourcesDropdown && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 w-48 bg-white shadow-[0px_2px_4px_0px_#0000001F_inset] rounded-md z-50">
                    {/* Arrow */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>

                    <div className="py-2">
                      <Link
                        href="/press-releases"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        Press Releases
                      </Link>
                      <Link
                        href="/publications"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        Publications
                      </Link>
                      <Link
                        href="/articles"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        Articles
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setMediaCenterDropdown(true)}
                onMouseLeave={() => setMediaCenterDropdown(false)}
              >
                <button className="font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-2 group flex items-center gap-1">
                  MEDIA CENTER
                  <ChevronDown className="w-4 h-4" />
                  <div className="absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 scale-x-0 origin-center"></div>
                </button>

                {/* Media Center Dropdown */}
                {mediaCenterDropdown && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 w-48 bg-white shadow-[0px_2px_4px_0px_#0000001F_inset] rounded-md z-50">
                    {/* Arrow */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>

                    <div className="py-2">
                      <Link
                        href="/photo-gallery"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        Photo Gallery
                      </Link>
                      <Link
                        href="/podcast"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        Video Gallery / Podcast
                      </Link>
                    </div>
                  </div>
                )}
              </div>
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
              href="/courses"
              className={`font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase transition-colors relative pb-2 group ${
                isEventDetailPage
                  ? "text-black hover:text-gray-600"
                  : "text-white hover:text-red-500"
              }`}
            >
              IRPRI
              <div
                className={`absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 ${
                  pathname === "/courses"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } origin-center`}
              ></div>
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setResourcesDropdownMain(true)}
              onMouseLeave={() => setResourcesDropdownMain(false)}
            >
              <button
                className={`font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase transition-colors relative pb-2 group flex items-center gap-1 ${
                  isEventDetailPage
                    ? "text-black hover:text-gray-600"
                    : "text-white hover:text-red-500"
                }`}
              >
                RESOURCES
                <ChevronDown className="w-4 h-4" />
                <div
                  className={`absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 ${
                    pathname === "/news"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  } origin-center`}
                ></div>
              </button>

              {/* Resources Dropdown Main */}
              {resourcesDropdownMain && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-48 bg-white shadow-[0px_2px_4px_0px_#0000001F_inset] rounded-md z-50">
                  {/* Arrow */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>

                  <div className="py-2">
                    <Link
                      href="/press-releases"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Press Releases
                    </Link>
                    <Link
                      href="/publications"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Publications
                    </Link>
                    <Link
                      href="/articles"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Articles
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setMediaCenterDropdownMain(true)}
              onMouseLeave={() => setMediaCenterDropdownMain(false)}
            >
              <button
                className={`font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase transition-colors relative pb-2 group flex items-center gap-1 ${
                  isEventDetailPage
                    ? "text-black hover:text-gray-600"
                    : "text-white hover:text-red-500"
                }`}
              >
                MEDIA CENTER
                <ChevronDown className="w-4 h-4" />
                <div
                  className={`absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 ${
                    pathname === "/podcast"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  } origin-center`}
                ></div>
              </button>

              {/* Media Center Dropdown Main */}
              {mediaCenterDropdownMain && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-48 bg-white shadow-[0px_2px_4px_0px_#0000001F_inset] rounded-md z-50">
                  {/* Arrow */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>

                  <div className="py-2">
                    <Link
                      href="/photo-gallery"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Photo Gallery
                    </Link>
                    <Link
                      href="/podcast"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Video Gallery / Podcast
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

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
          <Link href="/contact" className="hidden lg:flex">
            <Button className="cursor-pointer bg-[#D3363B] hover:bg-[#B8292E] font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white px-6 py-2 rounded-full transition-colors">
              CONTACT US
            </Button>
          </Link>
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
              href="/courses"
              className="font-work-sans font-medium text-lg leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-3 group"
              onClick={toggleMenu}
            >
              IRPRI
              <div
                className={`absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 ${
                  pathname === "/courses"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } origin-center`}
              ></div>
            </Link>
            <Link
              href="/news"
              className="font-work-sans font-medium text-lg leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-3 group flex items-center justify-center gap-1"
              onClick={toggleMenu}
            >
              RESOURCES
              <ChevronDown className="w-4 h-4" />
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
              className="font-work-sans font-medium text-lg leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-3 group flex items-center justify-center gap-1"
              onClick={toggleMenu}
            >
              MEDIA CENTER
              <ChevronDown className="w-4 h-4" />
              <div
                className={`absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 ${
                  pathname === "/podcast"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } origin-center`}
              ></div>
            </Link>

            {/* Contact Button - Mobile Menu */}
            <Link href="/contact">
              <Button
                className="cursor-pointer bg-[#D3363B] hover:bg-[#B8292E] font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white px-6 py-2 rounded-full transition-colors mt-6"
                onClick={toggleMenu}
              >
                CONTACT US
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
