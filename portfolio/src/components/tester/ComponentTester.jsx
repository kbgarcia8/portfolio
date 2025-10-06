import React from "react";
import PropTypes from "prop-types";
import * as styled from './ComponentTester.styles.js';

const ComponentTester = ({ wideComponent }) => {

    return (
        <styled.TesterWrapper>
            <styled.WideComponent
                $wideComponentWidth={wideComponent.width}
                $wideComponentHeight={wideComponent.height}
            >{wideComponent.element}</styled.WideComponent>
        </styled.TesterWrapper>
    )
}

ComponentTester.propTypes = {
    children: PropTypes.node.isRequired
}

export default ComponentTester;

ComponentTester.PropTypes ={
    wideComponent: PropTypes.object
}