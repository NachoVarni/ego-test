import './styles.scss'
import ProductFilter from '../ProductFilter'
import Products from '../Products'
import Button from '../Button'
import FieldContext from '../context/FieldContext'
import React, { useContext, useState } from 'react'



function Hero() {
 
  const fieldData = useContext(FieldContext)
  const {products} = fieldData

  const [carsData, setCarsData] = useState(products)
  
  const filter = (button) => {
    
    if (button === 'Todos') {
      setCarsData(products)
      return
    }
    const filteredData = products.filter(car => car.segment === button);
    setCarsData(filteredData)
    
  }

  return(
    <div className='hero'>
      <h3 className='descubri'>Descubri todos los modelos</h3>
      <ProductFilter filter={filter} />
      <Products carsData={carsData} />
      
    </div>
  )
}

export default Hero