"use client";

// Next & React 
import { useState } from "react";
// Local Components
import SombreroPattern from "../ui/SombreroPattern";
import Calendar from "@/components/ui/Calendar";
// Types
import { EventProps } from "@/types";
import EventCard from "../ui/EventCard";

export default function Events() {

    const [hidden, setHidden] = useState<boolean>(true);
    const [event, setEvent] = useState<EventProps | null>(null);

    const handleOnClicked = (props: EventProps) => {
        setEvent(props);
        setHidden(false);
    }
    return (
        <section id="events" className="w-full py-32 px-6 md:px-24 xl:px-64 bg-light text-foreground relative">

            <SombreroPattern/>
            {/* Section Title */}
            <div className="relative z-10">
                 <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
                    Upcoming Performances
                    </h2>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                    Discover where Así es Colombia will perform next and join us for a celebration of Colombian music and dance.
                    </p>
                </div>

                {/* Calendar wrapper */}
                <div className="relative bg-white backdrop-blur-md rounded-2xl  md:p-12 shadow-xl border border-white/10">
                    <Calendar onEventClicked={handleOnClicked}/>
                </div>

                {/* Event Card HIDDEN */}
                {!hidden && (
                    <div className="">
                        <EventCard event={event} onClose={() => setEvent(null)} />
                    </div>
                )}
            </div>
        </section>
    );
}


