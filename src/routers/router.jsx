import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Authentication from "../pages/Authentication/Authentication";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import UserDashboard from "../layouts/UserDashboard/UserDashboard";
import Profile from "../layouts/UserDashboard/Profile";
import AccountStatus from "../layouts/UserDashboard/AccountStatus";
import Transactions from "../layouts/UserDashboard/Transactions";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CreditPage from "../layouts/UserDashboard/CreditPage";
import AdminDashboard from "../layouts/AdminDashboard/AdminDashboard";
import AdminProfile from "../layouts/AdminDashboard/AdminProfile";
import CreditRequests from "../layouts/AdminDashboard/CreditRequests/CreditRequests";
import AllTransactions from "../layouts/AdminDashboard/Transactions/AllTransactions";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'auth',
                element: <Authentication/>,
                children: [
                    {
                        index: true,
                        element: <Login/>,
                    },
                    {
                        path: 'signup',
                        element: <SignUp/>,
                    }
                ]
            },
            {
                path: 'signup',
                element: <div>SignUp</div>
            }
        ],
    },
    {
        path: '/dashboard',
        element: <UserDashboard/>,
        children: [
            {
                path: 'profile',
                element: <Profile/>,
            },
            {
                path: 'account',
                element: <AccountStatus/>,
            },
            {
                path: 'credit',
                element: <CreditPage/>,
            },
            {
                path: 'transactions',
                element: <Transactions/>,
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminDashboard/>,
        children: [
            {
                path: 'profile',
                element: <AdminProfile/>
            },
            {
                path: 'credit_reqs',
                element: <CreditRequests/>
            },
            {
                path: 'transactions',
                element: <AllTransactions/>
            }
        ]
    }
]);

export default router;