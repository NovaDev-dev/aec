"use client";

export default function Logo({ className = ""}) {
  return (
    <div
      className={`flex flex-col items-center  font-display font-bold select-none text-foreground ${className}`}
        >
        {/* Smaller line */}
        <p className="text-2xl md:text-4xl text-center leading-none md:-mb-3 ">
            Así Es
        </p>

        {/* Main word */}
        <p className="text-4xl md:text-6xl leading-none flex">
            Colombia
        </p>
    </div>

  );
}