import styled from "styled-components";
import { v } from "styles/variables.js";
import Navbar from "components/molecules/Navbar";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    border-bottom: ${v.borderThickness.light} solid ${({theme}) => theme.text};
    padding-inline: ${v.spacing.large};
    box-shadow: -1px 10px 5px 1px rgba(174,174,174,0.75);
    -webkit-box-shadow: -1px 10px 5px 1px rgba(174,174,174,0.75);
    -moz-box-shadow: -1px 10px 5px 1px rgba(174,174,174,0.75);
`;

export const HeaderLogo = styled(Link)`
    display: flex;
    justify-content: center;
    width: 20%;
    height: 100%;
    padding: ${v.spacing.xxsmall};
    cursor: pointer;
    transtiion: transform 0.3s ease;

    &:link {
        text-decoration: none;
    }
    
    &:visited {
        color: ${({theme}) => theme.text};
    }

    &:hover {
        transform: scale(1.125)
    }
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
    width: 50%;
    & ul {
        justify-content: space-evenly;
    }
`;