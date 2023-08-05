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
   /* padding: 1rem 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        background-color: var(--black-bg);
        border-radius: 10px;
        transition: background-color 0.2s, color 0.2s;
        &:hover {
            background-color: var(--gray-bg);
            transition: background-color 0.2s, color 0.2s;
        } */
`;

