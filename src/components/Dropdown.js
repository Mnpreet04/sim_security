import React from "react";
import Select from "react-select";

const options = [
  { value: "training", label: "Security Training" },
  { value: "certificate", label: "Certification" },
  { value: "license", label: "Licensing" },
];

const Dropdown = () => {
  return <Select className="child:border-0 " options={options} />;
};

export default Dropdown;
