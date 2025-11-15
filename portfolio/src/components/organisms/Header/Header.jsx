import React from "react";
import PropTypes from "prop-types";
import * as Styled from './Header.styles.js';
import Navbar from "components/molecules/Navbar/Navbar.jsx";

const links = [
    {name: "About", path:"/about"},
//    {name: "Projects", path:"/projects"},
    {name: "Contact", path:"/contact"},
];

const Header = () => {
    return (
        <Styled.HeaderWrapper>
            <Styled.HeaderLogo>
                <Styled.HeaderTextLogo to={'/'}>{'kbg'}</Styled.HeaderTextLogo>
            </Styled.HeaderLogo>
            <Styled.HeaderNavbar className={'header-navbar'} links={links}/>
        </Styled.HeaderWrapper>
    )
}

export default Header;