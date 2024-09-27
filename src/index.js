console.log("Hello World!");
import "./styles.css";

async function currentLocationFetch(locationGiven) {
  try {
    let locationData = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=Q0abp83L6OAZwOcUZGLA2EPh90T4QhjG&q=${locationGiven}`
    );
    let prossesedData = await locationData.json();
    let currentLocationKey = prossesedData[0].Key;
    return currentLocationKey;
  } catch (err) {
    console.log(err);
  }
}

async function CurrentWeatherConditionFetch(Location) {
  try {
    let currentLocationKey = await currentLocationFetch(Location);
    let currentWeatherData = await fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${currentLocationKey}?apikey=Q0abp83L6OAZwOcUZGLA2EPh90T4QhjG`
    );
    let WeatherDataProcessed = await currentWeatherData.json();
    let tempOfLocationInCelsius =
      WeatherDataProcessed[0].Temperature.Metric.Value;
    let tempOfLocationInFarenheit =
      WeatherDataProcessed[0].Temperature.Imperial.Value;
    let weatherIcon = WeatherDataProcessed[0].WeatherIcon;
    let weatherText = WeatherDataProcessed[0].WeatherText;
    console.log(WeatherDataProcessed);
  } catch (err) {
    console.log(err);
  }
}

const locationSearchBar = document.getElementById("location-search-bar");
const locationSubmit = document.getElementById("location-submit");

locationSubmit.addEventListener("click", () => {
  let locationGiven = locationSearchBar.value;
  CurrentWeatherConditionFetch(locationGiven);
});
