export const timeNormal = (dateStr: string): string => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const time = new Intl.DateTimeFormat("en-US", options).format(date);
  return time;
};

