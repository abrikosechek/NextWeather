import { httpClient } from "@/shared/api";
import {
  ICurrentWeather,
  IWeatherForecast,
} from "@/shared/model/weather.types";

export const weatherApi = {
  fetchCurrentWeather: () => httpClient.get<ICurrentWeather>("/current"),
  fetchWeatherForecast: () => httpClient.get<IWeatherForecast>("/forecast"),
};
