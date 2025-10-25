import React from "react";
import PropTypes from "prop-types";
import Divider from "components/atoms/Divider";
import * as styled from './MainPage.styles.js';
import { useTheme } from "context/ThemeContext.jsx";
/* Icons */
import { FaPython } from "react-icons/fa6";
import { SiGnubash, SiPerl, SiGoogleappsscript, SiVercel, SiPrisma } from "react-icons/si";
import { FaFeatherAlt, FaHtml5, FaCss3, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";

const aboutSectionParagraph = `I'm currently working as a Design Engineer at Xinyx, a semiconductor company with the main task of 
delivering simulation data of integrated circuits in files with thousands of lines of data. I was introduced to Bash, Perl and Python
in my current job since we need file handling and scripts to verify correctness and integrity of our deliverables before delivering
to our client. This led me to create mini-scripts to automate daily tasks (e.g. creating directory structures, copying, and generating files).
Eventually this 'automation' led to developing Python-based CLI tools which piqued my interest further in programming. I ventured into Web
Development using The Odin Project as a guide since I am curious on how things work programmatically. Now I'm starting to build mini projects
with the goal of shifting into the tech industry as a Full Stack or Software Developer.`;

const MainPage = () => {

    const {currentTheme} = useTheme();

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
            <styled.TechStackSection title={'Tech Stack'} description={'Colored boxes in each stack indicates proficiency: 1 - Basic Knowledge 2 - Minimal experience and limited Proficiency 3 - Intermediate Proficiency 4 - High Proficiency 5 - Expert Proficiency'}>
                <styled.StackContainer>
                    <styled.StyledStackCard rating={3} text={'Perl'} icon={<SiPerl/>} bgColor={'#1981AA'} textColor={`${currentTheme.bg}`}/>
                    <styled.StyledStackCard rating={4} text={'Bash/Unix'} icon={<SiGnubash/>} bgColor={'gray'} textColor={`${currentTheme.bg}`}/>
                    <styled.StyledStackCard rating={3} text={'Python'} icon={<FaPython/>} bgColor={'#FFE873'}/>
                    <styled.StyledStackCard rating={2} text={'Tcl'} icon={<FaFeatherAlt/>} bgColor={'#BADA55'}/>
                    <styled.StyledStackCard rating={3} text={'JavaScript'} icon={<IoLogoJavascript/>} bgColor={'#F0DB4F'}/>
                    <styled.StyledStackCard rating={2} text={'Google Apps Script'} icon={<SiGoogleappsscript/>} bgColor={'#EA4335'} textColor={`${currentTheme.bg}`}/>
                    <styled.StyledStackCard rating={3} text={'HTML5'} icon={<FaHtml5/>} bgColor={'#F06529'} textColor={`${currentTheme.bg}`}/>
                    <styled.StyledStackCard rating={3} text={'CSS'} icon={<FaCss3/>} bgColor={'#663399'} textColor={`${currentTheme.bg}`}/>
                    <styled.StyledStackCard rating={2} text={'ReactJS'} icon={<FaReact/>} bgColor={'#61DBFB'}/>
                    <styled.StyledStackCard rating={2} text={'NodeJS'} icon={<FaNodeJs/>} bgColor={'#68A063'} textColor={`${currentTheme.bg}`}/>
                    <styled.StyledStackCard rating={1} text={'Git'} icon={<FaGitAlt/>} bgColor={'	#3E2C00'} textColor={`${currentTheme.bg}`}/>
                    <styled.StyledStackCard rating={1} text={'Vercel'} icon={<SiVercel color={`${currentTheme.bg}`}/>} bgColor={`${currentTheme.text}`} textColor={`${currentTheme.bg}`}/>
                    <styled.StyledStackCard rating={2} text={'VSCode'} icon={<VscVscode/>} bgColor={'#007ACC'} textColor={`${currentTheme.bg}`}/>
                    <styled.StyledStackCard rating={1} text={'Firebase'} icon={<IoLogoFirebase/>} bgColor={'#FF9100'} textColor={`${currentTheme.bg}`}/>
                    <styled.StyledStackCard rating={2} text={'PostgreSQL'} icon={<BiLogoPostgresql/>} bgColor={'#336791'} textColor={`${currentTheme.bg}`}/>
                    <styled.StyledStackCard rating={2} text={'Prisma ORM'}icon={<SiPrisma/>} bgColor={'#EA3E3C'} textColor={`${currentTheme.bg}`}/>
                </styled.StackContainer>
            </styled.TechStackSection>
            <Divider/>
            <styled.ProjectSection title={'Personal Projects'} description={'Projects I have completed during my self-learning journey.'}>
                <styled.ProjectCardContainer>
                    <styled.StyledProjectCard title={'Mockup Project 1'} description={'This is a mockup project card and to be filled with a real project in the future'}/>
                    <styled.StyledProjectCard title={'Mockup Project 2'} description={'This is a mockup project card and to be filled with a real project in the future'}/>
                    <styled.StyledProjectCard title={'Mockup Project 3'} description={'This is a mockup project card and to be filled with a real project in the future'}/>
                    <styled.StyledProjectCard title={'Mockup Project 4'} description={'This is a mockup project card and to be filled with a real project in the future'}/>
                </styled.ProjectCardContainer>
            </styled.ProjectSection>
        </styled.MainPageWrapper>
    )
}

export default MainPage;