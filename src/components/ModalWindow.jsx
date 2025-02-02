import { useState } from 'react'
import { useAddCardMutation } from '../services/cardsApi'

const ModalWindow = ({ closeModal }) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [addCard] = useAddCardMutation()

  const addNewCard = async () => {
    if (!title || !text) return
    await addCard({ title, text })
    closeModal()
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Новая карточка</h2>
        <div className="modal-inputs">
          <input
            placeholder="Заголовок"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder="Текст"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="modal-buttons">
          <button className="modal-button-save" onClick={addNewCard}>
            Save
          </button>
          <button className="modal-button-cancel" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalWindow
