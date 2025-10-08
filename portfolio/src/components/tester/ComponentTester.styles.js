import styled from 'styled-components'
import { v } from 'styles/variables.js';

export const TesterWrapper = styled.div`
    min-height: 100vh;
    width: 100vw;
    padding: ${v.spacing.small};
    background-color: transparent;
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    place-items: center;
`;

export const WideComponentSpace = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;
    height: 33.3vh;
    width: 97.5vw;
    border: ${v.borderThickness.medium} solid red;
`;

export const WideComponent = styled.div`
    display: flex;
    place-items: center;
    height: ${(props) => props.$wideComponentHeight};
    width: ${(props) => props.$wideComponentWidth};
    border: ${v.borderThickness.medium} solid black;
`;

export const SmallComponentSpace = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(5vw,1fr));
    grid-template-rows: 20%;
    gap: 0.25rem;
    height: 33.3vh;
    width: 97.5vw;
    border: ${v.borderThickness.medium} solid blue;
`;

export const SmallComponentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${v.spacing.xxxsmall};
    height: ${(props) => props.$smallComponentHeight};
    width: ${(props) => props.$smallComponentWidth};
    border: ${v.borderThickness.light} solid black;
`;