import React, { ChangeEvent, useEffect, useState } from 'react';

import styles from './DisplayCard.module.css'

export interface IDisplayCardProps {
}

export default function DisplayCard (props: IDisplayCardProps) {
  const [cityInputValue, setCityInputValue] = useState('')
  const [weatherData, setWeatherData] = useState<any>(null)

  const handleChange = ((event : ChangeEvent<HTMLInputElement>) => {
      setCityInputValue(event.target.value)
  })

  useEffect(() => {
    if (weatherData) {
      console.log(weatherData)
      console.log(weatherData.main.temp)
      console.log(weatherData.weather[0].icon)
    }
  }, [weatherData])

  async function fetchAPI () : Promise<void> {
    if (cityInputValue) {
      const url = 'https://api.openweathermap.org/data/2.5/weather?'
      + `q=${cityInputValue}`
      + '&appid=f7a789f4778e31cd5ab2e2754b0d7406'      
      + '&units=metric'

      const response = await fetch(url)
      const data = await response.json()
      setWeatherData(data)
    }
  }

  return (
    <div className={styles.flexCard}>
      <div className={styles.Card}>
        <div>
            <input className={styles.searchInput} type={'text'}
            placeholder={'Search for a city...'}
            value={cityInputValue}
            onChange={handleChange}
            ></input><i className={"bi bi-search " + styles.searchButton}
              onClick={fetchAPI}
            />
        </div>
        <h1 className={styles.textLeft + ' ' + styles.title}>
            {weatherData !== null ? 'Weather in ' + weatherData.name : 'Search for a city to see it data'}
        </h1>
        <h2 className={styles.centralize + ' ' + styles.weather}>
            {weatherData !== null ? weatherData.main.temp + ' °C' : ''}
        </h2>
        <div className={styles.sideInformations}>
          <div>
            <i className={"bi bi-droplet-fill " + styles.dropIcon}></i>
          </div>
          <div>
            {weatherData && <img src={'https://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '.png'}/>}
          </div>
        </div>
      </div>
    </div>
  );
}
