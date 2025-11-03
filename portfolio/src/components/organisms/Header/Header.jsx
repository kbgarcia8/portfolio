import React from "react";
import PropTypes from "prop-types";
import * as styled from './Header.styles.js';
import Navbar from "components/molecules/Navbar/Navbar.jsx";

const links = [
    {name: "About", path:"/about"},
    {name: "Projects", path:"/projects"},
    {name: "Contact", path:"/contact"},
];

const Header = ({
}) => {
    return (
        <styled.HeaderWrapper>
            <styled.HeaderLogo>
                <styled.HeaderTextLogo to={'/'}>{'kbg'}</styled.HeaderTextLogo>
            </styled.HeaderLogo>
            <styled.HeaderNavbar className={'header-navbar'} links={links}/>
        </styled.HeaderWrapper>
    )
}

export default Header;