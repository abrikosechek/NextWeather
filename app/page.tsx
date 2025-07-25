import containerStyles from '@/shared/styles/containers.module.scss';
import styles from './page.module.scss';
import linesDesktop from '@/shared/assets/bg-lines/lines-desktop.png';
// import linesMobile from "@/shared/assets/bg-lines/lines-mobile.png";
import Image from 'next/image';
import { WeatherInfoBlock } from './_ui/WeatherInfoBlock';

const Page = () => {
  return (
    <>
      <div className={`${styles.page} ${containerStyles.container}`}>
        <WeatherInfoBlock />
      </div>

      {/* rounds */}
      <div className={`${styles.roundsContainer} ${containerStyles.container}`}>
        <div className={`${styles.round} ${styles.r1}`} />
        <div className={`${styles.round} ${styles.r2}`} />
        <div className={`${styles.round} ${styles.r3}`} />
      </div>

      {/* bg lines */}
      <Image
        className={`${styles.linesBg}`}
        src={linesDesktop}
        alt='bg lines'
        draggable='false'
      />
    </>
  );
};

export default Page;
