import React, { useState } from 'react'//React import
import axios from 'axios'//axios import
import chennaiweather from '../css/Chennaiweather.module.css'//css for styling
import { useEffect } from 'react'//use effect hook 
import { WEATHER_API_KEY, WEATHER_API_URL } from './Weatherapi/api'//api 
import { useNavigate } from 'react-router-dom'//router import

function Weather() {//react functional component
  const [temp, settemp] = useState([]) //usestate for setting the value to variable
  const [humidity, sethumidity] = useState([]) //usestate for setting the value to variable
  const [pressure, setpressure] = useState([]) //usestate for setting the value to variable
  const [feelsLike, setfeelsLike] = useState([]) //usestate for setting the value to variable
  const [weatherdesc, setweatherdesc] = useState([]) //usestate for setting the value to variable
  const [clicked, setclicked] = useState(false) //usestate for setting the value to variable
  const [iconstate, seticonstate] = useState([]) //usestate for setting the value to variable

  const lat = 17.387140//latitude of hyderabad
  const lon = 78.491684//longitude of hyderabad
  const Fertocel = ({ temp }) => {//arrow function for convertion of farenheit to celcious
    return Math.round((((temp - 32) * 5 / 9)))//formula for convertion


  }

  const ConvertFeelsLike = ({ feelsLike }) => {//arrow function for convertion of farenheit to celcious
    return Math.round((((feelsLike - 32) * 5 / 9)))//formula for convertion
  }
  const clickHandler = () => {//handler
    if (clicked) {
      setclicked(false)

    }
    else {
      setclicked(true)
    }
  }

  useEffect(() => {//use effect hook
    setTimeout(() => {//timeout timer with timing delay of 1000ms
      console.log(`lat=${lat}`)
      console.log(`lon=${lon}`)
      axios.get(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)
        .then(res => {

          console.log(res)
          settemp(Math.round(res.data.main.temp)) //usestate for setting the value to variable
          sethumidity(res.data.main.humidity) //usestate for setting the value to variable
          setpressure(res.data.main.pressure) //usestate for setting the value to variable
          setfeelsLike(res.data.main.feels_like) //usestate for setting the value to variable
          setweatherdesc(res.data.weather[0].description) //usestate for setting the value to variable
          seticonstate(res.data.weather[0].icon) //usestate for setting the value to variable
        })
        .catch(err => {
          console.log(err)
        })
    }, 1000);
  }, []); 

  return (//front end code
    <div className={chennaiweather.body}>
      <div className={chennaiweather.current_weather_display}>
        <table>
          <tbody>
            <tr>
              <td className={chennaiweather.one} style={{ width: "6.25rem", paddingRight: "3.125rem", fontSize: "1.8125rem", marginRight: "0px" }}>
                {clicked ? (<p style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}><Fertocel temp={temp} />°C</p>) : (<p>{temp}°F</p>)}
                <p>{weatherdesc}</p>
              </td>
              <td style={{ paddingRight: "1.875rem" }}><button className={chennaiweather.temp_button}  style={{fontSize:"1.25rem"}}onClick={clickHandler}>{clicked ? (<>Show in °F</>) : (<>Show in °C</>)}</button></td>
              <td>
                <img style={{height:"6.25rem",width:"6.25rem"}}src={`/icons/${iconstate}.png`} className='weather-icon' alt='loading......' />
              </td>
            </tr>
            <tr>
              <td >
                <p style={{ width: "9.375rem" }}><label>Pressure:</label><br></br><br></br>{pressure} bars</p>
              </td>
              <td >
                <p style={{ width: "7.5rem" }}><label>Humidity:</label><br></br><br></br>{humidity} %</p>
              </td>
              <td>
                <p><label>Feels Like:</label>{clicked ? (<p ><ConvertFeelsLike feelsLike={feelsLike} />°C</p>) : (<p>{feelsLike}°F</p>)}</p>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
      <br>
      </br>
      <br>
      </br>
    </div>)
}
export default Weather
