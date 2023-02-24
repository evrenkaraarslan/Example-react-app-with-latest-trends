import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InferThunkActionCreatorType } from 'react-redux'
import { getWeather } from '../../services/weatherAPI'
import { mapperWeatherResult } from '../../utils/mappers/weatherResult.mapper'
import { initialState, WeatherInfoTypes, WeatherStateTypes } from './types'

export const addWeatherAsync = createAsyncThunk('weather/getWeather', async (value: string) => {
  const response = await getWeather(value)
  const responseMapped = mapperWeatherResult(response.data)
  return responseMapped
})

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addWeather: (state: WeatherStateTypes, action: PayloadAction<WeatherInfoTypes>) => {
      state.weatherInfoAll.push(action.payload)
    },
    removeWeather: (state: WeatherStateTypes, action: PayloadAction<number>) => {
      state.weatherInfoAll = state.weatherInfoAll.filter((weather) => weather.id !== action.payload)
    },
    currentWeatherInfo: (state: WeatherStateTypes, action: PayloadAction<WeatherInfoTypes>) => {
      state.weatherInfoCurrent = action.payload
    }
  },
  extraReducers: (builder: InferThunkActionCreatorType<any>) => {
    builder
      .addCase(addWeatherAsync.pending, (state: WeatherStateTypes) => {
        state.status = 'loading'
      })
      .addCase(
        addWeatherAsync.fulfilled,
        (state: WeatherStateTypes, action: PayloadAction<WeatherInfoTypes>) => {
          state.status = 'idle'
          state.weatherInfoCurrent = action.payload
        }
      )
      .addCase(addWeatherAsync.rejected, (state: WeatherStateTypes) => {
        state.status = 'failed'
      })
  }
})

export const { addWeather, removeWeather, currentWeatherInfo } = weatherSlice.actions

export default weatherSlice.reducer
