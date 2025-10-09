import React from "react";
import PropTypes from "prop-types";
import * as styled from './ComponentTester.styles.js';

const ComponentTester = ({ wideComponents, smallComponents }) => {

    return (
        <styled.TesterWrapper>
            <styled.WideComponentSpace>
                {wideComponents?.map((component, index) => (
                    <styled.WideComponentContainer key={index}
                        $wideComponentWidth={component?.width || ''}
                        $wideComponentHeight={component?.height || ''}
                    >{component?.element}</styled.WideComponentContainer>
                ))}
            </styled.WideComponentSpace>
            <styled.SmallComponentSpace>
                {smallComponents?.map((component, index) => (
                    <styled.SmallComponentContainer key={index}
                        $smallComponentWidth={component?.width || ''}
                        $smallComponentHeight={component?.height || ''}
                    >{component?.element}</styled.SmallComponentContainer>
                ))}
            </styled.SmallComponentSpace>
        </styled.TesterWrapper>
    )
}

ComponentTester.propTypes = {
    wideComponent: PropTypes.arrayOf(
        PropTypes.shape({
            width: PropTypes.string,
            height: PropTypes.string,
            element: PropTypes.node
        })
    ),
    smallComponent:  PropTypes.arrayOf(
        PropTypes.shape({
            width: PropTypes.string,
            height: PropTypes.string,
            element: PropTypes.node
        })
    )
};

export default ComponentTester;