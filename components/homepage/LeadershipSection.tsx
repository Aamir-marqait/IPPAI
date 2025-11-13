import Image from "next/image";

interface LeadershipMember {
  name: string;
  role: string;
  image: string;
  order: number;
}

interface LeadershipSectionProps {
  leaders: LeadershipMember[];
}

export default function LeadershipSection({ leaders }: LeadershipSectionProps) {
  if (!leaders || leaders.length === 0) return null;

  return (
    <section className="w-full bg-[#F5F5F5] py-10 sm:py-14 px-4 sm:px-6">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center">
        <span className="font-red-hat-display font-bold text-base leading-none text-center uppercase text-[#D3363B] mb-2">
          Advisory board members
        </span>
        <h2 className="font-red-hat-display font-bold text-4xl leading-none text-center text-[#141414] mb-2">
          Leadership at IPPAI
        </h2>
        <p className="font-poppins font-normal text-base leading-7 text-center text-[#141414] max-w-2xl mb-10">
          Guided by experienced leaders, experts and advisors shaping future of
          India&apos;s power sector.
        </p>

        {/* Cards container – fully responsive */}
        <div className="flex flex-wrap justify-center gap-x-7 gap-y-9 w-full">
          {leaders.map((leader, index) => (
            <div
              key={leader.order ?? index}
              className="
                flex flex-col items-center
                w-full max-w-[260px] sm:w-[230px]
                mx-auto
              "
            >
              <div className="w-full aspect-[1/1.1] bg-[#E3E3E3] rounded-[24px] overflow-hidden mb-4 shadow-sm">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={230}
                  height={250}
                  className="object-cover w-full h-full"
                  draggable={false}
                  priority={index < 4}
                />
              </div>
              <div className="w-full">
                <div className="font-red-hat-display font-bold text-xl leading-none text-[#07060F] mb-1 truncate">
                  {leader.name}
                </div>
                <div className="font-poppins font-normal text-base leading-[30px] text-[#4D4D4D] truncate">
                  {leader.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
