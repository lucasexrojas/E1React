import styled from "styled-components"


export const FooterContainerStyled = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    padding: 50px 20px;
    font-size: 1.2rem;
    gap: 20px;
    background-color: #18191a;
    margin-top: 50px;
    span {
        border: 2px solid var(--magenta);
        width: 90%;
        border-radius: 10px;
    }
    p {
        font-size: 18px;
    }
`;

export const LinksContainerStyled = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 20px;
     gap: 5px 40px;
     flex-wrap: wrap;
     @media(max-width: 992px) {
        flex-direction: column;
     }
    a {
        padding: 1rem 1.5rem;
        border-radius: 10px;
        transition: background-color 0.2s, color 0.2s;
        &:hover {
            background-color: var(--gray-bg);
            transition: background-color 0.2s, color 0.2s;
        }
    }
`;

export const FollowUsStyled = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    a {
        color: white;
        padding: 5px 8px;
        border-radius: 5px;
        transition: all 0.2s linear;
        font-size: 35px;
        &:hover:nth-child(2) {
            color: #C13584 ;
        }
       &:hover:nth-child(3) {
            color: #3b5998 ;
        }
        &:hover:nth-child(4) {
        color: #25D366 ;
        }
        
    }
    @media(max-width: 445px) {
        flex-direction: column;
    }
`;
