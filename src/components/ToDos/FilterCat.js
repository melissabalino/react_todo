import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ImEye, ImEyeBlocked } from 'react-icons/im'

export default function FilterCat(props) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get(`http://todoapi.melissabalino.com/api/Categories`).then(response => {
            // console.log(response)
            setCategories(response.data)
          })
    }, [])

  return (
    <div className='text-center'>
        <button className="btn btn-outline-success m-1" onClick={() => props.setFilter(0)}>
            All
        </button>
        {categories.map(cat => 
            <button key={cat.categoryId} className="btn btn-outline-success m-1" onClick={() => props.setFilter(Number(cat.categoryId))}>
                {cat.catName}
            </button>
        )}
        
            {!props.showComplete ?
                <button className="btn btn-success m-1" onClick={() => props.setShowComplete(!props.showComplete)}>
                    Show Complete &ensp;<ImEye />
                </button>:
                <button className="btn btn-warning m-1" onClick={() => props.setShowComplete(!props.showComplete)}>
                    Hide Complete &ensp;<ImEyeBlocked/> 
                </button>
            }   
    </div>
  )
}
