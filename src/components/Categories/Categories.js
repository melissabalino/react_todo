import React, { useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import axios from 'axios'
import SingleCategory from './SingleCategory'
import './Categories.css'
import { useAuth } from '../../contexts/AuthContext'
import CatCreate from './CatCreate'

export default function Categories() {
  const [categories, setCategories] = useState([])

  const getCategories = () => {
    axios.get(`http://todoapi.melissabalino.com/api/Categories`).then(response => {
      // console.log(response)
      setCategories(response.data)
    })
  }

  const { currentUser } = useAuth()

  const [showCreate, setShowCreate] = useState(false)

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <section className="categories">
      <article className="pt-4 mb-2">
        <h1 className='text-center'>Manage Shift Categories</h1>
     
      </article>

      {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
        <div className="p-2 text-center">
          {showCreate ? 
            <>
              <button onClick={() => setShowCreate(false)} className="btn btn-danger p-2">Cancel</button>
              <CatCreate setShowCreate={setShowCreate} getCategories={getCategories}  />
            </>
            : <button onClick={() => setShowCreate(true)} className="btn btn-success p-2">Add New Shift Category</button>            
          }
        </div>
      }

      <Container className='pt-4'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Shift Categories</th>
              <th>Description</th>
              {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
                <th>Actions</th>
              }
            </tr>
          </thead>
          <tbody>
            {categories.map(x =>
              <SingleCategory key={x.categoryId} category={x} getCategories={getCategories}/>
            )}
          </tbody>
        </Table>
      </Container>

    </section>
  )
}
