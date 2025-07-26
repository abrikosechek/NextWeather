import { httpClient } from '@/shared/api';
import {
  ICurrentWeather,
  IWeatherForecast,
} from '@/shared/model/weather.types';

export const weatherApi = {
  fetchCurrentWeather: () =>
    httpClient.get<ICurrentWeather>('/weather/current'),
  fetchWeatherForecast: () =>
    httpClient.get<IWeatherForecast>('/weather/forecast'),
};
