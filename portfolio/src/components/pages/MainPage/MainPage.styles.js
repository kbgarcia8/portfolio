import styled from "styled-components";
import { v } from "styles/variables.js";
import Section from "components/molecules/Section";
import Button from "components/atoms/Button";
import StackCard from "components/molecules/StackCard";
import ProjectCard from "components/molecules/ProjectCard";
import Form from "components/organisms/Form";
import { media } from "utils/utils.js";

export const MainPageWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    ${media.mobile`
        padding-block: ${v.spacing.medium};
        padding-inline: ${v.spacing.small};
    `}
    ${media.tablet`
        padding-block: ${v.spacing.large};
        padding-inline: ${v.spacing.large};
    `}
    ${media.desktop`
        padding-block: ${v.spacing.xlarge};
        padding-inline: ${v.spacing.xxxlarge};
    `}
`;

export const AboutSection = styled(Section)`
    ${media.mobile`
        flex: 5;
        width: 100%;
    `}
    ${media.desktop`
        flex: 4;
        width: 75;
    `}
`;

export const AboutSectionParagraph = styled.p`
    flex: 1;
    ${media.mobile`
        padding-top: ${v.spacing.small};
        font-size: calc(${v.fontSize.xsmall} + 0.10rem);
    `}
    ${media.tablet`
        font-size: calc(${v.fontSize.small} + 0.1rem);
        line-height: calc(${v.spacing.large} + 0.1rem);
    `}
    ${media.desktop`
        font-size: ${v.fontSize.medium};
        line-height: calc(${v.spacing.large} + 0.5rem);
    `}
`;

export const ViewButtonContainer = styled.div`
    ${media.mobile`
        height: 7.5%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ${media.tablet`
        height: 10%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`;

export const ViewAbout = styled(Button)`
    &.view-about{
        background-color: ${({theme}) => theme.blue};
        height: 100%;
        border-radius: ${v.borderRadius.medium};
    }
    &:hover{
        background-color: ${({theme}) => theme.blue2};
    }
    
    ${media.mobile`
        width: 75%;
        & span {
            font-size: ${v.fontSize.small};
        }
    `}
    ${media.tablet`
        width: 50%;
        & span {
            font-size: calc(${v.fontSize.medium} - 0.1rem);
        }
    `}
`;

export const TechStackSection = styled(Section)`
    width: 100%;
    
    ${media.mobile`
        flex: 5;
        & h3 {
            font-size: calc(${v.fontSize.xsmall} + 0.15rem);
            margin-bottom: ${v.spacing.medium};
        }
    `}
    ${media.tablet`
        flex: 3;
    `}
`;

export const StackContainer = styled.div`
    width: 100%;
    flex: 2;
    display: grid;
    grid-template-rows: auto;
    ${media.mobile`
        grid-template-columns: repeat(3, 1fr);
        gap: ${v.spacing.xxsmall};
    `}
    ${media.tablet`
        grid-template-columns: repeat(4, 1fr);
        gap: ${v.spacing.small};
    `}
    
`;

export const StyledStackCard = styled(StackCard)`
    transition: transform 0.3s ease-in-out;

    &>*{
        cursor: pointer;
    }
    &:hover {
        transform: translateY(-${v.spacing.xsmall});
    }
`;

export const ProjectSection = styled(Section)`
    width: 100%;
    
    ${media.mobile`
        flex: 5;
    `}

    ${media.desktop`
        
    `}
`;

export const ProjectCardContainer = styled.div`
    width: 100%;
    flex: 2;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 50%);
    gap: ${v.spacing.xsmall};
    place-items: center;

    ${media.mobile`
        height: 80%;    
    `}
`;

export const StyledProjectCard = styled(ProjectCard)`
    transition: transform 0.3s ease-in-out;
    width: 85%;
    height: 90%;

    &>*{
        cursor: pointer;
    }
    ${media.mobile`
         &:hover {
            transform: scale(1.0625);
        }    
    `}
    ${media.tablet`
         &:hover {
            transform: scale(1.125);
        }    
    `}
`;

export const QuickContactSection = styled(Section)`
    width: 100%;

    ${media.mobile`
        flex: 5;
    `}

    ${media.desktop`
        
    `}
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
        line-height: normal;
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