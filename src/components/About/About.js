import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import image from '../../Images/mbalino.jpg'
import './About.css'
import { FaLinkedin } from 'react-icons/fa'

export default function About() {
  return (
    <section className="about">
   
        <h1 className='text-center p-4'>About the Developer | Melissa Balino</h1>
      <Container>
        <Row>
          <Col lg={6}>
            <img src={image} alt='Melissa Balino, React Developer' className='profilePic' />
          </Col>
          <Col lg={6} className='about-text'>

              <p>
              Hello, Welcome to my React App! I am currently studying full-stack coding at <a href='https://centriq.com/' target='_blank' rel='noreferrer' className='centriq'>Centriq's IT Career Program</a> to become a software developer. So far, several classes have been completed, and I'm enjoying every "bit" of it (pun intended).
              </p>
              <p>
              For some background, I consider myself to be a Multi-passionate Creative with many hobbies and interests, spanning from martial arts and pickleball to musical instruments and languages to plants, crafts, and cats. I firmly believe that life is a journey, and I am so excited to be on this new journey into coding.
              </p>
              <p className='linkedin pt-1'>
              <a href='www.linkedin.com/in/melissabalino' target='_blank' rel='noreferrer'>Connect with me on Linkedin! <FaLinkedin /></a>

             </p>
          </Col>
        </Row>
      </Container>
    
    </section>
  )
}
