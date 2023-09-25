import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Table } from 'react-bootstrap'
import SingleToDo from './SingleToDo'
import './ToDos.css'
import FilterCat from './FilterCat'
import { useAuth } from '../../contexts/AuthContext'
import ToDoCreate from './ToDoCreate'

export default function ToDos() {
  const [toDos, setToDos] = useState([])

  const { currentUser } = useAuth()
  const [showCreate, setShowCreate] = useState(false); //initially false

  const [filter, setFilter] = useState(0)
  const [showComplete, setShowComplete] = useState(false)

  const getToDos = () => {
    axios.get(`http://todoapi.melissabalino.com/api/ToDos`).then(response => {
      // console.log(response)
      setToDos(response.data)
    })
  }

  useEffect(() => {
    getToDos()
  }, [])

  return (
    <section className="todos">
      <article className="p-4">
        <h1 className='text-center'>Task List Dashboard</h1>
      </article>
      {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
        <div className="p-2 mb-3 text-center">
          {!showCreate ?
            <button className="btn btn-success p-2" onClick={() => setShowCreate(true)}>
              Create New Task
            </button> :
            <button className="btn btn-danger p-2" onClick={() => setShowCreate(false)}>
              Close Form
          </button>
          }
          {showCreate &&
            <div className="createContainer w-75 m-auto">
                <ToDoCreate getToDos={getToDos} setshowCreate={setShowCreate} />
            </div>
          }
        </div>
      }
      <FilterCat setFilter={setFilter} showComplete={showComplete} setShowComplete={setShowComplete} />
      <Container className='pt-4'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Complete</th>
              <th>Task</th>
              <th>Category</th>
              {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
                <th>Actions</th>
              }
            </tr>
          </thead>
          <tbody>
            {!showComplete ?
              <>
               {filter === 0 ? toDos.filter(x => x.complete === false).map(x =>
                <SingleToDo key={x.toDoId} todo={x} getToDos={getToDos}/>
                ) :
                toDos.filter(x => x.complete === false && x.categoryId === filter).map(x =>
                  <SingleToDo key={x.toDoId} todo={x} getToDos={getToDos} />
              )}
            </> :
            <>
              {filter === 0 ? toDos.map(x =>
                  <SingleToDo key={x.toDoId} todo={x} getToDos={getToDos}/>
                ) :
                toDos.filter(x => x.categoryId === filter).map(x =>
                  <SingleToDo key={x.toDoId} todo={x} getToDos={getToDos} />
              )}
            </>
            }
          </tbody>
        </Table>
        {!showComplete ?
            <>
            {filter !== 0 && toDos.filter(x => x.complete === false && x.categoryId === filter).length === 0 &&
              <h2 className="alert alert-warning text-dark">
                There are no incomplete To Do items in this category.
              </h2>
            }
            </> :
            <>
              {filter !== 0 && toDos.filter(x => x.categoryId === filter).length === 0 &&
              <h2 className="alert alert-warning text-dark">
                There are no To Do items in this category.
              </h2>
            }
            </>

            }

            
      </Container>
        
    </section>
  )
}
