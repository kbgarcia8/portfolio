import { element } from "prop-types";
import React from "react";
/* Tester */
import ComponentTester from "components/tester/ComponentTester";
/* Main Layout */
import MainLayout from "components/layout/MainLayout/MainLayout";

const routes =[
    {
        path: "/",
        element: <ComponentTester/>
    }
];

export default routes;