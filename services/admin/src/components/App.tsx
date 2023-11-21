import React from 'react';
import {Outlet} from "react-router-dom";
import {deepMerge} from "@packages/shared/src/utils/deepMerge";
import {Header} from "@packages/shared/src/components/Header";


export const App = () => {

    deepMerge()
    return (
        <div>
            <h1>ADMIN MODULE</h1>
            <Outlet/>
        </div>
    );
};


