import React from "react";
import PropTypes from "prop-types";
import * as Styled from './Header.styles.js';
import ThemeToggleButton from "components/molecules/ThemeToggleButton";

const links = [
    {name: "About", path:"/about"},
//    {name: "Projects", path:"/projects"},
    {name: "Contact", path:"/contact"},
];

const Header = () => {
    return (
        <Styled.HeaderWrapper>
            <Styled.HeaderLogo>
                <Styled.HeaderTextLogo to={"/"} src={"/kbg.png"}/>
            </Styled.HeaderLogo>
            <Styled.HeaderNavbar className={'header-navbar'} links={links}/>
            <Styled.ThemeToggleButtonSpace>
                <ThemeToggleButton/>
            </Styled.ThemeToggleButtonSpace>
        </Styled.HeaderWrapper>
    )
}

export default Header;