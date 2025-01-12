import { useState } from 'react'

const Card = () => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = (e) => {
    setIsActive((prevState) => !prevState)
  }
  return (
    <div
      onClick={handleClick}
      className={`card ${isActive ? 'card--active' : ''}`}
    >
      <div className="card__title">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nisi
        dolores mollitia, hic quae nihil atque iste repellendus itaque optio!
      </div>
      <div className="card__text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
        fugit quasi ex pariatur eum quis molestiae ducimus dolore, voluptates
        eligendi consequuntur, cupiditate blanditiis? Fuga voluptatem ab eos
        ipsum voluptatibus delectus?
      </div>
    </div>
  )
}

export default Card
