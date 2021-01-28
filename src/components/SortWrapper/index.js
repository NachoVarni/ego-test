import React, { useState, useEffect, useContext } from 'react';
import FilteredCarsContext from '../context/FilteredCarsContext'

function SortWrapper() {
  
  // const [data, setData] = useState(filteredAndSortedData);
  // const [sortType, setSortType] = useState('moreExpensive');
  
  const context = useContext(FilteredCarsContext)
  const {sortArray, filteredAndSortedData} = context
  
  // useEffect(() => {
  //   console.log('sortRender')
  //   console.log(filteredAndSortedData)
    
  //   sortArray(sortType);
  // }, [sortType]); 

  

  return (
    <div className="App">
      <select onChange={(e) => sortArray(e.target.value)}>
        <option value="" selected disabled hidden>Ordenar por</option>
        <option value="">Nada</option>
        <option value="moreExpensive">Mas caro</option>
        <option value="cheaper">Mas barato</option>
        <option value="newest">Mas nuevo</option>
        <option value="oldest">Mas viejo</option>
      </select>

    </div>
  );
}

export default SortWrapper