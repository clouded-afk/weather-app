import "./styles.css";
import { changeLocation } from "./modules/domManipulation";

const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", changeLocation);
