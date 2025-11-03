import styled from 'styled-components';
import { v } from 'styles/variables.js';
import Section from 'components/molecules/Section';
import Button from 'components/atoms/Button';

export const AboutPageWrapper = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-block: ${v.spacing.medium};
    padding-inline: ${v.spacing.xxlarge};
`;

export const HistorySection = styled(Section)`
    width: 100%;
    height: 85vh;
`;

export const HistoryParagraph = styled.p`
    width: 100%;
    white-space: pre-wrap;
    font-size: ${v.fontSize.medium};
`;

export const PortfolioLink = styled.a`
    font-size: ${v.fontSize.medium};
    font-weight: ${v.fontWeight.bolder} !important;
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    transition: transform 0.3s ease;

    &:hover {
        color: ${({theme}) => theme.teal} !important;
        display: inline-block;
        transform: translateY(10px) scale(1.125);
    }

    &:visited,
    &:link {
        color: ${({theme}) => theme.text};
    }

    &:active {
        color: ${({theme}) => theme.teal};
    }
`;

export const ExperienceSection = styled(Section)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;

    & h3 {
        font-size: ${v.fontSize.medium};
        margin-top: ${v.spacing.small};
    }
`;

export const ExperiencesSpace = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 75%;
    height: 100%;
    margin-top: ${v.spacing.small};
`;

export const ExperienceContainer = styled. div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
`;

export const CompanyIconContainer = styled.div`
    width: 20%;
    height: 100%;
    margin-right: 7.5%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: ${v.borderRadius.large};
    padding: ${v.spacing.xxsmall};

    & img {
        width: 100%;
        height: 100%;
    }

    &:hover + div {
        transform: scale(1.125);
    }
`;

export const ExperienceInformation = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: ${v.borderThickness.thin} solid ${({theme}) => theme.blue};
    border-radius: ${v.borderRadius.small};
    padding: ${v.spacing.medium};
    transition: transform 0.3s ease;

    & > * {
        margin: 0;
    }
`;

export const ExperienceTitle = styled.h4`
    width: 100%;
    height: 50%;
`;

export const ExperienceCompany = styled.h5`
    width: 100%;
    height: 35%;
`;

export const ExperienceDuration = styled.p`
    width: 100%;
    height: 15%;
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
    font-size: ${v.fontSize.xsmall};
`;

export const ButtonContainer = styled.div`
    width: 100%;
    height: 7.5%;
    display: flex;
    align-items: center;
    border: 2px solid red;
`;

export const DownloadButton = styled(Button)`
    width: 45%;
    height: 100%;
`;