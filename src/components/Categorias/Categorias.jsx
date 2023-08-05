import React from 'react'
import Categoria from './Categoria'
import { CategoriasContainer, CategoriasWrapper } from './CategoriasStyled'

const Categorias = () => {
  return (
    <CategoriasWrapper>
        <h2>Productos</h2>
        <p>¡Lima Limón, Manzana, Naranja, Cola, Guaraná, Pomelo y mucho mas productos para compartir en familia!</p>
        <CategoriasContainer>
            <Categoria/>
        </CategoriasContainer>
    </CategoriasWrapper>
  )
}

export default Categorias