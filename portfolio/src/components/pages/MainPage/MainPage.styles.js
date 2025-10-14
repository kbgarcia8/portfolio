import styled from "styled-components";
import { v } from "styles/variables.js";
import Section from "components/molecules/Section";

export const MainPageWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding-block: ${v.spacing.medium};
    padding-inline: ${v.spacing.xxxlarge};
`;

export const AboutSection = styled(Section)`
    width: 100%;
    height: 50vh;
    border: 2px solid red;
`;

export const AboutSectionParagraph = styled.p`
    height: 60%;
    border: 2px solid blue;
`;