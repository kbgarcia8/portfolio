import { createGlobalStyle } from 'styled-components';
import { v } from './variables.js';
import comfortaa from 'fonts/Comfortaa-Regular.ttf';
import lato from 'fonts/Lato-Regular.ttf';
import raleway from 'fonts/Raleway-Regular.ttf';
import proxima from 'fonts/Proximanova-Regular.ttf';
import { lightTheme, darkTheme } from './theme.js';
import { media } from 'utils/utils.js';

// ? rem comes from root size which is in html
// ! Scalable font-size should be in html only and not in body

// ! FLEXBOX LAYOUT RULES — IMPORTANT
// * Always apply `display: flex` to the PARENT, never the children.
// * When building UI layouts, use `flex-direction: column` for vertical stacking.

// ? CHILD FLEX RULE
// * Children can use `flex: <n>`
// * The value <n> represents how much of the available space the child should take.
// ? Example:
//      flex: 1   → takes “1 part” of the available height
//      flex: 2   → takes “2 parts”, meaning twice the height of a flex: 1 sibling
// ? Think of the parent as being divided into fractions:
//      If children use flex: 1, 2, 1 → total = 4 parts
//      Each child gets height based on its ratio of the total.
//
// * flex: <n> is extremely useful for orientation changes (mobile → desktop)
// * Because the fractions automatically recalc when screen size changes.

// ! WHAT NOT TO DO
// * Do NOT put `display: flex` on html or body for general page layout.
//     → This causes weird centering, collapsing widths, and unexpected spacing.
// * Instead, put layout flex rules in the top-level container (ex: #root or App wrapper).

// ! BODY + HTML BEST PRACTICES
// * html → only set font-size and global resets
// * body → avoid flex; just set margin: 0 and min-height: 100vh
// * #root or main container → handle all flex-based page layout

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
    ${media.mobile`
        font-size: ${v.fontSize.xlarge};
        margin-bottom: ${v.spacing.small};
    `}
    ${media.desktop`
        font-size: ${v.fontSize.xxxlarge};
        margin-bottom: ${v.spacing.medium};
    `}
}
h3 {
    ${media.mobile`
        font-size: ${v.fontSize.large};
        margin-bottom: ${v.spacing.xsmall};
    `}
    ${media.desktop`
        font-size: ${v.fontSize.xxlarge};
        margin-bottom: ${v.spacing.small};
    `}
}
h4 {
    ${media.mobile`
        font-size: ${v.fontSize.xsmall};
        margin-bottom: ${v.spacing.xxsmall};
    `}
    ${media.tablet`
        font-size: ${v.fontSize.medium};
        margin-bottom: ${v.spacing.xsmall};
    `}
    ${media.desktop`
        font-size: ${v.fontSize.large};
        margin-bottom: ${v.spacing.medium};
    `}
}
h5 {
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
    ${media.mobile`
        font-size: ${v.fontSize.xsmall};
        margin-bottom: 0;
    `}
    ${media.tablet`
        font-size: ${v.fontSize.small};
        margin-bottom: ${v.spacing.xsmall};
    `}
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