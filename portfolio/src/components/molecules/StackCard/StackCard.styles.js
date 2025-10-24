import styled from "styled-components";
import { v } from "styles/variables.js";

export const StackCardContainer = styled.div`
    width: 100%;
    height: 75%;
    border: ${v.borderThickness.small} solid ${(props) => props.$borderColor};
    background-color: ${(props) => props.$bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${v.spacing.xsmall};
    border-radius: ${v.borderRadius.small};
    position: relative;
`;

export const RatingBoxContainer = styled.div`
    display: flex;
    position: absolute;
    width: 95%;
    height: 85%;
    z-index: 1;
`;

export const RatingBox = styled.div`
    width: 25%;
    height: 100%;
    border: ${v.borderThickness.xsmall} solid ${(props) => props.$borderColor};
    z-index: 2;
    background-color: ${(props) => props.$bgColor};
`;

export const IconAndTextContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IconContainer = styled.div`
    width: 25%;
    height: 80%;

    & svg {
        color: ${(props) => props.$textColor};
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
    font-weight: ${v.fontWeight.bolder};
    font-family: ${v.fonts.primary}, ${v.fonts.fallback};
    color: ${(props) => props.$textColor};
`;