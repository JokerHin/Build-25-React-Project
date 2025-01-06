import React, { useState } from "react";
import data from "./data";
//single selection
//multiple selection

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId); //find if the current idex exists in the array or not
    console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) {
      //if the current index does not exist in the array it will show -1, then push it, else, remove it
      cpyMutiple.push(getCurrentId);
    } else {
      cpyMutiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(cpyMutiple);
  }

  return (
    <div className="flex h-lvh w-lvw items-center justify-center gap-2">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="bg-green-400 px-5 py-2 font-bold text-white"
      >
        Enable Multi Selection
      </button>
      <div className="h-auto w-auto">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="mb-10 w-[60%] bg-blue-500 px-10 py-5"
            >
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="flex cursor-pointer flex-col flex-wrap items-center justify-between"
              >
                <h3 className="text-lg text-white">{dataItem.question}</h3>
                <span className="text-white">+</span>
                {/* {selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                  <div className="flex h-auto text-wrap text-white">
                    {dataItem.answer}
                  </div>
                ) : null} */}
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="flex h-auto text-wrap text-white">
                      {dataItem.answer}
                    </div>
                  )
                : selected === dataItem.id && (
                    <div className="flex h-auto text-wrap text-white">
                      {dataItem.answer}
                    </div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
