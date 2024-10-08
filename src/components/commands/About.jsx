import React, { useEffect, useState } from "react";
import { SiReact, SiTailwindcss } from "react-icons/si";

export default function About() {
    const techs = [
        { Icon: SiReact, color: "text-black-500", duration: "duration-500" },
        { Icon: SiTailwindcss, color: "text-black-300", duration: "duration-700" },
    ];
    
    const [animate, setAnimate] = useState(false);
    
    useEffect(() => {
        setAnimate(true);
    }, []);
    
    return (
        <div>
            <p className="text-lg mb-3 animate-reveal-0.7">
                A terminal portfolio is a web application that mimics the appearance and functionality of a command-line interface (CLI). Users can interact with your portfolio by typing commands, which can display various information about your work, skills, and projects. This format offers a nostalgic feel and engages users who appreciate technology and programming.
                <br />
                Key Features
                <br />
                1. Interactive Command Interface: Users can enter commands to navigate through your portfolio, such as about, skills, contact, and more.
                <br />
                2. Dynamic Content: The portfolio can display real-time information, such as your age and social media links.
                <br />
                3. Custom Commands: You can implement various commands that showcase your personality and make the portfolio more interactive.
                <br />
                4. Responsive Design: Although it mimics a terminal, ensure that the portfolio is visually appealing and responsive on various devices.
            </p>
            <h1 className="text-2xl text-black-200 animate-reveal-0.7">
                Tech stack
            </h1>
            <p className="text-lg animate-reveal-0.7">
                This site is purely written with React and Tailwind CSS.
            </p>
            <div className="flex gap-5 text-4xl">
                {techs.map(({ Icon, color, duration }, index) => {
                    return (
                        <Icon
                            key={index}
                            className={`${color} ${animate ? "scale-100" : "scale-0"} transform transition-all ${duration}`}
                        />
                    );
                })}
            </div>
        </div>
    );
}
