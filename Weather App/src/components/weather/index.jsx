import React, { useEffect, useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=f14c5eaf1f3e483784af1567ce7986cd`
      );
      const data = await res.json();
      console.log(data, "data");
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData("Kuala Lumpur");
  }, []);

  return (
    <div className="text-center mt-[50px] m-auto w-[90%] max-w-[700px] rounded-lg h-[470px] px-[20px] py-[15px] bg-slate-300">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="flex gap-4 p-4 flex-wrap justify-center">
          <img
            className="w-20 h-20 animate-spin"
            src="https://www.svgrepo.com/show/173880/loading-arrows.svg"
            alt="Loading icon"
          />
        </div>
      ) : (
        <div className="font-bold">
          <div className="city-name mb-[10px] text-3xl">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date text-slate-500 ">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="text-6xl text-center mt-5">
            {weatherData?.main?.temp}
          </div>
          <p className="description text-slate-500 mt-5 mb-[20px]">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className="weather-info flex justify-evenly items-center mt-10 px-[20px] text-xl text-center">
            <div className="flex items-center">
              <div>
                <p className="wind text-4xl mb-5">{weatherData?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div>
              <div>
                <p className="humidity text-4xl mb-5">
                  {weatherData?.main?.humidity}%
                </p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
