import React from "react";
import PropTypes from "prop-types";
import * as Styled from "./Label.Styled";

const Label = ({
    htmlFor, 
    textLabel, 
    addtionalInfo, 
    labelFlexDirection, 
    source, 
    svg, 
    className,
    children
}) => {
    return(
        <Styled.DefaultLabel htmlFor={htmlFor} className={className} $labelFlexDirection={labelFlexDirection}>
            {(source || svg) && <Styled.LabelIconContainer className={"label-icon-container"}>
                {source ? <img src={source} alt={`${htmlFor}-label-icon`} /> : svg ? svg : ''}
            </Styled.LabelIconContainer>}
            <Styled.MainLabelText className={"main-label"}>{textLabel}</Styled.MainLabelText>
            {addtionalInfo && <Styled.LabelAdditionalInfo className={"additional-info"} >{addtionalInfo}</Styled.LabelAdditionalInfo>}
            {children}
        </Styled.DefaultLabel>
    )
}

Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    textLabel: PropTypes.string.isRequired,
    addtionalInfo: PropTypes.string,
    labelFlexDirection: PropTypes.oneOf(['column', 'row']),
    className: PropTypes.string,
    source: PropTypes.string,
    svg: PropTypes.element,
    children: PropTypes.node
}

export default Label;