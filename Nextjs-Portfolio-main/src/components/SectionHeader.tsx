export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      {/* Eyebrow pill badge */}
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-emerald-400 inline-block" />
          <p className="uppercase font-semibold tracking-widest text-xs bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
            {eyebrow}
          </p>
        </span>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 tracking-tight leading-tight">
        {title}
      </h2>
      <p className="text-center md:text-lg text-white/50 mt-4 max-w-lg mx-auto leading-relaxed">
        {description}
      </p>
    </>
  );
};
