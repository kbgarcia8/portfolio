import { element } from "prop-types";
import React from "react";
/* Tester */
import ComponentTester from "components/tester/ComponentTester";
/* Layout */
import MainLayout from "components/layout/MainLayout/MainLayout";
/* Components */
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import Label from "components/atoms/Label/Label";
import Divider from "components/atoms/Divider";
import Navbar from "components/molecules/Navbar";
import Form from "components/organisms/Form";
import StackCard from "components/molecules/StackCard";
import Header from "components/organisms/Header";
import Footer from "components/organisms/Footer";
import MainPage from "components/pages/MainPage";
import ContactPage from "components/pages/ContactPage";
import AboutPage from "components/pages/AboutPage";
/* SVGs */
import CashIcon from "components/svgs/CashIcon.jsx";
import { FaReact } from "react-icons/fa";

const links = [
    {name: "Home", path:"/"},
    {name: "Testimonials", path:"/testimonials"},
    {name: "Contact Us", path:"/contact"},
];

const inputConfigArray = [
    {
        label: "Test Label 1",
        additionalInfo: "",
        direction: "row",
        id: "option",
        placeholder: "test placeholder",
        icon: <CashIcon/>,
        onchange: (e) => {console.log(e.currentTarget.value)},
        value: "",
        type: "text",
        required: true,
        disabled: false,
        checked: false,
        pattern: "",
        rows: "",
        cols: "",
        editable: false,
        editing: false,
        editableInformation: [ //These are informations editable within radio input acting as selection
            {
                name: 'School',
                info: 'Pamantasan ng Lungsod ng Maynila',
                type: 'text'
            }
        ],
        onclickedit: () => {},
        editicon: '',
        onclickdelete: () => {},
        deleteicon: '',
        onclicksave: () => {},
        onclickcancel: () => {}
    }
];

const fieldsets = [
	{
        legend: "Test Inputs 1",
        inputs: inputConfigArray.map((config, index) => ({
                    ...config,
                    id: `${config.id}-${index}`,
                    dataAttributes: {
                        "data-index": index
                    }
                })),
        height: "35%",
        expandable: false
    }
];

const testHandleEditableInputEntryChange = () => {
    console.log('Test handle editable input');
};

const testhandleAddingInputEntry = () => {
    console.log('Test handle adding input entry');
};

const testHandleSubmit = () => {
    console.log('Testing submit');
};

const testHandleCancel = () => {
    console.log('Testing cencel');
};

const testHandleDelete = () => {
    console.log('Testing delete');
};

const wideComponents = [
    {
        width: '100%',
        heigth: '100%',
        element: <Divider dividerText={'Test Divider'}/>
    },
    {
        width: '100%',
        heigth: '100%',
        element: <Navbar links={links}/>
    },
    {
        width: '50%',
        element: 
        <Form
            fieldsets={fieldsets}
            id={'test-form'}
            labelClassName={'test-form-label'}
            inputClassName={'test-form-input'}
            handleEditableInputEntryChange={testHandleEditableInputEntryChange}
            handleAddingIputEntry={testhandleAddingInputEntry}
            hasSubmit={true}
            handleSubmit={testHandleSubmit}
            hasCancel={true}
            handleCancel={testHandleCancel}
            hasDelete={true}
            handleDelete={testHandleDelete}
        />
    }
];

const smallComponents = [
    {
        width: '100%',
        heigth: '100%',
        element: <Button onClick={() => {console.log('clicked')}} text="Test"/>
    },
    {
        width: '100%',
        heigth: '100%',
        element: <Label textLabel={'tester Label'} htmlFor={'test'} addtionalInfo={'Test additional info'}/>
    },
    {
        width: '100%',
        heigth: '100%',
        element: <Input id={'test'} placeholderText={'Test Placeholder'}/>
    },
    {
        width: '100%',
        element: <StackCard bgColor={'black'} icon={<FaReact color='#61DBFB'/>} textColor={'#61DBFB'} text={'ReactJS'}/>
    }
];

const routes =[
    {
        path: "/",
        element: <MainLayout header={<Header/>} footer={<Footer/>}/>,
        children: [
            {index: true, element: <MainPage/>},
            {path: "/contact", element: <ContactPage/>},
            {path: "/about", element: <AboutPage/>}
        ]
    },
    {
        path: "/tester",
        element: <ComponentTester wideComponents={wideComponents} smallComponents={smallComponents}/>
    }
];

export default routes;