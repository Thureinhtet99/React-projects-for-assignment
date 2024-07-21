import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CardComponent from "../Card/CardComponent";
import Clock from "react-clock";
import axios from "axios";

const ContainerComponent = () => {
  // useState
  const [apiKey, setApiKey] = useState("f65706d4444f05dddd2991d92f409db0");
  const [weatherData, setWeatherData] = useState({});
  const [cityName, setCityName] = useState("Yangon");
  const [loading, setLoading] = useState(false);
  const [noCity, setNoCity] = useState(false);
  const [clock, setClock] = useState(new Date());

  // useRef
  const cityNameRef = useRef("");

  function fetchWeatherData() {
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
      )
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  function submitCityData(event) {
    event.preventDefault();
    setCityName(cityNameRef.current.value);
  }

  // useEffect
  useEffect(() => {
    // Fetch Weather Data
    fetchWeatherData();

    // Clock
    const interval = setInterval(() => setClock(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [cityName]);

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", backgroundColor: "#f2f0f0" }}
      >
        <div className="card shadow border-0" style={{ width: "40rem" }}>
          <div className="card-body">
            <form onSubmit={submitCityData}>
              <div className="d-flex align-items-center">
                <input
                  type="search"
                  className="form-control border-top-0 border-end-0 border-start-0"
                  placeholder="Enter A Country"
                  ref={cityNameRef}
                />
                <button type="submit" className="btn ms-3 py-1 border">
                  <SearchIcon className="fs-2 mx-2" />
                </button>
              </div>
            </form>

            {loading ? (
              <div className="d-flex justify-content-center align-items-center my-5">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              weatherData.main && (
                <div>
                  <div className="d-flex justify-content-evenly align-items-center py-5">
                    <img
                      src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                      alt={`${weatherData.weather[0].main}`}
                      className="w-50 object-fit-cover"
                    />
                    <div>
                      <div>
                        <Clock value={clock} />
                      </div>
                      <h3 className="card-title text-center text-capitalize">
                        {weatherData.name}, {weatherData.sys.country}
                      </h3>
                      <h2
                        className="card-title text-center"
                        style={{ fontSize: "5rem" }}
                      >
                        {(weatherData.main.temp - 273.15).toFixed(2)}°
                        <span>C</span>
                      </h2>
                      <h5 className="card-subtitle text-center text-body-secondary">
                        {weatherData.weather[0].main}
                      </h5>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <CardComponent
                      iconName="wind"
                      value={weatherData.wind.speed}
                      unit="km/h"
                    />
                    <CardComponent
                      iconName="droplet"
                      value={weatherData.main.humidity}
                      unit="%"
                    />
                    <CardComponent iconName="cloud-rain" value={35} unit="%" />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerComponent;
