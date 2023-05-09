import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(event) {
  const [city, setCity] = useState(null);
  const [celcius, setCelcius] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [img, setImg] = useState(null);
  const [list, setList] = useState(null);
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
    setCelcius(`Temperature : ${Math.round(response.data.main.temp)} °C`);
    setDescription(`Description : ${response.data.weather[0].description}`);
    setHumidity(`Humidity : ${response.data.main.humidity}`);
    setWind(`Wind Speed : ${Math.round(response.data.wind.speed)} m/s`);
    const imgUrl = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    setImg(<img src={imgUrl} alt="Weather Icon" />);
    if (celcius) {
      setList([
        <li>{celcius}</li>,
        <li>{description}</li>,
        <li>{humidity}</li>,
        <li>{wind}</li>,
        <li>{img}</li>,
      ]);
    } else {
      return <h3>Loading...</h3>;
    }
  }
  return (
    <div>
      <h1>Weather App</h1>

      <form onSubmit={showCity}>
        <input
          type="text"
          onChange={changeCity}
          className="form"
          placeholder="Enter a City.."
        />

        <input type="submit" className="submit" />
      </form>

      <ul>{list}</ul>
    </div>
  );
}
