import React from "react";
import emailjs from 'emailjs-com';
import Divider from "components/atoms/Divider";
import * as Styled from './MainPage.styles.js';
import { useTheme } from "context/ThemeContext.jsx";
import { useNavigate } from "react-router-dom";
//* Icons
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

const inputs = [
    { 
        label: "Name",
        additionalInfo: "",
        direction: "row",
        id: "name",
        placeholder: "Name of Sender",
        icon: '',
        value: "",
        type: "text",
        required: true,
        disabled: false,
        checked: false,
        pattern: "",
        rows: "",
        cols: ""
    },
    { 
        label: "Email",
        additionalInfo: "",
        direction: "row",
        id: "email",
        placeholder: "Email of Sender",
        icon: '',
        value: "",
        type: "email",
        required: true,
        disabled: false,
        checked: false,
        pattern: "",
        rows: "",
        cols: ""
    },
    { 
        label: "Project Title or Subject",
        additionalInfo: "",
        direction: "row",
        id: "title",
        placeholder: "Project Title or Subject",
        icon: '',
        value: "",
        type: "text",
        required: true,
        disabled: false,
        checked: false,
        pattern: "",
        rows: "",
        cols: ""
    },
    { 
        uniqueClass: "description-textarea",
        label: "Project Description or Message",
        additionalInfo: "",
        direction: "row",
        id: "description",
        placeholder: "Description or message",
        icon: '',
        type: "textarea",
        required: true,
        disabled: false,
        checked: false,
        pattern: "",
        rows: "20",
        cols: ""
    }
];

const initialContactFormValues = {
    'name': '',
    'email': '',
    'title': '',
    'description': ''
}

//* Email JS Variables
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const autoReplyTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_AUTO_REPLY;
const notifyMeTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_OWNER_NOTIFICATION;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


