import React from "react";

export default function TodayDate() {
    return (
        <div className="text-gray-400 mb-2">
            {new Date().toLocaleString()}
        </div>
    );
}