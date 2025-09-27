import type { ReactNode } from "react";

type HubCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function HubCard({ icon, title, description, className }: HubCardProps) {
  return (
    <article
      className={[
        "rounded-xl bg-card shadow-[0_12px_32px_0_rgba(2,6,23,0.08)]",
        "border border-border/60",
        "p-6 sm:p-7 lg:p-8",
        className || "",
      ].join(" ")}
      aria-label={title}
    >
      {/* Icon badge with subtle offset shadow */}
      <div className="relative h-16 w-16">
        {/* red line icon */}
        <span className="relative z-10 flex h-16 w-16 items-center justify-center text-destructive">
          {icon}
        </span>
      </div>

      <h3 className="mt-5 text-sm sm:text-base md:text-lg xl:text-[20px] font-bold font-georgia leading-[135%] align-middle text-[#243C4B]">
        {title}
      </h3>
      <p className="mt-3 text-sm sm:text-base md:text-lg xl:text-[18px] font-normal font-sans leading-[160%] align-middle text-[#6D6D6D]">
        {description}
      </p>
    </article>
  );
}

/* Simple outlined red icons (to match Figma line style) */
export function IconDocument() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h6M8 11h6M8 15h4" />
    </svg>
  );
}

export function IconSpeaker() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="7" r="3" />
      <path d="M5 21v-2a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v2" />
      <path d="M12 12v2" />
    </svg>
  );
}

export function IconPolicy() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="14" height="14" rx="2" />
      <path d="M17 7h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2" />
      <path d="M7 9h6M7 12h6" />
    </svg>
  );
}
