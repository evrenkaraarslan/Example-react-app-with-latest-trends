import { SyntheticEvent, useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { addWeatherAsync } from '../../redux/weather/slice'
import './Search.scss'

const Search = (): JSX.Element => {
  const [searchParam, setSearchParam] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(addWeatherAsync(searchParam))
  }

  const handleChange = (value: string) => {
    setSearchParam(value)
  }

  return (
    <div className="searchMain">
      <form className="formMain" onSubmit={handleSubmit}>
        <input
          className="searchBar"
          placeholder="Insert a country or city"
          value={searchParam}
          onChange={(e) => handleChange(e.target.value)}
        />
        <input className="inputSubmit" type="submit" value="Search" />
      </form>
    </div>
  )
}

export default Search