const MainPage = () => {

    const {currentTheme} = useTheme();
    const navigate = useNavigate();

    const [contactFormValues,setContactFormValues] = React.useState(initialContactFormValues);
    const [debouncedContactFormValues, setDebouncedContactFormValues] = React.useState(initialContactFormValues);

    const handleContactFormChange = React.useCallback((e) => {
        const { keyname } = e.currentTarget.dataset;
        const currentValue = e.currentTarget.value;

        setContactFormValues(prevData => ({
            ...prevData,
            [keyname]: currentValue
        }));
    }, []);

    const handleViewInfoClick = React.useCallback(() => {
        navigate("/about");
    }, [navigate]);

    // ? Debounced state is used for optimization, by delaying the update of state
    React.useEffect(()=> {
        const debounceInputTimeout = setTimeout(() => {
            setDebouncedContactFormValues(contactFormValues);
        }, 500);
        return () => clearTimeout(debounceInputTimeout);
    }, [contactFormValues]);

    // ? Debounced state is used for optimization since it is the dependency for useMemo of contactFormInputs
    const contactFormInputs = React.useMemo(() => {
        return inputs.map((input, index) => ({
            ...input,
            onchange: handleContactFormChange,
            value: contactFormValues[input.id],
            dataAttributes: {
                "data-index": index,
                "data-keyname": input.id,
            }
        }));
    },[contactFormValues]);

    const handleFormSubmit = React.useCallback((e) => {
        e.preventDefault();
        // ? Send notification to own email
        emailjs.send(serviceId, notifyMeTemplate, contactFormValues, publicKey)
        .then((result) => {
            console.log(result.text);
            alert('Email sent to kbg successfully')
        }, (error) => {
            alert(`Notification to kbg error: ${error.text}`)
        });

        // ? auto-reply to sender of contact/query
        emailjs.send(serviceId, autoReplyTemplate, contactFormValues, publicKey)
        .then((result) => {
            console.log(result.text);
            alert('Email sent to kbg successfully')
        }, (error) => {
            alert(`Notification to kbg error: ${error.text}`)
        });

        setContactFormValues(initialContactFormValues);
    },[contactFormValues]);

    return (
        <Styled.MainPageWrapper>
            <Styled.AboutSection title={'Hi, I\'m KB'} description={'Characterization/Design Engineer | Self-learning full stack developer'}>
                <Styled.AboutSectionParagraph>
                    {aboutSectionParagraph}
                </Styled.AboutSectionParagraph>
                <Styled.ViewButtonContainer>
                    <Styled.ViewAbout className={'view-about'} text={"View more information"} onClick={handleViewInfoClick}/>
                </Styled.ViewButtonContainer>
            </Styled.AboutSection>
            <Divider/>
            <Styled.TechStackSection title={'Tech Stack'} description={'Colored boxes in each stack indicates proficiency: 1 - Basic Knowledge 2 - Minimal experience and limited Proficiency 3 - Intermediate Proficiency 4 - High Proficiency 5 - Expert Proficiency'}>
                <Styled.StackContainer>
                    <Styled.StyledStackCard rating={3} text={'Perl'} icon={<SiPerl/>} bgColor={'#1981AA'} textColor={`${currentTheme.bg}`}/>
                    <Styled.StyledStackCard rating={4} text={'Bash/Unix'} icon={<SiGnubash/>} bgColor={'gray'} textColor={`${currentTheme.bg}`}/>
                    <Styled.StyledStackCard rating={3} text={'Python'} icon={<FaPython/>} bgColor={'#FFE873'}/>
                    <Styled.StyledStackCard rating={2} text={'Tcl'} icon={<FaFeatherAlt/>} bgColor={'#BADA55'}/>
                    <Styled.StyledStackCard rating={3} text={'JavaScript'} icon={<IoLogoJavascript/>} bgColor={'#F0DB4F'}/>
                    <Styled.StyledStackCard rating={2} text={'Google Apps Script'} icon={<SiGoogleappsscript/>} bgColor={'#EA4335'} textColor={`${currentTheme.bg}`}/>
                    <Styled.StyledStackCard rating={3} text={'HTML5'} icon={<FaHtml5/>} bgColor={'#F06529'} textColor={`${currentTheme.bg}`}/>
                    <Styled.StyledStackCard rating={3} text={'CSS'} icon={<FaCss3/>} bgColor={'#663399'} textColor={`${currentTheme.bg}`}/>
                    <Styled.StyledStackCard rating={2} text={'ReactJS'} icon={<FaReact/>} bgColor={'#61DBFB'}/>
                    <Styled.StyledStackCard rating={2} text={'NodeJS'} icon={<FaNodeJs/>} bgColor={'#68A063'} textColor={`${currentTheme.bg}`}/>
                    <Styled.StyledStackCard rating={1} text={'Git'} icon={<FaGitAlt/>} bgColor={'	#3E2C00'} textColor={`${currentTheme.bg}`}/>
                    <Styled.StyledStackCard rating={1} text={'Vercel'} icon={<SiVercel color={`${currentTheme.bg}`}/>} bgColor={`${currentTheme.text}`} textColor={`${currentTheme.bg}`}/>
                    <Styled.StyledStackCard rating={2} text={'VSCode'} icon={<VscVscode/>} bgColor={'#007ACC'} textColor={`${currentTheme.bg}`}/>
                    <Styled.StyledStackCard rating={1} text={'Firebase'} icon={<IoLogoFirebase/>} bgColor={'#FF9100'} textColor={`${currentTheme.bg}`}/>
                    <Styled.StyledStackCard rating={2} text={'PostgreSQL'} icon={<BiLogoPostgresql/>} bgColor={'#336791'} textColor={`${currentTheme.bg}`}/>
                    <Styled.StyledStackCard rating={2} text={'Prisma ORM'}icon={<SiPrisma/>} bgColor={'#EA3E3C'} textColor={`${currentTheme.bg}`}/>
                </Styled.StackContainer>
            </Styled.TechStackSection>
            <Divider/>
            <Styled.ProjectSection title={'Personal Projects'} description={'Projects I have completed during my self-learning journey.'}>
                <Styled.ProjectCardContainer>
                    <Styled.StyledProjectCard href={'/'} title={'Mockup Project 1'} description={'This is a mockup project card and to be filled with a real project in the future'}/>
                    <Styled.StyledProjectCard href={'/'} title={'Mockup Project 2'} description={'This is a mockup project card and to be filled with a real project in the future'}/>
                    <Styled.StyledProjectCard href={'/'} title={'Mockup Project 3'} description={'This is a mockup project card and to be filled with a real project in the future'}/>
                    <Styled.StyledProjectCard href={'/'} title={'Mockup Project 4'} description={'This is a mockup project card and to be filled with a real project in the future'}/>
                </Styled.ProjectCardContainer>
            </Styled.ProjectSection>
            <Divider/>
            <Styled.QuickContactSection title={'Contact Me'} description={`I'll be thrilled to be part of your next project. Send me the details below`}>
                <Styled.QuickContactForm inputClassName={'contact-me-form-inputs'} id={'contact-me'} formInputs={contactFormInputs} labelAndInputContainerClass={'contact-label-input-container'} hasSubmit handleSubmit={handleFormSubmit}/>
            </Styled.QuickContactSection>
        </Styled.MainPageWrapper>
    )
}

export default MainPage;