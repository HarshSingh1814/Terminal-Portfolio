import React, { useEffect, useRef, useState } from "react";
import renderCmd from "../utils/renderCmd";
import CmdUserInput from "./CmdUserInput";
import EnteredCmd from "./EnteredCmd";
import TodayDate from "./TodayDate";
import Help from "./commands/Help";
import Navbar from "./Navbar";
import Welcome from "./commands/Welcome";


export default function TerminalBox() {
    const [enteredCmd, setEnteredCmd] = useState([
        {
            cmd: "",
            Component: Welcome,
            time: new Date().toLocaleTimeString(),
        },
        {
            cmd: "ls",
            Component: Help,
            time: new Date().toLocaleTimeString(),
        },
    ]);
    const dummyRef = useRef(null); 

    useEffect(() => {
        dummyRef.current?.scrollIntoView({ behavior: "auto" });
    }, [enteredCmd]);

    const handleSubmit = (cmd) => { // Removed type annotation for cmd
        if (cmd === "clr") {
            setEnteredCmd([]); 
        } else {
            setEnteredCmd((currentCmd) => [
                ...currentCmd,
                { ...renderCmd(cmd), time: new Date().toLocaleTimeString() },
            ]);
        }
    };
    
    return (
        <div className="fixed inset-0 bg-gray-600 text-black-400 p-4 overflow-y-auto font-mono">
            <Navbar />
            <TodayDate />
            <EnteredCmd enteredCmd={enteredCmd} />
            <CmdUserInput onSubmit={handleSubmit} />
            <div ref={dummyRef}></div>
        </div>
    );
}