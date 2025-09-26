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
        // glass panel: translucent, blurred, subtle border
        "rounded-[20px] border border-background/20 bg-background/10",
        "backdrop-blur-md shadow-sm",
        "p-5 sm:p-6 md:p-7",
        className || "",
      ].join(" ")}
    >
      <div className="flex items-baseline gap-1">
        <span className="text-primary-foreground font-semibold text-4xl sm:text-5xl md:text-6xl leading-none">
          {value}
        </span>
        {suffix ? (
          <span className="text-destructive font-semibold text-3xl sm:text-4xl md:text-5xl leading-none">
            {suffix}
          </span>
        ) : null}
      </div>

      <div className="mt-3 h-[3px] w-10 sm:w-12 md:w-14 bg-destructive rounded-full" />

      <p className="mt-3 text-primary-foreground/85 text-sm sm:text-base">
        {label}
      </p>
    </div>
  );
}
