// "use client";
// import { useParams, notFound } from "next/navigation";
// import React from "react";
// import Image from "next/image";
// import coursesData from "../../../data/courses.json";

// export default function CourseDetailPage() {
//   const params = useParams();
//   const courseName = params.courseName as string;
//   const course = coursesData.courses.find((c) => c.slug === courseName);

//   if (!course) {
//     notFound();
//   }

//   return (
//     <div className="max-w-[1100px] mx-auto pt-20 sm:pt-32 pb-10 px-2 sm:px-4 w-full">
//       {/* Breadcrumb */}
//       <nav className="mb-8 sm:mb-[40px] flex flex-wrap items-center text-sm">
//         <span className="font-inter font-semibold text-[#4B5563]">Courses</span>
//         <span className="mx-2">{">"}</span>
//         <span className="font-inter font-semibold text-[#4B5563]">
//           {course.category}
//         </span>
//         <span className="mx-2">{">"}</span>
//         <span className="font-inter font-semibold text-[#757575]">
//           {course.title}
//         </span>
//       </nav>

//       {/* Course Image */}
//       <div className="rounded-xl overflow-hidden w-full">
//         <Image
//           src={course.img}
//           alt="Course cover"
//           width={1100}
//           height={400}
//           className="w-full object-cover"
//         />
//       </div>

//       {/* Course Content */}
//       <div className="mt-10 lg:mt-[38px]">
//         {/* Course Title */}
//         <h1 className="font-red-hat-display font-bold text-2xl sm:text-3xl md:text-[32px] leading-[140%] text-[#141414] m-0">
//           {course.title}
//         </h1>

//         {/* Course Meta Information */}
//         <div className="flex items-center gap-4 font-sora font-normal xl:text-[11.67px] xl:leading-[26.67px] xl:tracking-[0%] text-[#4D5756] text-[13px] mb-6 mt-4 capitalize">
//           <span className="flex items-center gap-1">
//             <Image
//               src="/course/lesson.svg"
//               alt="Lessons"
//               width={16}
//               height={16}
//               className="mr-1"
//             />
//             {course.lessons}
//           </span>
//           <span className="flex items-center gap-1">
//             <Image
//               src="/course/duration.svg"
//               alt="Duration"
//               width={16}
//               height={16}
//               className="mr-1"
//             />
//             {course.duration}
//           </span>
//           <span className="flex items-center gap-1">
//             <Image
//               src="/course/students.svg"
//               alt="Students"
//               width={16}
//               height={16}
//               className="mr-1"
//             />
//             {course.students}
//           </span>
//         </div>

//         {/* Overview Section */}
//         <div className="mb-3">
//           <h2 className="font-red-hat-display w-full font-bold text-[20px] leading-[18.26px] text-[#D3363B] mb-4 uppercase tracking-[0%] align-middle">
//             {course.overview.title}
//           </h2>
//           <div className="flex items-center w-[30%] justify-end gap-3 text-xs sm:text-[13.5px] font-semibold">
//             <Image
//               src={course.authorImg}
//               alt={course.author}
//               width={32}
//               height={32}
//               className="rounded-full object-cover"
//             />
//             <div className="flex flex-row items-center gap-2">
//               <span className="text-[#0E2A46] font-semibold">
//                 {course.author}
//               </span>
//               <span className="text-[#4D5756] font-normal">
//                 {course.authorRole}
//               </span>
//             </div>
//           </div>
//           {/* <p className="text-[#333931] text-base sm:text-[16px] font-normal leading-[24px] mb-4">
//             {course.overview.description}
//           </p> */}
//         </div>

//         {/* Course Sections */}
//         <div className="space-y-8">
//           {/* Legislation Section */}
//           <div>
//             <h3 className="font-semibold text-base sm:text-[16px] mb-3 text-[#141414]">
//               LEGISLATION:
//             </h3>
//             <ul className="text-[#373737] text-sm sm:text-[15.5px] ml-3 sm:ml-[12px] pl-3 sm:pl-[18px] leading-relaxed sm:leading-[1.8] space-y-1">
//               {course.sections?.legislation?.items ? (
//                 course.sections.legislation.items.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))
//               ) : (
//                 <li>No legislation data found</li>
//               )}
//             </ul>
//           </div>

//           {/* Institutional Structure Section */}
//           <div>
//             <h3 className="font-semibold text-base sm:text-[16px] mb-3 text-[#141414]">
//               INSTITUTIONAL STRUCTURE – ROLES & RESPONSIBILITY, JURISDICTIONS &
//               INDEPENDENCE:
//             </h3>
//             <ul className="text-[#373737] text-sm sm:text-[15.5px] ml-3 sm:ml-[12px] pl-3 sm:pl-[18px] leading-relaxed sm:leading-[1.8] space-y-1">
//               {course.sections?.institutionalStructure?.items?.map(
//                 (item, index) => <li key={index}>{item}</li>
//               ) || (
//                 <li>
//                   o Ministry of Power, Ministry of New and Renewable Energy
//                 </li>
//               )}
//             </ul>
//           </div>

