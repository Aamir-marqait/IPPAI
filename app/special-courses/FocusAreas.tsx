// import React from "react";
// import Image from "next/image";

// const cards = [
//   {
//     iconSrc: "/pr.png", // Add your Policy Research icon src here
//     iconAlt: "Policy Research Icon",
//     title: "Policy Research",
//   },
//   {
//     iconSrc: "/cb.png", // Add your Capacity Building icon src here
//     iconAlt: "Capacity Building Icon",
//     title: "Capacity Building",
//   },
//   {
//     iconSrc: "/it.png", // Add your Industry Training icon src here
//     iconAlt: "Industry Training Icon",
//     title: "Industry Training",
//   },
// ];

// export default function FocusAreas() {
//   return (
//     <section className="w-full bg-white py-8 px-4 flex justify-center items-center">
//       <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full max-w-[1100px]">
//         {cards.map((card, idx) => (
//           <div
//             key={idx}
//             className="border border-gray-200 rounded-lg bg-white flex flex-col items-start px-6 sm:px-8 py-6 sm:py-7 w-full sm:min-w-[220px] sm:max-w-[340px] shadow-none"
//           >
//             <div className="bg-gray-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4 sm:mb-5">
//               {card.iconSrc ? (
//                 <Image
//                   src={card.iconSrc}
//                   alt={card.iconAlt}
//                   width={32}
//                   height={32}
//                   className="w-8 h-8"
//                 />
//               ) : (
//                 <div className="w-8 h-8" />
//               )}
//             </div>
//             <div className="font-work-sans font-normal text-xl sm:text-2xl lg:text-[28px] leading-[110%] tracking-[0%] text-black">
//               {card.title}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }




import React from "react";
import Image from "next/image";
import { getSpecialCoursesPageData } from "@/lib/sanity/queries/specialCourses";

export const revalidate = 3600; // Revalidate every hour

export default async function FocusAreas() {
  const pageData = await getSpecialCoursesPageData();
  const { focusAreas } = pageData;

  const cards = [
    {
      iconSrc: focusAreas.card1.icon,
      iconAlt: focusAreas.card1.title,
      title: focusAreas.card1.title,
    },
    {
      iconSrc: focusAreas.card2.icon,
      iconAlt: focusAreas.card2.title,
      title: focusAreas.card2.title,
    },
    {
      iconSrc: focusAreas.card3.icon,
      iconAlt: focusAreas.card3.title,
      title: focusAreas.card3.title,
    },
  ];

  return (
    <section className="w-full bg-white py-8 px-4 flex justify-center items-center">
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full max-w-[1100px]">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg bg-white flex flex-col items-start px-6 sm:px-8 py-6 sm:py-7 w-full sm:min-w-[220px] sm:max-w-[340px] shadow-none"
          >
            <div className="bg-gray-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4 sm:mb-5">
              {card.iconSrc ? (
                <Image
                  src={card.iconSrc}
                  alt={card.iconAlt}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              ) : (
                <div className="w-8 h-8" />
              )}
            </div>
            <div className="font-work-sans font-normal text-xl sm:text-2xl lg:text-[28px] leading-[110%] tracking-[0%] text-black">
              {card.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

