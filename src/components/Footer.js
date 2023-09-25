import React from 'react'

export default function Footer() {
  return (
    <div className='footerContainer'>
        <footer className="text-center p-4">
           &copy; {new Date().getFullYear()} Melissa Balino. All Rights Reserved.
        </footer>
    </div>
  )
}
