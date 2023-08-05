import React from 'react'
import { LayoutContainer } from './LayoutStyled'

const Layout = ({children}) => {
  return (
    <LayoutContainer>
        {children}
    </LayoutContainer>
  )
}

export default Layout