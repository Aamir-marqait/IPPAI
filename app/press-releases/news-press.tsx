import Image from "next/image";

const news = [
  {
    image: "/image.png",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    desc: "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor...",
    date: "June 28, 2025",
  },
  {
    image: "/image.png",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    desc: "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor...",
    date: "June 28, 2025",
  },
  {
    image: "/image.png",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    desc: "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor...",
    date: "June 28, 2025",
  },
  {
    image: "/image.png",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    desc: "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor...",
    date: "June 28, 2025",
  },
  {
    image: "/image.png",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    desc: "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor...",
    date: "June 28, 2025",
  },
  {
    image: "/image.png",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    desc: "Pellentesque at dui vitae amet varius interdum pulvinar mi a egestas ultricies ut diam eget tempor...",
    date: "June 28, 2025",
  },
];

export default function NewsPressSection() {
  return (
    <section className="w-full py-10 sm:py-14 px-2 sm:px-6 bg-white">
      <div className="mx-auto w-full max-w-[1100px] flex flex-col items-center">
        {/* Heading */}
        <h2 className="font-red-hat-display font-bold text-4xl leading-[48px] text-[#141414] text-center capitalize mb-2">
          News & Press
        </h2>
        <p className="font-poppins font-normal text-base leading-6 text-[#4D5756] text-center mb-8 max-w-2xl">
          Stay informed with the latest developments and media updates from
          IPPAI
        </p>
        {/* Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7 justify-items-center">
          {news.map((item, idx) => (
            <div
              key={idx}
              className={`
                relative rounded-[19.49px] bg-white
                shadow-[0_0_8.9px_0_rgba(0,0,0,0.09),0_12px_16px_-4px_rgba(16,24,40,0.08)]
                w-full max-w-[534px] min-h-[486px]
                overflow-hidden flex
                opacity-100
              `}
              style={{}}
            >
              {/* Image and Gradient */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  style={{
                    opacity: 1,
                  }}
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 534px"
                  priority={idx < 2}
                />
                <div
                  className="absolute inset-0 rounded-[19.49px]"
                  style={{
                    background:
                      "linear-gradient(180deg,rgba(102,102,102,0.3) 0%,rgba(0,0,0,0.3) 50%,rgba(21,21,21,0.3) 100%)",
                  }}
                />
              </div>
              {/* Content */}
              <div className="relative z-10 flex flex-col  gap-3 justify-end h-full w-full p-7">
                <h3 className="font-red-hat-display font-bold text-2xl leading-[35px] text-white drop-shadow-[0_3.9px_3.9px_rgba(0,0,0,0.25)] mb-2">
                  <a href="#" className="hover:text-[#E95E5E] transition">
                    {item.title}
                  </a>
                </h3>
                <p className="font-poppins font-normal text-[17.55px] leading-[25px] text-white drop-shadow-[0_3.9px_3.9px_rgba(0,0,0,0.25)] mb-4 line-clamp-2">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between w-full">
                  <a
                    href="#"
                    className="bg-[#D3363B] hover:bg-[#bc2c2c] text-white font-work-sans  font-medium text-[15.6px] leading-[100%] text-center shadow-[0_3.9px_3.9px_rgba(211,54,59,0.31)] rounded-full px-5 py-3 transition flex items-center gap-2"
                  >
                    Learn More
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <span className="text-white/80 font-sans font-normal text-lg leading-10 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
