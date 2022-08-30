import React from "react";

function Steps() {
  return (
    <div className="m-0 h-100 p-4 mx-w-2xl bg-gray-300 flex">
      <div className="p-10 bg-gray-600 mx-3 border-2 divide-slate-400 rounded-md">
        <h1>1</h1>
        <p>MEET BASIC REQUIREMENTS</p>
        <p>Be 18 years of age or older. </p>
        <p>Have a clean criminal record. </p>
        <p>Can legally work in Canada</p>
      </div>
      <div className="p-10 bg-orange-300 mx-3 border-2 divide-slate-400 rounded-md">
        <h1>2</h1>
        <p>TAKE OUR ONLINE TRAINING</p>
        <p>Purchase the course directly from our website. </p>
        <p>Login with credentials sent to you in email. </p>
        <p>Course starting from $89.99 only.</p>
        <button className="bg-black text-white w-20 h-12 rounded-lg">
          Buy Now
        </button>
      </div>
      <div className="p-10 bg-gray-600 mx-3 border-2 divide-slate-400 rounded-md">
        <h1>3</h1>
        <p>GET YOUR FIRST AID/CPR CERTIFICATE</p>
        <p>
          After completion of the course, you are required to submit a copy of
          your Emergency First Aid Certificate. (make sure it’s WSIB approved){" "}
        </p>
        <p>OR</p>
        <p>Book an appointment with us for training</p>
      </div>
      <div className="p-10 bg-orange-300 mx-3 border-2 divide-slate-400 rounded-md">
        <h1>4</h1>
        <p>RECEIVE TRAINING COMPLETION NUMBER (TCN)</p>
        <p>
          You will get TCN via email within 3-4 business days upon completion of
          your course and submission of your first-aid CPR certificate.{" "}
        </p>
        
      </div>
      <div className="p-10 bg-gray-600 mx-3 border-2 divide-slate-400 rounded-md">
        <h1>5</h1>
        <p>TAKE OUR ONLINE TRAINING</p>
        <p>Purchase the course directly from our website. </p>
        <p>Login with credentials sent to you in email. </p>
        <p>Course starting from $89.99 only.</p>
      </div>
      <div className="p-10 bg-orange-300 mx-3 border-2 divide-slate-400 rounded-md">
        <h1>6</h1>
        <p>TAKE OUR ONLINE TRAINING</p>
        <p>Purchase the course directly from our website. </p>
        <p>Login with credentials sent to you in email. </p>
        <p>Course starting from $89.99 only.</p>
      </div>
    </div>
  );
}

export default Steps;