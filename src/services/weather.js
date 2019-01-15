import axios from 'axios'

export default {
  getCurrentWeather: async () => {
    let w = (await axios.get('http://api.openweathermap.org/data/2.5/weather?zip=32828&units=imperial&appid=001389fd8ab9290db774f7ece3ec3a07')).data
    
    let weather = {
      temp: w.main.temp,
      description: w.weather[0].description
    }

    return weather
  }
}