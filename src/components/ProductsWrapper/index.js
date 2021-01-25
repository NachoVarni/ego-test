import Products from '../Products'
import './styles.scss'
import ProductsFilter from '../ProductFilter'

function ProductsWrapper() {
  return(
    <>
      <ProductsFilter />
      <Products />
    </>
  )
}

export default ProductsWrapper