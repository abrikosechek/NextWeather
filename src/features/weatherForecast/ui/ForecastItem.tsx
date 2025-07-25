import styles from './ForecastItem.module.scss';
import containerStyles from '@/shared/styles/containers.module.scss';
import { textDegrees } from '@/shared/utils/textDegrees';
import { WeatherIcon } from '@/entities/weatherIcon';

interface Props {
  date: string | number;
  icon: string;
  temp: number;
}

const getDateParts = (date: string | number) => {
  const dateObj = new Date(date);
  const userLocale = navigator.languages[0] || 'en-US';
  return {
    day: dateObj.toLocaleDateString(userLocale, {
      month: 'short',
      day: 'numeric',
    }),
    time: dateObj.toLocaleTimeString(userLocale, {
      hour: '2-digit',
      minute: '2-digit',
    }),
  };
};

export const ForecastItem = ({ date, icon, temp }: Props) => {
  const { day, time } = getDateParts(date);

  return (
    <div className={`${styles.forecastItem} ${containerStyles.blockSm}`}>
      <p className={`${styles.forecastItem__date}`}>{day}</p>
      <p className={`${styles.forecastItem__time}`}>{time}</p>
      <div className={`${styles.forecastItem__icon}`}>
        <WeatherIcon iconCode={icon} />
      </div>
      <p className={`${styles.forecastItem__degrees}`}>{textDegrees(temp)}</p>
    </div>
  );
};
