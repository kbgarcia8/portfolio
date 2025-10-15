import React from "react";
import PropTypes from "prop-types";
import Divider from "components/atoms/Divider";
import * as styled from './MainPage.styles.js';
import StackCard from "components/molecules/StackCard";

const aboutSectionParagraph = `I'm currently working as a Design Engineer at Xinyx, a semiconductor company with the main task of 
delivering simulation data of integrated circuits in files with thousands of lines of data. I was introduced to Bash, Perl and Python
in my current job since we need file handling and scripts to verify correctness and integrity of our deliverables before delivering
to our client. This led me to create mini-scripts to automate daily tasks (e.g. creating directory structures, copying, and generating files).
Eventually this 'automation' led to developing Python-based CLI tools which piqued my interest further in programming. I ventured into Web
Development using The Odin Project as a guide since I am curious on how things work programmatically. Now I'm starting to build mini projects
with the goal of shifting into the tech industry as a Full Stack or Software Developer.`;

const MainPage = () => {
    return (
        <styled.MainPageWrapper>
            <styled.AboutSection title={'Hi, I\'m Karl Brian Garcia'} description={'Characterization/Design Engineer | Self-learning full stack developer'}>
                <styled.AboutSectionParagraph>
                    {aboutSectionParagraph}
                </styled.AboutSectionParagraph>
                <styled.ViewButtonContainer>
                    <styled.ViewAbout className={'view-about'} text={"View more information"}/>
                </styled.ViewButtonContainer>
            </styled.AboutSection>
            <Divider/>
            <styled.TechStackSection title={'Tech Stack'} description={'Colored boxes each stack indicates proficiency 1 being the lowest and 5 the highest'}>
                <styled.StackContainer>
                    <styled.StyledStackCard text={'Perl'} bgColor={'	#1981AA'}/>
                    <styled.StyledStackCard text={'Bash'} bgColor={'gray'}/>
                    <styled.StyledStackCard text={'Python'} bgColor={'yellow'}/>
                </styled.StackContainer>
            </styled.TechStackSection>
        </styled.MainPageWrapper>
    )
}

export default MainPage;