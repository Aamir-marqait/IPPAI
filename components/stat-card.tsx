type StatCardProps = {
  value: string;
  suffix?: string;
  label: string;
  className?: string;
};

export function StatCard({ value, suffix, label, className }: StatCardProps) {
  return (
    <div
      className={[
        "rounded-[20px] border-[0.91px] border-[#555555] bg-white/[0.09]",
        "backdrop-blur-md backdrop-saturate-150",
        "p-5 sm:p-6 md:p-7",
        className || "",
      ].join(" ")}
      style={{ boxShadow: "0px 0px 7.44px 0px #FFFFFF40 inset" }}
    >
      <div className="flex items-baseline gap-1 justify-start">
        <span className="text-white font-bold font-red-hat-display leading-none  text-3xl sm:text-4xl md:text-5xl xl:text-[58.08px]">
          {value}
        </span>
        {suffix ? (
          <span className="text-[#D3363B] font-bold font-red-hat-display leading-none text-3xl sm:text-4xl md:text-5xl xl:text-[58.08px]">
            {suffix}
          </span>
        ) : null}
      </div>

      <div className="mt-3 h-[3px] w-10 sm:w-12 md:w-14 bg-destructive rounded-full" />

      <p className="mt-3 text-white font-bold font-poppins leading-none  text-xs sm:text-sm md:text-base xl:text-[16.34px]">
        {label}
      </p>
    </div>
  );
}
