import styled from 'styled-components';
import { v } from 'styles/variables.js';
import Section from 'components/molecules/Section';
import Button from 'components/atoms/Button';
import { media } from 'utils/utils.js';

export const AboutPageWrapper = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    ${media.mobile`
        padding-block: ${v.spacing.medium};
        padding-inline: 0;
        width: 85%;
    `}
`;

export const HistorySection = styled(Section)`
    width: 100%;
    
    ${media.mobile`
        height: 80vh;
        margin-bottom: ${v.spacing.large};
    `}

    ${media.desktop`
        height: 70vh;
    `}
`;

export const HistoryParagraph = styled.p`
    width: 100%;
    height: 100%;
    white-space: pre-wrap;
    ${media.mobile`
        font-size: ${v.fontSize.xsmall};
        line-height: calc(${v.spacing.small} + 0.25rem);
        margin-bottom: 0;
    `}
    ${media.tablet`
        font-size: ${v.fontSize.small};
        line-height: 1.25rem;
    `}
    ${media.desktop`
        font-size: ${v.fontSize.medium};
        line-height: 1.5rem;
    `}
`;

export const PortfolioLink = styled.a`
    font-weight: ${v.fontWeight.bolder} !important;
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    transition: transform 0.3s ease;
    ${media.mobile`
        font-size: ${v.fontSize.small};
    `}
    ${media.desktop`
        font-size: ${v.fontSize.medium};
    `}

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
    ${media.mobile`
        height: 75vh;
        & h3 {
            font-size: ${v.fontSize.small};
        }
    `}
    ${media.tablet`
        height: 80vh;
        & h3 {
            font-size: ${v.fontSize.medium};
        }
    `}
    ${media.desktop`
        height: 70vh;
    `}
`;

export const ExperiencesSpace = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${v.spacing.small};
    ${media.mobile`
        justify-content: space-around;
        height: 85%;
        width: 85%;
    `}
    ${media.tablet`
        justify-content: space-between;
        height: 100%;
        width: 75%;
    `}
`;

export const ExperienceContainer = styled. div`
    width: 100%;
    display: flex;
    align-items: center;
    ${media.mobile`
        height: 15%;    
    `}
    ${media.tablet`
        height: 20%;    
    `}
`;

export const CompanyIconContainer = styled.div`
    width: 25%;
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
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: ${v.borderThickness.thin} solid ${({theme}) => theme.blue};
    border-radius: ${v.borderRadius.small};
    transition: transform 0.3s ease;

    & > * {
        margin: 0;
    }
    
    ${media.mobile`
        padding: ${v.spacing.xsmall};    
    `}
    ${media.tablet`
        padding: ${v.spacing.medium};    
    `}
`;

export const ExperienceTitle = styled.h4`
    width: 100%;
    height: 40%;
    
`;

export const ExperienceCompany = styled.h5`
    width: 100%;
    height: 45%;
    overflow: hidden;
`;

export const ExperienceDuration = styled.p`
    width: 100%;
    height: 15%;
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
    ${media.mobile`
        font-size: ${v.fontSize.xxsmall};
    `}
    ${media.tablet`
        font-size: ${v.fontSize.xsmall};
    `}
    
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${media.mobile`
        height: 7.5%;
    `}
    ${media.tablet`
        height: 10%;
    `}
`;

export const DownloadButton = styled(Button)`
    height: 100%;
    background-color: ${({theme})=>theme.teal};
    border-radius: ${v.borderRadius.xsmall};

    &:hover{
        background-color: ${({theme})=>theme.teal2};
        color: ${({theme})=>theme.text};
    }
    
    ${media.mobile`
        width: 75%;
        & span {
            font-size: ${v.fontSize.small};
        }
    `}
    ${media.tablet`
        width: 45%;
        & span {
            font-size: ${v.fontSize.medium};
        }
    `}
`;