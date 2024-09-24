import { getWeather } from "./apiFunctions";
import {
  roundTemperature,
  roundHumidity,
  convertTemperatureToCelsius,
  convertTemperatureToFaharenheit,
  formatTime,
  formatDate,
} from "./conversions";

import clearDay from "../icons/clear-day.png";
import clearNight from "../icons/clear-night.png";
import cloudy from "../icons/cloudy.png";
import fog from "../icons/fog.png";
import hail from "../icons/hail.png";
import partlyCloudyDay from "../icons/partly-cloudy-day.png";
import partlyCloudyNight from "../icons/partly-cloudy-night.png";
import rainSnowShowersDay from "../icons/rain-snow-showers-day.png";
import rainSnowShowersNight from "../icons/rain-snow-showers-night.png";
import rainSnow from "../icons/rain-snow.png";
import rain from "../icons/rain.png";
import showersDay from "../icons/showers-day.png";
import showersNight from "../icons/showers-night.png";
import snow from "../icons/snow.png";
import thunderRain from "../icons/thunder-rain.png";
import thunderShowersDay from "../icons/thunder-showers-day.png";
import thunderShowersNight from "../icons/thunder-showers-night.png";
import thunder from "../icons/thunder.png";
import wind from "../icons/wind.png";

const icons = {
  "clear-day": clearDay,
  "clear-night": clearNight,
  cloudy: cloudy,
  fog: fog,
  hail: hail,
  "partly-cloudy-day": partlyCloudyDay,
  "partly-cloudy-night": partlyCloudyNight,
  "rain-snow-showers-day": rainSnowShowersDay,
  "rain-snow-showers-night": rainSnowShowersNight,
  "rain-snow": rainSnow,
  rain: rain,
  "showers-day": showersDay,
  "showers-night": showersNight,
  snow: snow,
  "thunder-rain": thunderRain,
  "thunder-showers-day": thunderShowersDay,
  "thunder-showers-night": thunderShowersNight,
  thunder: thunder,
  wind: wind,
};

function selectWeatherIcon(icon) {
  return icons[icon];
}

function displayWeatherData(
  location,
  conditions,
  temp,
  feelsLike,
  description,
  sunrise,
  sunset,
  humidity,
  precipitation,
  icon,
) {
  const locationContainer = document.querySelector(".location");
  locationContainer.innerHTML = `Location <div class="localation-data">${location}</div>`;

  const conditionsContainer = document.querySelector(".conditions");
  conditionsContainer.innerHTML = `Current Conditions <div class="conditions-data">
  ${conditions}
  <img src="${selectWeatherIcon(icon)}"></div>`;

  const temperatureContainer = document.querySelector(".temperature");
  temperatureContainer.innerHTML = `Current Temperature <div class="temperature-data">${roundTemperature(temp)}&deg;F</div>`;

  const feelsLikeContainer = document.querySelector(".feels-like");
  feelsLikeContainer.innerHTML = `Currently Feels Like <div class="feels-like-data">${roundTemperature(feelsLike)}&deg;F</div>`;

  const descriptionContainer = document.querySelector(".description");
  descriptionContainer.innerHTML = `Forecast Description <div class="description-data">${description}</div>`;

  const percipitationContainer = document.querySelector(".precipitation");
  percipitationContainer.innerHTML = `Precipitation Chance <div class="description-data">${precipitation}%</div>`;

  const sunriseContainer = document.querySelector(".sunrise");
  sunriseContainer.innerHTML = `Sunrise <div class="sunrise-data">${formatTime(sunrise)}</div>`;

  const sunsetContainer = document.querySelector(".sunset");
  sunsetContainer.innerHTML = `Sunset <div class="sunset-data">${formatTime(sunset)}</div>`;

  const humidityContainer = document.querySelector(".humidity");
  humidityContainer.innerHTML = `Humidity <div class="humidity-data">${roundHumidity(humidity)}</div>`;
}

function displayForecastData(
  forecastDate,
  forecastConditions,
  forecastIcon,
  forecastTemp,
) {
  const dayDate = document.querySelectorAll(".day-date");
  const dayConditions = document.querySelectorAll(".day-conditions");
  const dayIcons = document.querySelectorAll(".day-icon");
  const dayTemperature = document.querySelectorAll(".day-temp");

  dayDate.forEach((date, index) => {
    date.textContent = formatDate(forecastDate[index]);
  });

  dayConditions.forEach((conditions, index) => {
    conditions.textContent = forecastConditions[index];
  });

  dayIcons.forEach((icon, index) => {
    icon.innerHTML = `<img src="${selectWeatherIcon(forecastIcon[index])}"></div>`;
  });

  dayTemperature.forEach((temp, index) => {
    temp.textContent = forecastTemp[index];
  });
}

function changeLocation() {
  const location = document.getElementById("search-bar").value;

  getWeather(location);
}

function displayTemperatureConversion(temp, feelsLikeTemp) {
  const feelsLikeData = document.querySelector(".feels-like-data");
  const temperatureData = document.querySelector(".temperature-data");
  const tempMeasurement = temp.split(String.fromCharCode(176));
  const feelsLikeMeasurement = feelsLikeTemp.split(String.fromCharCode(176));

  const temperature = Number(tempMeasurement[0]);
  const feelsLike = Number(feelsLikeMeasurement[0]);

  if (tempMeasurement[1] === "F") {
    const convertedCTemp = convertTemperatureToCelsius(temperature);
    const convertedCFeelsLike = convertTemperatureToCelsius(feelsLike);
    temperatureData.textContent = convertedCTemp;
    feelsLikeData.textContent = convertedCFeelsLike;
  } else if (tempMeasurement[1] === "C") {
    const convertedFTemp = convertTemperatureToFaharenheit(temperature);
    const convertedFFeelsLike = convertTemperatureToFaharenheit(feelsLike);
    temperatureData.textContent = convertedFTemp;
    feelsLikeData.textContent = convertedFFeelsLike;
  }
}

export {
  displayWeatherData,
  displayForecastData,
  changeLocation,
  displayTemperatureConversion,
};
