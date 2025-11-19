import styled from "styled-components";
import { v } from "styles/variables.js";
import Section from "components/molecules/Section";
import Form from "components/organisms/Form";
import { Link } from "react-router-dom";
import { media } from "utils/utils.js";

export const ContactPageWrapper = styled.div`
    width: 70%;
    height: 100%;
    padding-block: ${v.spacing.medium};
    padding-inline: ${v.spacing.xxlarge};
`;

export const ContactSection = styled(Section)`
    width: 100%;
    height: 55vh;

    & h3 {
        font-size: ${v.fontSize.medium};
        margin-top: ${v.spacing.medium};
    }
`;

export const ContactSpace = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 25%);
    gap: ${v.spacing.medium};
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
    width: 12.5;
    height: 100%;
    display: flex;
    align-content: center;

    & svg {
        width: 100%;
        height: 100%;
    }
`;

export const InformationContainer = styled.div`
    width: 65%;
    height: 100%;
    padding-left: ${v.spacing.small};
`;

export const InformationTitle = styled.p`
    display: flex;
    align-items: center;
    height: 50%;
    width: 100%;
    font-weight: ${v.fontWeight.bolder};
    font-size: ${v.fontSize.medium};
    margin-bottom: ${v.spacing.small};
    font-family: ${v.fonts.tertiary};  
`;

export const Information = styled(InformationTitle)`
    padding-top: ${v.spacing.xxsmall};
    font-family: ${v.fonts.primary};
    font-weight: ${v.fontWeight.light};
    font-size: ${v.fontSize.small};
`;

export const QuickContactSection = styled(Section)`
    width: 100%;
    height: 75vh;
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