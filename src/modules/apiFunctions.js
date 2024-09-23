import Weather from "./weather";
import { displayForecastData, displayWeatherData } from "./domManipulation";

const apiKey = "NXLP6YADTTMR3FKA8W7FMBJQP";
const visualCrossingURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

async function getWeather(location) {
  const errorDisplay = document.querySelector(".error-message");
  const weatherDisplay = document.querySelector(".weather-display-container");
  const sevenDayForecast = document.querySelector(".forecast-display");
  const tempConversionButton = document.querySelector(".convert-temp-button");

  try {
    const response = await fetch(
      `${visualCrossingURL}/${location}?key=${apiKey}`,
      {
        mode: "cors",
      },
    );

    const weatherData = await response.json();

    console.log(weatherData);

    const locationData = new Weather(
      weatherData.resolvedAddress,
      weatherData["currentConditions"].temp,
      weatherData["currentConditions"].feelslike,
      weatherData["currentConditions"].conditions,
      weatherData["currentConditions"].humidity,
      weatherData["currentConditions"].sunrise,
      weatherData["currentConditions"].sunset,
      weatherData.description,
      weatherData["currentConditions"].icon,
      weatherData["days"][0].precipprob,
    );

    locationData.addDays(weatherData["days"].slice(1));

    console.log(locationData);

    displayWeatherData(
      locationData.address,
      locationData.conditions,
      locationData.temp,
      locationData.feelsLike,
      locationData.description,
      locationData.sunrise,
      locationData.sunset,
      locationData.humidity,
      locationData.precipitation,
      locationData.icon,
    );

    const days = locationData.days[0];
    const forecastDates = days.map((day) => day.datetime);
    const forecastConditions = days.map((day) => day.conditions);
    const forecastIcons = days.map((day) => day.icon);
    const forecastTemps = days.map((day) => day.temp);

    displayForecastData(
      forecastDates,
      forecastConditions,
      forecastIcons,
      forecastTemps,
    );

    errorDisplay.textContent = "";
    weatherDisplay.style.display = "grid";
    sevenDayForecast.style.display = "grid";
    tempConversionButton.style.display = "block";
  } catch {
    errorDisplay.textContent = "Location Not Found, Try Again!";
    weatherDisplay.style.display = "none";
    sevenDayForecast.style.display = "none";
    tempConversionButton.style.display = "none";
  }
}

export { getWeather };
