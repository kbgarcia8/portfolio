import React from "react";
import PropTypes from "prop-types";
import * as styled from './StackCard.styles.js';
import { useTheme } from "context/ThemeContext.jsx";

const StackCard = ({
    borderColor,
    bgColor,
    icon,
    textColor,
    text
}) => {

    const { currentTheme } = useTheme();

    return(
        <styled.StackCardContainer $borderColor={borderColor ?? currentTheme.text} $bgColor={bgColor}>
            <styled.IconContainer>
                {icon}
            </styled.IconContainer>
            <styled.TextContainer $textColor={textColor ?? currentTheme.text}>
                {text}
            </styled.TextContainer>
        </styled.StackCardContainer>
    )
}

StackCard.propTypes = {
    borderColor: PropTypes.string,
    bgColor: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    textColor: PropTypes.string,
    text: PropTypes.string.isRequired
}

export default StackCard;