// Types
import { PatternItem, SombreroPatternProps } from "@/types";

const patternItems: PatternItem[] = [
  { type: "bar", width: "w-1/2", opacity: 10 },
  { type: "bar", width: "w-full", opacity: 60 },
  { type: "bar", width: "w-2/3", opacity: 90 },
  { type: "triangles" },
  { type: "pinta" },
  { type: "triple" },
  { type: "bar", width: "w-full", opacity: 50 },
  { type: "bar", width: "w-1/3", opacity: 90 },
  { type: "triple" },
  { type: "pinta" },
  { type: "bar", width: "w-full", opacity: 60 },
];

const shuffledItems = [...patternItems].sort(() => Math.random() - 0.5);

export default function SombreroPattern({isInverted = false}: SombreroPatternProps) {
  return (
    <div className="absolute overflow-hidden inset-0 h-full flex flex-row gap-5 justify-end items-end z-0 ml-auto opacity-20 pointer-events-none">
      {shuffledItems.map((item, i) => {
        if (item.type === "bar") {
          return (
            <div
              key={i}
              className={`
                ${item.width} h-full 
                ${isInverted ? `bg-light opacity-${item.opacity}` : `bg-foreground/${item.opacity}`}
              `}
            />
          );
        }

        if (item.type === "triple") {
          return (
            <div key={i} className="w-2/3 h-full flex gap-2">
              <div className={`w-1/4 h-full ${isInverted ? 'bg-light' : `bg-foreground`}`} />
              <div className={`w-1/4 h-full ${isInverted ? 'bg-light' : `bg-foreground`}`} />
              <div className={`w-1/4 h-full ${isInverted ? 'bg-light' : `bg-foreground`}`} />
            </div>
          );
        }

        if (item.type === "pinta") {
          
          return (
            <div
              key={i}
              className="flex flex-row h-full items-stretch gap-2"
            >
              {/* Left stripe */}
              <div className={`w-2 h-full ${isInverted ? 'bg-light' : `bg-foreground`}`} />

              {/* Pintas column */}
              <div className="h-full flex flex-col justify-between gap-4">
                {Array.from({ length:6 }).map((_, j) => (
                  <div
                    key={j}
                    className={`w-16 h-16 ${isInverted ? 'bg-light/50' : `bg-foreground/80`} relative flex items-center justify-center`}
                  >
                    <div className="w-8 h-8 bg-background rotate-45 absolute" />
                    <div className="w-2 h-2 bg-foreground rounded-full absolute" />
                  </div>
                ))}
              </div>

              {/* Right stripe */}
              <div className={`w-2 h-full ${isInverted ? 'bg-light' : `bg-foreground`}`} />
            </div>
          );
        }

        if (item.type === "triangles") {
        return (
          <div key={i} className="h-full flex flex-col">
            {Array.from({ length: 60 }).map((_, j) => {
              const isLeft = j % 2 === 0;

              return (
                <div key={j} className="flex justify-center w-full ">
                  {isLeft ? (
                    // Left-pointing triangle
                    <div className={`border-t-12 border-b-12 border-r-16 border-t-transparent border-b-transparent  ${isInverted ? 'border-r-light' : `border-r-foreground/50`} -my-2`} />
                  ) : (
                    // Right-pointing triangle (darker)
                    <div className={`border-t-12 border-b-12 border-l-16 border-t-transparent border-b-transparent  ${isInverted ? 'border-l-light' : `border-l-foreground/50`}`} />
                  )}
                </div>
              );
            })}
          </div>


        );
      }
        return null;
      })}
    </div>
  );
}
