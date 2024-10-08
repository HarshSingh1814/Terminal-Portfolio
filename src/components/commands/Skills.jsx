import React from "react";
import ProgressBar from "../ProgressBar";
import {SiMongodb ,SiReact, SiTailwindcss,SiJavascript,SiNodedotjs, SiBootstrap,SiHtml5,SiCss3,SiCplusplus} from "react-icons/si";

export default function Skills() {
    // List of Languages
    const listOfLanguages = [
        { Icon: SiHtml5, text: "HTML" },
        { Icon: SiCss3, text: "CSS" },
        { Icon: SiJavascript, text: "Javascript" },
        { Icon: SiCplusplus, text: "C++" }, 
    ];

    const listOfFrameworks = [
        { Icon: SiReact, text: "React" },
        { Icon: SiNodedotjs, text: "Node.js" },
        { Icon: SiMongodb, text: "MongoDB" },
        { Icon: SiTailwindcss, text: "TailwindCSS" },
        { Icon: SiBootstrap, text: "Bootstrap" },
    ];
    return (
        <div className="p-4 bg-blackow rounded-md border border-gray-700">
            <h2 className="text-2xl text-black-500 mb-4">Skills</h2>

            <h3 className="text-xl text-black-500 mb-4">Languages</h3>
            {listOfLanguages.map(({ Icon, text }, index) => (
                <ProgressBar Icon={Icon} key={index} text={text} />
            ))}

            {/* Frameworks Section */}
            <h3 className="text-xl text-black-500 mb-4">Frameworks/Database</h3>
            {listOfFrameworks.map(({ Icon, text }, index) => (
                <ProgressBar Icon={Icon} key={index} text={text} />
            ))}
        </div>

    );
}