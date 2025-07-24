"use client"

import containerStyles from "@/shared/styles/containers.module.scss"
import styles from "./page.module.scss"
import linesDesktop from "@/shared/assets/bg-lines/lines-desktop.png";
// import linesMobile from "@/shared/assets/bg-lines/lines-mobile.png";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { WeatherInfo } from "@/widgets/WeatherInfo";
import { weatherStore } from "@/entities/weather";

const Page = observer(() => {
  useEffect(() => {
    weatherStore.getCurrentWeather()
    weatherStore.getWeatherForecast()
  }, [])

  return (
    <>
      <div className={`${styles.page} ${containerStyles.container}`}>
        {weatherStore.currentWeather.state === "complete" && weatherStore.weatherForecast.state === "complete" ? (
          <WeatherInfo
            city="Los Angeles"
            current={weatherStore.currentWeather.value}
            forecast={weatherStore.weatherForecast.value}
          />
        ) : weatherStore.currentWeather.state === "error" || weatherStore.weatherForecast.state === "error" ? (
          <p>Error</p>
        ) : (
          <p>Loading...</p>
        )}
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
        alt="bg lines"
        draggable="false"
      />
    </>
  )
})

export default Page 