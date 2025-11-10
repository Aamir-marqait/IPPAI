// import Image from "next/image";
// import coursesData from "../../data/courses.json";
// import Link from "next/link";

// const courses = coursesData.courses;

// export default function CurriculumCourses() {
//   return (
//     <section
//       className="w-full py-10 sm:py-14 px-2 sm:px-6 flex justify-center items-center"
//       style={{
//         backgroundImage: `url('/courses/bg.png')`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="mx-auto w-full max-w-[1100px] flex flex-col">
//         <div className="flex items-center gap-3 mb-2">
//           <div className="w-[5px] h-[24px] bg-[#D3363B] opacity-100"></div>
//           <span className="font-red-hat-display font-bold xl:text-[16px] xl:leading-[100%] xl:tracking-[0%] text-[#D3363B] uppercase">
//             OUR Course
//           </span>
//         </div>
//         <h2 className="font-red-hat-display font-bold xl:text-[36px] xl:leading-[48px] xl:tracking-[0%] text-2xl sm:text-3xl md:text-4xl text-[#141414] mb-3 capitalize">
//           Comprehensive Curriculum On <br className="hidden sm:block" />
//           Energy, Policy & Regulation
//         </h2>

//         {/* Grid */}
//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-items-center">
//           {courses.map((course, idx) => (
//             <div
//               key={course.id}
//               className="
//                 bg-white rounded-[10px] shadow-[0px_0px_8.9px_0px_rgba(0,0,0,0.09)]
//                 w-full max-w-[539px] min-h-[571px] opacity-100 flex flex-col
//                 overflow-hidden
//               "
//             >
             
//               {/* Course Title */}
//               <div className="px-3 mt-3">
//                 <div className="font-epilogue font-semibold xl:text-[17.5px] xl:leading-[26.25px] xl:tracking-[0%] text-[17px] leading-tight text-black mb-2 capitalize">
//                   {course.title}
//                 </div>
//               </div>
//               {/* Course Image */}
//               <div
//                 className="relative rounded-[4.17px] overflow-hidden"
//                 style={{
//                   width: "506px",
//                   height: "217.87px",
//                   marginLeft: "16px",
//                   opacity: 1,
//                 }}
//               >
//                 <Image
//                   src={course.img}
//                   alt={course.title}
//                   fill
//                   className="object-fill"
//                   sizes="(max-width: 700px) 95vw, (max-width: 1200px) 48vw, 320px"
//                   priority={idx < 2}
//                 />
//               </div>
//               {/* Content */}
//               <div className="px-3 mt-2 mb-6 flex-grow">
//                 <Link
//                 href={`/courses/${course.slug}`}
//               >
//                 <p className="font-poppins font-medium text-base leading-[26.67px] align-middle capitalize text-[#D3363B]">
//                   About the Course
//                 </p>
                 
               
//               </Link>
//                 <p className="font-poppins font-normal text-base leading-[28px] align-middle text-[#6D6C80]">
//                   {course.description}
//                 </p>
//                 <ul className="mt-3 space-y-2 ml-2">
//                   {course.points.map((point, pointIdx) => (
//                     <li key={pointIdx} className="font-poppins font-normal text-base leading-[28px] align-middle text-[#6D6C80]">
//                       {pointIdx + 1}. {point}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }








import Image from "next/image";
import Link from "next/link";
import { getCoursesPageData, getAllCourses } from "@/lib/sanity/queries/courses";

export const revalidate = 3600; // Revalidate every hour

export default async function CurriculumCourses() {
  const pageData = await getCoursesPageData();
  const courses = await getAllCourses();
  const { coursesSection } = pageData;

  return (
    <section
      className="w-full py-10 sm:py-14 px-2 sm:px-6 flex justify-center items-center"
      style={{
        backgroundImage: coursesSection.backgroundImage
          ? `url('${coursesSection.backgroundImage}')`
          : `url('/courses/bg.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-[1100px] flex flex-col">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-[5px] h-[24px] bg-[#D3363B] opacity-100"></div>
          <span className="font-red-hat-display font-bold xl:text-[16px] xl:leading-[100%] xl:tracking-[0%] text-[#D3363B] uppercase">
            {coursesSection.sectionLabel}
          </span>
        </div>
        <h2 className="font-red-hat-display font-bold xl:text-[36px] xl:leading-[48px] xl:tracking-[0%] text-2xl sm:text-3xl md:text-4xl text-[#141414] mb-3">
          {coursesSection.mainHeading}
        </h2>

        {/* Courses Grid */}
        {courses.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-items-center">
            {courses.map((course, idx) => (
              <div
                key={course._id}
                className="
                  bg-white rounded-[10px] shadow-[0px_0px_8.9px_0px_rgba(0,0,0,0.09)]
                  w-full max-w-[539px] min-h-[571px] opacity-100 flex flex-col
                  overflow-hidden
                "
              >
                {/* Course Title */}
                <div className="px-3 mt-3">
                  <div className="font-epilogue font-semibold xl:text-[17.5px] xl:leading-[26.25px] xl:tracking-[0%] text-[17px] leading-tight text-black mb-2">
                    {course.title}
                  </div>
                </div>

                {/* Course Image */}
                <div
                  className="relative rounded-[4.17px] overflow-hidden"
                  style={{
                    width: "506px",
                    height: "217.87px",
                    marginLeft: "16px",
                    opacity: 1,
                  }}
                >
                  <Image
                    src={course.coverImage}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 700px) 95vw, (max-width: 1200px) 48vw, 320px"
                    priority={idx < 2}
                  />
                </div>

                {/* Content */}
                <div className="px-3 mt-2 mb-6 flex-grow">
                  <Link href={`/courses/${course.slug}`}>
                    <p className="font-poppins font-medium text-base leading-[26.67px] align-middle text-[#D3363B] hover:text-[#b82e2e] transition-colors">
                      About the Course
                    </p>
                  </Link>

                  <p className="font-poppins font-normal text-base leading-[28px] align-middle text-[#6D6C80] mt-2">
                    {course.shortDescription}
                  </p>

                  {/* Course Highlights */}
                  {course.highlights && course.highlights.length > 0 && (
                    <ul className="mt-3 space-y-2 ml-2">
                      {course.highlights.map((point, pointIdx) => (
                        <li
                          key={pointIdx}
                          className="font-poppins font-normal text-base leading-[28px] align-middle text-[#6D6C80]"
                        >
                          {pointIdx + 1}. {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Meta Info (if available) */}
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    {course.duration && (
                      <span className="flex items-center gap-1">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {course.duration}
                      </span>
                    )}
                    {course.level && (
                      <span className="px-2 py-1 bg-gray-100 rounded-full capitalize">
                        {course.level}
                      </span>
                    )}
                    {course.price && (
                      <span className="font-semibold text-[#D3363B]">
                        {course.price}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            No courses available at the moment.
          </div>
        )}
      </div>
    </section>
  );
}




