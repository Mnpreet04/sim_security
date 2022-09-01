import React from "react";
import image1 from '../Assets/home-left-image02.png';

function SecurityInformation() {
  return (
    <div className="bg-blue-100 flex justify-around">
        <img src={image1} alt="Image1" className="w-100"/>
        <div className="flex flex-col justify-start">
      <h1 className="text-4xl font-bold">What Is Security Licence?</h1>
      <p>
        With a valid security guard license, you can work in a setting where you
        safeguard individuals or their property. Authorized safety officers can
        work at different positions and places. There are various kinds of
        occupations available for security guards. Some of them are working as
        security guards, concierge, event or airport security guards. You may
        also work as a personal security guard, bouncer, or loss prevention
        employee
      </p>
      <p>
        As indicated by Ontario Private Security and Investigate Services Act,
        you should require a valid security guard license to work as a security
        guard. You might be excluded from Ontario preparing and testing assuming
        you are as of now authorized from some other area or region.
      </p>
      <button>Get Started Now</button>
      </div>
    </div>
  );
}

export default SecurityInformation;
