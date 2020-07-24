import styled from 'styled-components';

export const ImagesContainer = styled.div`
    width: 100%;
    padding: 5em 5em 0 5em;
`;

export const Image = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
`;

export const Grid = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
`;

export const SmallerGrid = styled.div`
    display: flex;    
    flex-direction:column; 
    width: 29%; 
    justify-content: space-between;
`;

export const Pagation = styled.div`
    display: flex;
    justify-content: space-around;
    p{
        cursor:pointer;
    }
`;