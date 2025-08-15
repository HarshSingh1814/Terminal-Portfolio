import React from "react";
import { GiOpenFolder } from "react-icons/gi";
import { FaTerminal } from "react-icons/fa"; 
import { GoTriangleRight } from "react-icons/go";

export default function BaseCmdInput({ children, cmdStatus }) {
    return (
        <div className="mt-2 mb-2">
            {/* Command Prompt Info */}
            <div className="flex items-center text-black-400 font-mono">
                {/* Left bar (decorative) */}
                <div className="w-2 h-2 bg-black-500 mr-2"></div>

                {/* Username and Directory */}
                <div className="flex items-center gap-2">
                    {/* Username */}
                    <div className="flex items-center gap-1">
                        <FaTerminal className="text-black-500" />
                        <h1 className="text-sm">Harsh Singh</h1>
                    </div>

                    {/* Directory path */}
                    <div className="flex items-center gap-1">
                        <GiOpenFolder className="text-black-500" />
                        <h1 className="text-sm">/portfolio</h1>
                    </div>

                    {/* Optional Command Status */}
                    {cmdStatus && <>{cmdStatus}</>}
                </div>
            </div>

            {/* Command Input Area */}
            <div className="flex items-center mt-1">
                {/* Left bar extension */}
                <div className="w-2 h-2 bg-black-500 mr-2"></div>

                {/* Terminal Prompt Sign ($ or >>>) */}
                <h1 className="text-red-500 font-mono text-lg mr-2"></h1> 

                {/* Command Input */}
                <div className="flex-grow">{children}</div>
            </div>
        </div>
    );
}