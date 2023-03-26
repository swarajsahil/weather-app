const cityName = document.querySelector("#city-name");
const form = document.querySelector("form");
const innerData=document.querySelector('.inner-container');
const loading=document.querySelector('.loading');
const apiKey = 'bbbac5f3b86282396c2aba8d94c77c5c';
form.addEventListener("submit", (event) => {
  event.preventDefault();
  innerData.innerHTML=''
  loading.style.dislay='block';
  const fetchWeather = async function() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&APPID=${apiKey}`)
    const responseJson = await response.json()
    return responseJson;
  };
  const weatherData = fetchWeather();
  cityName.value = "";
  weatherData.then((data) => {
      let html = `<div class="city-container">
        <div class="city-name">${data.name},${data.sys.country}</div>
        <div class="weather-condition">${data.weather[0].main}</div>
    </div>
    <div class="temperature-container">
        <div class="weather-icon"><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="LOGO"></div>
        <div class="temp">${(data.main.temp - 273.15).toFixed(2)}°C</div>
            <div class="minmax">
                <div class="min">Min:${(data.main.temp_min - 273.15).toFixed(2)}°C</div>
                <div class="max">Max:${(data.main.temp_max - 273.15).toFixed(2)}°C</div>
            </div>
    </div>`;
    innerData.innerHTML=html;
    loading.innerHTML=''
  });
    loading.style.dislay='block';
});
