import './styles.scss'

function Product({product, key}) {
  return(
    <div className='product' key={key}>
      <h4 className='product-name'>{product.name}</h4>
      <span className='product-year'>{product.year} | ${product.price}</span>
      <img src={product.photo} className='productPic' />
    </div>
  )
}

export default Product