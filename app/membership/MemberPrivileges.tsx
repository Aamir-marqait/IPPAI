import { BarChart2, Award, Handshake } from "lucide-react";

export default function MemberPrivileges() {
  return (
    <section
      className="w-full py-14 md:py-20"
      style={{
        backgroundImage: "url('/path/to/your/red-bg-image.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Member Privileges &amp; Access
        </h2>
        <p className="text-white/80 text-base md:text-lg text-center mt-2 mb-10">
          Unlock exclusive opportunities to shape India&apos;s energy future.
        </p>
        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex-1 max-w-sm min-w-[280px] flex flex-col items-center text-center">
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-neutral-100 mb-6">
              <BarChart2 className="w-10 h-10 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Exclusive Insights</h3>
            <p className="text-gray-500 text-base">
              Access comprehensive reports, research, and policy updates that
              shape India&apos;s power sector landscape.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex-1 max-w-sm min-w-[280px] flex flex-col items-center text-center">
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-neutral-100 mb-6">
              <Award className="w-10 h-10 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Industry Recognition</h3>
            <p className="text-gray-500 text-base">
              Platform for thought leadership through speaking opportunities,
              publications, and award programs.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex-1 max-w-sm min-w-[280px] flex flex-col items-center text-center">
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-neutral-100 mb-6">
              <Handshake className="w-10 h-10 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Direct Access</h3>
            <p className="text-gray-500 text-base">
              Connect directly with policymakers, regulators, and industry
              leaders driving sector transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
