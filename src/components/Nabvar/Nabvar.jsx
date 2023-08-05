import React from 'react'
import { AboutUsContainerStyled, CartContainerStyled, ContactContainerStyled, HomeContainerStyled, LinkContainerStyled, LinksContainerStyled, LogoContanerStyled, NabvarContainerStyled, ProductsContainerStyled, MenuContainerStyled } from './NabvarStyled'
import {HiHome} from 'react-icons/hi'
import{MdProductionQuantityLimits} from "react-icons/md"
import{FcBusinessContact} from "react-icons/fc"
import {FcAbout} from "react-icons/fc"
import {ImCart} from "react-icons/im"
import {TiThMenu} from "react-icons/ti"
import {motion} from 'framer-motion'

const Nabvar = () => {
  return (
    <NabvarContainerStyled>
        <div>
            <a href="/#">
                <LogoContanerStyled src="./src/assets/img/gaseosas/cabalgata-logo-300x159.png" alt="logo" />
            </a>
        </div>
        <LinksContainerStyled>
            <HomeContainerStyled>
                <motion.div whileTap={{scale: 0.90}}>
                    <a href="#">
                       <LinkContainerStyled primero>
                            <HiHome/>
                       </LinkContainerStyled> 
                       Home
                    </a>
                </motion.div>
            </HomeContainerStyled>
            
            <ProductsContainerStyled>
                <motion.div whileTap={{scale: 0.90}}>
                    <a href="/#">
                        <LinkContainerStyled>
                            <MdProductionQuantityLimits/>
                        </LinkContainerStyled> 
                        Productos
                    </a>
                </motion.div>
            </ProductsContainerStyled>

            <ContactContainerStyled>
            <motion.div whileTap={{scale: 0.90}}>
                    <a href="/#">
                        <LinkContainerStyled>
                            <FcAbout/>
                        </LinkContainerStyled> 
                        Nosotros
                    </a>
                </motion.div>
            </ContactContainerStyled>

            <AboutUsContainerStyled>
                <motion.div whileTap={{scale: 0.90}}>
                    <a href="/#">
                        <LinkContainerStyled>
                            <FcBusinessContact/>
                        </LinkContainerStyled> 
                        Contacto
                    </a>
                </motion.div>
            </AboutUsContainerStyled>
        </LinksContainerStyled>

        <LinksContainerStyled>
            <motion.div whileTap={{scale: 0.90}}>
                <CartContainerStyled>
                    <ImCart/>
                </CartContainerStyled> 
            </motion.div>

            <motion.div whileTap={{scale: 0.90}}>
                <MenuContainerStyled>
                    <TiThMenu/>
                </MenuContainerStyled> 
            </motion.div>
        </LinksContainerStyled>
    </NabvarContainerStyled>
  )
}

export default Nabvar