import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  async function handleAuth () {
    await login()

    return navigate('/')
  }

  return (
    <section className="login">
      <article className="p-5">
        <h1 className="text-center">Welcome to my ToDo ReactJS Task App!</h1>
      </article>
      <Container>
        <Card className='border-dark text-center'>
          <Card.Header className=''>
            <h2>This app requires users to login for full functionality.</h2>
          </Card.Header>
          <Card.Body>
            <button className='btn btn-success' onClick={() => handleAuth()}>
              Login w/ Github
            </button>
          </Card.Body>
        </Card>
      </Container>
    </section>
  )
}
