import React from 'react'
import './index.css'
import { store } from './store/store'

const App = () => {
  console.log(store.getState())
  return (
    <div className='container'>
      <button>Go to another link</button>
    </div>
  )
}

export default App