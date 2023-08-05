import styled from "styled-components";
import {motion} from "framer-motion";

export const ProductosWrapper = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: center ;
    width: 100%;
    max-width: 1300px;
    @media(max-width: 992px){
        text-align: center;
    }
`;

export const ProductosContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
`;

export const CardProducto = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 2px;
    gap: 10px;
    width: 350px;
    background-color: var(--gray-bg);
    border-radius: 15px;
    cursor: pointer;
    @media(max-width: 445px){
        width: 80%;
    }
    img {
    height: 300px; 
    border-radius: 10px;
    object-fit: cover; 
    @media(max-width: 445px){
        width: 90%;
        height: auto;
    }
  }


`;