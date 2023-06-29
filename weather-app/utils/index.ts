import axios from "axios";

const APP_ID = "cf26e7b2c25b5acd18ed5c3e836fb235";

export const findCity = (cityName: string) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}&units=metric&lang=vi`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching city:", error);
      throw error;
    });
};

export const getListCities = () => {
  return axios
    .get(`https://provinces.open-api.vn/api/`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching city:", error);
      throw error;
    });
};
