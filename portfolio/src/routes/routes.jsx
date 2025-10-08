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
    }
];

const routes =[
    {
        path: "/",
        element: <ComponentTester smallComponents={smallComponents}/>
    }
];

export default routes;