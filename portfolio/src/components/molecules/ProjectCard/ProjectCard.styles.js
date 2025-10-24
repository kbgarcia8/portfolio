import styled from "styled-components";
import { v } from "styles/variables.js";

export const ProjectCardContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const ProjectThumbnailContainer = styled.a`
    width: 100%;
    height: 50%;

    & svg {
        width: 100%;
    }
`;

export const ProjectThumbnail = styled.img`
    width: 100%;
`;

export const ProjectTitle = styled.h4`
    display: flex;
    align-items: center;
    justify-content: center;
`;