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

export const WideComponent = styled.div.attrs(props => ({
    wideComponentWidth: props.wideComponentWidth,
    wideComponentHeight: props.wideComponentHeight
}))`
    display: flex;
    place-items: center;
    height: ${(wideComponentHeight) => wideComponentHeight};
    width: ${(wideComponentWidth) => wideComponentWidth};
    border: ${v.borderThickness.medium} solid red;
`;

export default {TesterWrapper,WideComponent}