import React from 'react';
import { TbDental } from "react-icons/tb";
import { Link, NavLink } from 'react-router-dom';
 
const Navbar = () => {
    const navMenu = <React.Fragment>
    <NavLink to={'/'} className={({isActive}) => isActive ? "btn btn-outline ml-2" : "ml-2 btn btn-ghost" } >Home</NavLink>
    <NavLink to={'/about'} className={({isActive}) => isActive ? "btn btn-outline ml-2" : "ml-2 btn btn-ghost" } >About</NavLink>
    <NavLink to={'/appointment'} className={({isActive}) => isActive ? "btn btn-outline ml-2" : "ml-2 btn btn-ghost" } >Appointment</NavLink>
    <NavLink to={'/reviews'} className={({isActive}) => isActive ? "btn btn-outline ml-2" : "ml-2 btn btn-ghost" } >Reviews</NavLink>
    <NavLink to={'/contact-us'} className={({isActive}) => isActive ? "btn btn-outline ml-2" : "ml-2 btn btn-ghost" } >Contact Us</NavLink>
    <NavLink to={'/login'} className={({isActive}) => isActive ? "btn btn-outline ml-2" : "ml-2 btn btn-ghost" } >Login</NavLink>
    </React.Fragment>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl gap-1 text-slate-800 transition-colors duration-300 transform hover:text-white hover:bg-primary">
                    Dentist
                    <TbDental className=''></TbDental>
                    Portal</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navMenu}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;