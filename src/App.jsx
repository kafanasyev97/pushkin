import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/UI/Button'
import ModalWindow from './components/ModalWindow'
import axios from 'axios'

function App() {
  const [cards, setCards] = useState([])
  const [isModal, setIsModal] = useState(false)

  const fetchCards = async () => {
    const url = 'http://localhost:3000/cards'
    const response = await axios.get(url)

    const result = await response.data
    setCards(result)
  }
  useEffect(() => {
    fetchCards()
  }, [])

  const toggleModal = () => {
    setIsModal((modal) => !modal)
  }
  return (
    <>
      <div className="header">
        <Button
          onClick={toggleModal}
          title="Добавить"
          className="button--left"
        />
        <Button title="Удалить" className="button--right" />
      </div>
      <div className="container">
        {cards.length
          ? cards.map((elem) => {
              return <Card key={elem.id} title={elem.title} text={elem.text} />
            })
          : null}
        {isModal ? <ModalWindow closeModal={toggleModal} /> : null}
      </div>
    </>
  )
}

export default App
