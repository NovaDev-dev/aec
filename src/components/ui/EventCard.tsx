"use client";

// React Icons
import { FiInstagram  } from "react-icons/fi";
import { SiGooglecalendar } from "react-icons/si";
// Types
import { EventCardProps } from "@/types";
import { Button } from "../common/Button";

export default function EventCard({ event, onClose }: EventCardProps) {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-20 pt-16 flex items-center justify-center bg-black/50 backdrop-blur-sm px-3 sm:px-4">
      
      <div
        className="
          relative
          w-full
          max-w-md
          bg-white
          rounded-t-2xl sm:rounded-2xl
          shadow-2xl
          overflow-hidden
          animate-fadeIn
          max-h-[90vh]
          flex flex-col
        "
      >
        {/* Close button */}
        <Button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white bg-white/30 transition z-10"
          aria-label="Close"
        >
          ✕
        </Button>

        {/* Poster */}
        {event.poster && (
          <div className="relative w-full h-44 sm:h-52">
            <img
              src={event.poster}
              alt={event.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content (scrollable on small screens) */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          <h3 className="text-xl sm:text-2xl font-bold leading-tight">
            {event.title}
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            📅 {event.date} · ⏰ {event.time}
          </p>

          <p className="mt-1 text-sm text-gray-600">
            📍 {event.location}
          </p>

          {/* Description */}
          {event.description && (
            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              {event.description}
            </p>
          )}

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-3">
            {event.instagramUrl && (
                <Button>
                    <div className="flex items-center gap-6">
                        <FiInstagram  size={24} /> 
                        <a
                            href={event.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                        >
                            View on Instagram
                        </a>
                    </div>
                </Button>
            )}

            <Button
              className="bg-secondary text-white"
            >
                <div className="flex items-center gap-6">
                    <SiGooglecalendar size={24}/>
                    <a
                        href={`https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
                            event.title
                        )}&dates=${event.date?.replaceAll("-", "")}T${
                            (event.time || "1200").replace(":", "")
                        }00/${event.date?.replaceAll("-", "")}T${
                            (event.time || "1300").replace(":", "")
                        }00&location=${encodeURIComponent(event.location || "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Add to Calendar
                    </a>
                </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
