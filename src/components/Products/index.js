import Product from '../Product'
import './styles.scss'
import React from 'react'

function Products({carsData}) {
  
  console.log(carsData)
  
  return(
    <>
      
      <div className='products'>
        {carsData.map((product) => {
          return(
            <>  
              <Product product={product} key={product.id} />
            </>  
          )
        })}
      
      </div>
    </>
  )
}

export default Products