import './WeatherAll.scss'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import Button from '../../../commons/button/Button.component'
import CardWeather from '../../../commons/card-weather/CardWeather.component'
import { PageUrlTypes } from '../../../enums/pageUrl.enum'
import { selectWeatherInfoAll } from '../../../redux/weather/selectors'
import { removeWeather } from '../../../redux/weather/slice'
import { WeatherInfoTypes } from '../../../redux/weather/types'

const WeatherAll = (): JSX.Element => {
  const allWeathers = useAppSelector(selectWeatherInfoAll)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const redirectPageHome = (): void => {
    navigate(PageUrlTypes.HOME)
  }

  const handleRemoveWeather = (weather: WeatherInfoTypes): void => {
    dispatch(removeWeather(weather?.id))
  }

  return (
    <div className="weatherAllMain">
      <p>This is your weather list</p>
      {allWeathers?.map((weather) => (
        <CardWeather
          key={weather.id}
          buttonLabel={'Remove weather'}
          onClick={handleRemoveWeather}
          weather={weather}
          className={'cardAll'}
        />
      ))}
      {allWeathers?.length === 0 && <p>No items added to the list</p>}
      <Button className={'buttonGoBack'} label={'Go back'} onClick={redirectPageHome} />
    </div>
  )
}

export default WeatherAll
