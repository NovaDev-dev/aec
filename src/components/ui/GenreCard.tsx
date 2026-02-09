// Types
import { GenreProps } from "@/types";

export default function GenreCard({
  name,
  shortDescription,
  longDescription,
  image,
}: GenreProps) {
  return (
    <div
      className="
        relative h-92 md:h-130
        rounded-3xl
        overflow-hidden
        shadow-xl
        group
      "
      style={{
        backgroundImage: `url(/genres/${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-linear-to-t
          from-black/80 via-black/40 to-transparent
        "
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10 text-white">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
          {name}
        </h3>

        <p className="text-base md:text-lg leading-relaxed text-white/90 max-w-lg">
          <span className="md:hidden">{shortDescription}</span>
          <span className="hidden md:inline">{longDescription}</span>
        </p>
      </div>
    </div>
  );
}
