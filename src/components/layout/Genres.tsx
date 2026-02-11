"use client";

import GenreCard from "../ui/GenreCard";
import { genres } from "@/data/genres";

export default function Genres() {
  return (
    <section id="genres" className="relative z-0 w-full py-32 px-6 md:px-24 xl:px-64 overflow-hidden">
      {/* Title */}
      <div className="pb-12">
        <h2 className="text-4xl md:text-6xl font-extrabold">
          What We Dance
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-black/70">
          Each rhythm tells a story — rooted in Colombian folklore, movement,
          and identity.
        </p>
      </div>

      {/* Scroll container */}
      <div
        className="
          flex flex-col md:flex-row
          md:overflow-y-hidden
          gap-12
          md:snap-x md:snap-mandatory
          scrollbar-hide
        "
      >
        {genres.map((genre, i) => (
          <div
            key={i}
            className="
              md:snap-start
              shrink-0
              mb-8
            "
          >
            <GenreCard {...genre} />
          </div>
        ))}
      </div>
    </section>
  );
}
