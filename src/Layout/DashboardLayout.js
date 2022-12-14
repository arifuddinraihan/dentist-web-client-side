import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li>
                            <div className="flex flex-col items-center mt-6 -mx-2">
                                <img className="object-cover w-24 h-24 mx-2 rounded-full" 
                                src={user?.photoURL} alt="avatar" />
                                <h4 className="mx-2 mt-2 font-medium text-black">{user?.displayName}</h4>
                                <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">{user?.email}</p>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;