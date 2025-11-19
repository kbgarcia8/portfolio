import styled from "styled-components";
import { v } from "styles/variables.js";
import Button from "components/atoms/Button";
import Divider from "components/atoms/Divider";
import { media } from "utils/utils.js";

export const FooterDivider = styled(Divider)`
    width: 55%;
    height: 10%;
    margin-left: 22.5%;
`;

export const FooterWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.bg};
`;

export const FooterIconAndYearContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 7,5%;
    height: 100%;
    color: ${({theme}) => theme.text};
    padding: ${v.spacing.small};

    & svg {
        width: 10%;
        height: 100%;
    }

    & span{
        width: 75%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-family: ${v.fonts.secondary};
        margin-left: ${v.spacing.xsmall};
        ${media.mobile`
            font-size: ${v.fontSize.xsmall};
        `}
        ${media.tablet`
            font-size: ${v.fontSize.small};
        `}
        
    }
`;

export const FooterFullName = styled.span`
    width: 25%;
    height: 100%;
    font-family: ${v.fonts.primary};
    margin-left: ${v.spacing.xsmall};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${({theme}) => theme.text};
    ${media.mobile`
        font-size: ${v.fontSize.xsmall};
    `}
    ${media.tablet`
        font-size: ${v.fontSize.small};
    `}
`;

export const FooterButtonContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    ${media.mobile`
        width: 25%;
    `}
    ${media.largeDesktop`
        width: 12.5%;
    `}
`;

export const FooterViewSourceCode = styled(Button)`
    ${media.mobile`
        width: 100%;
    `}
    border-radius: ${v.borderRadius.xsmall};
    height: 75%;
    border: none;
    background-color: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.text};
    transition: transform 0.3s ease;

    &:hover {
        background-color: ${({theme}) => theme.bg};
        color: ${({theme}) => theme.teal};
        border: none;
        transform: scale(1.25);
    }

    & span{
        font-family: ${v.fonts.secondary};
        font-weight: ${v.fontWeight.bolder};
        ${media.mobile`
            font-size: ${v.fontSize.xsmall};
        `}
        ${media.tablet`
            font-size: ${v.fontSize.small};
        `}
    }
`;