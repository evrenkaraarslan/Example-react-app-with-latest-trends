import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import Home from '../components/pages/home/Home'
import { initialStateFailed, initialStateIdle, weatherDataMapped } from '../redux/weather/mock'

const mockStore = configureMockStore()

describe('Home no result', () => {
  const store = mockStore(initialStateFailed)
  it('Should render message when status is failed', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    )

    expect(getByTestId('noResult')).toBeInTheDocument()
  })
})

describe('Home exist result', () => {
  const store = mockStore(initialStateIdle)
  it('Should render weather card when status is idle', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    )

    expect(getByTestId('cardWeatherId')).toBeInTheDocument()
  })
})
