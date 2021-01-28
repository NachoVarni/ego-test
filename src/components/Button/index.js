import './styles.scss'
import FieldContext from '../context/FieldContext'
import FilteredCarsContext from '../context/FilteredCarsContext'
import React, { useContext } from 'react'

function Button() {
  
  const fieldData = useContext(FieldContext)
  const filterData = useContext(FilteredCarsContext)
  const {buttons} = fieldData
  const {filter} = filterData
  
  return(
    <>
      {buttons.map((cat, key) => {
        return(
          <div key={key}>
            <button onClick={() => filter(cat)}>{cat}</button>
          </div>
        )
      })}
    </>
  )
}

export default Button