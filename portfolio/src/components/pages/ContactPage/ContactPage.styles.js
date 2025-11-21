import styled from "styled-components";
import { v } from "styles/variables.js";
import Section from "components/molecules/Section";
import Form from "components/organisms/Form";
import { Link } from "react-router-dom";
import { media } from "utils/utils.js";

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
    border: 2px solid red;
`;

export const IconContainer = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    align-content: center;
    border: 2px solid red;
    
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
    border: 2px solid blue;
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
    border: 2px solid red; 
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