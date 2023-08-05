import styled from "styled-components";
import { motion } from "framer-motion";

export const ButtonStyled = styled(motion.button)`
    background: none;
    border: 2px solid var(--gray-bg);
    font: inherit;
    line-height: 1;
    margin: 0.5em;
    padding: 1em 2em;
    color: white;
    border-radius: 10px;
    transition: 0.25s;
    &:hover {
        transition: 0.30s;
        box-shadow: inset 0 -3.25em 0 0 var(--gray-bg);
        border: 2px solid var(--gray-bg);
    }
    &:active {
        scale: 0.95;
    }
    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;