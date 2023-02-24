import { useNavigate } from 'react-router-dom'
import Button from '../../commons/button/Button.component'
import { PageUrlTypes } from '../../enums/pageUrl.enum'
import './Navbar.scss'

const Navbar = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className="navbarMain">
      <h3 className="navbarTitle">Welcome to weather application</h3>
      <Button label={'See your list'} onClick={() => navigate(PageUrlTypes.ALL)} />
    </div>
  )
}

export default Navbar
