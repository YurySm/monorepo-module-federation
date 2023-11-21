import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {shopRoutes} from '@packages/shared/src/routes/shop'
import {adminRoutes} from '@packages/shared/src/routes/admin'
import {Header} from "@packages/shared/src/components/Header";
export const App = () => {
    return (
        <div>
            <Header/>
            <h1>Page</h1>
            <Link to={adminRoutes.about}>About</Link>
            <br/>
            <Link to={shopRoutes.main}>Shop</Link>
            <Outlet/>
        </div>
    );
};


