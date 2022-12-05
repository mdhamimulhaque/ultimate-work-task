import { createBrowserRouter } from "react-router-dom";
import AttendanceInfoTable from "../components/AttendanceInfoTable/AttendanceInfoTable";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Layout from "../Layout/Layout";




export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },

        ]
    },
    {
        path: '/attendance-info',
        element: <AttendanceInfoTable />
    },
])

