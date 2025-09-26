import {
  CalendarDays,
  Users2,
  FileText,
  Building2,
  Award,
  Handshake,
  Rocket,
} from "lucide-react";

const milestones = [
  {
    year: "1994",
    icon: <CalendarDays className="w-8 h-8 text-[#C24A48]" />,
    text: "IPPAI Founded As India's First Independent Power Producers Association",
  },
  {
    year: "2001",
    icon: <Users2 className="w-8 h-8 text-[#C24A48]" />,
    text: "Established As Key Policy Advisor To Government Of India",
  },
  {
    year: "2005",
    icon: <FileText className="w-8 h-8 text-[#C24A48]" />,
    text: "Launched Comprehensive Regulatory Framework Initiatives",
  },
  {
    year: "2010",
    icon: <Building2 className="w-8 h-8 text-[#C24A48]" />,
    text: "Pioneered Renewable Energy Integration Policies",
  },
  {
    year: "2015",
    icon: <Award className="w-8 h-8 text-[#C24A48]" />,
    text: "Achieved Recognition As Leading Energy Sector Catalyst",
  },
  {
    year: "2020",
    icon: <Handshake className="w-8 h-8 text-[#C24A48]" />,
    text: "Expanded Focus To Include Sustainability And Clean Energy",
  },
  {
    year: "2024",
    icon: <Rocket className="w-8 h-8 text-[#C24A48]" />,
    text: "Leading India's Energy Transition With 3200+ MW Mobilized",
  },
];

export default function MilestonesTimeline() {
  return (
    <section className="bg-[#fafafa] py-14">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 
          className="text-center mb-2 font-red-hat-display"
          style={{
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#141414'
          }}
        >
          Milestones That Matter
        </h2>
        <p className="text-center text-[#141414] text-base mb-12 font-poppins font-normal leading-7">
          Three decades of transformative achievements in India&apos;s power
          sector
        </p>
        <div className="flex flex-row max-w-2xl mx-auto">
          {/* Years & Dots */}
          <div className="flex flex-col items-end pr-9 relative">
            {/* Dotted line */}
            <div
              className="absolute top-12 bottom-7 w-0.5 border-dashed border-[#CDCDCD] border-l-2 z-0"
              style={{
                height: "calc(100% - 3.5rem)",
                right: "41px",
              }}
            />
            {milestones.map((m) => (
              <div
                key={m.year}
                className="flex items-center mb-20 last:mb-0 z-10 mt-10"
              >
                <span className="text-[#C24A48] text-4xl font-semibold w-16 text-right">
                  {m.year}
                </span>
                <span className="ml-10 w-3 h-3 rounded-full bg-[#C24A48] block"></span>
              </div>
            ))}
          </div>
          {/* Cards */}
          <div className="flex-1 flex flex-col gap-7">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="flex items-center"
                style={{
                  background: "#F6F6F6",
                  borderBottom: "1px solid #D3363B",
                  width: "587px",
                  height: "133px",
                  borderRadius: "20px",
                  opacity: 1,
                  gap: "24px",
                  paddingTop: "34px",
                  paddingRight: "41px",
                  paddingBottom: "34px",
                  paddingLeft: "41px",
                  borderBottomWidth: "1px",
                }}
              >
                <div className="flex items-center justify-center bg-[#FFF7F7] rounded-lg w-14 h-14 flex-shrink-0">
                  {m.icon}
                </div>
                <div 
                  className="w-px h-12"
                  style={{ border: '1px solid #DDDDDD' }}
                ></div>
                <div 
                  className="font-red-hat-display capitalize"
                  style={{
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#141414'
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
