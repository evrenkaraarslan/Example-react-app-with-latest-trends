import { render, fireEvent } from '@testing-library/react'
import CardWeather from '../commons/card-weather/CardWeather.component'
import { weatherDataMapped } from '../redux/weather/mock'

describe('CardWeather tempatures', () => {
  it('Should display the temp_min and temp_max passed in props', () => {
    const { getByText } = render(
      <CardWeather onClick={() => {}} weather={weatherDataMapped} buttonLabel="Click!!!" />
    )
    const minTemp = getByText(`Min tempature: ${weatherDataMapped.temp_min}`)
    const maxTemp = getByText(`Max tempature: ${weatherDataMapped.temp_max}`)
    expect(minTemp).toBeInTheDocument()
    expect(maxTemp).toBeInTheDocument()
  })
})

describe('CardWeather click', () => {
  it('Should call the onClick handler when the button is clicked', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <CardWeather onClick={handleClick} weather={weatherDataMapped} buttonLabel="Click me" />
    )
    const button = getByText('Click me')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledWith(weatherDataMapped)
  })
})
