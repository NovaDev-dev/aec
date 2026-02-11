"use client";

// Styles
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
// Data
import {events} from "@/data/events";
// Types
import { EventProps, CalendarProps } from "@/types";

export default function Calendar({ onEventClicked }: CalendarProps) {
  return (
    <div className="relative z-10 text-foreground">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "title",
          center: "",
          right: "prev,next,dayGridMonth,listMonth",
        }}
        events={events.map(event => ({
          title: event.title,
          start: `${event.date}T${event.time}`,
          extendedProps: {
            location: event.location,
            description: event.description,
            instagramUrl: event.instagramUrl,
          poster: event.poster,
          },
        }))}
        eventClick={(info) => {
        // Send selected event to parent
        const eventData: EventProps = {
          title: info.event.title,
          date: info.event.startStr.split("T")[0],
          time: info.event.startStr.split("T")[1]?.slice(0, 5),
          location: info.event.extendedProps.location,
          description: info.event.extendedProps.description,
          instagramUrl: info.event.extendedProps.instagramUrl,
          poster: info.event.extendedProps.poster,          
        };

        onEventClicked(eventData);
      }}
        height="auto"
      />
    </div>
  );
}
