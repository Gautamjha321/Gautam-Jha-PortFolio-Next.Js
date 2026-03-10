import { twMerge } from "tailwind-merge";

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-3">
        {/* Gradient accent dot */}
        <div className="size-8 rounded-lg bg-gradient-to-br from-emerald-300/20 to-sky-400/20 border border-white/10 flex items-center justify-center flex-shrink-0">
          <div className="size-2 rounded-full bg-gradient-to-br from-emerald-300 to-sky-400" />
        </div>
        <h3 className="font-serif text-2xl md:text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs text-white/50 mt-2.5 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
