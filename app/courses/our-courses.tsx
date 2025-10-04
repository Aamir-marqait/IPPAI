import Image from "next/image";
import Link from "next/link";
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
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {courses.map((course, idx) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="
                bg-white rounded-[10px] shadow-[0px_0px_8.9px_0px_rgba(0,0,0,0.09)]
                w-full max-w-[353px] min-h-[430px] opacity-100 flex flex-col
                overflow-hidden hover:shadow-lg transition-shadow cursor-pointer
              "
            >
              {/* Course Image */}
              <div
                className="relative mx-auto mt-4 rounded-[10px] overflow-hidden"
                style={{
                  width: "320px",
                  height: "217.87px",
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
              <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
                <div className="font-epilogue font-semibold xl:text-[17.5px] xl:leading-[26.25px] xl:tracking-[0%] text-[17px] leading-tight text-black mb-2 capitalize">
                  {course.title}
                </div>
                <div className="flex items-center gap-4 font-sora font-normal xl:text-[11.67px] xl:leading-[26.67px] xl:tracking-[0%] text-[#4D5756] text-[13px] mb-3 capitalize">
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
                </div>
                <div className="flex items-center justify-between border-t border-dashed border-black pt-3 mt-auto">
                  <div className="flex items-center gap-2">
                    <Image
                      src={course.authorImg}
                      alt={course.author}
                      width={28}
                      height={28}
                      className="rounded-full object-cover"
                    />
                    <span className="font-poppins font-semibold xl:text-[13.33px] xl:leading-[26.67px] xl:tracking-[0%] text-[#0E2A46] text-[15px]">
                      {course.author}
                    </span>
                  </div>
                  <span className="font-poppins font-medium xl:text-[16px] xl:leading-[26.67px] xl:tracking-[0%] text-[#D3363B] text-[15px] hover:underline cursor-pointer capitalize">
                    Learn More
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
