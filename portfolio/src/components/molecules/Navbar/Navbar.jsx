import React from "react";
import { useTheme } from 'context/ThemeContext.jsx';
import * as styled from "./Navbar.styles.js";
import PropTypes from "prop-types";

const Navbar =({anchorTheme, links}) => {
    const { theme } = useTheme();

    return(
        <>
            <styled.DefaultNavbar>
                <styled.NavbarLinks>
                    {links?.map((link,index) => 
                        <styled.NavbarLink key={`${link}-${index}`}>
                            <styled.StyledLink to={link.path} $anchorTheme={anchorTheme ? anchorTheme : theme}>{link.name}</styled.StyledLink>
                        </styled.NavbarLink>
                    )}
                </styled.NavbarLinks>
            </styled.DefaultNavbar>
        </>
    )
}

Navbar.PropTypes = {
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