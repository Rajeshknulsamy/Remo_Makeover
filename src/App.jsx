import { useState } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div className='sm:text-left text-black md:text-green-400'>
      hey remo this is a  makeover project i do something different in doing that project because of this is a my 1st time effort of in this projects
    </div>
    <div>
      vicky
    </div>
    </>
  )
}

export default App
