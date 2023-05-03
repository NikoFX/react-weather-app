import { Autocomplete, Button, IconButton, TextField, ToggleButton } from '@mui/material';
import React, { useEffect, useState } from 'react'

function App() {

  const [city, setCity] = useState('')
  const [mode, setMode] = useState(1)
  const [obj, setObj] = useState({})
  const [bgImg, setBgImg] = useState('bg-default')

  const inputHandle = (city) => {
    console.log(city);
    setCity(city)
    fetch(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}`)
      .then(res => res.json())
      .then(data => {
        setObj(data)
      })
  }

  useEffect(() => {
    const temp = obj?.current?.temp_c
    setBgImg('bg-default')

    if (obj?.current?.is_day) {
      obj?.current?.condition?.text.toLowerCase().includes("sunny") ? setBgImg('bg-sunny') : null
      obj?.current?.condition?.text.toLowerCase().includes("rain") ? setBgImg('bg-rainy') : null
      obj?.current?.condition?.text.toLowerCase().includes("snow") ? setBgImg('bg-snowly') : null
      obj?.current?.condition?.text.toLowerCase().includes("cloud") ? setBgImg('bg-cloudy') : null
    } else {
      obj?.current?.condition?.text.toLowerCase().includes("clear") ? setBgImg('bg-clear-night') : null
      obj?.current?.condition?.text.toLowerCase().includes("rain") ? setBgImg('bg-rainy-night') : null
      obj?.current?.condition?.text.toLowerCase().includes("snow") ? setBgImg('bg-snowly-night') : null
      obj?.current?.condition?.text.toLowerCase().includes("cloud") ? setBgImg('bg-cloudy-night') : null
    }

  }, [obj])

  return (
    <div className={`app ${bgImg}`}>
      <div className="container">
        <header>
          <h1 className='title'>Weather App</h1>
          <div className="input-area">
            <TextField
              onInput={(e) => inputHandle(e.target.value)}
              id="filled-basic"
              sx={{ width: '100%' }}
              label="City"
              variant="filled"
            />
            <Button
              onClick={() => setMode(!mode)}
              variant="text"
              sx={{ 'fontSize': '1.2em' }}
            >
              {!mode ? '℃' : '℉'}
            </Button>
          </div>
        </header>
        {obj.current ? (
          <div className="news">
            <h2>{obj.location.name}, {obj.location.country}</h2>
            <h3>{obj.current.condition.text}</h3>
            <h1>{mode ? (obj.current.temp_c + ' ℃') : (obj.current.temp_f + ' ℉')} </h1>
            <img className='icon' src={obj?.current?.condition?.icon} alt="icon" />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default App