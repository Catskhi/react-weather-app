import React, { useEffect, useState } from 'react';
import SearchInput from './SearchInput';

import styles from './DisplayCard.module.css'

export interface IDisplayCardProps {
}

export default function DisplayCard (props: IDisplayCardProps) {
  const [cityInputValue, setCityInputValue] = useState('')
  const [weatherData, setWeatherData] = useState<any>(null)
  
  useEffect(() => {
    if (weatherData) {
      console.log('The data about the city:')
      console.log(weatherData)
    }
  }, [weatherData])

  async function fetchAPI () : Promise<void> {
    if (cityInputValue) {
      const url = 'https://api.openweathermap.org/data/2.5/weather?'
      + `q=${cityInputValue}`
      + '&appid=f7a789f4778e31cd5ab2e2754b0d7406'      
      + '&units=metric'

      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        setWeatherData(data)
      } else {
        alert('Invalid city name!')
      }
    }
  }

  return (
    <div className={styles.centerCard}>
      <div className={styles.Card}>
        <SearchInput cityInputValue={cityInputValue}
          setCityInputValue={setCityInputValue}
          fetchAPI={fetchAPI}
        />
        <h1 className={styles.textLeft + ' ' + styles.title}>
            {weatherData !== null ? 'Weather in ' + weatherData.name : 'Search for a location to see it weather'}
        </h1>
        <h2 className={styles.centralize + ' ' + styles.weather}>
            {weatherData !== null ? weatherData.main.temp + ' °C' : ''}
        </h2>
        {weatherData && <div className={styles.sideInformations}>
            <div className={styles.weatherInfo}>
              <img alt='weatherIcon'
              className={styles.weatherIcon}
              src={'https://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '.png'}/>{weatherData.weather[0].description}
            </div>
            <div className={styles.weatherInfo}>
              <i className={"bi bi-droplet-fill " + styles.dropIcon}/>{weatherData.main.humidity}%
            </div>
            <div className={styles.weatherInfo}>
              <i className={"bi bi-wind " + styles.windIcon}></i>{weatherData.wind.speed}km/h
            </div>
        </div>}
      </div>
    </div>
  );
}
