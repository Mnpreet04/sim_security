import React from "react";
//import './Steps.css';

function Steps() {
  return (
    <div className=" h-100  bg-lightfontRang flex shadow-3xl">
      <div className="w-2/12 bg-steelgrayRang m-2 rounded-tr-2xl">
        <div className="bg-goldenRang h-32 flex rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
          <h1 className="text-black text-7xl pt-5 pl-3 justify-start font-bold">1</h1>
        </div>
        <p>MEET BASIC REQUIREMENTS</p>
        <p>Be 18 years of age or older. </p>
        <p>Have a clean criminal record. </p>
        <p>Can legally work in Canada</p>
      </div>
      <div className="w-2/12 bg-steelgrayRang m-2 rounded-tr-2xl  ">
      <div className="bg-goldenRang h-32 flex rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
          <h1 className="text-black text-7xl pt-5 pl-3 justify-start font-bold">2</h1>
        </div>
        <p>TAKE OUR ONLINE TRAINING</p>
        <p>Purchase the course directly from our website. </p>
        <p>Login with credentials sent to you in email. </p>
        <p>Course starting from $89.99 only.</p>
        <button className="bg-black text-white w-20 h-12 rounded-lg">
          Buy Now
        </button>
      </div>
      <div className="w-2/12 bg-steelgrayRang m-2 rounded-tr-2xl ">
      <div className="bg-goldenRang h-32 flex rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
          <h1 className="text-black text-7xl pt-5 pl-3 justify-start font-bold">3</h1>
        </div>
        <p>GET YOUR FIRST AID/CPR CERTIFICATE</p>
        <p>
          After completion of the course, you are required to submit a copy of
          your Emergency First Aid Certificate. (make sure it’s WSIB approved){" "}
        </p>
        <p>OR</p>
        <p>Book an appointment with us for training</p>
      </div>
      <div className="w-2/12 bg-steelgrayRang m-2 rounded-tr-2xl  ">
      <div className="bg-goldenRang h-32 flex rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
          <h1 className="text-black text-7xl pt-5 pl-3 justify-start font-bold">4</h1>
        </div>
        <p>RECEIVE TRAINING COMPLETION NUMBER (TCN)</p>
        <p>
          You will get TCN via email within 3-4 business days upon completion of
          your course and submission of your first-aid CPR certificate.{" "}
        </p>
      </div>
      <div className="w-2/12 bg-steelgrayRang m-2 rounded-tr-2xl ">
      <div className="bg-goldenRang h-32 flex rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
          <h1 className="text-black text-7xl pt-5 pl-3 justify-start font-bold">5</h1>
        </div>
        <p>TAKE OUR ONLINE TRAINING</p>
        <p>Purchase the course directly from our website. </p>
        <p>Login with credentials sent to you in email. </p>
        <p>Course starting from $89.99 only.</p>
      </div>
      <div className="w-2/12 bg-steelgrayRang m-2 rounded-tr-2xl ">
      <div className="bg-goldenRang h-32 flex rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
          <h1 className="text-black text-7xl pt-5 pl-3 justify-start font-bold">6</h1>
        </div>
        <p>TAKE OUR ONLINE TRAINING</p>
        <p>Purchase the course directly from our website. </p>
        <p>Login with credentials sent to you in email. </p>
        <p>Course starting from $89.99 only.</p>
      </div>
    </div>
  );
}

export default Steps;
