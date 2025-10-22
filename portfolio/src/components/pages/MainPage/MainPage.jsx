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
            <styled.TechStackSection title={'Tech Stack'} description={'Colored boxes in each stack indicates proficiency 1 being the lowest and 5 the highest'}>
                <styled.StackContainer>
                    <styled.StyledStackCard text={'Perl'} icon={<SiPerl color="#FFFFFF"/>} bgColor={'#1981AA'} textColor={'#FFFFFF'}/>
                    <styled.StyledStackCard text={'Bash/Unix'} icon={<SiGnubash color="#FFFFFF"/>} bgColor={'gray'} textColor={'#FFFFFF'}/>
                    <styled.StyledStackCard text={'Python'} icon={<FaPython/>} bgColor={'#FFE873'}/>
                    <styled.StyledStackCard text={'Tcl'} icon={<FaFeatherAlt/>} bgColor={'#BADA55'}/>
                    <styled.StyledStackCard text={'JavaScript'} icon={<IoLogoJavascript/>} bgColor={'#F0DB4F'}/>
                    <styled.StyledStackCard text={'Google Apps Script'} icon={<SiGoogleappsscript color="#FFFFFF"/>} bgColor={'#EA4335'} textColor={'#FFFFFF'}/>
                    <styled.StyledStackCard text={'HTML5'} icon={<FaHtml5 color="#FFFFFF"/>} bgColor={'#F06529'} textColor={'#FFFFFF'}/>
                    <styled.StyledStackCard text={'CSS'} icon={<FaCss3 color="#FFFFFF"/>} bgColor={'#663399'} textColor={'#FFFFFF'}/>
                    <styled.StyledStackCard text={'ReactJS'} icon={<FaReact/>} bgColor={'#61DBFB'}/>
                    <styled.StyledStackCard text={'NodeJS'} icon={<FaNodeJs color="#FFFFFF"/>} bgColor={'#68A063'} textColor={'#FFFFFF'}/>
                    <styled.StyledStackCard text={'Git'} icon={<FaGitAlt color="#FFFFFF"/>} bgColor={'	#3E2C00'} textColor={'#FFFFFF'}/>
                    <styled.StyledStackCard text={'Vercel'} icon={<SiVercel color={`${currentTheme.bg}`}/>} bgColor={`${currentTheme.text}`} textColor={`${currentTheme.bg}`}/>
                    <styled.StyledStackCard text={'VSCode'} icon={<VscVscode color="#FFFFFF"/>} bgColor={'#007ACC'} textColor={'#FFFFFF'}/>
                    <styled.StyledStackCard text={'Firebase'} icon={<IoLogoFirebase color="#FFFFFF"/>} bgColor={'#FF9100'} textColor={'#FFFFFF'}/>
                    <styled.StyledStackCard text={'PostgreSQL'} icon={<BiLogoPostgresql color="#FFFFFF"/>} bgColor={'#336791'} textColor={'#FFFFFF'}/>
                    <styled.StyledStackCard text={'Prisma ORM'}icon={<SiPrisma color="#FFFFFF"/>} bgColor={'#EA3E3C'} textColor={'#FFFFFF'}/>
                </styled.StackContainer>
            </styled.TechStackSection>
        </styled.MainPageWrapper>
    )
}

export default MainPage;