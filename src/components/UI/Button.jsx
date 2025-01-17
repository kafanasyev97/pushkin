const Button = ({ handleClick, title, className, disabled }) => {
  const classes = `button ${className}`
  return (
    <button disabled={disabled} onClick={handleClick} className={classes}>
      {title}
    </button>
  )
}

export default Button
