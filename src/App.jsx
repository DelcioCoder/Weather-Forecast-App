import './App.css'
import { useState } from "react";
import axios from "axios";
import WeatherInformation from "./components/WeatherInformation";

/*
api with the city name
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
*/

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const cityCapture = (event) => {
    setCityName(event.target.value);
  };

  const searchCity = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=pt_br&appid=17dba6d5bb57ca809890515f2bafb287&units=metric`
      )
      .then((resp) => {
        setWeatherData(resp.data);
        setError(null);// reset the error when call is well done
        console.log(resp.data);
      })
      .catch((error) => {
        setError("There was an error fetching the weather data.");
        console.error("There was an error fetching the weather data:", error);
      });
  };

  return (
    <>
    <div className="main">
      <div className="title">

          <h1>Weather Forecast</h1>
      </div>
     

      <div className="container">

          <input
            type="text"
            onChange={cityCapture}
            placeholder="Digite o nome da cidade.."
          />
          <button onClick={searchCity}>Buscar</button>

        </div>

        {weatherData && <WeatherInformation error={error} weatherData={weatherData}/>}
     
     

    </div>
      

     
      
    </>
  );
}

export default App;
