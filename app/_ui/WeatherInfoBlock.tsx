'use client';

import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { WeatherInfo } from '@/widgets/WeatherInfo';
import { weatherStore } from '@/entities/weather';

export const WeatherInfoBlock = observer(() => {
  useEffect(() => {
    weatherStore.getCurrentWeather();
    weatherStore.getWeatherForecast();
  }, []);

  return (
    <>
      {weatherStore.currentWeather.state === 'complete' &&
      weatherStore.weatherForecast.state === 'complete' ? (
        <WeatherInfo
          city='Los Angeles'
          current={weatherStore.currentWeather.value}
          forecast={weatherStore.weatherForecast.value}
        />
      ) : weatherStore.currentWeather.state === 'error' ||
        weatherStore.weatherForecast.state === 'error' ? (
        <p>Error</p>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
});
