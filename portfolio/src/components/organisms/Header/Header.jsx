import React from "react";
import PropTypes from "prop-types";
import * as styled from './Header.styles.js';
import Navbar from "components/molecules/Navbar/Navbar.jsx";

const links = [
    {name: "About", path:"/"},
    {name: "Projects", path:"/projects"},
    {name: "Contact", path:"/contacts"},
];

const Header = ({
}) => {
    return (
        <styled.HeaderWrapper>
            <styled.HeaderLogo>
                <styled.HeaderTextLogo>{'kbg'}</styled.HeaderTextLogo>
            </styled.HeaderLogo>
            <styled.HeaderNavbar className={'header-navbar'} links={links}/>
        </styled.HeaderWrapper>
    )
}

export default Header;