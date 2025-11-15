import React from "react";
import { useTheme } from 'context/ThemeContext.jsx';
import * as Styled from "./Navbar.styles.js";
import PropTypes from "prop-types";

const Navbar =({className, anchorTheme, links}) => {
    const { theme } = useTheme();

    return(
        <>
            <Styled.DefaultNavbar className={className}>
                <Styled.NavbarLinks>
                    {links?.map((link,index) => 
                        <Styled.NavbarLink key={`${link}-${index}`}>
                            <Styled.StyledLink to={link.path} $anchorTheme={anchorTheme ? anchorTheme : theme}>{link.name}</Styled.StyledLink>
                        </Styled.NavbarLink>
                    )}
                </Styled.NavbarLinks>
            </Styled.DefaultNavbar>
        </>
    )
}

Navbar.PropTypes = {
    className: PropTypes.string.isRequired,
    anchorTheme: PropTypes.shape({
        color: PropTypes.string,
        hover: PropTypes.string,
        focus: PropTypes.string
    }),
    links: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            path: PropTypes.string
        })
    )
};

export default Navbar;