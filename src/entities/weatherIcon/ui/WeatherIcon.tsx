import styles from './WeatherIcon.module.scss';
import Image from 'next/image';

interface Props {
  iconCode: string;
}

export const WeatherIcon = ({ iconCode }: Props) => {
  return (
    <div className={styles.weatherIcon}>
      <div className={styles.weatherIcon__inner}>
        <Image
          src={`http://openweathermap.org/img/wn/${iconCode}@4x.png`}
          alt='weather'
          fill={true}
        />
      </div>
    </div>
  );
};
