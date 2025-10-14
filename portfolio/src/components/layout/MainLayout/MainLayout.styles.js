import styled from 'styled-components'
import { v } from 'styles/variables.js';

export const MainLayoutWrapper = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    width: ${(props) => `calc(100vw - ${props.$scrollbarWidth}px)`};
    gap: 0;
    background-color: ${({theme}) => theme.bg};
`;

export const MainLayoutHeader = styled.header`
    width: 100%;
    height: 10vh;
    position: relative;
    top: 0;
    grid-row: 1/2;
`;

export const MainLayoutContent = styled.main`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 50vh;
    overflow-y: auto;
    grid-row: 2/3;
`;

export const MainLayoutFooter = styled.footer`
    width: 100%;
    height: 7.5vh;
    position: relative;
    bottom: 0;
    grid-row: 3/4;
`;

export default { MainLayoutWrapper, MainLayoutHeader, MainLayoutContent, MainLayoutFooter };