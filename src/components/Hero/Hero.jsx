import React from 'react'
import Button from '../UI/Button/Button'
import { HeroContainerStyled, HeroImgContainerStyled, HeroTextContainerStyled } from './HeroStyled'

const Hero = () => {
  return (
    <HeroContainerStyled>
      <HeroTextContainerStyled>
        <h1>Desde Chaco a toda la región</h1>
        <p>Proba los mejores sabores de una bebida 100% Argentina</p>
        <Button>
          Ver mas
        </Button>
      </HeroTextContainerStyled>
      <HeroImgContainerStyled>
        <img src="./src/assets/img/fondoHero.jpg" alt="img-gaseosas" />
      </HeroImgContainerStyled>
    </HeroContainerStyled>
  )
}

export default Hero