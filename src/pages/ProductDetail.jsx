import { useParams } from 'react-router-dom'
import './Page.css'

function ProductDetail() {
  const { id } = useParams()

  return (
    <div className="page">
      <h1>Detalle del Producto</h1>
      <p>ID: {id}</p>
    </div>
  )
}

export default ProductDetail

