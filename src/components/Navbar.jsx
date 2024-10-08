import React from "react";
import { VscTerminalBash } from "react-icons/vsc";

export default function Navbar() {
    return (
        <div className="flex items-center bg-gray-800 p-2 rounded-md mb-2">
            <VscTerminalBash className="text-2xl text-black-400 mr-2" />
            <h1 className="text-lg text-black-400"> Harsh Terminal Portfolio</h1>
        </div>
    );
}