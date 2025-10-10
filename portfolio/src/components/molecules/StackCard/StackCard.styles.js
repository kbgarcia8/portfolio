import styled from "styled-components";
import { v } from "styles/variables.js";

export const StackCardContainer = styled.div`
    width: 100%;
    height: 50%;
    border ${v.borderThickness.medium} solid ${(props) => props.$borderColor};
    background-color: ${(props) => props.$bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${v.spacing.xsmall};
    border-radius: ${v.borderRadius.small};
`;

export const IconContainer = styled.div`
    width: 25%;
    height: 100%;

    & svg {
        width: 100%;
        height: 100%;
    }
`;

export const TextContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75%;
    height: 100%;
    font-size: ${v.fontSize.small};
    font-family: ${v.fonts.primary}, ${v.fonts.fallback};
    color: ${(props) => props.$textColor};
`;