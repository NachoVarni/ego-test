import './styles.scss'
import Arrow from '../resources/fill-1.png'
import Button from '../Button'
import { useState } from 'react'

function ProductFilter({filter}) {
  
  
  return(
    <div className='filter-list'>
      <div className='filter-list-left'>
        <span className='filter-by'>Filtrar por</span> 
        <Button filter={filter} />
      </div>
      <div className='filter-list-right'>
        <span className='ordenar'>Ordenar</span>
        <img src={Arrow} alt='flecha' className='arrow' />
      </div>
    </div>
      
    
  )
}

export default ProductFilter