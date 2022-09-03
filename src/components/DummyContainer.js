import React from "react";
import Dummy from "./Dummy";
import Step2 from "../Assets/STEP2.jpg";
import Step3 from "../Assets/STEP3.jpg";
import Step4 from "../Assets/STEP4.jpg";
import Step5 from "../Assets/STEP5-1.jpg";
import Step6 from "../Assets/STEP6-1.jpg";
import Step7 from "../Assets/STEP7.jpg";

const DummyContainer = () => {
  return (
    <div className="App container">
      <h1 className="text-3xl font-bold">
        How To Apply For Security Guard License Online?
      </h1>
      <Dummy open={false} title="Step 1 - Go To Service Ontario Website">
        <p>Go To This Website</p>
        <a href="https://www.appmybizaccount.gov.on.ca/wps85/portal/osb/!ut/p/z1/hY9NC4JAEIZ_Swev7ahhazc1M_syCtP2EltsuqBrrGtQvz4hOhRKc5t3noeXQQSliAh65xlVvBK0aPcjsU6H8Rxvo8jSgyn2wZl7djwDbASRhZJ_AGnP0DMOtD55Iyt3H8NqpAdh6EMY27a3Ga1Ne6l_gB_T3RmuCRBERifwVbJAJCuq8_sfR5xNnCEi2ZVJJoeNbONcqVs90UADWtInq9mlkVw9lKRccJENL1SDLjmvaoXSPgfdyhT4tkxw7QxeR4WNIg!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/">
          Services Ontario – Apply License
        </a>
      </Dummy>

      <Dummy open={false} title={"Step 2 - Access Service Ontario Account"}>
        <p>
          Under Popular Links, Click 'Access Your ServiceOntarion account
          (formally ONe-Source for Business)'
        </p>
        <img src={Step2} alt="Procedure Detail" />
      </Dummy>

      <Dummy open={false} title={"Step 3 - Sign Up"}>
        <p>Click on 'Sign up now'</p>
        <img src={Step3} alt="Procedure Detail" />
      </Dummy>

      <Dummy open={false} title={"Step 4 - Add a Service"}>
        <p>Click on ‘Add a service‘</p>
        <img src={Step4} alt="Procedure Detail" />
      </Dummy>

      <Dummy
        open={false}
        title={"Step 5 - Add Private Security & Investigative Service"}
      >
        <p>
          Find 'Private security and investigation services' under 'Add a
          service' option.
        </p>
        <p>Click on 'Start now'</p>
        <img src={Step5} alt="Procedure Detail" />
      </Dummy>

      <Dummy open={false} title={"Step 6 - An Individual"}>
        <p>Click on 'an individual'</p>
        <img src={Step6} alt="Procedure Detail" />
      </Dummy>

      <Dummy open={false} title={"Step 7 - Get Security License"}>
        <p>Scroll down to 'Get a security guard license' section</p>
        <p>Click 'apply for a new security guard licence'</p>
        <img src={Step7} alt="Procedure Detail" />
      </Dummy>

      <Dummy open={false} title={"Step 8 - Provide Required Information"}>
        <p>
          At this step, you will be asked to enter your PERSONAL INFORMATION.
          Fill in all the information as per the requirements.
        </p>
        <p>
          Once done, you will be asked to submit documents. Following is the
          list of those documents:
        </p>
        <ul>
          <li>Passport Size Photograph</li>
          <li>Study permit or Work permit or PR Card</li>
          <li>Passport</li>
          <li>Guarantor Form – (Download Guarantor form)</li>
        </ul>
      </Dummy>
    </div>
  );
};

export default DummyContainer;
