import styles from './Wind.module.scss';
import { IconWind } from '@/shared/assets/icons';
import { WeatherBlock } from '@/shared/ui';

interface Props {
  speed: number;
  gusts: number;
  deg: number;
}

export const Wind = ({ speed, gusts, deg }: Props) => {
  return (
    <WeatherBlock icon={<IconWind />} title='WIND'>
      <div className={`${styles.list}`}>
        <div className={`${styles.listItem}`}>
          <div className={`${styles.listItem__name}`}>Speed</div>
          <div className={`${styles.listItem__value}`}>
            {Math.round(speed)} m/s
          </div>
        </div>
        <div className={`${styles.divider}`} />

        <div className={`${styles.listItem}`}>
          <div className={`${styles.listItem__name}`}>Gusts</div>
          <div className={`${styles.listItem__value}`}>
            {Math.round(gusts)} m/s
          </div>
        </div>
        <div className={`${styles.divider}`} />

        <div className={`${styles.listItem}`}>
          <div className={`${styles.listItem__name}`}>Direction</div>
          <div className={`${styles.listItem__value}`}>{deg}°</div>
        </div>
      </div>
    </WeatherBlock>
  );
};
