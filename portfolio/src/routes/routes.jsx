import { element } from "prop-types";
import React from "react";
/* Tester */
import ComponentTester from "components/tester/ComponentTester";
/* Layout */
import MainLayout from "components/layout/MainLayout/MainLayout";
/* Components */
import Button from "components/atoms/Button";

const smallComponentObj = {
    width: '100%',
    heigth: '100%',
    element: <Button onClick={() => {console.log('clicked')}}/>
}

const routes =[
    {
        path: "/",
        element: <ComponentTester smallComponent={smallComponentObj}/>
    }
];

export default routes;