import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import ToDo from './components/ToDo/ToDo'
import Categories from './components/Categories/Categories'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'
import Footer from './components/Footer'
import Login from './components/Auth/Login'
import AuthProvider from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
            <Router>
                <Navigation />
                <Routes>
                  <Route path='/' element={<ProtectedRoute><ToDo /></ProtectedRoute>} />
                  <Route path='/todo' element={<ProtectedRoute><ToDo /></ProtectedRoute>} />
                  <Route path='/categories' element={<ProtectedRoute><Categories/></ProtectedRoute>} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/about' element={<About />} />
                  <Route path='*' element={<NotFound />} />

                </Routes>
            <Footer />
            </Router> 
      </AuthProvider>
    </div>
  )
}
