const API_KEY = `a2d026fe83b12580d8f675de27f5ec81`;

const SEARCH = document.querySelector("#search");
const WEATHER = document.querySelector("#weather");
const FORM = document.querySelector("form");

const GetWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return showWeather(data);
};

const showWeather = (data) => {
  WEATHER.innerHTML = `<div>
          <img
            src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
            alt=""
          />
        </div>
        <div>
          <h2>${data.main.temp}</h2>
          <h2>${data.weather[0].main}</h2>
        </div>`;
};

FORM.addEventListener("submit", function (e) {
  GetWeather(SEARCH.value);
  e.preventDefault();
});
