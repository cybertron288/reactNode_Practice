import React from "react";
import Denial from "./denial";
import PatientCollection from "./patient-collection";

const TableContainer = (props) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className='px-5'>
      <div className='tabs'>
        <button
          className={"tab tab-lifted " + (openTab === 1 ? "tab-active" : " ")}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(1);
          }}>
          Patient Collection
        </button>

        <button
          className={"tab tab-lifted " + (openTab === 2 ? "tab-active" : " ")}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(2);
          }}>
          Denial
        </button>

        <button
          className={"tab tab-lifted " + (openTab === 3 ? "tab-active" : " ")}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(3);
          }}>
          Insurance AR
        </button>
        <div className='flex-1 cursor-default tab tab-lifted'></div>
      </div>

      <div className='mt-3'>
        <div className={openTab === 1 ? "block" : "hidden"}>
          <PatientCollection />
        </div>
        <div className={openTab === 2 ? "block" : "hidden"}>
          <Denial />
        </div>
      </div>
    </div>
  );
};

export default TableContainer;
