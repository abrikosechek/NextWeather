import styles from './WeatherInfo.module.scss';
import React from 'react';
import { IconSun } from '@/shared/assets/icons';
import { CurrentWeather } from '@/features/currentWeather';
import { WeatherForecast } from '@/features/weatherForecast';
import { Wind } from '@/features/wind';
import { FeelsLike } from '@/features/feelsLike';
import { WeatherBlock } from '@/shared/ui';
import {
  ICurrentWeather,
  IWeatherForecast,
} from '@/shared/model/weather.types';

const EmptyWeatherBlock = () => {
  return (
    <WeatherBlock title='EMPTY' icon={<IconSun />}>
      <div style={{ height: 200 }} />
    </WeatherBlock>
  );
};

interface Props {
  city: string;
  current: ICurrentWeather;
  forecast: IWeatherForecast;
}

export const WeatherInfo = React.memo(function WeatherInfo({
  city,
  current,
  forecast,
}: Props) {
  return (
    <>
      <main className={`${styles.main} `}>
        <CurrentWeather
          city={city}
          temp={current.main.temp_max}
          icon={current.weather[0].icon}
        />
        <WeatherForecast forecastList={forecast.list} />
        <div className={`${styles.main__group}`}>
          <Wind
            speed={current.wind.speed}
            gusts={current.wind.gust}
            deg={current.wind.deg}
          />
          <FeelsLike temp={current.main.feels_like} />
        </div>

        <EmptyWeatherBlock />
        <EmptyWeatherBlock />
        <div className={`${styles.main__group}`}>
          <EmptyWeatherBlock />
          <EmptyWeatherBlock />
        </div>
        <EmptyWeatherBlock />
      </main>
    </>
  );
});
