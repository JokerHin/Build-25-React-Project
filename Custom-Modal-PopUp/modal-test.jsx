import React, { useState } from "react";
import Modal from "./modal.jsx";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button
        onClick={handleToggleModalPopup}
        className="rounded-md bg-blue-500 p-3 text-white transition delay-150 duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
      >
        Open Modal Popup
      </button>
      {showModalPopup && (
        <Modal
          onClose={onClose}
          body={<div>Customized-body</div>}
          header={<h1>Customized Header</h1>}
          footer={<h1>Hello footer</h1>}
        />
      )}
    </div>
  );
}
