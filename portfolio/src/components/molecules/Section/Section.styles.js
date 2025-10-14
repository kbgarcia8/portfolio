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
    font-weight: ${v.fontWeight.bolder};
`;

export const SectionDescription = styled.h3`
    text-align: left;
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
`;