import Image from "next/image";

const leaders = [
  {
    img: "/leader/1.jpg",
    name: "Dr. Pramod Deo",
    role: "Former Chairman, CERC",
  },
  {
    img: "/leader/2.jpg",
    name: "Mr. VP Raja",
    role: "Former Chairman, MERC",
  },
  {
    img: "/leader/3.png",
    name: "Mr. R. N. Prasher",
    role: "Former Chairman, HERC",
  },
  {
    img: "/leader/4.png",
    name: "Dr. V K Garg",
    role: "Former Chairman, JERC",
  },
  {
    img: "/leader/5.jpeg",
    name: "Ms. Sudha Mahalingam",
    role: "Former Regulator, Petroleum and Natural Gas Regulatory Board",
  },
  {
    img: "/leader/6.jpg",
    name: "Dr. Upendra N. Behera",
    role: "Former Chairman, OERC",
  },
  {
    img: "/leader/7.jpg",
    name: "Mr. P.K Agarwal",
    role: "Former Director & CISO, POSOCO",
  },
  {
    img: "/leader/8.jpg",
    name: "Mr. Chintan Shah",
    role: "Group President, ReNew",
  },
  {
    img: "/leader/9.jpeg",
    name: "Mr. Balawant Joshi",
    role: "MD, Idam Infrastructure Advisory",
  },
  {
    img: "/leader/10.jpg",
    name: "Mr. Harry Dhaul",
    role: "Director General, IPPAI",
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
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-x-7 gap-y-9 justify-items-center">
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
