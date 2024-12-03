import React from "react";
import { Link, NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.PNG"

const Navbar = () => {
  const links = (
    <>
    <li>
      <NavLink to={'/'}>Home</NavLink>
    </li>
    <li>
      <NavLink to={'MyCampaign'}>My Campaign</NavLink>
    </li>
    <li>
      <NavLink to={'AddCampaign'}>Add New Campaign</NavLink>
    </li>
    <li>
      <NavLink to={'MyDonation'}>My Donations</NavLink>
    </li></>
  );

  return (
    <div className="navbar px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2"
          >
           {links}
          </ul>
        </div>
        <Link 
        to={'/'}
        >
        <img className="w-16 h-16 rounded-full" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
        {links}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <ThemeToggle/>
        <NavLink 
        className ={({isActive})=>isActive? 'btn bg-[#2b3440] text-primary' : 'btn bg-bgColor text-primary'}
        to={'UserRegistration'}>SignIn</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
