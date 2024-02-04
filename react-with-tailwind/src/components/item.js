import React from "react";
import { FaCopy } from "react-icons/fa";

const Item = ({ quote }) => {
  const handleCopyClick = () => {
    // Create a temporary textarea element to copy the text to the clipboard
    const textarea = document.createElement("textarea");
    textarea.value = quote.content;
    document.body.appendChild(textarea);

    // Select the text inside the textarea
    textarea.select();
    document.execCommand("copy");

    // Remove the textarea from the DOM
    document.body.removeChild(textarea);

    // You can also provide user feedback, such as showing a notification
    console.log("Quote copied to clipboard");
  };

  return (
    <div className="bg-gray-200 mb-5 px-5 py-5 rounded flex  flex-col items-start justify-between">
      <p className="text-xl mb-2">{quote.content}</p>

      <p className="text-gray-600 flex items-center">
        {quote.author} | 
        <span
          className="ml-1 cursor-pointer"
          onClick={handleCopyClick}
          title="Copy to clipboard"
        >
          <FaCopy />
        </span>
      </p>
    </div>
  );
};

export default Item;
