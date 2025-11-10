import React from "react";
import Image from "next/image";

const faculty = [
  {
    name: "Mr. Soonee Sushil Kumar",
    title: "Former CEO",
    org: "POSOCO",
    imgSrc: "/user.jpg",
  },
  {
    name: "Mr. Praveen Kumar Agarwal",
    title: "Former Director & CISO",
    org: "POSOCO",
    imgSrc: "/user.jpg",
  },
  {
    name: "Mr. Ashok Kumar Rajput",
    title: "Former Member (Power Systems)",
    org: "CEA",
    imgSrc: "/user.jpg",
  },
  {
    name: "Mr. Satyajit Ganguly",
    title: "Former MD & CEO",
    org: "PXIL",
    imgSrc: "/user.jpg",
  },
  {
    name: "Mr. Awadhesh Kumar",
    title: "Founder",
    org: "Quenext",
    imgSrc: "/user.jpg",
  },
  {
    name: "Mr. Anshuman Swain",
    title: "Senior Manager",
    org: "The Lantau Group",
    imgSrc: "/user.jpg",
  },
  {
    name: "Mr. Himanshu Chandrakar",
    title: "Chief Marketing Officer",
    org: "Altilium",
    imgSrc: "/user.jpg",
  },
  {
    name: "Mr. Praveen Jangra",
    title: "Executive Engineer",
    org: "NRPC",
    imgSrc: "/user.jpg",
  },
  {
    name: "Advocate Divya Sood",
    title: "Head Regulatory Affairs",
    org: "IPPAI",
    imgSrc: "/user.jpg",
  },
];

export default function FacultyMembers() {
  return (
    <section className="bg-white w-full px-4 py-8 sm:py-12 flex flex-col items-center">
      <div className="mb-3 text-center">
        <span className="font-red-hat-display font-bold text-sm sm:text-base leading-none text-center uppercase text-[#D3363B]">
          Faculty Member
        </span>
        <h2 className="font-red-hat-display font-bold text-2xl sm:text-3xl md:text-4xl leading-[120%] text-center text-[#141414] mb-2 mt-3 sm:mt-4">
          Expert-Led Faculty Members
        </h2>
        <p className="font-poppins font-normal text-sm sm:text-base leading-6 sm:leading-7 text-center text-[#141414] max-w-2xl mb-6 sm:mb-10 mt-3 px-4">
          Industry leaders sharing decades of experience and insights
        </p>
      </div>

      <div className="w-full max-w-6xl">
        {/* Mobile/Tablet: Single grid, Desktop: Two separate rows */}

        {/* Mobile and Tablet view - Single grid for all members */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:hidden gap-y-8 sm:gap-y-10 gap-x-6 sm:gap-x-8 w-full justify-items-center px-2">
          {faculty.map((person, idx) => (
            <div key={idx} className="flex flex-col items-center w-full max-w-[160px]">
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 border-2 border-red-600 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 mb-3">
                {person.imgSrc ? (
                  <Image
                    src={person.imgSrc}
                    alt={person.name}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full" />
                )}
              </div>
              <div className="font-poppins font-medium text-xs sm:text-sm leading-[130%] text-center text-[#D3363B] mb-1.5">
                {person.name}
              </div>
              <div className="font-poppins font-normal text-[11px] sm:text-xs leading-[130%] text-center text-[#4D5756] mb-0.5">
                {person.title}
              </div>
              <div className="font-poppins font-normal text-[11px] sm:text-xs leading-[130%] text-center text-[#4D5756]">
                {person.org}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view - First row: 5 members, Second row: 4 members centered */}
        <div className="hidden lg:flex flex-col items-center gap-10 w-full">
          {/* First row - 5 members */}
          <div className="grid grid-cols-5 gap-x-8 w-full justify-items-center">
            {faculty.slice(0, 5).map((person, idx) => (
              <div key={idx} className="flex flex-col items-center w-full max-w-[160px]">
                <div className="w-40 h-40 border-2 border-red-600 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 mb-3">
                  {person.imgSrc ? (
                    <Image
                      src={person.imgSrc}
                      alt={person.name}
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full" />
                  )}
                </div>
                <div className="font-poppins font-medium text-sm leading-[130%] text-center text-[#D3363B] mb-1.5">
                  {person.name}
                </div>
                <div className="font-poppins font-normal text-xs leading-[130%] text-center text-[#4D5756] mb-0.5">
                  {person.title}
                </div>
                <div className="font-poppins font-normal text-xs leading-[130%] text-center text-[#4D5756]">
                  {person.org}
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 4 members centered */}
          <div className="flex justify-center gap-x-8 w-full">
            {faculty.slice(5, 9).map((person, idx) => (
              <div key={idx + 5} className="flex flex-col items-center w-full max-w-[160px]">
                <div className="w-40 h-40 border-2 border-red-600 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 mb-3">
                  {person.imgSrc ? (
                    <Image
                      src={person.imgSrc}
                      alt={person.name}
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full" />
                  )}
                </div>
                <div className="font-poppins font-medium text-sm leading-[130%] text-center text-[#D3363B] mb-1.5">
                  {person.name}
                </div>
                <div className="font-poppins font-normal text-xs leading-[130%] text-center text-[#4D5756] mb-0.5">
                  {person.title}
                </div>
                <div className="font-poppins font-normal text-xs leading-[130%] text-center text-[#4D5756]">
                  {person.org}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
