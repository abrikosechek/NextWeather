import containerStyles from "@/shared/styles/containers.module.scss"
import styles from "./WeatherBlock.module.scss"
import React from "react"

interface Props {
  icon: React.ReactNode
  title: string
  children?: React.ReactNode
}

export const WeatherBlock = ({ icon, title, children }: Props) => {
  return (
    <div className={`${styles.weatherBlock} ${containerStyles.block}`}>
      <div className={`${styles.weatherBlock__header}`}>
        <div className={`${styles.icon}`}>
          {icon}
        </div>
        <p className={`${styles.title}`}>
          {title}
        </p>
      </div>

      <div className={`${styles.weatherBlock__content}`}>
        {children}
      </div>
    </div>
  )
}
