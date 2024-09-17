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
}

export { getWeather };
