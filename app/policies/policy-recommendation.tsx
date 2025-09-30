import Image from "next/image";

const policies = [
  {
    img: "/policy/1.jpg",
    title: "The Great Game Of Energy",
    date: "17 Jan 2025",
  },
  {
    img: "/policy/2.jpg",
    title: "The Great Game Of Energy",
    date: "17 Jan 2025",
  },
  {
    img: "/policy/3.jpg",
    title: "The Great Game Of Energy",
    date: "17 Jan 2025",
  },
  {
    img: "/policy/4.jpg",
    title: "The Great Game Of Energy",
    date: "17 Jan 2025",
  },
  {
    img: "/policy/5.jpg",
    title: "The Great Game Of Energy",
    date: "17 Jan 2025",
  },
  {
    img: "/policy/6.jpg",
    title: "The Great Game Of Energy",
    date: "17 Jan 2025",
  },
];

export default function PolicyRecommendations() {
  return (
    <section className="bg-white py-10 px-2 sm:px-6 w-full flex justify-center">
      <div className="w-full max-w-[1100px] flex flex-col items-center">
        {/* Header */}
        <h2 className="font-red-hat-display font-bold text-[36px] leading-[48px] text-[#141414] text-center capitalize mb-2">
          Our Policy Recommendations
        </h2>
        <p className="text-[#4D5756] font-poppins font-normal text-[16px] leading-[24px] text-center mb-8">
          Our suggestions for shaping effective policies.
        </p>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {policies.map((policy, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[10px] shadow-[0px_0px_8.9px_0px_rgba(0,0,0,0.09)] p-0 flex flex-col transition hover:shadow-[0_4px_24px_0_rgba(0,0,0,0.08)] group cursor-pointer 
              w-[353px] h-[365px] 
              md:w-[280px] md:h-[290px] 
              sm:w-[200px] sm:h-[210px] 
              opacity-100 rotate-0"
            >
              {/* Image */}
              <div className="w-[95%] mx-auto mt-2 h-[160px] sm:h-[170px] md:h-[165px]  overflow-hidden relative">
                <Image
                  src={policy.img}
                  alt={policy.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority={idx === 0}
                />
              </div>
              {/* Content */}
              <div className="flex flex-col flex-1 px-5 py-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-red-hat-display font-bold text-[24px] leading-[28px] text-[#101828] capitalize mb-1">
                    {policy.title}
                  </h3>
                  <span className="text-[#D3363B] mt-1 ml-1">
                    <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M8 16L16 8M16 8H9M16 8V15"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="font-sans font-normal text-[14px] leading-[20px] text-[#667085] mt-1">
                  {policy.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
