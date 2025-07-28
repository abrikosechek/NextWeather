'use client';

import containerStyles from '@/shared/styles/containers.module.scss';
import styles from './CurrentWeather.module.scss';
import { textDegrees } from '@/shared/utils/textDegrees';
import { WeatherIcon } from '@/entities/weatherIcon';

interface Props {
  city: string;
  temp: number;
  icon: string;
}

export const CurrentWeather = ({ city, temp, icon }: Props) => {
  return (
    <div className={`${styles.currentWeather} ${containerStyles.block}`}>
      <p className={`${styles.currentWeather__city}`}>{city}</p>

      <p className={`${styles.currentWeather__degrees}`}>{textDegrees(temp)}</p>

      <div className={styles.currentWeather__icon}>
        <WeatherIcon iconCode={icon} />
      </div>
    </div>
  );
};
