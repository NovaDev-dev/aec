"use client";

// Next & React
import { useEffect, useState } from "react";
// Data
import { slides } from "@/data/legacy";

export default function Legacy() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="legacy" className="relative w-full h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={`/legacy/${slide.image}`}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Caption */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xl text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-2 ">
              {slide.title}
            </h3>
            <p className="text-base md:text-lg opacity-90 delay-100">
              {slide.caption}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
