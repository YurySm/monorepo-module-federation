import {App} from "@/components/App";
import {Suspense} from "react";
import {About} from "@/pages/About";
import {createBrowserRouter} from "react-router-dom";
import {adminRoutes} from '@packages/shared/src/routes/admin'

const routes = [
    {
        path: "/admin",
        element: <App />,
        children: [
            {
                path: adminRoutes.about,
                element: <Suspense fallback={'Loading...'}><About /></Suspense>
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes