import { RootState } from '../../app/store'
import { WeatherInfoTypes, WeatherStateTypes } from './types'

export const selectWeather = (state: RootState): WeatherStateTypes => state.weather
export const selectWeatherInfoAll = (state: RootState): WeatherInfoTypes[] =>
  state.weather.weatherInfoAll
export const selectWeatherInfoCurrent = (state: RootState): WeatherInfoTypes =>
  state.weather.weatherInfoCurrent
export const selectWeatherStatus = (state: RootState): string => state.weather.status
