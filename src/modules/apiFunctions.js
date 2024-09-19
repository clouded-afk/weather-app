import Weather from "./weather";
import { displayWeatherData } from "./domManipulation";

const apiKey = "NXLP6YADTTMR3FKA8W7FMBJQP";
const visualCrossingURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

async function getWeather(location) {
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
  );

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
    locationData.icon,
  );
}

export { getWeather };
