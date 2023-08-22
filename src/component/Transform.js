export const Unix_timestamp = (t) => {
  let date = new Date(t * 1000);
  let hour = String(date.getHours());
  let minute = String(date.getMinutes());
  return `${hour.padStart(2, 0)}:${minute.padStart(2, 0)}`;
};

export const kelToCel = (t) => {
  return parseInt(t - 273.15, 10);
};

export const cityName = (s) => {
  return s.length === 2 ? s : s.slice(0, -1);
}