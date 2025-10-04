import Image from "next/image";

const leaders = [
  {
    img: "/leader/1.jpg",
    name: "Mr. Salman Kurshid",
    role: "Chief Learning Officer",
  },
  {
    img: "/leader/2.jpg",
    name: "Mr. Salman Kurshid",
    role: "Chief Learning Officer",
  },
  {
    img: "/leader/3.jpg",
    name: "Mr. Salman Kurshid",
    role: "Chief Learning Officer",
  },
  {
    img: "/leader/4.jpg",
    name: "Mr. Salman Kurshid",
    role: "Chief Learning Officer",
  },
  {
    img: "/leader/1.jpg",
    name: "Mr. Salman Kurshid",
    role: "Chief Learning Officer",
  },
  {
    img: "/leader/2.jpg",
    name: "Mr. Salman Kurshid",
    role: "Chief Learning Officer",
  },
  {
    img: "/leader/3.jpg",
    name: "Mr. Salman Kurshid",
    role: "Chief Learning Officer",
  },
  {
    img: "/leader/4.jpg",
    name: "Mr. Salman Kurshid",
    role: "Chief Learning Officer",
  },
];

export default function LeadershipSection() {
  return (
    <section className="w-full bg-[#F5F5F5] py-10 sm:py-14 px-2 sm:px-4 flex flex-col items-center">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center">
        <span className="font-red-hat-display font-bold text-base leading-none text-center uppercase text-[#D3363B] mb-2">
          Advisory Board Members
        </span>
        <h2 className="font-red-hat-display font-bold text-4xl leading-none text-center text-[#141414] mb-2">
          Leadership at IPPAI
        </h2>
        <p className="font-poppins font-normal text-base leading-7 text-center text-[#141414] max-w-2xl mb-10">
          Guided by experienced leaders, experts, and advisors shaping the
          future of India&apos;s power sector.
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-7 gap-y-9 justify-items-center">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="flex flex-col items-center w-full max-w-[230px]"
            >
              <div className="w-full aspect-[1/1.1] bg-[#E3E3E3] rounded-[24px] overflow-hidden mb-4 shadow-sm">
                <Image
                  src={leader.img}
                  alt={leader.name}
                  width={230}
                  height={250}
                  className="object-cover w-full h-full"
                  draggable={false}
                  priority={i < 4}
                />
              </div>
              <div className="w-full">
                <div className="font-red-hat-display font-bold text-xl leading-none text-[#07060F] mb-1">
                  {leader.name}
                </div>
                <div className="font-poppins font-normal text-base leading-[30px] text-[#4D4D4D]">
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
