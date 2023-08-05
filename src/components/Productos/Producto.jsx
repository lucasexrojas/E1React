import React from 'react'
import { CardProducto } from './CardProductsStyled'

const Producto = ({img, title, category}) => {
  return (
    <CardProducto>
        <img src={img} alt={category} />
        
    </CardProducto>
  )
}

export default Producto