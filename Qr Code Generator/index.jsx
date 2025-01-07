import React, { useState } from "react";
import QrCode from "react-qr-code";

export default function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
    alert("QR Code generated successfully!");
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-5 text-4xl font-bold">QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          className="mr-2 rounded-md border border-gray-300 px-5 py-2"
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
          className="cursor-pointer rounded-md bg-green-500 px-5 py-2 text-white"
        >
          Generate
        </button>
      </div>
      <div className="mt-10">
        <QrCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
