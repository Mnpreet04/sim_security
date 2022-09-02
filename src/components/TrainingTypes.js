import React from "react";

function TrainingTypes() {
  return (
    <div className="bg-steelgrayRang text-white pt-3 pb-10">
      <h2 className="text-3xl pt-4 font-bold font-RobotoSlab tracking-wide ">
        Get Your Security Guard Licence Now!
      </h2>
      <h1 className="text-4xl my-4 font-bold font-RobotoSlab tracking-wider text-goldenRang">
        Online Security Guard Training Courses
      </h1>

      <div className="flex justify-around">
        <div className="mx-0">
          <h1 className="text-2xl font-Montserrat">
            Security Guard License Training
          </h1>
          <p className="font-Montserrat text-base">
            24/7 Access to Online Course
          </p>
          <p className="font-Montserrat text-base">Free Mock Test</p>
          <p className="text-sm font-Montserrat w-7/12 m-auto text-center">
            You are required to submit a valid Emergency First Aid CPR, level C
            certificate, approved by WSIB
          </p>
          <p className="text-4xl font-bold text-goldenRang hover:scale-105">
            $89
          </p>
          <button className="  bg-goldenRang mt-5 w-2/12 h-8 text-black font-Montserrat text-sm font-medium">
            Enroll Now
          </button>
        </div>
        <div>
          <h1 className="text-2xl font-Montserrat">
            Security Guard + First Aid/CPR Training
          </h1>
          <p className="font-Montserrat text-base">
            24/7 Access to Online Course
          </p>
          <p className="font-Montserrat text-base">Free Mock Test</p>
          <p className="text-sm font-Montserrat w-7/12 m-auto text-center">
            Emergency First Aid CPR/AED Level C 6.5 Hours Full in-class First
            Aid CPR/AED training
          </p>
          <p className="text-4xl font-bold text-goldenRang hover:scale-105">
            $149
          </p>
          <button className="  bg-goldenRang mt-5 w-2/12 h-8 text-black font-Montserrat text-sm font-medium">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrainingTypes;
