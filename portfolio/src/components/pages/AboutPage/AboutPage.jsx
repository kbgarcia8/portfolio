import React from 'react';
import * as Styled from './AboutPage.styles.js';
import Divider from 'components/atoms/Divider';
import useTheme from 'context/useTheme.js';
import xinyx from 'assets/xinyx.png';
import questronix from 'assets/questronix.png';
import analog from 'assets/analog.png';
import smart from 'assets/smart.png';

const historyParagraphText = `
Hello, I'm Karl Brian or KB for short. I am currently a Design Engineer at XINYX Design Consultancy and Services, Inc. a semiconductor industry specialized in designing and providing simulation data of integrated circuit to leading-semiconductor companies. Though my current job is not tech or software related this is where it all started. I was immersed in a Unix/Linux environment in my current work and here we were thought of programming languages such as Perl and Python which we used to create scripts specifically for file handling and file content checking as our deliverables to our client are files consisting of thousands of lines. I also use Bash scripts to automate everyday tasks like file copier, workspace creation (nested directories with pre-determined hierarchy) and more.

I am constantly thinking of repititive and/or tedious tasks in our team that needs 'automation' and I also actively participate in internal programming training programs that our company exercise. I instance is the PyChamp program which is a Python boot camp in which I participated in a coding challenge and won, said program is still ongoing and I'll be joining its hackathon.

I dive deeper into programming and I was introduced with web development by my colleague and with this I started my journey through 'The Odin Project'. I learned HTML, CSS, Javascript, ReactJS, SQL, PrismaORM, NodeJS for the past 2 years. Now I am currently thinking and working on personal projects to demonstrate what I have obtained in my self-learning journey through this portfolio. So, in the mean time you can check my github as proof or contact me directly.

Even if The Odin Project is focused on web development I am not limiting myself to such. I am open to any Software/Tech related job as I am curious as to how things works programmatically and how it solves problems and bring efficiency while building up this portfolio and venture in freelance and corporate web and software development.

If you are interested do not hesitate to reach me out here:
`;

const experiences = [
    {icon: xinyx, company: 'XINYX Design Consultancy & Services, Inc.', title: 'Design Engineer', duration: 'Jan 2023 - Present'},
    {icon: questronix, company: 'Questronix Corporation, Inc.', title: 'Application Programmer', duration: 'Oct 2022 - Jan 2023'},
    {icon: analog, company: 'Analog Devices, Inc.', title: 'Product Engineer', duration: 'Oct 2021 - Jul 2022'},
    {icon: smart, company: 'Smartbuild under AHD Advance Communication System Inc.', title: 'Project Engineer', duration: 'Jan 2021 - Sep 2021 | Sep 2020 - Nov 2020'},
];

const handleDownloadResumeClick = () => {
    const fileId = '1CFM1oZnbifbhCLAeLytR-41CqvTTqBvA';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.open(downloadUrl, '_blank');
}

const AboutPage = () => {

    const { currentTheme } = useTheme();

    return(
        <Styled.AboutPageWrapper>
            <Styled.HistorySection title={'About Me'}>
                <Divider lineColor={currentTheme.teal}/>
                <Styled.HistoryParagraph>
                    {historyParagraphText}
                    <Styled.PortfolioLink href={'kbgarci8@dev.com'}>{'kbgarci8@dev.com'}</Styled.PortfolioLink>
                </Styled.HistoryParagraph>
            </Styled.HistorySection>
            <Styled.ExperienceSection title={'Job Experience'} description={'Below are my experiences in the corporate world, though there no tech/software related planning to shift careers in software or tech development'}>
                <Divider lineColor={currentTheme.teal}/>
                <Styled.ExperiencesSpace>
                    {experiences.map((experience, index) => (
                        <Styled.ExperienceContainer key={`experience-${index}`}>
                            <Styled.CompanyIconContainer><img src={experience.icon}/></Styled.CompanyIconContainer>
                            <Styled.ExperienceInformation>
                                <Styled.ExperienceTitle>{experience.title}</Styled.ExperienceTitle>
                                <Styled.ExperienceCompany>{experience.company}</Styled.ExperienceCompany>
                                <Styled.ExperienceDuration>{experience.duration}</Styled.ExperienceDuration>
                            </Styled.ExperienceInformation>
                        </Styled.ExperienceContainer>
                    ))}
                    <Styled.ButtonContainer>
                        <Styled.DownloadButton text={'Download Resume'} onClick={() => {confirm('Download Karl Brian Garcia CV?') && handleDownloadResumeClick()}}/>
                    </Styled.ButtonContainer>
                </Styled.ExperiencesSpace>
            </Styled.ExperienceSection>
        </Styled.AboutPageWrapper>
    )
};

export default AboutPage;