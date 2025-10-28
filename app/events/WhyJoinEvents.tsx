import React from "react";
import Image from "next/image";
import * as LucideIcons from "lucide-react";

interface Feature {
  iconType: "image" | "lucide";
  iconName?: string;
  iconImage?: string;
  title: string;
  description: string;
  number: string;
}

interface WhyJoinEventsData {
  sectionTitle: string;
  mainHeading: string;
  description: string;
  features: Feature[];
}

interface WhyJoinEventsProps {
  data: WhyJoinEventsData;
}

export default function WhyJoinEvents({ data }: WhyJoinEventsProps) {
  // Helper function to render icon
  const renderIcon = (feature: Feature) => {
    if (feature.iconType === "image" && feature.iconImage) {
      return (
        <Image
          src={feature.iconImage}
          alt={feature.title}
          width={56}
          height={56}
        />
      );
    } else if (feature.iconType === "lucide" && feature.iconName) {
      // Dynamically get the Lucide icon component
      const IconComponent = (LucideIcons as any)[feature.iconName];
      
      if (IconComponent) {
        return <IconComponent size={56} className="text-[#D3363B]" />;
      }
    }
    
    // Fallback icon if neither works
    return <LucideIcons.HelpCircle size={56} className="text-gray-400" />;
  };

  return (
    <section
      className="relative w-screen min-h-[100vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: " url('/event/bg2.png')",
      }}
    >
      <div className="w-full flex flex-col items-center px-4 py-16 md:py-24">
        <div className="w-full max-w-[1100px] mx-auto text-center mb-12">
          <p className="font-red-hat-display font-bold text-base leading-none text-center uppercase text-[#D3363B] mb-2">
            {data.sectionTitle}
          </p>
          <h2 className="font-red-hat-display font-bold text-[36px] leading-none text-center text-white mb-3">
            {data.mainHeading}
          </h2>
          <p className="font-poppins font-normal text-base leading-[28px] text-center text-[#D1D5DB] max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>
        <div className="w-full max-w-[1100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.features.map((f, i) => (
            <div
              key={i}
              className="bg-white/95 rounded-[25px] px-8 py-10 flex flex-col min-h-[250px] relative shadow-lg group hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center gap-4 mb-7">
                <div>{renderIcon(f)}</div>
                <span className="absolute right-8 top-8 text-[48px] md:text-[56px] font-extrabold text-[#F7D9D9] group-hover:text-[#E2C1C1] select-none pointer-events-none">
                  {f.number}
                </span>
              </div>
              <h3 className="font-poppins font-semibold text-[20px] leading-[24px] text-[#223645] uppercase mb-2">
                {f.title}
              </h3>
              <p className="font-poppins font-normal text-base leading-[24px] text-[#5B6476]">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}