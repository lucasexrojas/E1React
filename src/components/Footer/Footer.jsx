import React from 'react'
import { FollowUsStyled, FooterContainerStyled, LinksContainerStyled } from './FooterStyled'
import {BsInstagram} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"


const Footer = () => {
  return (
    <FooterContainerStyled>
        <span/>
        <LinksContainerStyled>
            <a href="">Trabajá con nosotros</a>
            <a href="">Terminos y Condiciones</a>
            <a href="">Boton de Arrepentimiento</a>
            <a href="">Defensa al Consumidor</a>
            <a href="">Ayuda</a>
        </LinksContainerStyled>
        <p>Copyright© 2023 Gaseosas Cabalgata Todos los Derechos Reservados.</p>
        <FollowUsStyled>
            <h2>Seguinos en: </h2>
            <a href="">
                <BsInstagram/>
            </a>
            <a href="">
                <BsFacebook/>
            </a>
            <a href="">
                <BsWhatsapp/>
            </a>
        </FollowUsStyled>
        <a href="https://www.linkedin.com/in/lucas-rojas-b95983232/">Created by: Lucas Rojas🤯</a>
    </FooterContainerStyled>
  )
}

export default Footer