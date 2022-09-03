import React, { useState } from "react";

const Dummy = ({ open, title, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex   border-2  mt-3  flex-col w-4/5 m-auto ">
        <div>
          <div className="p-2 flex flex-row justify-between items-center ">
            <h6 className="font-weight-bold flex font-Montserrat">{title}</h6>
            <button
              type="button"
              className="btn "
              onClick={handleFilterOpening}
            >
              {!isOpen ? (
                <p className="text-4xl pt-0 pb-4 text-goldenRang font-bold">
                  +
                </p>
              ) : (
                <p className="text-5xl pt-0 pb-4 text-goldenRang font-bold">
                  -
                </p>
              )}
            </button>
          </div>
        </div>

        <div className="flex ">
          <div>{isOpen && <div className="p-3">{children}</div>}</div>
        </div>
      </div>
    </>
  );
};

export default Dummy;
