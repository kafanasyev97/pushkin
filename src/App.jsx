import './App.css'
import Card from './components/Card'
import Button from './components/UI/Button'

function App() {
  return (
    <>
      <div className="header">
        <Button title="Добавить" className="button--left" />
        <Button title="Удалить" className="button--right" />
      </div>
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App
