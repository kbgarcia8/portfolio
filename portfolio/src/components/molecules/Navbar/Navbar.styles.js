import styled from 'styled-components';
import { v } from 'styles/variables.js'
import { Link } from 'react-router-dom';
import { media } from 'utils/utils';

export const DefaultNavbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

export const NavbarLinks = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin: 0;
`;

export const NavbarLink = styled.li`
    display: flex;
    align-items: center;
    list-style-type: none;
    cursor: pointer;
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    font-weight: ${v.fontWeight.bolder};
    color: ${({theme}) => theme.textColor1};
    ${media.mobile`
        font-size: ${v.fontSize.small};
    `}
    ${media.tablet`
        font-size: ${v.fontSize.medium};
    `}
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({theme, $anchorTheme}) => $anchorTheme?.color || theme.text};

    &:hover{
        color: ${({theme, $anchorTheme}) => $anchorTheme?.hover || theme.teal};
        text-decoration: underline;
    }
    &:focus{
        color: ${({theme, $anchorTheme}) => $anchorTheme?.focus || theme.blue};
    }
`;