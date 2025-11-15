import React from "react";
import PropTypes from "prop-types";
import * as Styled from './ProjectCard.styles.js';
import { FaSquareGithub } from "react-icons/fa6";

const ProjectCard = ({
    href,
    thumbnail,
    title,
    description,
    className
}) => {
    return(
        <Styled.ProjectCardContainer className={className}>
            <Styled.ProjectThumbnailContainer href={href}>
                {thumbnail ? <Styled.ProjectThumbnail src={thumbnail}/> : <FaSquareGithub/>}
            </Styled.ProjectThumbnailContainer>
            <Styled.ProjectTitle>{title}</Styled.ProjectTitle>
            <Styled.ProjectDescription>{description}</Styled.ProjectDescription>
        </Styled.ProjectCardContainer>
    )
}

ProjectCard.propTypes = {
    href: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default ProjectCard;