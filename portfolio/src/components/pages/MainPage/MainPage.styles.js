import styled from "styled-components";
import { v } from "styles/variables.js";
import Section from "components/molecules/Section";
import Button from "components/atoms/Button";
import StackCard from "components/molecules/StackCard";

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
        transform: translateY(-${v.spacing.small});
    }
`;

export const TechStackSection = styled(Section)`
    width: 100%;
    height: 50vh;
    border: 2px solid red;

    & h3 {
        font-size: ${v.fontSize.small};
    }
`;


export const StackContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: ${v.spacing.xxsmall};
`;