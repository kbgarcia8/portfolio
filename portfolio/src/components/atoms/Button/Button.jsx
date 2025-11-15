import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./Button.styles.js";

const Button = ({
    onClick,
    id,
    buttonType,
    source,
    svg,
    alt="icon",
    text="",
    className,
    dataAttributes
}) => {

    return (
        <Styled.DefaultButton
            onClick={onClick}
            id={id}
            type={buttonType}
            className={className}
            {...dataAttributes}
        >
            <Styled.ButtonTextAndIconSpace className={"button-icon-text-space"}>
                {source ? <Styled.ButtonIcon src={source} alt={alt} /> : svg ? svg : ''}
                {text && <Styled.ButtonText id={id} >{text}</Styled.ButtonText>}
            </Styled.ButtonTextAndIconSpace>
        </Styled.DefaultButton>
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
    dataAttributes: PropTypes.object,
}

export default Button;