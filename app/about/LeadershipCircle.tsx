import Image from "next/image";

const members = [
  // Circle around the central image (positions are % relative to container)
  {
    src: "/about/user2.png",
    alt: "Member 1",
    size: 55,
    style: { top: "3%", left: "60%" },
  },
  {
    src: "/about/user3.png",
    alt: "Member 2",
    size: 115,
    style: { top: "1%", left: "74%" },
  },
  {
    src: "/about/user2.png",
    alt: "Member 3",
    size: 140,
    style: { top: "37%", left: "93%" },
  },
  {
    src: "/about/user3.png",
    alt: "Member 4",
    size: 120,
    style: { top: "68%", left: "85%" },
  },
  {
    src: "/about/user2.png",
    alt: "Member 5",
    size: 90,
    style: { top: "78%", left: "70%" },
  },
  {
    src: "/about/user1.png",
    alt: "Member 6",
    size: 110,
    style: { top: "68%", left: "45%" },
  },
  {
    src: "/about/user2.png",
    alt: "Member 7",
    size: 100,
    style: { top: "40%", left: "36%" },
  },
  {
    src: "/about/user3.png",
    alt: "Member 8",
    size: 120,
    style: { top: "15%", left: "40%" },
  },
];

export default function LeadershipCircle() {
  return (
    <section
      className="relative w-full min-h-screen py-12 flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(232.4deg, rgba(211, 54, 59, 0) 0%, rgba(211, 54, 59, 0.2) 43.28%, rgba(211, 54, 59, 0) 100%), #000000",
      }}
    >
      <div className="max-w-[1200px] mx-auto w-full px-4 z-10">
        {/* Top: Title and Subtitle */}
        <div className="text-center mb-20">
          <div 
            className="uppercase text-center font-red-hat-display mb-2"
            style={{
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#D3363B'
            }}
          >
            Advisory Board Members
          </div>
          <h2 
            className="text-center font-red-hat-display mb-3"
            style={{
              fontWeight: 700,
              fontSize: '36px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#FFFFFF'
            }}
          >
            Leadership at IPPAI
          </h2>
          <p 
            className="text-center font-poppins max-w-[40rem] mx-auto"
            style={{
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '28px',
              letterSpacing: '0%',
              color: '#e0e0e0'
            }}
          >
            Guided by experienced leaders, experts, and advisors shaping the
            future of India&apos;s power sector.
          </p>
        </div>

        {/* Bottom: Left-Right Content */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left: Featured Member */}
          <div className="flex flex-col flex-shrink-0 md:w-1/4 w-full mb-10 md:mb-0">
            <div className="">
              <div 
                className="text-right font-red-hat-display mb-2 flex items-center"
                style={{
                  fontWeight: 800,
                  fontSize: '48px',
                  lineHeight: '64px',
                  letterSpacing: '1%',
                  color: '#D3363B'
                }}
              >
                Mr. V.P. Raja
              </div>
              <div 
                className="font-poppins mb-2"
                style={{
                  fontWeight: 400,
                  fontSize: '24px',
                  lineHeight: '144%',
                  letterSpacing: '3%',
                  color: '#FFFFFF'
                }}
              >
                Former Chairman, Maharashtra Electricity Regulatory Commission
              </div>
              <div 
                className="flex items-center"
                style={{
                  fontFamily: 'poppins',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '160%',
                  letterSpacing: '0%',
                  color: '#d6d6d6'
                }}
              >
                The experience and competence of our team will help build your
                business successful.
              </div>
            </div>
          </div>
          {/* Right: Circle Images */}
          <div className="relative flex-1 min-h-[600px] flex items-center justify-center">
            {/* Central member */}
            <div className="absolute z-20 top-[39%] left-[63%] w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2">
              <div className="relative rounded-full border-[3px] border-white shadow-lg w-[300px] h-[300px]">
                <Image
                  src="/about/user1.png"
                  alt="Central Member"
                  fill
                  className="object-cover rounded-full"
                  style={{ borderRadius: "9999px" }}
                  priority
                />
              </div>
            </div>
            {/* Surrounding members */}
            {members.map((m, i) => (
              <div
                key={i}
                className="absolute z-10"
                style={{
                  ...m.style,
                  width: m.size,
                  height: m.size,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className="relative rounded-full border-4"
                  style={{
                    border: "3px solid #FFF",
                    boxShadow: "0px 0px 15px 0px #1C1D2226",
                    width: m.size,
                    height: m.size,
                  }}
                >
                  <Image
                    src={m.src}
                    alt={m.alt}
                    fill
                    className="object-cover rounded-full"
                    style={{ borderRadius: "9999px" }}
                    sizes={`${m.size}px`}
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
