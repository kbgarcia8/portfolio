import React from "react";
import PropTypes from "prop-types";
import * as styled from './Section.styles.js';

const Section = ({className, title, description}) => {
    return(
        <styled.SectionWrapper className={className}>
            {title && <styled.SectionTitle>{title}</styled.SectionTitle>}
            {description && <styled.SectionDescription>{description}</styled.SectionDescription>}
            {children}
        </styled.SectionWrapper>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node
}

export default Section;