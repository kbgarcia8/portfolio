import React from "react";
import * as styled from './ContactPage.styles.js';
import Divider from "components/atoms/Divider/Divider.jsx";
import { TfiEmail } from "react-icons/tfi";
import { CiMobile3 } from "react-icons/ci";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactPage = () => {

    const contacts = [
        {icon: <TfiEmail/>, name: 'Email', content: 'kbgarcia8@gmail.com', link: 'mailto:kbgarcia8@gmail.com'},
        {icon: <CiMobile3/>, name: 'Mobile', content: '+(63)936-474-3812', link: ''},
        {icon: <FaFacebookF/>, name: 'Facebook', content: 'Karl Brian Garcia', link: 'https://facebook.com/karl.b.garcia.9'},
        {icon: <FaGithub/>, name: 'Github', content: 'kbgarcia8', link: 'https://github.com/kbgarcia8'},
        {icon: <FaLinkedin/>, name: 'LinkedIn', content: 'Karl Brian Garcia', link: 'https://linkedin.com/in/karl-brian-garcia-97146a190'},
    ]

    return(
        <styled.ContactPageWrapper>
            <styled.ContactSection title={'Contacts'} description={'Please use the following platforms if you want to reach me. I am open for freelancing projects!'}>
                <Divider/>
                <styled.ContactSpace>
                    {contacts.map((contact,index) => (
                        <styled.ContactContainer key={`${contact.name}-${index}`} to={contact.link}>
                            <styled.IconContainer>
                                {contact.icon}
                            </styled.IconContainer>
                            <styled.InformationContainer>
                                <styled.InformationTitle>{contact.name}</styled.InformationTitle>
                                <styled.Information>{contact.content}</styled.Information>
                            </styled.InformationContainer>
                        </styled.ContactContainer>
                    ))}
                </styled.ContactSpace>
            </styled.ContactSection>
        </styled.ContactPageWrapper>
    )
}

export default ContactPage;