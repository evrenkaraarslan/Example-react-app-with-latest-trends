import { screen, render, fireEvent } from '@testing-library/react'
import Button from '../commons/button/Button.component'

describe('Button render', () => {
  it('Should render button component onto the screen', () => {
    render(<Button label="Testt" onClick={() => {}} />)
    expect(screen.getByTestId('buttonId')).toBeInTheDocument()
  })
})

describe('Button click', () => {
  it('Should call the onClick function when the button is clicked', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(<Button label="Click" onClick={handleClick} />)
    const button = getByTestId('buttonId')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalled()
  })
})

describe('Button label', () => {
  it('Should display passed label props', () => {
    const { getByTestId } = render(<Button label="Click!!!" onClick={() => {}} />)
    const button = getByTestId('buttonId')
    expect(button.textContent).toBe('Click!!!')
  })
})

export {}