//           {/* Policy Framework Section */}
//           <div>
//             <h3 className="font-semibold text-base sm:text-[16px] mb-3 text-[#141414]">
//               POLICY & REGULATORY FRAMEWORK:
//             </h3>
//             <ul className="text-[#373737] text-sm sm:text-[15.5px] ml-3 sm:ml-[12px] pl-3 sm:pl-[18px] leading-relaxed sm:leading-[1.8] space-y-1">
//               {course.sections?.policyFramework?.items?.map((item, index) => (
//                 <li key={index}>{item}</li>
//               )) || (
//                 <li>
//                   o Rules and Regulations, National Electricity Policy, National
//                   Tariff Policy
//                 </li>
//               )}
//             </ul>
//           </div>

//           {/* Classroom Simulation Section */}
//           <div>
//             <h3 className="font-semibold text-base sm:text-[16px] mb-3 text-[#141414]">
//               CLASSROOM SIMULATION:
//             </h3>
//             <ul className="text-[#373737] text-sm sm:text-[15.5px] ml-3 sm:ml-[12px] pl-3 sm:pl-[18px] leading-relaxed sm:leading-[1.8] space-y-1">
//               {course.sections?.classroomSimulation?.items?.map(
//                 (item, index) => <li key={index}>{item}</li>
//               ) || (
//                 <li>
//                   o Drafting a Regulation /Order/Speaking Orders Determining
//                   tariff
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>

//         {/* Learning Outcomes */}
//         <div className="mt-8">
//           <h3 className="font-semibold text-base sm:text-[16px] mb-3 text-[#141414]">
//             Learning Outcomes:
//           </h3>
//           <ul className="text-[#373737] text-sm sm:text-[15.5px] ml-3 sm:ml-[12px] pl-3 sm:pl-[18px] leading-relaxed sm:leading-[1.8] space-y-1">
//             {course.learningOutcomes.map((outcome, index) => (
//               <li key={index} className="flex items-start">
//                 <span className="text-[#18B76A] mr-2">✓</span>
//                 {outcome}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Prerequisites */}
//         <div className="mt-8">
//           <h3 className="font-semibold text-base sm:text-[16px] mb-3 text-[#141414]">
//             Prerequisites:
//           </h3>
//           <p className="text-[#333931] text-base sm:text-[16px] font-normal leading-[24px]">
//             {course.prerequisites}
//           </p>
//         </div>

//         {/* Certification */}
//         <div className="mt-8">
//           <h3 className="font-semibold text-base sm:text-[16px] mb-3 text-[#141414]">
//             Certification:
//           </h3>
//           <p className="text-[#333931] text-base sm:text-[16px] font-normal leading-[24px]">
//             {course.certification}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }








import { notFound } from "next/navigation";
import Image from "next/image";
import { getCourseBySlug, getAllCourseSlugs } from "@/lib/sanity/queries/courses";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Link from "next/link";

