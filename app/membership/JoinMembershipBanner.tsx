import Image from "next/image";

export default function JoinMembershipBanner() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden shadow"
          style={{
            minHeight: "350px",
          }}
        >
          {/* Background image */}
          <Image
            src="/path/to/your/background-image.jpg" // <-- Set your image path here
            alt="Membership Banner"
            fill
            className="object-cover"
            quality={90}
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          {/* Content */}
          <div className="relative z-20 flex flex-col justify-center items-center h-full py-16">
            <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-4 drop-shadow">
              Join Our Membership
            </h2>
            <p className="text-white text-lg md:text-2xl text-center mb-7 font-medium drop-shadow">
              Unlock exclusive benefits, resources, and connections<br className="hidden md:block" />
              designed to help you grow.
            </p>
            <button className="bg-[#c24a48] hover:bg-[#a93733] transition text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md">
              Join Now
            </button>
          </div>
          {/* Decorative red dots */}
          <span
            className="absolute bg-[#c24a48]/80 rounded-full"
            style={{ width: 44, height: 44, left: 28, top: 48 }}
          ></span>
          <span
            className="absolute bg-[#c24a48]/80 rounded-full"
            style={{ width: 64, height: 64, right: 36, top: 90 }}
          ></span>
          <span
            className="absolute bg-[#c24a48]/80 rounded-full"
            style={{ width: 56, height: 56, left: 20, bottom: 38 }}
          ></span>
          <span
            className="absolute bg-[#c24a48]/80 rounded-full"
            style={{ width: 44, height: 44, right: 44, bottom: 38 }}
          ></span>
        </div>
      </div>
    </section>
  );
}