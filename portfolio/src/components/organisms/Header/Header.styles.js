import styled from "styled-components";
import { v } from "styles/variables.js";
import Navbar from "components/molecules/Navbar";
import { Link } from "react-router-dom";
import { media } from "utils/utils";

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: ${v.borderThickness.light} solid ${({theme}) => theme.text};
    box-shadow: -1px 10px 5px 1px rgba(174,174,174,0.75);
    -webkit-box-shadow: -1px 10px 5px 1px rgba(174,174,174,0.75);
    -moz-box-shadow: -1px 10px 5px 1px rgba(174,174,174,0.75);

    ${media.mobile`
        padding-inline: ${v.spacing.medium};
    `}

    ${media.desktop`
        padding-inline: ${v.spacing.large};
    `}
`;

export const HeaderLogo = styled(Link)`
    display: flex;
    justify-content: center;
    padding: ${v.spacing.xxsmall};
    cursor: pointer;
    transtiion: transform 0.3s ease;
    &:link {
        text-decoration: none;
    }
    
    &:visited {
        color: ${({theme}) => theme.text};
    }
    ${media.mobile`
        width: 35%;    
        &:hover {
            transform: scale(1.0625);
        }
    `}

    ${media.tablet`
        width: 25%;
        &:hover {
            transform: scale(1.125);
        }
    `}
`;

export const HeaderTextLogo = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75%;
    height: 100%;
    font-family: ${v.fonts.additional}, ${v.fonts.fallback};
    font-size: ${v.fontSize.xxlarge};
    font-weight: ${v.fontWeight.bold};
    border: ${v.borderThickness.thick} double ${({theme}) => theme.teal};
    border-radius: ${v.borderRadius.large};
`;

export const HeaderNavbar = styled(Navbar)`
    ${media.mobile`
        width: 55%;
    `}
    ${media.tablet`
        width: 50%;
    `}
    & ul {
        justify-content: space-evenly;
    }
`;