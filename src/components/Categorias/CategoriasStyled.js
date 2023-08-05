import styded, { styled } from "styled-components";
import { motion } from "framer-motion";
import Button from '../UI/Button/Button'

export const CategoriasWrapper = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 1300px;
    align-items: center;
    margin: 0 15px;
    @media(max-width: 992px) {
        text-align: center;
    }
`;

export const CategoriasContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
`;

export const CardCategoriaStyled = styled(Button)`

`;

