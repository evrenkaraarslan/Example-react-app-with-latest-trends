export type WeatherInfoTypes = {
  id: number
  name: string
  description: string
  temp_min: number
  temp_max: number
  humidity: number
}

export type WeatherStateTypes = {
  weatherInfoAll: WeatherInfoTypes[]
  weatherInfoCurrent: WeatherInfoTypes
  status: 'idle' | 'loading' | 'failed'
}

export const initialState: WeatherStateTypes = {
  weatherInfoAll: [],
  weatherInfoCurrent: {} as WeatherInfoTypes,
  status: 'idle'
}
