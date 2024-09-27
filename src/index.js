console.log("Hello World!");
import "./styles.css";

async function currentLocationFetch(locationGiven) {
    let locationData = await fetch(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=Q0abp83L6OAZwOcUZGLA2EPh90T4QhjG&q=${locationGiven}`
    , {  mode: 'cors'    } );
    let prossesedData = await locationData.json();
    let currentLocationKey = prossesedData[0].Key;
    return currentLocationKey;
}

async function CurrentWeatherConditionFetch(Location) {
    let currentLocationKey = await currentLocationFetch(Location);
    let currentWeatherData = await fetch(
      `https://dataservice.accuweather.com/currentconditions/v1/${currentLocationKey}?apikey=Q0abp83L6OAZwOcUZGLA2EPh90T4QhjG`
    ,{  mode: 'cors'    } );
    let WeatherDataProcessed = await currentWeatherData.json();
    let tempOfLocationInCelsius =
      WeatherDataProcessed[0].Temperature.Metric.Value;
    let tempOfLocationInFarenheit =
      WeatherDataProcessed[0].Temperature.Imperial.Value;
    let weatherIcon = WeatherDataProcessed[0].WeatherIcon;
    let weatherText = WeatherDataProcessed[0].WeatherText;
    console.log(WeatherDataProcessed);
}

const locationSearchBar = document.getElementById("location-search-bar");
const locationSubmit = document.getElementById("location-submit");

locationSubmit.addEventListener("click", () => {
  let locationGiven = locationSearchBar.value;
  CurrentWeatherConditionFetch(locationGiven);
});


