import { Button } from "@/components/ui/button";
import { StatCard } from "../stat-card";

export default function CommitmentsHero() {
  return (
    <section
      aria-label="Our Commitments"
      className="relative w-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/images/commitments-bg.png')" }}
    >
      {/* overlay to darken image for contrast, themed via tokens */}
      <div className="absolute inset-0 bg-foreground/70" />

      <div className="relative mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
          {/* Left: Stat cards in a 2x2 grid */}
          <div className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            <StatCard value="17" suffix="+" label="Lorem ipsum" />
            <StatCard value="100" suffix="+" label="Lorem ipsum" />
            <StatCard value="3200" suffix="+" label="Lorem ipsum" />
            <StatCard value="99.9" suffix="%" label="Lorem ipsum" />
          </div>

          {/* Right: Heading, copy, CTA */}
          <div className="w-full md:flex-1 max-w-[600px] md:max-w-[520px] lg:max-w-[560px]">
            <h2 className="text-primary-foreground text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
              Our Commitments
            </h2>
            <p className="mt-4 text-primary-foreground/85 text-base sm:text-lg leading-relaxed">
              We are committed to working with you collaboratively to understand
              your goals and create a strategy that will achieve them.
            </p>
            <div className="mt-6">
              <Button
                className="rounded-full px-6 sm:px-7 py-5 h-auto bg-destructive text-background hover:bg-destructive/90"
                aria-label="Join Us"
              >
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
