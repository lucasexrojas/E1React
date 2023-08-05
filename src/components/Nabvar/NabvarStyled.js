import styled from "styled-components";

export const NabvarContainerStyled = styled.header`
    height: 80px;
    background-color: #18191a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
`;

export const LogoContanerStyled = styled.img`
    height: 80px;
`;

export const LinksContainerStyled = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    a {
        padding: 1rem 1.5rem;
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
        }
    }
`;
export const LinkContainerStyled = styled.div`
    font-size: 1.2rem;
    color: ${(props) => (props.primero? `crimson` : `#ff9300`)};
    display: flex;
    align-items: center;
`;


export const HomeContainerStyled = styled(LinkContainerStyled)`
    @media (max-width: 992px) {
        display: none;
    }
`;

export const ProductsContainerStyled = styled(HomeContainerStyled)``;

export const ContactContainerStyled = styled(HomeContainerStyled)``;

export const AboutUsContainerStyled = styled(HomeContainerStyled)``;

export const CartContainerStyled = styled(LinkContainerStyled)`
svg{
    padding: 1rem 1.5rem;
    cursor: pointer;
    gap: 5px;
    background-color: var(--black-bg);
    border-radius: 10px;
    transition: background-color 0.2s, color 0.2s;
    &:hover {
        background-color: var(--gray-bg);
        transition: background-color 0.2s, color 0.2s;
    }
}
@media(max-width: 360px) {
    display: none;
}
`;

export const MenuContainerStyled = styled(CartContainerStyled)`
    display: none;
    @media (max-width: 992px) {
        display: flex;
    }

`;
