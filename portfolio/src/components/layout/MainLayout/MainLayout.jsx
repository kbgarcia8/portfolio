import { React, useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import { getScrollbarWidth } from 'utils/utils.js'
import * as Styled from "./MainLayout.styles.js";
import PropTypes from "prop-types";

const MainLayout = ({header, footer}) => {

    const [scrollbarWidth, setScrollbarWidth] = useState(0);

    useEffect(() => {
        setScrollbarWidth(getScrollbarWidth());        
    }, []);

    return (
        <Styled.MainLayoutWrapper $scrollbarWidth={scrollbarWidth}>
            <Styled.MainLayoutHeader>{header}</Styled.MainLayoutHeader>
            <Styled.MainLayoutContent>
                <Outlet context={{}}/>
            </Styled.MainLayoutContent>
            <Styled.MainLayoutFooter>{footer}</Styled.MainLayoutFooter>
        </Styled.MainLayoutWrapper>
    )
}

export default MainLayout;

MainLayout.propTypes = {
    header: PropTypes.node.isRequired,
    footer: PropTypes.node.isRequired
}