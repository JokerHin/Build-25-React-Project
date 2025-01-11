import React from "react";

export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div
      id={id || "Modal"}
      className="fixed left-0 top-0 z-10 h-full w-full overflow-auto bg-black bg-opacity-50 pt-[150px]"
    >
      <div className="relative m-auto w-[80%] border border-red-400 bg-white p-0 ease-in">
        <div className="header">
          <span
            onClick={onClose}
            className="absolute right-[-25px] top-[-35px] cursor-pointer p-2 text-5xl font-bold text-red-500 hover:border-red-300"
          >
            &times;
          </span>
          <h2 className="w-full bg-slate-400 p-3 text-2xl font-extrabold text-white">
            {header ? header : "header"}
          </h2>
        </div>
        <div className="h-[300px] w-full bg-slate-200 p-4">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our Modal Body</p>
            </div>
          )}
        </div>
        <div className="w-full bg-slate-400 p-3 text-2xl font-extrabold text-white">
          {footer ? footer : <h2>footer</h2>}
        </div>
      </div>
    </div>
  );
}
