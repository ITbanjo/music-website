function dateTimeFormatter(inputDateTime) {
  // Handle Time
  const hours = inputDateTime.substr(11, 2);
  const minutes = inputDateTime.substr(14, 2);
  let formattedTime;

  if (hours < 12) {
    formattedTime = `${hours}:${minutes} AM`;
  }
  if (hours == 12) {
    formattedTime = `${hours}:${minutes} PM`;
  }
  if (hours > 12) {
    formattedTime = `${Number(hours) - 12}:${minutes} PM`;
  }

  // Handle Date
  const year = inputDateTime.substr(0, 4);
  let month = inputDateTime.substr(5, 2).replace(/^0+/, "");
  const day = inputDateTime.substr(8, 2).replace(/^0+/, "");

  return `${monthNames(month)} ${day}, ${year} - ${formattedTime}`;
}

function monthNames(month) {
  switch (month) {
    case "1":
      return "Jan";
    case "2":
      return "Feb";
    case "3":
      return "Mar";
    case "4":
      return "Apr";
    case "5":
      return "May";
    case "6":
      return "June";
    case "7":
      return "July";
    case "8":
      return "Aug";
    case "9":
      return "Sept";
    case "10":
      return "Oct";
    case "11":
      return "Nov";
    case "12":
      return "Dec";
  }
}

export default dateTimeFormatter;
