import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AppointmentMain from "../../Pages/AppointmentPage/AppointmentMain/AppointmentMain";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from '../../Pages/Home/Home/Home'
import Login from "../../Pages/Login/Login";

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
                element : <AppointmentMain></AppointmentMain>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
        ]
    },
])

export default routes;