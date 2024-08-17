import React from "react";
import { dateFormatter, timeFormatter } from "../utils/dateTimeFormatter";

function Show({ date }) {
  const bandName = date.description;
  const venue = date.location
    ? date.location.substring(0, date.location.indexOf(","))
    : "";

  // Handle dates with no time
  let startDateTime = date.start.dateTime;
  let endDateTime = date.end.dateTime;

  if (date.start.date) {
    startDateTime = date.start.date;
    endDateTime = date.end.date;
  } else {
    startDateTime = date.start.dateTime;
    endDateTime = date.end.dateTime;
  }

  function linkGoogleMaps(address = "") {
    const formattedAddress = address.replace("&", "and");

    return `https://maps.google.com/?q=${formattedAddress}`;
  }

  function linkBandWebsite(band = "") {
    const name = band.toLowerCase();

    if (name.includes("low ground")) {
      return "https://lowgroundband.com/";
    }
    if (name.includes("sunrise")) {
      return "https://www.facebook.com/sunrisecitybluegrassband";
    }
    if (name.includes("remedy")) {
      return "https://remedytreemusic.com/home";
    }
    if (name.includes("penny creek")) {
      return "https://pennycreekband.com/";
    }
    if (name.includes("deano")) {
      return "https://deanograham.hearnow.com/";
    }
  }

  return (
    <li
      className="list-group-item mb-1 d-flex flex-row align-items-center"
      style={{ backgroundColor: "#252120" }}
    >
      <div className="col-3">{dateFormatter(startDateTime)}</div>
      <div className="col-3">
        {timeFormatter(startDateTime)} - {timeFormatter(endDateTime)}
      </div>
      <div className="col-3">
        <a href={linkGoogleMaps(date.location)} target="_blank">
          {venue}
        </a>
      </div>
      <div className="col-3">
        <a href={linkBandWebsite(bandName)} target="_blank">
          {bandName}
        </a>
      </div>
    </li>
  );
}

export default Show;
