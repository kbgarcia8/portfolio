import styled from 'styled-components';
import { v } from 'styles/variables.js';

export const DefaultButton = styled.button`
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: ${props => props.$bgColor || 'blue'};
    color: ${props => props.$lineColor || 'white'};
    border: ${v.borderThickness.light} solid ${props => props.$borderColor || 'black'};
    border-radius: ${v.borderRadius.xlarge};
    padding: ${v.spacing.xxxsmall} ${v.spacing.small};
    margin: 0.125rem;
    width: 75%;
    height: 2.5vh;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.$hoverColor || 'lightblue'};
        border: ${v.borderThickness.light} solid ${props => props.$hoverBorderColor || 'gray'};
    }

    & .button-icon-text-space {
        width: 100%;
    }
`;

export const ButtonTextAndIconSpace = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ButtonIcon = styled.img`
    width: 100%;
`;

export const ButtonText = styled.span`
    font-size: ${v.fontSize.xsmall};
    font-weight: ${v.fontWeight.medium};
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
    display: flex;
    align-items: center;
    justify-content: center;
`;