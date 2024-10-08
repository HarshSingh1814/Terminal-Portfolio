import React from "react";

export default function ProgressBar({ Icon, text }) {
    return (
        <div className="flex items-center my-2">
            <Icon className="text-2xl mr-2 text-black-500" />
            <span className="text-black">{text}</span>
        </div>
    );
}