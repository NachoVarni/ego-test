import './styles.scss'
import Button from '../Button'
import SortWrapper from '../SortWrapper'
import SortWithButtons from '../SortWithButtons'


function ProductFilter() {
  
  return(
    <div className='filter-list'>
      <div className='filter-list-left'>
        <span className='filter-by'>Filtrar por</span> 
        <Button />
      </div>
      <div className='filter-list-right'>
        <SortWrapper  />
      </div>
    </div>
      
    
  )
}

export default ProductFilter