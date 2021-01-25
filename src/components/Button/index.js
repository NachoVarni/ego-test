import './styles.scss'
import FieldContext from '../context/FieldContext'
import React, { useContext, useState } from 'react'

function Button({filter}) {
  
  const fieldData = useContext(FieldContext)
  const {buttons} = fieldData

  console.log(buttons)
  
  return(
    <div>
      {buttons.map((cat, i) => {
        return(
          <button onClick={() => filter(cat)} i={i}>{cat}</button>
        )
      })}
    </div>
  )
}

export default Button