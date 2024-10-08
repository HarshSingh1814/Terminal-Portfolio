import React, { useEffect, useRef, useState } from "react";
import BaseCmdInput from "./BaseCmdInput";

export default function CmdUserInput({ onSubmit }) {
  const inputRef = useRef(null);
  const [showFakeCursor, setShowFakeCursor] = useState(false);
  const [prevCmd, setPrevCmd] = useState([]);
  const [prevCmdIndex, setPrevCmdIndex] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current?.value.trim();
    if (value) {
      onSubmit(value);
      setPrevCmd((currentValue) => [value, ...currentValue]);
    }
    setPrevCmdIndex(-1);
    if (inputRef.current) inputRef.current.value = ""; // Clear the input field
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      setPrevCmdIndex((currentValue) =>
        Math.min(currentValue + 1, prevCmd.length - 1)
      );
    } else if (e.key === "ArrowDown") {
      setPrevCmdIndex((currentValue) => Math.max(currentValue - 1, -1));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [prevCmd]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = prevCmd[prevCmdIndex] || "";
      inputRef.current.focus();
    }
  }, [prevCmdIndex]);

  return (
    <BaseCmdInput cmdStatus={undefined}>
      <form onSubmit={handleSubmit} className="w-full flex items-center">
        {/* Terminal prompt >>> */}
        <span className="text-green-500 font-mono text-lg mr-2">{'>>>'} </span>
        {/* Command input field */}
        <input
          className="bg-gray-200 text-black border-none outline-none flex-grow"
          autoFocus
          onBlur={() => setShowFakeCursor(true)}
          onFocus={() => setShowFakeCursor(false)}
          ref={inputRef}
          placeholder="Enter a command...(try ls)"
        />
        {showFakeCursor && (
          <span className="h-5 w-1 bg-white animate-blink"></span>
        )}
      </form>
    </BaseCmdInput>
  );
}