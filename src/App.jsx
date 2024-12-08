import { useState } from 'react'
import './App.css'
import FullCard from './components/organisms/FullCard/FullCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FullCard/>
    </>
  )
}

export default App
