import Image from "next/image";

type EventCardProps = {
  imgSrc: string;
  imgAlt: string;
  date: string;
  title: string;
  description: string;
  videoSrc?: string;
  onClick?: () => void;
};

export function VideoCard({ imgSrc, imgAlt, title, videoSrc, onClick }: EventCardProps) {
  return (
    <article 
      className={`flex-shrink-0 w-[320px] snap-start ${videoSrc && onClick ? 'cursor-pointer group' : ''}`} 
      aria-label={title}
      onClick={onClick}
    >
      <div className="relative">
        <Image
          src={imgSrc || "/placeholder.svg"}
          alt={imgAlt}
          width={320}
          height={190}
          className="h-[190px] w-[320px] object-cover rounded-lg"
        />
        {videoSrc && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="rounded-full bg-white/85 flex items-center justify-center transition-transform group-hover:scale-110 shadow"
              style={{ width: 70, height: 70 }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  fontFamily: "Font Awesome 6 Free",
                  fontWeight: 900,
                  fontSize: "30px",
                  background: "linear-gradient(180deg, #E33E5F 0%, #B00A2B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ▶
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="py-4">
        <h3 className="text-sm sm:text-base md:text-lg xl:text-[20px] font-bold font-red-hat-display leading-[135%] text-[#243C4B]">
          {title}
        </h3>
      </div>
    </article>
  );
}
