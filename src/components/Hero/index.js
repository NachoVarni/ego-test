import './styles.scss'
import ProductFilter from '../ProductFilter'
import Products from '../Products'
import FieldContext from '../context/FieldContext'
import React, { useContext, useEffect, useState } from 'react'
import { FilteredCarsProvider } from '../context/FilteredCarsContext'

function Hero() {
 
  const [filteredAndSortedData, setFilteredAndSortedData] = useState([])
  
  const context = useContext(FieldContext)
  const {products} = context

  // const [carsData, setCarsData] = useState([...products])
  
 
 
  useEffect(() => {
    // setCarsData([...products])
    // setFilteredAndSortedData([...products])
    setFilteredAndSortedData(products)  
  }, [products])
  
  const filter = (button) => {
    //FILTERS  
    console.log('filter render')
    if (button === 'Todos') {
      // setCarsData([...products])
      setFilteredAndSortedData([...products])
      
    }
    else {
      const filteredData = products.filter(car => car.segment === button);
    // setCarsData(filteredData)
      setFilteredAndSortedData(filteredData)
    }
    
  }

  const sortArray = type => {
    const types = {
      moreExpensive: 'price',
      cheaper: 'price',
      newest: 'year',  
      oldest: 'year',
    };
    const sortProperty = types[type];
    
    const sortedAscendent = [...filteredAndSortedData].sort((a, b) => b[sortProperty] - a[sortProperty]);
    const sortedDescendent = [...filteredAndSortedData].sort((a, b) => a[sortProperty] - b[sortProperty]);

    if (type === 'moreExpensive') {
      setFilteredAndSortedData(sortedAscendent)
      
    }
    else if (type === 'cheaper') {
      setFilteredAndSortedData(sortedDescendent);
      console.log(sortedAscendent)
      
      
    }
    else if (type === 'newest') {
      setFilteredAndSortedData(sortedAscendent);
      
    }
    else if (type === 'oldest') {
      setFilteredAndSortedData(sortedDescendent);
    }
  };
  
  
  console.log('hero render')
  // console.log(carsData)
  console.log(filteredAndSortedData)

  const filteredCarsData = {
    filteredAndSortedData,
    filter,
    products,
    sortArray
  }


  return(
    <FilteredCarsProvider value={filteredCarsData}>
      <div className='hero'>
        <h3 className='descubri'>Descubri todos los modelos</h3>
        <ProductFilter />
        {/* {(filteredAndSortedData != carsData) &&
          <Products carsData={carsData} 
        />} */}
        {(filteredAndSortedData) && 
          <Products carsData={filteredAndSortedData} 
        />}
      
      </div>
    </FilteredCarsProvider>
  )
}

export default Hero