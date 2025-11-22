import styled from "styled-components";
import { v } from "styles/variables.js";
import Section from "components/molecules/Section";
import Form from "components/organisms/Form";
import { Link } from "react-router-dom";
import { media } from "utils/utils.js";

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

export const ContactPageWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    ${media.mobile`
        padding-block: ${v.spacing.medium};
        padding-inline: ${v.spacing.small};
        width: 85%;
    `}
    ${media.tablet`
        padding-block: ${v.spacing.large};
        padding-inline: ${v.spacing.large};
        width: 75%;
    `}
    ${media.desktop`
        padding-block: ${v.spacing.xlarge};
        padding-inline: ${v.spacing.xxxlarge};
    `}
`;

export const ContactSection = styled(Section)`
    width: 100%;
    flex: 1;
    ${media.mobile`
        & h3 {
            font-size: ${v.fontSize.small};
            margin-top: ${v.spacing.small};
        }
    `}
    ${media.tablet`

        & h3 {
            font-size: ${v.fontSize.medium};
            margin-top: ${v.spacing.medium};
        }
    `}
`;

export const ContactSpace = styled.div`
    width: 100%;
    display: grid;
    ${media.mobile`
        height: 75%;
        gap: ${v.spacing.small};
        grid-template-rows: repeat(5, 20%);
    `}
    ${media.tablet`
        height: 100%;
        gap: ${v.spacing.medium};
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 25%);
    `}
`;

export const ContactContainer = styled(Link)`
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: ${v.spacing.small};
    color: ${({theme}) => theme.text};
    text-decoration: none;
`;

export const IconContainer = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    align-content: center;
    
    & svg {
        width: 100%;
        height: 100%;
    }
`;

export const InformationContainer = styled.div`
    width: 75%;
    height: 100%;
    margin-left: ${v.spacing.small};
    padding: ${v.spacing.xxsmall};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InformationTitle = styled.p`
    display: flex;
    align-items: center;
    height: 50%;
    width: 100%;
    font-weight: ${v.fontWeight.bolder};
    font-size: ${v.fontSize.medium};
    font-family: ${v.fonts.tertiary};
    margin: 0;
`;

export const Information = styled(InformationTitle)`
    padding-top: ${v.spacing.xxsmall};
    font-family: ${v.fonts.primary};
    font-weight: ${v.fontWeight.light};
    font-size: ${v.fontSize.small};
`;

export const QuickContactSection = styled(Section)`
    width: 100%;
    flex: 1;
`;

export const QuickContactForm = styled(Form)`
    width: 100%;
    ${media.mobile`
            height: 85%;
    `}

    .contact-label-input-container{
        width: 85%;
        height: 15%;
        padding-left: ${v.spacing.medium};
    }

    & label {
        align-items: flex-start;
    }
    
    .contact-me-form-inputs {
        width: 85%;
        height: 100%;
        font-size: ${v.fontSize.small};
        border: none;
        outline: none;
        background-color: ${({theme}) => theme.bg};
        border-bottom: ${v.borderThickness.medium} solid ${({theme}) => theme.text};
    }

    .contact-me-form-inputs:hover{
        border-bottom: ${v.borderThickness.medium} solid ${({theme}) => theme.blue2};
    }

    .form-fieldset{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        border-radius: ${v.borderRadius.small};
        border: ${v.borderThickness.light} solid ${({theme})=>theme.text};
    }
    .form-fieldset:hover{
        border-color: ${({theme}) => theme.blue};
    }

    .description-textarea{
        height: 25%;
    }
    
    .form-main-button-container{
        justify-content: center;
        align-items: center;
        height: 10%;

        & button {
            height: 100%;
            width: 35%;
            border-radius: ${v.borderRadius.small};

            & span {
                font-size: ${v.fontSize.small};
            }
        }
    }
`;