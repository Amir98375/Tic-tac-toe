import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { TicTac } from './components/tic-tac'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
          <h3>   Tic-Tac-Toe Game</h3> 
      <div className='Grid'>
  
      <TicTac/>
      </div>
    
    </div>
  )
}

export default App
