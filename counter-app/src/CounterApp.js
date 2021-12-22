import { useState } from 'react'
import './counterApp.css'

const CounterApp = ({value}) => {

  const [ counter , setCounter ] = useState( 0 )

  const handleAdd = () => {
    setCounter (counter + 1)
  }

  const handleSustract = () => {
    setCounter ( counter - 1)
  }

  const handleReset = () => {
    setCounter ( value)
  }

  return(
    <div className='contenedor'>
      <h1>Counter - App</h1>
      <p>{ counter }</p>
      <div className="botonera">
        <button onClick={ handleSustract }>-1</button>
        <button onClick={ handleReset }>Reset</button>
        <button onClick={ handleAdd } 
        >+1</button>
      </div>
    </div>
  )
}

export default CounterApp