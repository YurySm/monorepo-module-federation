import {createRoot} from "react-dom/client";
import {App} from "@/components/App";
import {RouterProvider} from "react-router-dom";
import {Shop} from "@/pages/Shop";
import {Suspense} from "react";
import {router} from "@/router/Router";

const root = document.getElementById('root')

if(!root) {
    throw new Error('root not found')
}

const container = createRoot(root)

container.render(
    <RouterProvider router={router} />
)