const headers = new Headers();

export async function getAllCalendarEvents() {
  const API_KEY = process.env.REACT_APP_GOOGLE_CAL_API_KEY;
  const CALENDAR_ID = process.env.REACT_APP_CAL_ID;

  const date = new Date();
  date.setDate(date.getDate() - 1); // Set to yesterday
  const dateString = date.toISOString();
  const yesterday = dateString.substring(0, 10);
  //console.log(process.env.REACT_APP_KEY);

  const url = new URL(
    `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&maxResults=365&timeMin=${yesterday}T00:00:00.000-05:00&singleEvents=true&orderBy=startTime`
  );
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.items;
  } catch (error) {
    console.error(error.message);
  }
}
