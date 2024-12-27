'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const URL = 'http://api.openweathermap.org/data/2.5/weather';
  const KEY = '5d066958a60d315387d9492393935c19';
  const city = 'LVIV';

  const request = `${URL}?q=${city}&units=metric&APPID=${KEY}`;

  fetch(request)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    });
});

function displayWeather(data) {
  const { temp, pressure, humidity } = data.main;
  const { speed, deg } = data.wind;
  const { lon, lat } = data.coord;
  const { country } = data.sys;
  const { description, icon } = data.weather[0];

  const weatherHTML = `
    <h1>Weather in ${data.name} ${country}</h1>
    <p><b>Temperature:</b> ${temp} °C</p>
    <p><b>Pressure:</b> ${pressure} hPa</p>
    <p><b>Humidity:</b> ${humidity}%</p>
    <p><b>Description:</b> ${description}</p>
    <p><b>Wind Speed:</b> ${speed} m/s</p>
    <p><b>Wind Direction:</b> ${deg}°</p>
     <p><b>Coordinates:</b> lon ${lon}  lat ${lat}</p>
    <img src="http://openweathermap.org/img/w/${icon}.png">
  `;

  document.body.innerHTML = weatherHTML; // Вставляємо HTML у сторінку
}
