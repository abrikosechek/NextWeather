import styles from './FeelsLike.module.scss';
import { IconThermometer } from '@/shared/assets/icons';
import { textDegrees } from '@/shared/utils/textDegrees';
import { WeatherBlock } from '@/shared/ui';

interface Props {
  temp: number;
}

export const FeelsLike = ({ temp }: Props) => {
  return (
    <WeatherBlock icon={<IconThermometer />} title='FEELS LIKE'>
      <div className={`${styles.feelsLike}`}>{textDegrees(temp)}</div>
    </WeatherBlock>
  );
};
