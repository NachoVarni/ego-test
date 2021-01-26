import './styles.scss'
import Arrow from '../resources/fill-1.png'
import Button from '../Button'
import FieldContext from '../context/FieldContext'
import React, { useContext, useState } from 'react'


function ProductFilter({filter}) {
  
  const fieldData = useContext(FieldContext)
  const {showOrder, showOrderMenu} = fieldData

  return(
    <div className='filter-list'>
      <div className='filter-list-left'>
        <span className='filter-by'>Filtrar por</span> 
        <Button filter={filter} />
      </div>
      <div className='filter-list-right'>
        <div className='orderWrapper'>
          <button className='ordenar' onClick={() => showOrderMenu()}>Ordenar por</button>
          {showOrder && 
          <div className='order-list'>
            <p className='order-item'>Nada</p>
            <p className='order-item'>De <span className='bold-item'>menor</span> a <span className='bold-item'>mayor</span> precio</p>
            <p className='order-item'>De <span className='bold-item'>mayor</span> a <span className='bold-item'>menor</span> precio</p>
            <p className='order-item'>Mas <span className='bold-item'>nuevos</span> primero</p>
            <p className='order-item'>Mas <span className='bold-item'>viejos</span> primero</p>
          </div>}
        </div>
        <img src={Arrow} alt='flecha' className='arrow' />
      </div>
    </div>
      
    
  )
}

export default ProductFilter