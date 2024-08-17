import React, { useEffect, useState } from "react";
import { getAllCalendarEvents } from "../utils/api";
import Show from "./Show";

function ShowsList() {
  const [events, setEvents] = useState(null);

  useEffect(loadEvents, []);

  function loadEvents() {
    getAllCalendarEvents().then(setEvents).then(console.log(events));
  }

  return !events ? (
    <div className="text-center my-5">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    <div className="container">
      <h1 className="text-center my-5">Dates</h1>
      <ul className="list-group">
        {events.map((event) => (
          <Show event={event} />
        ))}
      </ul>
    </div>
  );
}

export default ShowsList;
