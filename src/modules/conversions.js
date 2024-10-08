function roundTemperature(temp) {
  return (Math.round(temp * 10) / 10).toFixed(1);
}

function roundHumidity(humidity) {
  return Math.round(humidity) + "%";
}

function formatTime(time) {
  let [hours, minutes] = time.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
}

function convertTemperatureToCelsius(temp) {
  const tempInC = (temp - 32) * (5 / 9);
  return roundTemperature(tempInC) + String.fromCharCode(176) + "C";
}

function convertTemperatureToFaharenheit(temp) {
  const tempInF = temp * (9 / 5) + 32;
  return roundTemperature(tempInF) + String.fromCharCode(176) + "F";
}

function formatDate(date) {
  let [year, month, day] = date.split("-").map(Number);
  return `${month}/${day}`;
}

export {
  roundTemperature,
  roundHumidity,
  convertTemperatureToCelsius,
  convertTemperatureToFaharenheit,
  formatTime,
  formatDate,
};
