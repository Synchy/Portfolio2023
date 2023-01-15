import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './Pages/Home'
import './App.scss'


function App() {
  let element = useRoutes ([
    {path:'/', element: <Home />},
  ])
  return <div className='app-container'>{element}</div>
}

export default App
