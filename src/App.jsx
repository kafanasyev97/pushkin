import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/UI/Button'
import ModalWindow from './components/ModalWindow'
import axios from 'axios'

function App() {
  const [cards, setCards] = useState([])
  const [selectedCards, setSelectedCards] = useState([])
  const [isModal, setIsModal] = useState(false)
  console.log('22', selectedCards)

  const fetchCards = async () => {
    const url = 'http://localhost:3000/cards'

    const response = await axios.get(url)

    const result = await response.data
    setCards(result)
  }
  useEffect(() => {
    fetchCards()
  }, [])

  const toggleModal = useCallback(() => {
    setIsModal((modal) => !modal)
  }, [])

  const selectCardHandler = useCallback((id) => {
    setSelectedCards((prev) => {
      if (prev.includes(id)) {
        const result = prev.filter((elem) => elem !== id)
        return result
      }
      return [...prev, id]
    })
  }, [])

  const removeCards = useCallback(async () => {
    const url = 'http://localhost:3000/cards'
    await axios.delete(url, {
      data: selectedCards,
    })
    fetchCards()
    setSelectedCards([])
  }, [selectedCards])

  return (
    <>
      <div className="header">
        <Button
          handleClick={toggleModal}
          title="Добавить"
          className="button--left"
        />
        <Button
          disabled={selectedCards.length ? false : true}
          handleClick={removeCards}
          title="Удалить"
          className="button--right"
        />
      </div>
      <div className="container">
        {cards.length
          ? cards.map((elem) => {
              return (
                <Card
                  key={elem.id}
                  id={elem.id}
                  title={elem.title}
                  text={elem.text}
                  selectCard={selectCardHandler}
                />
              )
            })
          : null}
        {isModal ? (
          <ModalWindow fetchCards={fetchCards} closeModal={toggleModal} />
        ) : null}
      </div>
    </>
  )
}

export default App
