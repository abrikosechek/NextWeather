import styles from './WeatherForecast.module.scss';
import containerStyles from '@/shared/styles/containers.module.scss';
import React from 'react';
import { IWeatherForecastItem } from '@/shared/model/weather.types';
import { ForecastItem } from './ForecastItem';

interface Props {
  forecastList: IWeatherForecastItem[];
}

export const WeatherForecast = React.memo(function WeatherForecast({
  forecastList,
}: Props) {
  return (
    <div
      className={`${styles.weatherForecast} ${containerStyles.container}`}
      onTouchStart={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      {forecastList.map((item) => (
        <ForecastItem
          key={item.dt}
          date={item.dt_txt}
          icon={item.weather[0].icon}
          temp={item.main.temp}
        />
      ))}
    </div>
  );
});
