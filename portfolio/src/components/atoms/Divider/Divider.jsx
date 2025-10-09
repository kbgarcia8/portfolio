import React from "react";
import PropTypes from "prop-types";
import * as styled from "./Divider.styles.js";
import { useTheme } from 'context/ThemeContext.jsx';


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
        <styled.DividerContainer className={className}>
            <styled.DividerLine $lineThickness={lineThickness ?? '1px'} $lineColor={lineColor ?? currentTheme.blue} >
            {dividerText && 
            <styled.DividerText 
                $textColor={textColor ?? currentTheme.text} 
                $screenColor={screenColor ?? currentTheme.bg}
            >{dividerText}</styled.DividerText>}
            </styled.DividerLine>
        </styled.DividerContainer>
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