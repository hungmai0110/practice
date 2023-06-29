"use client";
import React, { useState } from "react";
import moment from "moment";
import Image from "next/image";
import { findCity, getListCities } from "@/utils";

const WeatherDetails = () => {
  interface SearchResult {
    coord: {
      lon: number;
      lat: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
    main: {
      temp: number;
      //   feels_like: number;
      //   temp_min: number;
      //   temp_max: number;
      //   pressure: number;
      humidity: number;
    };
    wind: {
      speed: number;
      //   deg: number;
      //   gust: number;
    };
    sys: {
      sunrise: number;
      sunset: number;
    };
    name: string;
  }

  const [searchInputValue, setSearchInputValue] = useState("");
  const [listResultCities, setListResultCities] = useState<string[]>([]);
  const [seachResult, setSearchResult] = useState<SearchResult>({
    coord: {
      lon: 10,
      lat: 10,
    },
    weather: [
      {
        description: "hi",
        icon: "hi",
      },
    ],
    main: {
      temp: 10,
      humidity: 10,
    },
    wind: {
      speed: 10,
    },
    sys: {
      sunrise: 10,
      sunset: 10,
    },
    name: "Ha Noi",
  });

  const handleOnChange = async (event: any) => {
    setSearchInputValue(event.target.value);

    const result = await getListCities();
    const listAllCities = result.map((item: any) => item.name);

    const filterCities =
      searchInputValue === ""
        ? listAllCities
        : listAllCities.filter((item: string) =>
            item
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(searchInputValue.toLowerCase().replace(/\s+/g, ""))
          );

    setListResultCities(filterCities);
  };
  console.log(listResultCities);

  const handleKeyDown = async (event: any) => {
    if (event.key === "Enter") {
      const result = await findCity(searchInputValue);
      setSearchResult(result);
    }
  };

  return (
    <div className="weather-details">
      <div className="main-section">
        <div className="search-bar">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            name="search-city"
            value={searchInputValue}
            id="search-input"
            placeholder="Tìm kiếm thành phố..."
            onKeyDown={handleKeyDown}
            onChange={handleOnChange}
          />
        </div>
        <ul className="search-result">
          {listResultCities.map((name, index) => (
            <li key={index} onClick={() => setSearchInputValue(name)}>
              {name}
            </li>
          ))}
        </ul>

        <div className="info-wrapper">
          <p className="city-name">{seachResult.name}</p>
          <p className="weather-state">{seachResult?.weather[0].description}</p>
          <Image
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="weather icon"
            className="weather-icon"
            width={70}
            height={70}
          />
          <p className="temperature">{Math.round(seachResult.main.temp)}</p>
        </div>
      </div>
      <div className="additional-section">
        <div className="row">
          <div className="item">
            <div className="label">MT Mọc</div>
            <div className="value sunrise">
              {moment.unix(seachResult.sys.sunrise).format("H:mm")}
            </div>
          </div>
          <div className="item">
            <div className="label">MT Lặn</div>
            <div className="value sunset">
              {moment.unix(seachResult.sys.sunset).format("H:mm")}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="item">
            <div className="label">Độ ẩm</div>
            <div className="value">
              <span className="humidity">{seachResult.main.humidity}</span>%
            </div>
          </div>
          <div className="item">
            <div className="label">Gió</div>
            <div className="value">
              <span className="wind-speed">
                {(seachResult.wind.speed * 3.6).toFixed(2)}
              </span>{" "}
              km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
