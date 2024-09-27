console.log("Hello World!");
import "./styles.css";

// async function currentLocationFetch(locationGiven) {
//     let locationData = await fetch(
//       `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=Q0abp83L6OAZwOcUZGLA2EPh90T4QhjG&q=${locationGiven}`
//     , {  mode: 'cors'    } );
//     let prossesedData = await locationData.json();
//     let currentLocationKey = prossesedData[0].Key;
//     return currentLocationKey;
// }
let currentTemp = "234"
async function CurrentWeatherConditionFetch(Location) {
    // let currentLocationKey = await currentLocationFetch(Location);
    let currentWeatherData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${Location}?unitGroup=us&include=current&key=MMMPMMJZTQKPPFF9TZ4SB7ASN&contentType=json`,{  mode: 'cors'    } );
    let WeatherDataProcessed = await currentWeatherData.json();
    currentTemp = WeatherDataProcessed.currentConditions.temp
    console.log(WeatherDataProcessed)
    console.log(currentTemp)
}

const locationSearchBar = document.getElementById("location-search-bar");
const locationSubmit = document.getElementById("location-submit");
const tempShow = document.querySelector(".temperature") 
locationSubmit.addEventListener("click", async() => {
  let Location = locationSearchBar.value;
  await CurrentWeatherConditionFetch(Location);
  tempShow.innerHTML = currentTemp +"°C"
});


