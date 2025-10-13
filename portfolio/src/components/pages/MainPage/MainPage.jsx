import React from "react";
import PropTypes from "prop-types";
import * as styled from './MainPage.styles.js';

const MainPage = () => {
    return (
        <styled.MainPageWrapper>
            <styled.AboutSection title={'Hi, I\'m Karl Brian Garcia'} description={'Characterization/Design Engineer | Self-learning full stack developer'}>
                <styled.AboutSectionParagraph>
                    `Im currently working as a Design Engineer in Xinyx, a semiconductor industry. I was introduced with Bash and Perl scripts
                    `
                </styled.AboutSectionParagraph>
            </styled.AboutSection>
        </styled.MainPageWrapper>
    )
}

export default MainPage;