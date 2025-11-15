import React from "react";
import PropTypes from "prop-types";
import * as Styled from './Section.styles.js';

const Section = ({className, title, description, children}) => {
    return(
        <Styled.SectionWrapper className={className}>
            {title && <Styled.SectionTitle>{title}</Styled.SectionTitle>}
            {description && <Styled.SectionDescription>{description}</Styled.SectionDescription>}
            {children}
        </Styled.SectionWrapper>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node
}

export default Section;