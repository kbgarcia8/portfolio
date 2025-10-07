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

export const WideComponent = styled.div`
    display: flex;
    place-items: center;
    height: ${(props) => props.$wideComponentHeight};
    width: ${(props) => props.$wideComponentWidth};
    border: ${v.borderThickness.medium} solid red;
`;

export const SmallComponent = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(2vw,1fr));
    grid-template-rows: 5%;
    gap: 0.25rem;
    height: ${(props) => props.$smallComponentHeight};
    width: ${(props) => props.$smallComponentWidth};
    border: ${v.borderThickness.medium} solid blue;
`;

export default {TesterWrapper, WideComponent, SmallComponent}