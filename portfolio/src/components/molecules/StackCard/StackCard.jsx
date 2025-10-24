import React from "react";
import PropTypes from "prop-types";
import * as styled from './StackCard.styles.js';
import { useTheme } from "context/ThemeContext.jsx";
import { isLightColor } from "utils/utils.js";

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
        if(index<Math.floor(rating)) return 1;
        else return 0;
    });

    const immediateTextColor = textColor ?? currentTheme.text;

    return(
        <styled.StackCardContainer className={className} $borderColor={borderColor ?? currentTheme.text} $bgColor={bgColor}>
            <styled.RatingBoxContainer>
                {ratingArray.map((rate,index) => (
                   <styled.RatingBox
                        key={`ratebox-${index}`}
                        $bgColor={rate === 1 ? bgColor : isLightColor(immediateTextColor) ? '#000000' : '#FFFFFF'}
                        $borderColor={isLightColor(immediateTextColor) ? '#000000' :'#FFFFFF'}
                    ></styled.RatingBox>
                ))}
            </styled.RatingBoxContainer>
            <styled.IconAndTextContainer>
                <styled.IconContainer $textColor={immediateTextColor}>
                    {icon}
                </styled.IconContainer>
                <styled.TextContainer $textColor={immediateTextColor}>
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