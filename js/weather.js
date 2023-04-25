// gh secret set WEATHER_API_KEY
const API_KEY = "9a4e5636394a4920deec376f963ea6b5";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const lat_mty = 25.686613;
  const lon_mty = -100.316116;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const url_mty = `https://api.openweathermap.org/data/2.5/weather?lat=${lat_mty}&lon=${lon_mty}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather_kr = document.querySelector(".daytime_column-kr-weather");
      const city_kr = document.querySelector(".daytime_column-kr-city");
      // console.log(data);
      city_kr.innerText = `${data.name}, ${data.sys.country}`;

      weather_kr.innerText = `${
        data.weather[0].main
      } / ${data.main.temp.toFixed(1)}℃`;
    });
  fetch(url_mty)
    .then((response) => response.json())
    .then((data) => {
      const weather_mty = document.querySelector(".daytime_column-mty-weather");
      const city_mty = document.querySelector(".daytime_column-mty-city");
      city_mty.innerText = `${data.name}, ${data.sys.country}`;
      weather_mty.innerText = `${
        data.weather[0].main
      } / ${data.main.temp.toFixed(1)}℃`;
    });
}
function onGeoError() {
  alert("Cant't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
