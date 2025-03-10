import React from "react";
import {Calendar, CalendarCellContent, CalendarCellHeader, CalendarCellBody} from "@heroui/react";

export default function App() {
  return (
    <Calendar calendarWidth={400}>
      {(date) => (
        <CalendarCellContent>
          <CalendarCellHeader />
          <CalendarCellBody>
            <div className="flex flex-col w-full text-tiny gap-0.5 px-0.5">
              {date.day % 7 === 0 && (
                <span
                  aria-label="Calendar event"
                  className="bg-red-500/20 w-full rounded-md px-1 text-red-400 line-clamp-1"
                  role="status"
                >
                  MTG
                </span>
              )}
              {date.day % 5 === 0 && (
                <span
                  aria-label="calendar event"
                  className="bg-green-500/20 w-full rounded-md px-1 text-green-400 line-clamp-1"
                  role="status"
                >
                  MTG
                </span>
              )}
              {date.day % 3 === 0 && (
                <span
                  aria-label="calendar event"
                  className="bg-yellow-500/20 w-full rounded-md px-1 text-yellow-400 line-clamp-1"
                  role="status"
                >
                  MTG
                </span>
              )}
            </div>
          </CalendarCellBody>
        </CalendarCellContent>
      )}
    </Calendar>
  );
}
