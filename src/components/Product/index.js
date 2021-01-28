import './styles.scss'

function Product({product}) {
  
  return(
    <div className='product'>
      <h4 className='product-name'>{product.name}</h4>
      <span className='product-year'>{product.year} | ${product.price}</span>
      <img src={product.photo} alt='car' className='productPic' />
    </div>
  )
}

export default Product