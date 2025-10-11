import styled from "styled-components";
import { v } from "styles/variables.js";

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: ${v.spacing.xxsmall};
    display: flex;
`;

export const HeaderLogo = styled.p`
    display: flex;
    justify-content: center;
    border: 2px solid red;
    width: 25%;
    height: 100%;
    padding: ${v.spacing.xxsmall};
`;

export const HeaderTextLogo = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid red;
    width: 75%;
    height: 100%;
    font-family: ${v.fonts.additional};
    font-size: ${v.fontSize.xlarge};
`;