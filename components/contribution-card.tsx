import { cn } from "@/lib/utils";
import Image from "next/image";

type ContributorCardProps = {
  name: string;
  role: string;
  imgSrc: string;
  imgAlt: string;
  className?: string;
};

export default function ContributorCard({
  name,
  role,
  imgSrc,
  imgAlt,
  className,
}: ContributorCardProps) {
  return (
    <figure className={cn("w-full max-w-[320px]", className)}>
      <div className="w-[282px] h-[300px] overflow-hidden rounded-[20px] relative p-2.5 gap-2.5">
        <Image
          src={imgSrc || "/placeholder.svg"}
          alt={imgAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <figcaption className="mt-5">
        <div className="text-lg md:text-xl xl:text-xl font-bold text-[#07060F] leading-none font-['Red_Hat_Display']">
          {name}
        </div>
        <div className="text-sm md:text-base xl:text-base font-normal text-[#4D4D4D] leading-[30px] font-['Poppins']">{role}</div>
      </figcaption>
    </figure>
  );
}
