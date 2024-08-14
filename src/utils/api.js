const headers = new Headers();

export async function getAllCalendarEvents() {
  const apiKey = "AIzaSyBdb3dQrl9aH3s_CNsCJcJoj165cbQOLJU";
  const calendarId =
    "f2af9d4571491c05e866e9a195759721ec8ebdbdbb3262f656826126a9c7b6d0@group.calendar.google.com";
  const currentDateTime = new Date().toISOString();
  const currentDate = currentDateTime.substring(0, 10);
  console.log(currentDate);

  const url = new URL(
    `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&maxResults=365&timeMin=${currentDate}T00:00:00.000-05:00&singleEvents=true&orderBy=startTime`
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
