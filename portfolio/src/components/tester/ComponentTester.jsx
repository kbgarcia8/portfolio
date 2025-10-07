import React from "react";
import PropTypes from "prop-types";
import * as styled from './ComponentTester.styles.js';

const ComponentTester = ({ wideComponent, smallComponent }) => {

    return (
        <styled.TesterWrapper>
            <styled.WideComponent
                $wideComponentWidth={wideComponent?.width || ''}
                $wideComponentHeight={wideComponent?.height || ''}
            >{wideComponent?.element}</styled.WideComponent>
            <styled.SmallComponent
                $smallComponentWidth={smallComponent?.width || ''}
                $smallComponentHeight={smallComponent?.height || ''}
            >{smallComponent?.element}</styled.SmallComponent>
        </styled.TesterWrapper>
    )
}

ComponentTester.propTypes = {
    wideComponent: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
        element: PropTypes.node
    }),
    smallComponent:  PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
        element: PropTypes.node
    })
}

export default ComponentTester;