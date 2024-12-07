import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.PNG";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"MyCampaign"}>My Campaign</NavLink>
      </li>
      <li>
        <NavLink to={"AddCampaign"}>Add New Campaign</NavLink>
      </li>
      <li>
        <NavLink to={"MyDonation"}>My Donations</NavLink>
      </li>
      <li>
        <NavLink to={"AllCampaign"}>All Campaign</NavLink>
      </li>
    </>
  );

  const logOutHandler = () => {
    userLogOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "LogOut successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) =>{
        Swal.fire({
          position: "center",
          icon: "error",
          title: "LogOut failed please try again",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setTooltipVisible(false); 
    }, 2000); 
  };

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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2 text-base text-primary font-medium"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"}>
          <img className="w-16 h-16 rounded-full hidden sm:block" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base text-primary font-medium space-x-4">
          {links}
        </ul>
      </div>
      <div className="navbar-end justify-around space-x-2 ">
        <ThemeToggle />

        {user ? (
          <div className="relative" 
               onMouseEnter={handleMouseEnter} 
               onMouseLeave={handleMouseLeave}>
            <button className="rounded-full ring-2 ring-primary">
              {user?.photoURL ? (
                <img
                  className="w-14 h-14 rounded-full ring-2 ring-primary"
                  src={user.photoURL}
                  alt="User"
                />
              ) : (
               <h3 className="p-4">
                <FaUser size={20} />
               </h3>
              )}
            </button>

            {isTooltipVisible && (
              <div
                className="absolute top-16 right-5 bg-base-100 text-primary p-2 rounded-lg shadow-lg z-20 min-w-40"
                style={{
                  display: isTooltipVisible ? "block" : "none",
                }}
              >
                <h3 className="text-xs font-medium ">
                  User Name : {user?.displayName}
                </h3>
                <button
                  onClick={logOutHandler}
                  className="btn bg-primary text-white hover:text-primary mt-2 border-none"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn bg-[#2b3440] text-primary" : "btn "
              }
              to={"SignIn"}
            >
              SignIn
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn bg-[#2b3440] text-primary" : "btn "
              }
              to={"Register"}
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
