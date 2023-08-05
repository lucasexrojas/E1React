import React from 'react'
import { products } from '../../assets/data/Productos'
import { ProductosContainer, ProductosWrapper } from './CardProductsStyled'
import Producto from './Producto'

const CardProducts = () => {
  return (
    <ProductosWrapper>
        <h2>Nuestros Productos</h2>
        <ProductosContainer>
            {
                products.map((products) => {
                     return <Producto key={products.id} {...products}/>
                })
            }
        </ProductosContainer>
    </ProductosWrapper>
  )
}

export default CardProducts