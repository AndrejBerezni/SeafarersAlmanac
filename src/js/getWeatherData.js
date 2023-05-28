/* Lines in this file that are commented out are removed from code
because free trial of API has ended and data is not available anymore
*/
// function getHour(date) {
//   const hour = date.getHours();
//   return hour;
// }

export default async function getWeatherData(city) {
  const now = new Date();
  // const currentHour = getHour(now);

  const apiKey = "dbd4f8b9dc4f40dc87284401231305";
  const urlCurrent = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  const urlMarine = `https://api.weatherapi.com/v1/marine.json?key=${apiKey}&q=${city}`;
  try {
    const responseCurrent = await fetch(urlCurrent);
    const responseMarine = await fetch(urlMarine);
    if (!responseCurrent.ok || !responseMarine.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    const dataCurrent = await responseCurrent.json();
    const dataMarine = await responseMarine.json();
    const { wind_kph, wind_dir, temp_c, precip_mm, pressure_mb, cloud, uv } =
      dataCurrent.current;
    // const { swell_ht_mt, swell_dir } =
    //   dataMarine.forecast.forecastday[0].hour[currentHour];
    const data = {
      "Wind Speed": wind_kph,
      "Wind Direction": wind_dir,
      // "Wave Height": swell_ht_mt,
      // "Wave Direction": swell_dir,
      "Atmospheric Pressure": pressure_mb,
      Temperature: temp_c,
      Precipitation: precip_mm,
      "Cloud Coverage": cloud,
      "UV Index": uv
    };

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
