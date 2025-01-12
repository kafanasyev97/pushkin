const Button = ({ title, className }) => {
  const classes = `button ${className}`
  return <button className={classes}>{title}</button>
}

export default Button
