import styled from "styled-components";
import { v } from "styles/variables.js";
import { media } from "utils/utils";

export const ProjectCardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: ${v.borderThickness.light} solid ${({theme}) => theme.text};
    border-radius: ${v.borderRadius.medium};
    
    ${media.mobile`
        padding: ${v.spacing.xsmall};
    `}
`;

export const ProjectThumbnailContainer = styled.a`
    width: 100%;
    height: 50%;

    &:link{ 
        color: ${({theme})=>theme.text};
    }
    &:visited{ 
        color: ${({theme})=>theme.text};
    }
    &:hover{ 
        color: ${({theme})=>theme.teal};
    }
    &:active{ 
        color: ${({theme})=>theme.teal2};
    }

    & svg {
        width: 100%;
        height: 100%;
    }
`;

export const ProjectThumbnail = styled.img`
    width: 100%;
`;

export const ProjectTitle = styled.h4`
    display: flex;
    align-items: center;
    justify-content: center;
    ${media.mobile`
        height: 5%;
    `}
    ${media.tablet`
        height: 10%;
    `}
`;

export const ProjectDescription = styled.p`
    width: 100%;
    overflow-y: hidden;
    
    ${media.mobile`
        height: 50%;
        line-height: ${v.spacing.small};
        padding: ${v.spacing.xxsmall};
        font-size: ${v.fontSize.xxsmall};
        margin-bottom: 0;
    `}
    
`;