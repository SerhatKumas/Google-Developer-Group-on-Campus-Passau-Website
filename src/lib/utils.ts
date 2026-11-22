import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Deterministically format a date string to European / German format for Passau (Europe/Berlin)
 * Uses formatToParts with en-US to guarantee 100% identical output on Node.js and all browser engines.
 */
export function formatBerlinDateTime(dateStr: string): string {
  const date = new Date(dateStr);
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Berlin",
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const parts = formatter.formatToParts(date);
  const partMap: Record<string, string> = {};
  for (const p of parts) {
    partMap[p.type] = p.value;
  }
  return `${partMap.weekday}, ${partMap.day} ${partMap.month} ${partMap.year} • ${partMap.hour}:${partMap.minute}`;
}

export function formatBerlinDate(dateStr: string): string {
  const date = new Date(dateStr);
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Berlin",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const parts = formatter.formatToParts(date);
  const partMap: Record<string, string> = {};
  for (const p of parts) {
    partMap[p.type] = p.value;
  }
  return `${partMap.month} ${partMap.day}, ${partMap.year}`;
}

/**
 * Generate a Google Calendar template URL
 */
export function generateGoogleCalendarUrl({
  title,
  description,
  location,
  startDate,
  endDate,
}: {
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
}): string {
  const formatTime = (d: string) => {
    return new Date(d).toISOString().replace(/-|:|\.\d\d\d/g, "");
  };

  const dates = `${formatTime(startDate)}/${formatTime(endDate)}`;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    details: description,
    location: location,
    dates: dates,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Generate an .ics iCalendar file content
 */
export function generateIcsFile({
  title,
  description,
  location,
  startDate,
  endDate,
  url,
}: {
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  url?: string;
}): string {
  const formatTime = (d: string) => {
    return new Date(d).toISOString().replace(/-|:|\.\d\d\d/g, "");
  };

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//GDG on Campus Passau//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${title.replace(/,/g, "\\,")}`,
    `DESCRIPTION:${description.replace(/,/g, "\\,").replace(/\n/g, "\\n")}`,
    `LOCATION:${location.replace(/,/g, "\\,")}`,
    `DTSTART:${formatTime(startDate)}`,
    `DTEND:${formatTime(endDate)}`,
    `STATUS:CONFIRMED`,
    url ? `URL:${url}` : "",
    "END:VEVENT",
    "END:VCALENDAR",
  ]
    .filter(Boolean)
    .join("\r\n");
}
