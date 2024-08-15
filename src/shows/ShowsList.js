import React, { useEffect, useState } from "react";
import { getAllCalendarEvents } from "../utils/api";
import Show from "./Show";

function ShowsList() {
  const [dates, setDates] = useState(null);

  useEffect(loadEvents, []);

  function loadEvents() {
    getAllCalendarEvents().then(setDates).then(console.log(dates));
  }

  return !dates ? (
    <div className="text-center my-5">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    <div className="container">
      <h1 className="text-center my-5">Dates</h1>
      <ul className="list-group">
        {dates.map((date) => (
          <Show date={date} />
        ))}
      </ul>
    </div>
  );
}

export default ShowsList;
