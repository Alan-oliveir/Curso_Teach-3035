import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logoCurso from './assets/logo-curso.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Contador com React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <img src={logoCurso} alt="Logo do curso" style={{ width: '50px' }} />
      <p className="read-the-docs">
        Frontend com Typescript e React - Módulo 2. <br />
        Tarefa 1: Crie um contador utilizando o React.
      </p>
    </>
  )
}

export default App
