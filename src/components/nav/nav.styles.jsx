import styled from 'styled-components';

export const NavContainer = styled.div`
    height: 77px;
    width: 100%;
    display: flex;
    background-color: rgba(155,155,155,0.7);
    @media screen and (max-width: 800px) {
        height: 60px;
    }
`;

export const LogoContainer = styled.div`
    width: 5em;
    height: 100%;
    padding: 0 0 0 8px ;
    text-align: center;
    @media screen and (max-width: 800px) {
        width: 5em;
    }
`;
export const TextContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.p`
    font: 24px Verdana;
    color:  #060606;
    margin: 0;
   
`;