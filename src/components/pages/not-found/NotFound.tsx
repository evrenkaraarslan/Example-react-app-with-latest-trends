import { useNavigate } from 'react-router-dom'
import Button from '../../../commons/button/Button.component'
import { PageUrlTypes } from '../../../enums/pageUrl.enum'

const NotFound = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className="notFoundMain">
      <h1>Page not found</h1>
      <Button label={'Go to home'} onClick={() => navigate(PageUrlTypes.HOME)} />
    </div>
  )
}

export default NotFound