// Custom PortableText components for styling
const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-[#333931] text-base sm:text-[16px] font-normal leading-[24px] mb-4">
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h1 className="font-red-hat-display font-bold text-2xl sm:text-3xl md:text-[32px] leading-[140%] text-[#141414] mb-4 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-red-hat-display font-bold text-xl sm:text-2xl md:text-[24px] leading-[140%] text-[#D3363B] mb-3 mt-6 uppercase">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-semibold text-base sm:text-[16px] mb-3 text-[#141414] mt-6 uppercase">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-semibold text-base sm:text-[16px] mb-2 text-[#141414] mt-4">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#D3363B] pl-4 py-2 my-4 italic text-[#555] bg-gray-50 rounded">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="text-[#373737] text-sm sm:text-[15.5px] ml-3 sm:ml-[12px] pl-3 sm:pl-[18px] leading-relaxed sm:leading-[1.8] space-y-1 mb-4 list-disc">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="text-[#373737] text-sm sm:text-[15.5px] ml-3 sm:ml-[12px] pl-3 sm:pl-[18px] leading-relaxed sm:leading-[1.8] space-y-1 mb-4 list-decimal">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-[#373737]">{children}</li>,
    number: ({ children }) => <li className="text-[#373737]">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-[#141414]">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-[#D3363B]">
        {children}
      </code>
    ),
    underline: ({ children }) => <u className="underline">{children}</u>,
    "strike-through": ({ children }) => (
      <del className="line-through text-gray-500">{children}</del>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-[#D3363B] hover:text-[#b82e2e] underline transition-colors"
        >
          {children}
        </a>
      );
    },
    internalLink: ({ value, children }) => {
      const slug = value?.reference?.slug?.current;
      return (
        <Link
          href={`/courses/${slug}`}
          className="text-[#D3363B] hover:text-[#b82e2e] underline transition-colors"
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) {
        return null;
      }
      return (
        <figure className="my-6">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src={value.asset.url || value.asset._ref}
              alt={value.alt || "Course image"}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-sm text-gray-500 text-center mt-2 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

// Generate static params for all course slugs
export async function generateStaticParams() {
  const slugs = await getAllCourseSlugs();
  return slugs.map((slug) => ({
    courseName: slug,
  }));
}

interface CourseDetailPageProps {
  params: {
    courseName: string;
  };
}

export default async function CourseDetailPage(
  { params }: { params: Promise<{ courseName: string }> }
) {
  const { courseName } = await params;
  const course = await getCourseBySlug(courseName);
  if (!course) notFound();

  return (
    <div className="max-w-[1100px] mx-auto pt-20 sm:pt-32 pb-10 px-2 sm:px-4 w-full">
      {/* Breadcrumb */}
      <nav className="mb-8 sm:mb-[40px] flex flex-wrap items-center text-sm">
        <Link href="/courses" className="font-inter font-semibold text-[#4B5563] hover:text-[#D3363B]">
          Courses
        </Link>
        <span className="mx-2">{">"}</span>
        <span className="font-inter font-semibold text-[#4B5563]">
          {course.category}
        </span>
        <span className="mx-2">{">"}</span>
        <span className="font-inter font-semibold text-[#757575]">
          {course.title}
        </span>
      </nav>

      {/* Course Image */}
      <div className="rounded-xl overflow-hidden w-full h-[400px] relative">
        <Image
          src={course.coverImage}
          alt={course.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Course Content */}
      <div className="mt-10 lg:mt-[38px]">
        {/* Course Title */}
        <h1 className="font-red-hat-display font-bold text-2xl sm:text-3xl md:text-[32px] leading-[140%] text-[#141414] m-0">
          {course.title}
        </h1>

        {/* Course Meta Information */}
        <div className="flex flex-wrap items-center gap-4 font-sora font-normal xl:text-[11.67px] xl:leading-[26.67px] xl:tracking-[0%] text-[#4D5756] text-[13px] mb-6 mt-4 capitalize">
          {course.lessons && (
            <span className="flex items-center gap-1">
              <Image
                src="/course/lesson.svg"
                alt="Lessons"
                width={16}
                height={16}
                className="mr-1"
              />
              {course.lessons}
            </span>
          )}
          {course.duration && (
            <span className="flex items-center gap-1">
              <Image
                src="/course/duration.svg"
                alt="Duration"
                width={16}
                height={16}
                className="mr-1"
              />
              {course.duration}
            </span>
          )}
          {course.students && (
            <span className="flex items-center gap-1">
              <Image
                src="/course/students.svg"
                alt="Students"
                width={16}
                height={16}
                className="mr-1"
              />
              {course.students}
            </span>
          )}
          {course.level && (
            <span className="px-3 py-1 bg-[#D3363B]/10 text-[#D3363B] rounded-full">
              {course.level}
            </span>
          )}
          {course.language && (
            <span className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              {course.language}
            </span>
          )}
          {course.price && (
            <span className="font-bold text-[#D3363B] text-base">
              {course.price}
            </span>
          )}
        </div>

        {/* Instructor Info */}
        {course.instructor && course.instructor.name && (
          <div className="mb-6 flex items-center gap-3">
            {course.instructor.image && (
              <Image
                src={course.instructor.image}
                alt={course.instructor.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            )}
            <div>
              <div className="text-[#0E2A46] font-semibold">
                {course.instructor.name}
              </div>
              {course.instructor.role && (
                <div className="text-[#4D5756] text-sm">
                  {course.instructor.role}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Course Content (Rich Text) */}
        <div className="prose prose-lg max-w-none mt-8">
          <PortableText
            value={course.courseContent}
            components={portableTextComponents}
          />
        </div>

        {/* Certificate Badge (if certificationType exists) */}
        {course.certificationType && (
          <div className="mt-12 p-6 bg-gradient-to-r from-[#D3363B]/5 to-[#D3363B]/10 rounded-xl border border-[#D3363B]/20">
            <div className="flex items-center gap-3">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D3363B"
                strokeWidth="2"
              >
                <path d="M12 15l3.5 2-1-4 3-2.5-4-.5L12 6l-1.5 4-4 .5 3 2.5-1 4z" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <div>
                <div className="font-semibold text-[#141414] text-lg">
                  Certification
                </div>
                <div className="text-[#4D5756]">{course.certificationType}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



















