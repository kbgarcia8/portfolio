import styled from "styled-components";
import { v } from "styles/variables.js";
import Section from "components/molecules/Section";
import Button from "components/atoms/Button";

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