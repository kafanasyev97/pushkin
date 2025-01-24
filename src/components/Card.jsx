import { memo, useState } from 'react'

const Card = memo(({ id, title, text, selectCard }) => {
  const [isActive, setIsActive] = useState(false)
  console.log('9999')

  const handleClick = () => {
    setIsActive((prevState) => !prevState)
    selectCard(id)
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
})

export default Card
