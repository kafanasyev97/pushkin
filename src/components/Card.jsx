import { useState } from 'react'

const Card = ({ id, title, text, selectCard }) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive((prevState) => !prevState)
    selectCard((prev) => {
      if (prev.includes(id)) {
        const result = prev.filter((elem) => elem !== id)
        return result
      }
      return [...prev, id]
    })
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
