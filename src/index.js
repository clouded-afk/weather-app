import "./styles.css";
import {
  changeLocation,
  displayTemperatureConversion,
} from "./modules/domManipulation";

const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", changeLocation);

const temperatureButton = document.querySelector(".convert-temp-button");

temperatureButton.addEventListener("click", () => {
  const temperature = document.querySelector(".temperature-data").textContent;
  const feelsLike = document.querySelector(".feels-like-data").textContent;
  displayTemperatureConversion(temperature, feelsLike);
});
