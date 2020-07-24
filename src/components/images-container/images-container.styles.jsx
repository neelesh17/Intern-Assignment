import styled from 'styled-components';

export const ImagesContainer = styled.div`
    width: 100%;
    padding: 5em 5em 0 5em;
    @media screen and (max-width: 800px) {
        padding: 1em;
    }
`;

export const Image = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    @media screen and (max-width: 800px) {
        width: 100%;
        padding: 1em;
    }
`;

export const Grid = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
    @media screen and (max-width: 800px) {
       display: block;
       margin: 0;
    }
`;

export const SmallerGrid = styled.div`
    display: flex;    
    flex-direction:column; 
    width: 34%; 
    justify-content: space-between;
    @media screen and (max-width: 800px) {
        display: block;
        width: 100%; 
    }
`;

export const Pagation = styled.div`
    display: flex;
    justify-content: space-around;
    p{
        cursor:pointer;
        color: rgba(0,0,0,0.5);
        :hover{
            color: black;
        }
    }
`;