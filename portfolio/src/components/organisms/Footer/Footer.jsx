import React from "react";
import * as styled from './Footer.styles.js';
import { FaCopyright } from "react-icons/fa";

const handleClickSourceCode = (e) => {
    window.open('https://github.com/kbgarcia8/portfolio');
}

const Footer = () => {
    return(
        <>
        <styled.FooterDivider/>
        <styled.FooterWrapper>
            <styled.FooterIconAndYearContainer>
                {<FaCopyright/>}
                <span>2023-2025</span>
            </styled.FooterIconAndYearContainer>
            <styled.FooterFullName>{'Karl Brian Garcia'}</styled.FooterFullName>
            <styled.FooterButtonContainer>
                <styled.FooterViewSourceCode text={"Source Code"} onClick={handleClickSourceCode}/>
            </styled.FooterButtonContainer>
        </styled.FooterWrapper>
        </>
    )
}

export default Footer;