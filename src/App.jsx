import { useState } from 'react'
import Card from './components/Card'
import Button from './components/UI/Button'
import ModalWindow from './components/ModalWindow'
import { useDeleteCardsMutation, useGetCardsQuery } from './services/cardsApi'

function App() {
  const { data: cards = [], isLoading } = useGetCardsQuery()
  const [deleteCards] = useDeleteCardsMutation()
  const [selectedCards, setSelectedCards] = useState([])
  const [isModal, setIsModal] = useState(false)

  const removeSelectedCards = async () => {
    await deleteCards(selectedCards)
    setSelectedCards([])
  }

  return (
    <>
      <div className="header">
        <Button
          handleClick={() => setIsModal(true)}
          title="Добавить"
          className="button--left"
        />
        <Button
          disabled={selectedCards.length ? false : true}
          handleClick={removeSelectedCards}
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
                  selectCard={setSelectedCards}
                />
              )
            })
          : null}
        {isModal ? <ModalWindow closeModal={() => setIsModal(false)} /> : null}
      </div>
    </>
  )
}

export default App
