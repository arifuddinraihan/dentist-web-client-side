import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AppointmentMain from "../../Pages/AppointmentPage/AppointmentMain/AppointmentMain";
import MyAppointment from "../../Pages/Dashboard/MyAppointments/MyAppointment";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from '../../Pages/Home/Home/Home'
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp";
import SecretRoute from "../SecretRoute/SecretRoute";

const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/appointment',
                element: <AppointmentMain></AppointmentMain>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/sign-up',
                element : <SignUp></SignUp>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <SecretRoute><DashboardLayout></DashboardLayout></SecretRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            // {
            //     path: '/dashboard/allusers',
            //     element: 
            // },
        ]
    }
])

export default routes;