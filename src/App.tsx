import './App.scss'
import Navbar from './components/navbar/Navbar'
import AppRouter from './router/AppRouter'

const App = (): JSX.Element => {
  return (
    <div className="appMain">
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
