import React from "react";
import * as Styled from './Footer.styles.js';
import { FaCopyright } from "react-icons/fa";

const handleClickSourceCode = () => {
    window.open('https://github.com/kbgarcia8/portfolio');
}

const Footer = () => {
    return(
        <>
        <Styled.FooterDivider/>
        <Styled.FooterWrapper>
            <Styled.FooterIconAndYearContainer>
                {<FaCopyright/>}
                <span>2023-2025</span>
            </Styled.FooterIconAndYearContainer>
            <Styled.FooterFullName>{'Karl Brian Garcia'}</Styled.FooterFullName>
            <Styled.FooterButtonContainer>
                <Styled.FooterViewSourceCode text={"Source Code"} onClick={handleClickSourceCode}/>
            </Styled.FooterButtonContainer>
        </Styled.FooterWrapper>
        </>
    )
}

export default Footer;