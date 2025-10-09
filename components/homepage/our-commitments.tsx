import { Button } from "@/components/ui/button";
import { StatCard } from "../stat-card";
import Link from "next/link";

export default function Commitments() {
  return (
    <section
      aria-label="Our Commitments"
      className="relative w-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/home/commitment.png')" }}
    >
      <div className="absolute inset-0 bg-foreground/80" />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-20">
          {/* Left: Stat cards in a 2x2 grid */}
          <div className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            <StatCard
              value="30"
              suffix="+"
              label="Years of Industry Experience"
            />
            <StatCard value="300" suffix="+" label="Conferences Held" />
            <StatCard value="1000" suffix="+" label="Attendees" />
            <StatCard value="99.9" suffix="%" label="Lorem ipsum" />
          </div>

          {/* Right: Heading, copy, CTA */}
          <div className="w-full md:flex-1 ">
            <h2 className="text-white font-bold font-red-hat-display leading-none tracking-[-1px] capitalize text-2xl sm:text-3xl md:text-4xl xl:text-[48px]">
              Powering Excellence
            </h2>
            <p className="mt-4 text-white font-normal font-poppins leading-8 text-sm sm:text-base md:text-lg xl:text-[20px]">
              We are committed to working with you collaboratively to understand
              your goals and create a strategy that will achieve them.
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <Button
                  className="cursor-pointer bg-[#D3363B] hover:bg-[#D3363B]/90 text-white font-medium font-work-sans leading-none text-center rounded-[25px] px-8 py-3 text-xs sm:text-sm md:text-base xl:text-base"
                  style={{ boxShadow: "0px 4px 4px 0px #D3363B4F" }}
                  aria-label="Join Us"
                >
                  Join Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
