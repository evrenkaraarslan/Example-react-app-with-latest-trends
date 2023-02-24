import './Button.scss'

type ButtonProps = {
  label: string
  onClick: () => void
  className?: string
  testId?: string
}

const Button = ({
  label,
  onClick,
  className = '',
  testId = 'buttonId'
}: ButtonProps): JSX.Element => {
  const handleClick = (): void => {
    onClick()
  }

  return (
    <button className={`buttonMain ${className}`} onClick={handleClick} data-testid={testId}>
      {label}
    </button>
  )
}

export default Button
