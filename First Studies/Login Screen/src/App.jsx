import { React } from 'react'

import Title from './components/Title'
import Form from './components/Form'

import './App.css'

function App() {
  return (
    <div className="app">
      <div className='flex-app'>
        <Title />
        <Form />
      </div>
    </div>
  )
}

export default App