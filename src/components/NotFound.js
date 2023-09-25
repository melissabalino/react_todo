import React from 'react'
import image from '../Images/spilledbeans.jpg'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="notFound">
        <h1>Error 404: Page Not Found</h1>
       <img src={image} alt="Page Not Found" />
        <div className="clearfix"></div>
    </section>
  )
}
