import { Link } from 'react-router-dom'
import { products, formatPrice } from '../data/products'
import './Page.css'
import './Catalog.css'

function Catalog() {
  return (
    <div className="page catalog-page">
      <h1>Catálogo</h1>
      <div className="catalog-grid">
        {products.map(product => (
          <Link 
            key={product.id} 
            to={`/product/${product.id}`}
            className="product-card"
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <span className="product-price">{formatPrice(product.price)}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Catalog
