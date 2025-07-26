import { makeAutoObservable } from 'mobx';
import { weatherApi } from '../api';
import {
  ICurrentWeather,
  IWeatherForecast,
} from '@/shared/model/weather.types';

type WeatherItem<T> =
  | {
      state: 'loading' | 'error';
      value: null | T;
    }
  | { state: 'complete'; value: T };

class Weather {
  currentWeather: WeatherItem<ICurrentWeather> = {
    state: 'loading',
    value: null,
  };
  weatherForecast: WeatherItem<IWeatherForecast> = {
    state: 'loading',
    value: null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  async getCurrentWeather() {
    try {
      const response = await weatherApi.fetchCurrentWeather();
      this.currentWeather = {
        value: response.data,
        state: 'complete',
      };
    } catch (err) {
      console.log(err);
      this.currentWeather.state = 'error';
    }
  }

  async getWeatherForecast() {
    try {
      const response = await weatherApi.fetchWeatherForecast();
      this.weatherForecast = {
        value: response.data,
        state: 'complete',
      };
    } catch (err) {
      console.log(err);
      this.currentWeather.state = 'error';
    }
  }
}

export const weatherStore = new Weather();
