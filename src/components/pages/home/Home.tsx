import './Home.scss'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import Search from '../../search/Search'
import { selectWeather } from '../../../redux/weather/selectors'
import { addWeather, currentWeatherInfo } from '../../../redux/weather/slice'
import { isEmptyObject } from '../../../utils/emptyObject'
import CardWeather from '../../../commons/card-weather/CardWeather.component'
import { WeatherInfoTypes } from '../../../redux/weather/types'
import { StatusTypes } from '../../../enums/status.enum'
import { isObjectInArray } from '../../../utils/isObjectInArray'

export const Home = (): JSX.Element => {
  const { weatherInfoAll, weatherInfoCurrent, status } = useAppSelector(selectWeather)

  const dispatch = useAppDispatch()

  useEffect(() => {
    return () => {
      dispatch(currentWeatherInfo({} as WeatherInfoTypes))
    }
  }, [])

  const handleAddWeather = async (weather: WeatherInfoTypes) => {
    if (isObjectInArray(weather, weatherInfoAll)) {
      return alert('This card already exist in your list!')
    }
    dispatch(addWeather(weather))
    alert('Added to your list!')
  }

  const isResultValid = () => {
    return !isEmptyObject(weatherInfoCurrent) && status === StatusTypes.IDLE
  }

  return (
    <div className="homeMain" data-testid="homeMainId">
      <Search />
      {isResultValid() && (
        <CardWeather
          weather={weatherInfoCurrent}
          onClick={handleAddWeather}
          buttonLabel={'Add to list'}
        />
      )}
      {status === StatusTypes.FAILED && (
        <p data-testid={'noResult'}>
          There i s no result for this search, please do another search
        </p>
      )}
    </div>
  )
}

export default Home
