import React from "react";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";
export default function Weather() {
  function handelSubmit(response) {
    //alert(`The weather in Paris is ${Math.round(response.data.main.temp)}°C`);
  }

  let apiKey = "a39d99e6ced537cd2e2f653ab550f5cf";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`;
  axios.get(url).then(handelSubmit);
  return (
    <div>
      <h1>Hello World</h1>
      <PacmanLoader color="#ffffff" />
    </div>
  );
}
