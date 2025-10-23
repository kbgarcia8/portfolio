import React from "react";
import PropTypes from "prop-types";
import * as styled from './StackCard.styles.js';
import { useTheme } from "context/ThemeContext.jsx";

const StackCard = ({
    borderColor,
    bgColor,
    icon,
    textColor,
    text,
    rating,
    className
}) => {

    const { currentTheme } = useTheme();

    const tempRatingArray = new Array(5).fill(0);

    const ratingArray = tempRatingArray.map((rate, index)=>{
        if(index<rating) rate = 1;
        else rate = 0;
    });
/*
1 - With training no actual experience / Basic Knowledge or Ability
2 - Minimal experience requires support/ Limited Proficiency
3 - Moderate Proficiency
4 - High Proficiency
5 - Expert Proficiency
*/
    return(
        <styled.StackCardContainer className={className} $borderColor={borderColor ?? currentTheme.text} $bgColor={bgColor}>
            <styled.RatingBoxContainer>
                
                <styled.RatingBox $bgColor={bgColor}></styled.RatingBox>
            </styled.RatingBoxContainer>
            <styled.IconAndTextContainer>
                <styled.IconContainer>
                    {icon}
                </styled.IconContainer>
                <styled.TextContainer $textColor={textColor ?? currentTheme.text}>
                    {text}
                </styled.TextContainer>
            </styled.IconAndTextContainer>
        </styled.StackCardContainer>
    )
}

StackCard.propTypes = {
    borderColor: PropTypes.string,
    bgColor: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    textColor: PropTypes.string,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number,
    className: PropTypes.string
}

export default StackCard;