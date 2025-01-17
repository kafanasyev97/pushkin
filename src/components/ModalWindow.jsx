import axios from 'axios'
import { useState } from 'react'

const ModalWindow = ({ closeModal, fetchCards }) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const addNewCard = async () => {
    const url = 'http://localhost:3000/cards/'

    axios.post(url, {
      title,
      text,
    })
    closeModal()
    fetchCards()
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
