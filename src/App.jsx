import React from 'react'
import './index.css'
import { store } from './store/store'
import { useDispatch, useSelector } from 'react-redux'
import { increament, navigateTO } from './features/navigation/navigationSlice'

const App = () => {
  const counter = useSelector((state) => state.navigation.count)
  const dispatch=useDispatch();

  const handleIncrement=(event)=>{
    event.preventDefault();
    dispatch(increament())

  }
  const handleLinks=(event)=>{
    event.preventDefault();
    dispatch(navigateTO({type:'navigate',url:'http://localhost:5173/',uri:'https://www.google.com'}))
  }


  return (
    <div className='container'>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleLinks}>Go to another link</button>
    </div>
  )
}

export default App