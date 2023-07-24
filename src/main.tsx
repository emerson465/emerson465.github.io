import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import App from './App.tsx'
import './index.css'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Projects from './pages/Projects.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App />}> 
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
