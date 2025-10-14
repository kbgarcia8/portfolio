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
            {...dataAttributes}
        >
            <styled.ButtonTextAndIconSpace className={"button-icon-text-space"}>
                {source ? <styled.ButtonIcon src={source} alt={alt} /> : svg ? svg : ''}
                {text && <styled.ButtonText id={id} >{text}</styled.ButtonText>}
            </styled.ButtonTextAndIconSpace>
        </styled.DefaultButton>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.string,
    buttonType: PropTypes.oneOf(['button', 'submit', 'reset']),
    source: PropTypes.string,
    alt: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
    bgColor: PropTypes.string,
    lineColor: PropTypes.string,
    borderColor: PropTypes.string,
    hoverColor: PropTypes.string,
    hoverBorderColor: PropTypes.string,
    dataAttributes: PropTypes.object,
}

export default Button;