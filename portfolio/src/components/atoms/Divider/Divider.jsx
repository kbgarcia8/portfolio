import React from "react";
import PropTypes from "prop-types";
import { useTheme } from 'context/ThemeContext.jsx';
import * as Styled from "./Divider.styles.js";

const Divider = ({ 
    dividerText, 
    lineThickness,
    lineColor, 
    textColor, 
    screenColor, 
    className 
}) => {
    const { currentTheme } = useTheme();
    
    return(
        <Styled.DividerContainer className={className}>
            <Styled.DividerLine $lineThickness={lineThickness ?? '1px'} $lineColor={lineColor ?? currentTheme.blue} >
            {dividerText && 
            <Styled.DividerText 
                $textColor={textColor ?? currentTheme.text} 
                $screenColor={screenColor ?? currentTheme.bg}
            >{dividerText}</Styled.DividerText>}
            </Styled.DividerLine>
        </Styled.DividerContainer>
    );
}

Divider.propTypes = {
    dividerText: PropTypes.string,
    lineColor: PropTypes.string,
    textColor: PropTypes.string,
    screenColor: PropTypes.string,
    className: PropTypes.string
}

export default Divider;