import React from "react";
import PropTypes from "prop-types";
import * as styled from './ProjectCard.styles.js';
import { FaSquareGithub } from "react-icons/fa6";

const ProjectCard = ({
    href,
    thumbnail,
    title,
    description,
    className
}) => {
    return(
        <styled.ProjectCardContainer className={className}>
            <styled.ProjectThumbnailContainer href={href}>
                {thumbnail ? <styled.ProjectThumbnail src={thumbnail}/> : <FaSquareGithub/>}
            </styled.ProjectThumbnailContainer>
            <styled.ProjectTitle>{title}</styled.ProjectTitle>
            <styled.ProjectDescription>{description}</styled.ProjectDescription>
        </styled.ProjectCardContainer>
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