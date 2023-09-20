import React from 'react'
import './Footer.css'
import Logout from './Auth/Logout'
import { useAuth } from '../contexts/AuthContext'

export default function Footer() {
  const { currentUser } = useAuth()

  return (
    <>
    {currentUser && 
      <Logout />
    }
    <footer className="text-center p-4">
        <strong>
            &copy; {new Date().getFullYear()} Melissa Balino, All Rights Reserved
        </strong>
    </footer>
    </>
  )
}
