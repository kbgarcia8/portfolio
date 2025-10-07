import React from "react";
import PropTypes from "prop-types";
import * as styled from "./Button.styles.js";

const Button = ({
    onClick,
    id,
    buttonType,
    source,
    svg,
    alt="icon",
    text="",
    className,
    bgColor,
    lineColor,
    borderColor,
    hoverColor,
    hoverBorderColor,
    dataAttributes
}) => {

    return (
        <styled.DefaultButton
            onClick={onClick}
            id={id}
            type={buttonType}
            className={className}
            $bgColor={bgColor}
            $lineColor={lineColor}
            $borderColor={borderColor}
            $hoverColor={hoverColor}
            $hoverBorderColor={hoverBorderColor}
            {...dataAttributes}
        >
            <styled.ButtonTextAndIconSpace className={"button-icon-text-space"}>
                {source ? <styled.ButtonIcon src={source} alt={alt} /> : svg ? <styled.ButtonSVG/> : ''}
                {text && <styled.ButtonText id={id} >{text}</styled.ButtonText>}
            </styled.ButtonTextAndIconSpace>
        </styled.DefaultButton>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.string,
    buttonType: PropTypes.string,
    source: PropTypes.string,
    alt: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
}

export default Button;