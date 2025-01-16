const Button = ({ onClick, title, className }) => {
  const classes = `button ${className}`
  return (
    <button onClick={onClick} className={classes}>
      {title}
    </button>
  )
}

export default Button
