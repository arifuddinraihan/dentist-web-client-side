import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from '../../Pages/Home/Home/Home'

const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            }
        ]
    }
])

export default routes;