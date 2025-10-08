import styled from "styled-components";
import { v } from "styles/variables.js";

export const DefaultLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content:center;
    height: 100%;
    border: 2px solid violet;
    flex-direction:  ${(props) => props.$labelFlexDirection || "column"};
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    font-size: ${v.fontSize.xsmall};
    font-weight: ${v.fontWeight.bold};
    margin-bottom: ${v.spacing.xxsmall};
    
    & .label-icon-container img {
        width: 100%;
    }

    & .label-icon-container svg {
        width: 100%;
    }
`;

export const MainLabelText = styled.p`
    font-weight: ${v.fontWeight.bolder};
    border: 2px solid red;
    margin-bottom: 0;
`;

export const LabelIconContainer = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    border: 2px solid red;
`;

export const LabelAdditionalInfo = styled.span`
    font-weight: ${v.fontWeight.light};
    border: 2px solid red;
`;