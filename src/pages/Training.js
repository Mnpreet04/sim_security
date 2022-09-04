import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import securityman from "../Assets/securityman.jpg";
import about from "../Assets/about_-02.jpg";

function Training() {
  return (
    <div>
      <Header />
      <NavBar />
      <div className=" h-96 w-full relative">
        <img
          src={securityman}
          alt="securityPerson"
          className="w-full h-full object-cover absolute mix-blend-overlay opacity-59 "
        ></img>
        <div className="pt-44 pl-1">
          <h1 className="text-white  text-6xl font-bold ">
            Security Guard Training
          </h1>
        </div>
      </div>
      <div className="flex justify-around">
        <img src={about} alt="about" className="max-w-full object-fit h-auto rounded-full"/>
        <div>
          <h1>Basic Security Guard Training</h1>
          <p>
            Basic security training is the foundation of your career as a
            security guard. Once a person makes the decision to become a
            security guard, they will have to choose a school to be trained,
            certified, and eventually get their security guard license. We
            provide 40 hours of training where we prepare you to safeguard
            yourself and others.
          </p>
          <p>How do we help you at your initial stage?</p>
          <p>
            1.We build security guard within you 2.Learn all the basics of
            security training 3.Explore different fields in the industry
            4.Choose what is your best fit
          </p>
        </div>
      </div>
    </div>
  );
}

export default Training;
