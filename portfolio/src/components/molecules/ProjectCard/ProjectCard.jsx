import React from "react";
import PropTypes from "prop-types";
import * as styled from './ProjectCard.styles.js';
import { FaSquareGithub } from "react-icons/fa6";

const ProjectCard = ({
    thumbnail,
    title
}) => {
    return(
        <styled.ProjectCardContainer>
            <styled.ProjectThumbnailContainer>
                {thumbnail ? <styled.ProjectThumbnail src={thumbnail}/> : <FaSquareGithub/>}
            </styled.ProjectThumbnailContainer>
            <styled.ProjectTitle>{title}</styled.ProjectTitle>
        </styled.ProjectCardContainer>
    )
}

ProjectCard.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default ProjectCard;