"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-transparent mt-[33px]">
      <div className="mx-auto max-w-[1100px] px-4 py-4">
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
              className="font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-2 group"
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
              className="font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-2 group"
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
              className="font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-2 group"
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
              className="font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-2 group"
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
              className="font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-2 group"
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
              className="font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-2 group"
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

          {/* Mobile/Tablet Navigation */}
          <nav className="flex lg:hidden">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="font-work-sans font-medium text-sm sm:text-base leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-2 group"
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
                className="font-work-sans font-medium text-sm sm:text-base leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-2 group"
              >
                ABOUT
                <div
                  className={`absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-[#D3363B] rounded-[3px] transition-all duration-300 ${
                    pathname === "/about"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  } origin-center`}
                ></div>
              </Link>
              <Link
                href="/news"
                className="font-work-sans font-medium text-sm sm:text-base leading-none tracking-normal text-center uppercase text-white hover:text-red-500 transition-colors relative pb-2 group"
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
            </div>
          </nav>

          {/* Contact Button */}
          <Button className="cursor-pointer bg-[#D3363B] hover:bg-[#B8292E] font-work-sans font-medium text-base leading-none tracking-normal text-center uppercase text-white px-6 py-2 rounded-full transition-colors">
            CONTACT US
          </Button>
        </div>
      </div>
    </header>
  );
}
