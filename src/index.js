import './styles/style.css'
const geolib = require('geolib');


// Font awesome:
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import loadHome from './js/DOM components/loadHome';

loadHome();

let lat = 38.659828;
let lon = -9.390896;
let city = 'lisbon';

function getHour(date) {
  const hour = date.getHours();
  return hour
}

async function getWeatherData(lat, lon) {
  const now = new Date();
  const currentHour = getHour(now);
  console.log(currentHour)

  const apiKey = 'dbd4f8b9dc4f40dc87284401231305';
  const urlCurrent = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`;
  const urlMarine = `https://api.weatherapi.com/v1/marine.json?key=${apiKey}&q=${lat},${lon}`
  try {
    const responseCurrent = await fetch(urlCurrent);
    const responseMarine = await fetch(urlMarine);
    if (!responseCurrent.ok || !responseMarine.ok) {
      throw new Error(`Request failed with status code ${response.status}`)
    }

    const dataCurrent = await responseCurrent.json();
    const dataMarine = await responseMarine.json();
    const {wind_kph, wind_dir, temp_c, precip_mm, pressure_mb } = dataCurrent.current;
    const {swell_ht_mt, swell_dir} = dataMarine.forecast.forecastday[0].hour[currentHour]
    console.log({
      windSpeed: wind_kph,
      windDirection: wind_dir,
      temperature: temp_c,
      precipitation: precip_mm,
      atmosphericPressure: pressure_mb,
      waveHeight: swell_ht_mt,
      waveDirection: swell_dir
    });
    console.log(dataCurrent)
    console.log(dataMarine)
  } catch(error) {
    console.error(error);
    return null
  }
};

// getWeatherData(lat, lon);
