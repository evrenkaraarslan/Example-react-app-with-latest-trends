import axios from 'axios'
import { baseUrl, getWeatherUrl } from './url'

export function getWeather(param: string) {
  return axios({ method: 'get', url: getWeatherUrl(param), baseURL: baseUrl })
}
