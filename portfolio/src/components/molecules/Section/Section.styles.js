import styled from "styled-components";
import { v } from "styles/variables.js";

export const SectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: ${v.spacing.medium};
`;

export const SectionTitle = styled.h2`
    text-align: left;
`;

export const SectionDescription = styled.p`
    text-align: left;
`;