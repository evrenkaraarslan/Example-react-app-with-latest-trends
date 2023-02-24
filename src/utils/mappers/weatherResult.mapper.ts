import { WeatherInfoTypes } from '../../redux/weather/types'
import { WeatherResultsTypes } from '../../types/weather-result.types'

export const mapperWeatherResult = (weatherResult: WeatherResultsTypes): WeatherInfoTypes => {
  const { id, weather, main, name } = weatherResult
  const { description } = weather[0]
  const { temp_min, temp_max, humidity } = main

  return {
    id: id,
    name: name,
    description: description,
    temp_min: temp_min,
    temp_max: temp_max,
    humidity: humidity
  }
}
