import React from 'react'
import { ButtonStyled } from './ButtonStyled'

const Button = ({
    children,
    disabled = false
}) => {
  return (
    <ButtonStyled disabled = {disabled}>
        {children}
    </ButtonStyled>
  )
}

export default Button