import { store } from '../../app/store'
import { addWeather, removeWeather } from './slice'
import { weatherDataMapped } from './mock'
import { WeatherInfoTypes } from './types'

describe('weather reducer', () => {
  it('Should weatherInfoCurrent initially be empty object', () => {
    const state = store.getState().weather
    expect(state.weatherInfoCurrent).toEqual({})
  }),
    it('Should weatherInfoCurrent initially be empty array', () => {
      const state = store.getState().weather
      expect(state.weatherInfoAll).toEqual([])
    }),
    test('Should add a new weather to list', () => {
      let state = store.getState().weather
      const initialWeatherCount = state.weatherInfoAll.length

      store.dispatch(addWeather(weatherDataMapped))
      state = store.getState().weather
      const newlyAddedBook = state.weatherInfoAll.find(
        (weather: WeatherInfoTypes) => weather.id === 1
      )
      expect(newlyAddedBook?.description).toBe('Best city in Italy')
      expect(newlyAddedBook?.temp_min).toBe(15)
      expect(state.weatherInfoAll.length).toBeGreaterThan(initialWeatherCount)
    })
  test('Should remove a weather from list with id', () => {
    //First adding one weather to have initial value, otherwise it will start with empty an array
    store.dispatch(addWeather(weatherDataMapped))
    let state = store.getState().weather
    const initialWeatherCount = state.weatherInfoAll.length

    store.dispatch(removeWeather(1))
    state = store.getState().weather

    expect(state.weatherInfoAll.length).toBeLessThan(initialWeatherCount)
  })
})
