import { createGlobalStyle } from 'styled-components';
import { v } from './variables.js';
import comfortaa from 'fonts/Comfortaa-Regular.ttf';
import lato from 'fonts/Lato-Regular.ttf';
import raleway from 'fonts/Raleway-Regular.ttf';
import proxima from 'fonts/Proximanova-Regular.ttf';
import { lightTheme, darkTheme } from './theme.js';

//INFO: rem comes from root size which is in html
//ALERT: Scalable font-size should be in html only and not in body

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

@font-face {
    font-family: 'Comfortaa';
    font-weight: normal;
    font-style: normal;
    src: url('${comfortaa}') format('truetype');
}

@font-face {
    font-family: 'Lato';
    font-weight: normal;
    font-style: normal;
    src: url('${lato}') format('truetype');
}

@font-face {
    font-family: 'Raleway';
    font-weight: normal;
    font-style: normal;
    src: url('${raleway}') format('truetype');
}

@font-face {
    font-family: 'Proxima';
    font-weight: normal;
    font-style: normal;
    src: url('${proxima}') format('truetype');
}

html {
    font-size: clamp(${v.base.fontSize}, 1vw + 8px, 18px);
}

body {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

h1, h2, h3, h4, form, legend {
    font-family: ${v.fonts.primary}, ${v.fonts.fallback};
    line-height: ${v.base.lineHeight};
    color: ${({theme}) => theme.text};
}

p, label, input, button {
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    line-height: ${v.base.lineHeight};
    color: ${({theme}) => theme.text};
}
h5, h6, legend {
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
    line-height: ${v.base.lineHeight};
}

h1 {
    font-size: ${v.fontSize.xxlarge};
    margin-bottom: ${v.spacing.medium};
}
h2 {
    font-size: ${v.fontSize.xlarge};
    margin-bottom: ${v.spacing.small};
}
h3 {
    font-size: ${v.fontSize.large};
    margin-bottom: ${v.spacing.xsmall};
}
h4 {
    font-size: ${v.fontSize.medium};
    margin-bottom: ${v.spacing.xsmall};
}
h5 {
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
    font-size: ${v.fontSize.small};
    margin-bottom: ${v.spacing.xsmall};
}
p {
    font-size: ${v.fontSize.small};
}
ul,ol,p{
    margin-bottom: ${v.spacing.medium};
}

/* include a style for <a> or Link for link color and visited */

b, strong {
    font-weight: ${v.fontWeight.bold}
}
ul,ol{
    list-style-type: none;
}

ul li, ol li {
    line-height: ${v.base.lineHeight};
}
    
em {
    font-style: italic;
}

u {
    text-decoration: underline;
}


#root{
    padding: 0;
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    place-items: center;
}

/* Style for toast-react */
    .Toastify__toast {
        border-radius: ${v.borderRadius.small};
        padding: ${v.spacing.small};
        font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    }
    
    ${({ theme }) => theme.name === 'light' && `
        .Toastify__toast--success {
            background-color: ${darkTheme.success};
            color: ${lightTheme.success};
        }
        .Toastify__toast--error {
            background-color: ${darkTheme.error};
            color: ${lightTheme.error};
        }
        .Toastify__toast--warning {
            background-color: ${darkTheme.warning};
            color: ${lightTheme.warning};
        }
        .Toastify__toast--info {
            background-color: ${darkTheme.information};
            color: ${lightTheme.information};
        }
    `}

    ${({ theme }) => theme.name === 'dark' && `
        .Toastify__toast--success {
            background-color: ${lightTheme.success};
            color: ${darkTheme.success};
        }
        .Toastify__toast--error {
            background-color: ${lightTheme.error};
            color: ${darkTheme.error};
        }
        .Toastify__toast--warning {
            background-color: ${lightTheme.warning};
            color: ${darkTheme.warning};
        }
        .Toastify__toast--info {
            background-color: ${lightTheme.information};
            color: ${darkTheme.information};
        }
    `}
`;

export default GlobalStyle;