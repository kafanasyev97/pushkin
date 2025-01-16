import { useState } from 'react'

const Card = ({ title, text }) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = (e) => {
    setIsActive((prevState) => !prevState)
  }
  return (
    <div
      onClick={handleClick}
      className={`card ${isActive ? 'card--active' : ''}`}
    >
      <div className="card__title">{title}</div>
      <div className="card__text">{text}</div>
    </div>
  )
}

export default Card
