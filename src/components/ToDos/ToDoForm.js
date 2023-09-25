import React, { useState, useEffect } from 'react'
import { Formik, Field, Form } from 'formik'
import { toDoSchema } from '../../utilities/validationSchema'
import axios from 'axios'

export default function ToDoForm(props) {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        axios.get(`http://todoapi.melissabalino.com/api/Categories`).then(response => setCategories(response.data))
    }

    const handleSubmit = (values) => {
        // console.log(values)
        if (!props.todo) {
            const newToDo = {
                name: values.name,
                complete: false,
                categoryId: values.categoryId
            }

            axios.post(`http://todoapi.melissabalino.com/api/ToDos`, newToDo).then(() => {
                props.setShowCreate(true)
                props.getToDos()
            })
        }
        else {
            const taskToEdit = {
                toDoId: props.todo.toDoId,
                name: values.name,
                complete: props.todo.complete,
                categoryId: values.categoryId
            }

            axios.put(`http://todoapi.melissabalino.com/api/ToDos/${props.todo.toDoId}`, taskToEdit).then(() => {
                props.setShowEdit(false)
                props.getToDos()
            })
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

  return (
    <Formik
        initialValues={{
            name: props.todo ? props.todo.name : '',
            complete: props.todo ? props.todo.complete : false,
            categoryId: props.todo ? props.todo.categoryId : ''
        }}
        validationSchema={toDoSchema}
        onSubmit={(values) => handleSubmit(values)}>
        {({errors, touched}) => (
            <Form id='toDoForm'>
                <div className="form-group m-3">
                    <Field name='name' className='form-control' placeholder='New Task' />
                    {errors.name && touched.name ? (
                        <div className="text-danger">{errors.linkText}</div>
                    ) : null}
                </div>
                <div className="form-group m-3">
                    <Field name='categoryId' as='select' className='form-control'>
                        <option value='' disabled>[--Choose a Category--]</option>
                        {categories.map(cat =>
                            <option key={cat.categoryId} value={cat.categoryId}>
                                {cat.catName}
                            </option>    
                        )}
                    </Field>
                </div>
                <div className="form-group m-3">
                    <button className="btn btn-success m-3" type='submit'>Create</button>
                </div>
            </Form>
        )}
    </Formik>
  )
}
