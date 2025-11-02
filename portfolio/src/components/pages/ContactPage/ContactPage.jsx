import React from "react";
import * as styled from './ContactPage.styles.js';
import Divider from "components/atoms/Divider/Divider.jsx";
import { TfiEmail } from "react-icons/tfi";
import { CiMobile3 } from "react-icons/ci";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";


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

/* Email JS variables */
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const autoReplyTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_AUTO_REPLY;
const notifyMeTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_OWNER_NOTIFICATION;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactPage = () => {

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

    React.useEffect(()=> {
        const debounceInputTimeout = setTimeout(() => {
            setDebouncedContactFormValues(contactFormValues);
        }, 500);
        return () => clearTimeout(debounceInputTimeout);
    }, [contactFormValues]);

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
        //Send notification to own email
        emailjs.send(serviceId, notifyMeTemplate, contactFormValues, publicKey)
        .then((result) => {
            console.log(result.text);
            alert('Email sent to kbg successfully')
        }, (error) => {
            alert(`Notification to kbg error: ${error.text}`)
        });

        //Send auto-reply to sender of contact/query
        emailjs.send(serviceId, autoReplyTemplate, contactFormValues, publicKey)
        .then((result) => {
            console.log(result.text);
            alert('Email sent to kbg successfully')
        }, (error) => {
            alert(`Notification to kbg error: ${error.text}`)
        });

        setContactFormValues(initialContactFormValues);
    },[]);

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
            <styled.QuickContactSection title={'Quick Email'} description={`You can also contact me right away by sending me the details below`}>
                <Divider/>
                <styled.QuickContactForm fieldsetHeight={'60vh'} inputClassName={'contact-me-form-inputs'} id={'contact-me'} formInputs={contactFormInputs} labelAndInputContainerClass={'contact-label-input-container'} hasSubmit handleSubmit={handleFormSubmit}/>
            </styled.QuickContactSection>
        </styled.ContactPageWrapper>
    )
}

export default ContactPage;