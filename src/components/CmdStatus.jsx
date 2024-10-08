import React from "react";
import { BiGitBranch } from "react-icons/bi";

export default function CmdStatus({ cmd }) {
    if (!cmd) {
        return null; // Return null if no command is provided
    }
    
    return (
        <div className="flex items-center mt-1 mb-2">
            <div className="bg-gray-700 p-2 rounded-md flex items-center">
                <BiGitBranch className="text-black-500 mr-2" />
                <span className="text-black">{cmd}</span>
            </div>
        </div>
    );
}