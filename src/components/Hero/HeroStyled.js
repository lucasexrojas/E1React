import styled from "styled-components";

export const HeroContainerStyled = styled.section`
    max-width: 1300px;
    /* background: url(./src/assets/img/fondoHero.jpg); */
    background-size: cover;
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: space-around;
    @media(max-width: 992px){
        flex-direction: column-reverse;
    }
`;

export const HeroTextContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    align-items: flex-start;
    @media(max-width: 992px) {
        width: 90%;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    h1 {
        font-size: 3rem;
        @media(max-width: 360px) {
            font-size: 2.5rem;
        }
    }

    p {
        font-size: 1.2rem;
    }
`;

export const HeroImgContainerStyled = styled.div`
    width: 40%;
    @media(max-width: 992px) {
        width: 80%;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 100%;
        border-radius: 10px;
        /* @media(max-width: 360px) {
            width: 250px;
        } */
    }
`;
