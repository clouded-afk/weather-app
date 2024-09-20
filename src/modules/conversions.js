function roundTemperature(temp) {
  return Math.round(temp) + String.fromCharCode(176);
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
  const tempInC = ((temp - 32) * 5) / 9;
  return roundTemperature(tempInC);
}

function convertTemperatureToFaharenheit(temp) {
  const tempInF = temp * (9 / 5) + 32;
  return roundTemperature(tempInF);
}

export {
  roundTemperature,
  roundHumidity,
  convertTemperatureToCelsius,
  convertTemperatureToFaharenheit,
  formatTime,
};
