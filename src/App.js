import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import ToDo from './components/ToDo/ToDo'
import Categories from './components/Categories/Categories'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'
import Footer from './components/Footer'
import Login from './components/Login/Login'


export default function App() {
  return (
    <div className="App">

      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<ToDo />} />
          <Route path='/todo' element={<ToDo />} />
          <Route path='/categories' element={<Categories/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </Router>
      
      <Footer />
    </div>
  )
}
