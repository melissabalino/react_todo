import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaCoffee } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext'
import Logout from './Auth/Logout'

export default function Navigation() {
  const { currentUser } = useAuth()
  return (
    <Navbar expand='lg' bg='success' className='p-1'> 
        <Navbar.Brand href='/'><FaCoffee /> <span className="brand-text"> Coffee Cafe Corner</span></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
            <Nav className='fs-4'>
                <Link to='/todos' className='nav-link'>Tasks</Link>
                
                <Link to='/categories' className='nav-link'>Shifts</Link>
                
                <Link to='/about' className='nav-link'>About</Link>
                
                {!currentUser &&
                  <Link to='/login' className='nav-link'>Login</Link>
                }
                
                {currentUser &&
                  <Logout />
                }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
