import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(event) {
  const [city, setCity] = useState("");
  const [list, setList] = useState("");
  const [loaded, setLoaded] = useState(false);
  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function showCity(event) {
    event.preventDefault();
    if (city) {
      let key = "a39d99e6ced537cd2e2f653ab550f5cf";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
      axios.get(url).then(showWeather);
      return;
    } else {
      return alert("Enter a city...");
    }
  }
  function showWeather(response) {
    console.log(response.data);
    setLoaded(true);
    setList({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  let form = (
    <div>
      <form onSubmit={showCity}>
        <input
          type="text"
          onChange={changeCity}
          className="form"
          placeholder="Enter a City.."
        />

        <input type="submit" className="submit" />
      </form>
    </div>
  );
  if (loaded) {
    return (
      <div>
        <h1>Weather App</h1>
        {form}
        <ul>
          <li>Temperature: {list.temperature}°C</li>
          <li>Humidity: {list.humidity}%</li>
          <li>Description: {list.description}</li>
          <li>Wind Speed: {list.wind}</li>
          <li>
            <img src={list.icon} alt={list.description} />
          </li>
        </ul>
        <a
          href="https://github.com/Armita2oo3/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-Source Code
        </a>
        <p> By Armita Mir</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Weather App</h1>
        {form}
        <a
          href="https://github.com/Armita2oo3/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-Source Code
        </a>
        <p> By Armita Mir</p>
      </div>
    );
  }
}
