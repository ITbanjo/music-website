import React from "react";
import dateTimeFormatter from "../utils/dateTimeFormatter";

function Show({ date }) {
  const location = date.location.substring(0, date.location.indexOf(","));
  const time = date.start.dateTime;

  function linkGoogleMaps() {
    return `https://maps.google.com/?q=${date.location}`;
  }

  return (
    <li className="list-group-item mb-1" style={{ backgroundColor: "#252120" }}>
      {dateTimeFormatter(time)}{" "}
      <a href={linkGoogleMaps()} target="_blank">
        {location}
      </a>
    </li>
  );
}

export default Show;
