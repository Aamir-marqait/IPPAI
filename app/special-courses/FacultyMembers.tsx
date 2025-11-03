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
    <section className="bg-white w-full px-4 py-12 flex flex-col items-center">
      <div className="mb-3 text-center">
        <span className="font-red-hat-display font-bold text-base leading-none text-center uppercase text-[#D3363B]">
          Faculty Member
        </span>
        <h2 className="font-red-hat-display font-bold text-4xl leading-none text-center text-[#141414] mb-2 mt-4">
          Expert-Led Faculty Members
        </h2>
        <p className="font-poppins font-normal text-base leading-7 text-center text-[#141414] max-w-2xl mb-10 mt-3">
          Industry leaders sharing decades of experience and insights
        </p>
      </div>

      <div className="flex flex-col items-center gap-10 w-full max-w-6xl">
        {/* First row - 5 members */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-4 w-full justify-items-center">
          {faculty.slice(0, 5).map((person, idx) => (
            <div key={idx} className="flex flex-col items-center w-full">
              <div className="w-36 h-36 border border-red-600 md:w-40 md:h-40 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 mb-3">
                {person.imgSrc ? (
                  <Image
                    src={person.imgSrc}
                    alt={person.name}
                    width={160}
                    height={160}
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full" />
                )}
              </div>
              <div className="font-poppins font-medium text-[14px] leading-[100%] tracking-[0%] text-center align-middle text-[#D3363B]">
                {person.name}
              </div>
              <div className="font-poppins font-normal text-[12px] leading-[100%] tracking-[0%] text-center align-middle text-[#4D5756]">
                {person.title}
              </div>
              <div className="font-poppins font-normal text-[12px] leading-[100%] tracking-[0%] text-center align-middle text-[#4D5756]">
                {person.org}
              </div>
            </div>
          ))}
        </div>

        {/* Second row - 4 members centered */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-10 w-full">
          {faculty.slice(5, 9).map((person, idx) => (
            <div
              key={idx + 5}
              className="flex flex-col items-center w-36 md:w-40"
            >
              <div className="w-36 h-36 border border-red-600 md:w-40 md:h-40 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 mb-3">
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
              <div className="font-poppins font-medium text-[14px] leading-[100%] tracking-[0%] text-center align-middle text-[#D3363B]">
                {person.name}
              </div>
              <div className="font-poppins font-normal text-[12px] leading-[100%] tracking-[0%] text-center align-middle text-[#4D5756]">
                {person.title}
              </div>
              <div className="font-poppins font-normal text-[12px] leading-[100%] tracking-[0%] text-center align-middle text-[#4D5756]">
                {person.org}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
