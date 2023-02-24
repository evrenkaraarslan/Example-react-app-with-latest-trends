import './CardWeather.scss'
import { WeatherInfoTypes } from '../../redux/weather/types'
import Button from '../button/Button.component'

type CardWeatherProps = {
  onClick: (weather: WeatherInfoTypes) => void
  weather: WeatherInfoTypes
  buttonLabel: string
  className?: string
  testId?: string
}

const CardWeather = ({
  onClick,
  weather,
  buttonLabel,
  className = '',
  testId = 'cardWeatherId'
}: CardWeatherProps): JSX.Element => {
  const { name, description, temp_min, temp_max, humidity } = weather
  
  const handleClick = (): void => {
    onClick(weather)
  }

  return (
    <div className={`cardMain ${className}`} data-testid={testId}>
      <p>Name: {name}</p>
      <p>Desciption: {description}</p>
      <p>Humidity: {humidity}</p>
      <p>Min tempature: {temp_min}</p>
      <p>Max tempature: {temp_max}</p>
      <Button label={buttonLabel} onClick={handleClick} />
    </div>
  )
}

export default CardWeather