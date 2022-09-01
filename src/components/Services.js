import React from "react";
import {Link} from 'react-router-dom';
import icon_01 from "../Assets/icon_01.png";
import icon_02 from "../Assets/icon_02.png";
import icon_03 from "../Assets/icon_03.png";
import './Services.css';

function Services() {
  return (
    <div className=" m-10 flex flex-col">
      <h1 className="text-2xl pt-4 font-bold ">Our Services</h1>
      <p className="font-Montserrat text-4xl pt-4 font-bold ">Want To Become A Licenced Security Guard?</p>
      <p className="font-Montserrat text-4xl pt-4 font-bold "> We Got You Covered?</p>
      <p className=" m-4 p-3 text-lg">
        AMAZE security guard training provide ministry approved training courses
        for security guard and emergency first aid CPR.
      </p>
      <div className="m-4 flex justify-around items-center">
        <div className="m-4 flex flex-col justify-around items-center" >
          <img src={icon_03} alt="Training"></img>
          <Link to='/training' className=" text-2xl font-bold text-orange-600  pt-4">Training</Link>
          <p>
            The security guard journey begins with 40-hours security training
            and emergency first-aid CPR training.
          </p>
        </div>
        <div className="m-4 flex flex-col justify-around items-center">
          <img src={icon_01} alt="Training" ></img>
          <Link to='/licensing' className=" text-2xl font-bold text-orange-600  pt-4">Licensing</Link>
          <p>
            Once you finish the training and have the training completion
            number, you are ready to give the security guard test!
          </p>
        </div>
        <div className="m-4 flex flex-col justify-around items-center"> 
          <img src={icon_02} alt="Training"></img>
          <Link to='/certification' className=" text-2xl font-bold text-orange-600  pt-4">Certification</Link>
          <p>
            Apply for your security training license online and begin your
            career as a security guard!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
