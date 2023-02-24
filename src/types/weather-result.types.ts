export type WeatherType = {
  id: number
  main: string
  description: string
  icon: string
}

export type MainType = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level?: number
  grnd_level?: number
}

export type SysType = {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

export type WeatherResultsTypes = {
  coord: {
    lon: number
    lat: number
  }
  weather: WeatherType[]
  base: string
  main: MainType
  visibility: number
  wind: {
    speed: number
    deg: number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: SysType
  timezone: number
  id: number
  name: string
  cod: number
}
