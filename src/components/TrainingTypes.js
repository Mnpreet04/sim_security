import React from "react";

function TrainingTypes() {
  return (
    <div className="bg-gray-900 text-white">
      <h2 className="text-3xl pt-4 font-bold " >Get Your Security Guard Licence Now!</h2>
      <h1 className="text-4xl my-4 font-bold ">Online Security Guard Training Courses</h1>

      <div className="flex justify-around">
        <div className="mx-0">
          <h1 className="text-3xl">Security Guard License Training</h1>
          <p>24/7 Access to Online Course</p>
          <p>Free Mock Test</p>
          <p>
            You are required to submit a valid Emergency First Aid CPR, level C
            certificate, approved by WSIB
          </p>
          <p>$89</p>
          <button className="bg-orange-300 mx-5 my-5 h-12 w-25 rounded-lg">Enroll Now</button>
        </div>
        <div>
          <h1 className="text-3xl">Security Guard + First Aid/CPR Training</h1>
          <p>24/7 Access to Online Course</p>
          <p>Free Mock Test</p>
          <p>
            Emergency First Aid CPR/AED Level C 6.5 Hours Full in-class First
            Aid CPR/AED training
          </p>
          <p>$149</p>
          <button className="w-25 h-12 bg-orange-300 mx-5 my-5 rounded-lg">Enroll Now</button>
        </div>
      </div>
    </div>
  );
}

export default TrainingTypes;
