import Product from '../Product'
import ProductFilter from '../ProductFilter'
import './styles.scss'
import FieldContext from '../context/FieldContext'
import React, { useContext } from 'react'

function Products({carsData}) {
  
  
  return(
    <>
      
      <div className='products'>
        {carsData.map((product, key) => {
          return(
            <>  
              <Product product={product} key={key} />
            </>  
          )
        })}
      
      </div>
    </>
  )
}

export default Products