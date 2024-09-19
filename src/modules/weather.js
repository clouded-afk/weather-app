export default class Weather {
  constructor(
    address,
    temp,
    feelsLike,
    conditions,
    humidity,
    sunrise,
    sunset,
    description,
    icon,
    precipitation,
  ) {
    this.address = address;
    this.temp = temp;
    this.feelsLike = feelsLike;
    this.conditions = conditions;
    this.humidity = humidity;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.description = description;
    this.icon = icon;
    this.precipitation = precipitation;
  }
}
