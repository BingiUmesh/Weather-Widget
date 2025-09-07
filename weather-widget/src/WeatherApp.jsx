import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    tempMin: 25.05,
    tempMax: 25.05,
    feelsLike: 24.84,
    temp: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App by Umesh Bingi</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
};

export default WeatherApp;
