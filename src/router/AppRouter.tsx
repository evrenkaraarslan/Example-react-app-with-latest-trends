import { Routes, Route } from 'react-router-dom'
import { PageUrlTypes } from '../enums/pageUrl.enum'
import NotFound from '../components/pages/not-found/NotFound'
import WeatherAll from '../components/pages/weather-all/WeatherAll'
import Home from '../components/pages/home/Home'

const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path={PageUrlTypes.HOME} element={<Home />} />
      <Route path={PageUrlTypes.ALL} element={<WeatherAll />} />
      <Route path={PageUrlTypes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  )
}
export default AppRouter
