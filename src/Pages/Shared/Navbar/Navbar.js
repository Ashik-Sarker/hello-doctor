import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const menuLink =
                  <>
                    <li>
                      <Link to="/home" className="mr-4">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="mr-4">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/appointment" className="mr-4">
                        Appointment
                      </Link>
                    </li>
                    <li>
                      <Link to="/reviews" className="mr-4">
                        Reviews
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact-us" className="mr-4">
                        Contact us
                      </Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </>

  return (
    <div className="navbar h-16 text-accent max-w-[96%] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuLink}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Hello Doctor!
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuLink}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
