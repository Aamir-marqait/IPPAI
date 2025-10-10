import Image from "next/image";
import coursesData from "../../data/courses.json";

const courses = coursesData.courses;

export default function CurriculumCourses() {
  return (
    <section
      className="w-full py-10 sm:py-14 px-2 sm:px-6 flex justify-center items-center"
      style={{
        backgroundImage: `url('/courses/bg.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-[1100px] flex flex-col">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-[5px] h-[24px] bg-[#D3363B] opacity-100"></div>
          <span className="font-red-hat-display font-bold xl:text-[16px] xl:leading-[100%] xl:tracking-[0%] text-[#D3363B] uppercase">
            OUR Course
          </span>
        </div>
        <h2 className="font-red-hat-display font-bold xl:text-[36px] xl:leading-[48px] xl:tracking-[0%] text-2xl sm:text-3xl md:text-4xl text-[#141414] mb-3 capitalize">
          Comprehensive Curriculum On <br className="hidden sm:block" />
          Energy, Policy & Regulation
        </h2>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 justify-items-center">
          {courses.map((course, idx) => (
            <div
              key={course.id}
              className="
                bg-white rounded-[10px] shadow-[0px_0px_8.9px_0px_rgba(0,0,0,0.09)]
                w-full max-w-[539px] min-h-[571px] opacity-100 flex flex-col
                overflow-hidden
              "
            >
              <div className="px-3 mt-3">
                <div className="font-epilogue font-semibold xl:text-[17.5px] xl:leading-[26.25px] xl:tracking-[0%] text-[17px] leading-tight text-black mb-2 capitalize">
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
                  src={course.img}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 700px) 95vw, (max-width: 1200px) 48vw, 320px"
                  priority={idx < 2}
                />
              </div>
              {/* Content */}
              <div className="px-3 mt-2 mb-6 flex-grow">
                <p className="font-poppins font-medium text-base leading-[26.67px] align-middle capitalize text-[#D3363B]">
                  About the Course
                </p>
                <p className="font-poppins font-normal text-base leading-[28px] align-middle text-[#6D6C80]">
                  {course.description}
                </p>
                <ul className="mt-3 space-y-2 ml-2">
                  {course.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="font-poppins font-normal text-base leading-[28px] align-middle text-[#6D6C80]">
                      {pointIdx + 1}. {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
