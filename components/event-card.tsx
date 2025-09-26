import Image from "next/image";

type EventCardProps = {
  imgSrc: string;
  imgAlt: string;
  date: string;
  title: string;
  description: string;
};

export function EventCard({
  imgSrc,
  imgAlt,
  date,
  title,
  description,
}: EventCardProps) {
  return (
    <article
      className="snap-start shrink-0 w-[280px] rounded-2xl bg-white overflow-hidden transition-transform hover:-translate-y-0.5"
      style={{ boxShadow: "0px 6px 25px 0px #A3A3A340" }}
      aria-label={title}
    >
      <div className="relative">
        <Image
          src={imgSrc || "/placeholder.svg"}
          alt={imgAlt}
          width={320}
          height={190}
          className="h-[190px] w-full object-cover"
        />
        {/* Red circular arrow in the top-right */}
        <span
          className="absolute -right-4 -top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-(--brand-red) shadow-md"
          aria-hidden="true"
        >
          {/* Up-right arrow icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
            aria-hidden="true"
          >
            <path
              d="M7 17L17 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M9 7H17V15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
          {/* Calendar icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="opacity-80"
          >
            <path
              d="M7 2v3M17 2v3M4 9h16M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-medium font-poppins leading-6 capitalize text-[#999999] text-sm">
            {date}
          </span>
        </div>

        <h3 className="text-sm sm:text-base md:text-lg xl:text-[20px] font-bold font-red-hat-display leading-[135%] text-[#243C4B]">
          {title}
        </h3>

        <p className="mt-2 text-xs sm:text-sm md:text-base xl:text-base font-normal font-poppins leading-[160%] text-[#999999]">
          {description}
        </p>
      </div>
    </article>
  );
}
