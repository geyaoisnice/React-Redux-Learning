import React, { lazy } from "react"
import { Navigate } from "react-router-dom"

const Fang = lazy(() => import("../views/fang"))
const Home = lazy(() => import("../views/home"))
const Geyao = lazy(() => import("../views/Geyao"))
import Login from "@/views/Login"
const withLoadingComponent = (comp: JSX.Element) => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {comp}
        </React.Suspense>
    )

}
const routes = [{
    path: "/",
    element: <Navigate to="/geyao" />
},
{
    path: "/login",
    element: <Login />
},
{
    path: "*",
    element: <Navigate to="/geyao" />
},
{
    path: "/",
    element: <Home />,
    children: [{
        path: "/geyao",
        element: withLoadingComponent(<Geyao />),
    }, {
        path: "/fang",
        element: withLoadingComponent(<Fang />),
    }]
}]

export default routes