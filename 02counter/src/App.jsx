import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  const [error, seterror] = useState("")

  

  const addValue = () => {
    if(counter <20){
      setCounter(counter + 1)
      
    }else{
      seterror("Maximum limit reached");
      
    }
    
    
  }

  const removeValue = () => {
    if(counter >= 1){
      setCounter(counter - 1)
      
    }else{
      seterror("Minimum limit reached");
     
    }
    
   
  }

  return (
    <>
      <h1>Welcome to React</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <p>Result : {counter}</p>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  )
}

export default App
