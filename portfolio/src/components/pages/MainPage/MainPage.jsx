import React from "react";
import PropTypes from "prop-types";
import * as styled from './MainPage.styles.js';

const aboutSectionParagraph = `I'm currently working as a Design Engineer at Xinyx, a semiconductor company with the main task of 
delivering simulation data of integrated circuits in files with thousands of lines of data. I was introduced to Bash, Perl and Python
in my current job since we need file handling and scripts to verify correctness and integrity of our deliverables before delivering
to our client. This led me to create mini-scripts to automate daily tasks (e.g. creating directory structures, copying, and generating files).
Eventually this 'automation' led to developing Python-based CLI tools which piqued my interest further in programming. I ventured into Web
Development using The Odin Project as a guide since I am curious on how things work programmatically. Now I'm starting to build mini projects
with the goal of shifting into the tech industry as a Full Stack or Software Developer`;

const MainPage = () => {
    return (
        <styled.MainPageWrapper>
            <styled.AboutSection title={'Hi, I\'m Karl Brian Garcia'} description={'Characterization/Design Engineer | Self-learning full stack developer'}>
                <styled.AboutSectionParagraph>
                    {aboutSectionParagraph}
                </styled.AboutSectionParagraph>
            </styled.AboutSection>
        </styled.MainPageWrapper>
    )
}

export default MainPage;