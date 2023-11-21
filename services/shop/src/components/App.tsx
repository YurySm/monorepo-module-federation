import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {shopRoutes} from '@packages/shared/src/routes/shop'


export const App = () => {
    return (
        <div>
            <h1>SHOP MODULE</h1>
            <Link to={shopRoutes.second}>Second page</Link>
            <Outlet/>
        </div>
    );
};


