let apiKey = "9374675af18a0eb4614dc0d7393269d5";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherImg = document.querySelector(".weather-img");
let weather = document.querySelector(".weather");
let error = document.querySelector(".error p");

async function checkWeather(city) {
  let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  // Error On Enter Wrong City Name
  if (response.status != 200) {
    error.style.display = "block";
    weather.style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);
    // Details
    let temp = document.querySelector(".temp");
    let cityName = document.querySelector(".city-name");
    let humidity = document.querySelector(".humidity");
    let wind = document.querySelector(".wind");
    // Update Details
    temp.innerHTML = `${Math.round(data.main.temp)}°C`;
    cityName.innerHTML = data.name;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed} km/h`;
    // Update Imgs
    if (data.weather[0].main == "Clouds") {
      weatherImg.src = "imgs/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherImg.src = "imgs/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherImg.src = "imgs/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherImg.src = "imgs/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherImg.src = "imgs/mist.png";
    }
    error.style.display = "none";
    weather.style.display = "block";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
