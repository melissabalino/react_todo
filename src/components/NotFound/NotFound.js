import React from 'react'
import image from '../Images/SpilledCoffeeBeans.jpg'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className='notFound'>
        <img src={image} alt="Spilled Coffee Beans" />
        <h1>Error 404: Page Not Found</h1>
    </div>
  )
}
