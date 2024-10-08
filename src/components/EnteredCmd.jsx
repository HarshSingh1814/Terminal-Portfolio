import React from "react";
import ReadOnlyCmdInput from "./ReadOnlyCmdInput";

export default function EnteredCmd({ enteredCmd }) {
    return (
        <div className="flex flex-col mt-2">
            {enteredCmd.map(({ cmd, Component, time }, index) => (
                <div key={index}>
                    <ReadOnlyCmdInput cmd={cmd} time={time} />
                    <div className="mt-2">
                        <Component />
                    </div>
                </div>
            ))}
        </div>
    );
}
