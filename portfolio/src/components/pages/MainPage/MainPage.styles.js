import styled from "styled-components";
import { v } from "styles/variables.js";
import Section from "components/molecules/Section";
import Button from "components/atoms/Button";
import StackCard from "components/molecules/StackCard";
import ProjectCard from "components/molecules/ProjectCard";
import Form from "components/organisms/Form";

export const MainPageWrapper = styled.div`
    width: 70%;
    height: 100%;
    padding-block: ${v.spacing.medium};
    padding-inline: ${v.spacing.xxxlarge};
`;

export const AboutSection = styled(Section)`
    width: 100%;
    height: 50vh;
`;

export const AboutSectionParagraph = styled.p`
    height: 70%;
    line-height: 1.75rem;
`;

export const ViewButtonContainer = styled.div`
    height: 10%;
`;

export const ViewAbout = styled(Button)`
    &.view-about{
        background-color: ${({theme}) => theme.blue};
        height: 100%;
        width: 35%;
        border-radius: ${v.borderRadius.medium};
    }
    &:hover{
        background-color: ${({theme}) => theme.blue2};
    }
    & span {
        font-size: ${v.fontSize.small};
    }
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

export const TechStackSection = styled(Section)`
    width: 100%;
    height: 50vh;

    & h3 {
        font-size: ${v.fontSize.small};
    }
`;

export const StackContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: ${v.spacing.xxsmall};
`;

export const ProjectSection = styled(Section)`
    width: 100%;
    height: 100vh;
`;

export const ProjectCardContainer = styled.div`
    width: 100%;
    height: 95%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 50%);
    gap: ${v.spacing.xsmall};
    place-items: center;
`;

export const StyledProjectCard = styled(ProjectCard)`
    transition: transform 0.3s ease-in-out;
    width: 85%;
    height: 90%;

    &>*{
        cursor: pointer;
    }
    &:hover {
        transform: scale(1.125);
    }
`;

export const QuickContactSection = styled(Section)`
    width: 100%;
    height: 50vh;
`;

export const QuickContactForm = styled(Form)`
    width: 75%;
`;