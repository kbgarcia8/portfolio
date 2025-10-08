import React from "react";
import PropTypes from "prop-types";
import * as styled from "./Label.styles.js";

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
        <styled.DefaultLabel htmlFor={htmlFor} className={className} $labelFlexDirection={labelFlexDirection}>
            {(source || svg) && <styled.LabelIconContainer className={"label-icon-container"}>
                {source ? <img src={source} alt={alt} /> : svg ? svg : ''}
            </styled.LabelIconContainer>}
            <styled.MainLabelText className={"main-label"}>{textLabel}</styled.MainLabelText>
            {addtionalInfo && <styled.LabelAdditionalInfo className={"additional-info"} >{addtionalInfo}</styled.LabelAdditionalInfo>}
            {children}
        </styled.DefaultLabel>
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