import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import './App.scss'


function App() {
  let element = useRoutes ([
    {path:'/', element: <Home />},
    {path:'/about', element: <About />},
    {path:'/contact', element: <Contact />},
    {path:'/projects', element: <Projects />}
  ])
  return <div className='app-container'>{element}</div>
}

export default App
