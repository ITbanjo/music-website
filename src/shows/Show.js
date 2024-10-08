import React from "react";
import { dateFormatter, timeFormatter } from "../utils/dateTimeFormatter";

function Show({ event }) {
  const bandName = event.description;
  const venue = event.location
    ? event.location.substring(0, event.location.indexOf(","))
    : "";

  // Handles dates with no time
  const startDateTime = event.start.dateTime || event.start.date;
  const endDateTime = event.end.dateTime || event.end.date;

  function linkGoogleMaps(address = "") {
    const formattedAddress = address.replace("&", "and"); // Removes '&' so that hyperlink will work correctly

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

  function parseCityState() {
    if (!event.location) return "";

    const addressArray = event.location.split("");
    const reverseArray = addressArray.reverse();

    const state = reverseArray.slice(11, 13).reverse().join("");
    const reverseArrayCity = reverseArray.slice(15);
    const city = reverseArrayCity
      .slice(0, reverseArrayCity.indexOf(","))
      .reverse()
      .join("");

    return `${city}, ${state}`;
  }

  return (
    <li
      className="list-group-item mb-1 d-md-flex"
      style={{ backgroundColor: "#252120" }}
    >
      <div className="col-md-2 font-weight-bold">
        {dateFormatter(startDateTime)}
      </div>
      <div className="col-md-2">
        {timeFormatter(startDateTime)} - {timeFormatter(endDateTime)}
      </div>

      <div className="col-md-3">
        <a
          className="hyper-link"
          href={linkGoogleMaps(event.location)}
          target="_blank"
        >
          {venue}
        </a>
      </div>
      <div className="col-md-2">{parseCityState()}</div>
      <div className="col-md-3">
        <a
          className="hyper-link"
          href={linkBandWebsite(bandName)}
          target="_blank"
        >
          {bandName}
        </a>
      </div>
    </li>
  );
}

export default Show;
