import React from "react";
import logo from "../Assets/logo.png";
//import Dropdown from "./Dropdown";

function NavBar() {
  return (
    <nav className=" mx-4 my-4 bg-white flex justify-around items-center">
      <div>
        <img src={logo} alt="Sim_Security" />
      </div>

      <ul className="flex flex-row justify-between items-center font-Montserrat tracking-wider">
        <li className="mx-6 ">
          <a href="/#">Home</a>
        </li>
        <li className="mx-6">
          <a href="/#">About Us</a>
        </li>
        <li className="mx-6">
          <a href="/#">
            {/*<Dropdown /> */}
            Services
          </a>
        </li>
        <li className="mx-6">
          <a href="/#">Take Course</a>
        </li>
        <li className="mx-6">
          <a href="/#">Blog</a>
        </li>
        {/* <li className="mx-6">
          <a href="/#">Contact</a>
        </li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
