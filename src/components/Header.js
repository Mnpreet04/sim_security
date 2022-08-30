import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex flex-row justify-end h-8 bg-black-chocolate items-center">
        <label className="font-Montserrat text-sm text-white pr-10 ">
          1220 Matheson Blvd E, Mississauga, ON
        </label>
        <div className="flex flex-row mr-20">
          <label className="font-Montserrat text-sm text-white pr-10">
            Mobile No
          </label>
          <button className="font-Montserrat text-sm text-white">
            Contact Us
          </button>
        </div>
      </div>
      <div className="flex"></div>
    </div>
  );
};

export default Header;
