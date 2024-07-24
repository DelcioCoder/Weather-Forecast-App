import React from 'react'
import styles from './WeatherInformation.module.css'

export default function WeatherInformation({error,weatherData}) {
    //WEATHER IMG URL:https://openweathermap.org/img/wn/${weather.weather[0].icon}.png
  return (
    <>
        <div className={styles.weather_container}>
          {error && <p>{error}</p>}
          {weatherData && (
            <>

              <h1>Weather in {weatherData.name}</h1>
              <div className={styles.image_weather_container}>

                  <div className={styles.container_child}>
                      <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="img weather" />
                      <h1>{Math.round(weatherData.main.temp)}°C</h1>

                  </div>

                  <h2>Weather: {weatherData.weather[0].description}</h2>

                

              </div>

              <div className={styles.container_information}>

                  <p>Temperature: {Math.round(weatherData.main.temp)}°C</p>
                  <p>humidity: {weatherData.main.humidity}%</p>
                  <p>pressure:{weatherData.main.pressure}hpa</p>

              </div>
           
          </>
        )}
        </div>
    </>
  )
}
