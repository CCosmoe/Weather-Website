import React, {useState} from 'react'
import axios from 'axios'
function App() {

  const [weatherData, setWeatherData] = useState('')
  const [city, setCity] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=1c9faf19201710625c32691d86f82954`


  function getWeather(event) {
    if(event.key =='Enter'){
      axios.get(url).then((response) => {
        setWeatherData(response.data)
        setCity("")
      })
    }
  }

  function getnightday() {
    
    if(weatherData.dt > weatherData.sys.sunset)
    {
      let night = typeweather(0);
      return night
    }
    else 
    {
      let day = typeweather(1);
      return day;
    }
  
  }

  function typeweather(k)
  {
    if(k == 0)
    {
      if((weatherData.weather[0].main) == "Clear")
      {
        let a = 'app night clear';
        return a
      }
      if((weatherData.weather[0].main) == "Clouds")
      {
        let b = 'app night cloudy'
        return b
      }
      if((weatherData.weather[0].main) == "Rain")
      {
        let c = 'app night rainy'
        return c
      }
      if((weatherData.weather[0].main) == "Snow")
      {
        let d = 'app night snowy'
        return d
      }
      else
      {
        let nochange = 'app'
        return nochange
      }
    }
    if (k == 1)
    {
      if((weatherData.weather[0].main) == "Clear")
      {
        let x = 'app day clear';
        return x
      }
      if((weatherData.weather[0].main) == "Clouds")
      {
        let w = 'app day cloudy'
        return w
      }
      if((weatherData.weather[0].main) == "Rain")
      {
        let y = 'app day rainy'
        return y
      }
      if((weatherData.weather[0].main) == "Snow")
      {
        let z = 'app day snowy'
        return z
      }
      else
      {
        let nochange = 'app'
        return nochange
      }
    }
  }

  return (
    <div className = {(typeof weatherData.main != "undefined") ? (getnightday()) : 'app'}>
      <div className = "search">
        <input 
        className = "input" 
        placeholder='Enter City...' 
        onChange = {e => setCity(e.target.value)}
        value = {city} 
        onKeyPress = {(event) => getWeather(event)}
        type = "text"
        />
      </div>
      <div className = "container">
        <div className = "top">
          <div className = "location">
            <p>{weatherData.name}</p>
          </div>
          <div className = "temp">
            {weatherData.main ? <h1>{weatherData.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className = "description">
            {weatherData.weather ? <p>{weatherData.weather[0].main}</p> : null}
          </div>
          
        </div>
        {weatherData.name != undefined && 
          <div className = "bottom">
            <div className = "feels">
              {weatherData.main ? <p className = 'bold'>{weatherData.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className = "humidity">
              {weatherData.main ? <p className = 'bold'>{weatherData.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className = "wind">
              {weatherData.main ? <p className = 'bold'>{weatherData.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
        
      </div>
    </div>
  );
}

export default App;
