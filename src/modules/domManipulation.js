import { getWeather } from "./apiFunctions";

function displayWeatherData(
  location,
  conditions,
  temp,
  feelsLike,
  description,
  sunrise,
  sunset,
  humidity,
) {
  const locationContainer = document.querySelector(".location");
  locationContainer.textContent = location;

  const conditionsContainer = document.querySelector(".conditions");
  conditionsContainer.textContent = conditions;

  const temperatureContainer = document.querySelector(".temperature");
  temperatureContainer.innerHTML = temp;

  const feelsLikeContainer = document.querySelector(".feels-like");
  feelsLikeContainer.innerHTML = feelsLike;

  const descriptionContainer = document.querySelector(".description");
  descriptionContainer.textContent = description;

  const sunriseContainer = document.querySelector(".sunrise");
  sunriseContainer.textContent = sunrise;

  const sunsetContainer = document.querySelector(".sunset");
  sunsetContainer.textContent = sunset;

  const humidityContainer = document.querySelector(".humidity");
  humidityContainer.innerHTML = humidity;
}

function changeLocation() {
  const location = document.getElementById("search-bar").value;

  getWeather(location);
}

export { displayWeatherData, changeLocation };
