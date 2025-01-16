import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/UI/Button'

function App() {
  const [cards, setCards] = useState([])

  const fetchCards = async () => {
    const url = 'http://localhost:3000/cards'
    const response = await fetch(url)
    const result = await response.json()
    setCards(result)
  }
  useEffect(() => {
    fetchCards()
  }, [])
  return (
    <>
      <div className="header">
        <Button title="Добавить" className="button--left" />
        <Button title="Удалить" className="button--right" />
      </div>
      <div className="container">
        {cards.length
          ? cards.map((elem) => {
              return <Card key={elem.id} title={elem.title} text={elem.text} />
            })
          : null}
      </div>
    </>
  )
}

export default App
