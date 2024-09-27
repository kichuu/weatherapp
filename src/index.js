console.log("Hello World!");
import "./styles.css"


async function currentLocationFetch(locationGiven) {
    let locationData = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=Q0abp83L6OAZwOcUZGLA2EPh90T4QhjG&q=${locationGiven}`)
    let prossesedData = await locationData.json()
    let currentLocationKey = prossesedData[0].Key
    return currentLocationKey
}

