import styled from 'styled-components'
// //import { v } from 'styles/variables.js';
import { media } from 'utils/utils.js';

export const MainLayoutWrapper = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    height: auto;
    width: ${(props) => `calc(100vw - ${props.$scrollbarWidth}px)`};
    gap: 0;
    background-color: ${({theme}) => theme.bg};
`;

export const MainLayoutHeader = styled.header`
    position: relative;
    top: 0;
    grid-row: 1/2;
    width: 100%;
    ${media.mobile`
        min-height: 7.5vh;
    `}
    ${media.desktop`
        min-height: 7.5vh;
    `}
`;

export const MainLayoutContent = styled.main`
    display: flex;
    width: 100%;
    min-height: 100vh;
    grid-row: 2/3;
`;

export const MainLayoutFooter = styled.footer`
    width: 100%;
    position: relative;
    bottom: 0;
    grid-row: 3/4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${media.mobile`
        min-height: 5vh;
    `}
    ${media.tablet`
        min-height: 10vh;
    `}    
`;

export default { MainLayoutWrapper, MainLayoutHeader, MainLayoutContent, MainLayoutFooter };