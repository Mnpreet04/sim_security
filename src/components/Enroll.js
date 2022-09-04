import React from "react";
import { Link } from "react-router-dom";
function Enroll() {
  return (
    <div className="flex mt-5 bg-lightfontRang">
      {/* <img></img> */}
      <div>
        <h1 className="text-3xl font-bold pt-5">
          Enroll Today For Best Security Guard Training
        </h1>
        <p>
          AMAZE security training programs are structured to meet and exceed all
          the requirements of Ontario Security Training. We will provide you
          will all the required materials. We are here to help you every step of
          the way.
        </p>
        <p>
          AMAZE Security Training is an acclaimed institute of professional
          trainers in Mississauga. We are well-known for delivering effective
          and engaging content for security training licenses. Our training
          entails BASIC SECURITY GUARD, EMERGENCY FIRST AID & CPR, and STANDARD
          FIRST AID. For more information give us a call at 647-380-2222
        </p>
        <button className="  bg-goldenRang mt-5 w-2/12 h-8 text-black font-Montserrat text-sm font-medium">
          <Link
            to="/Enroll"
            className=" text-2xl font-bold text-orange-600  pt-4"
          >
            Enroll Now
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Enroll;
