import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Components/Pages/Home/Home";
import FindDoctor from "../Components/Pages/FindDoctor/FindDoctor";
import AboutUs from "../Components/Pages/AboutUs/AboutUs";
import Login from "../Components/Pages/Login/Login";
import SingUp from "../Components/Pages/SingUp/SingUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/findDoctors",
                element: <FindDoctor />,
            },
            {
                path: "/aboutUs",
                element: <AboutUs />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/singUp",
                element: <SingUp />,
            },
        ]
    },
]);

export default router;