import { GoVerified } from "react-icons/go";
import { useState, useEffect, useMemo } from "react";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";

// Function to calculate age dynamically based on birthdate
const calculateAge = (birthDate) => {
  const today = new Date();
  const birthYear = birthDate.getFullYear();
  const age = today.getFullYear() - birthYear;

  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    return age - 1;
  }
  return age;
};

export default function Aboutme() {
  const birthDate = useMemo(() => new Date('2002-05-18'), []);
  const [age, setAge] = useState(calculateAge(birthDate)); // Removed number type annotation
  const [showSocialLinks, setShowSocialLinks] = useState(false); // Removed boolean type annotation

  useEffect(() => {
    const timer = setInterval(() => {
      setAge(calculateAge(birthDate));
    }, 24 * 60 * 60 * 1000); // Recalculate the age every day

    return () => clearInterval(timer);
  }, [birthDate]);

  const links = [
    {
      title: "GitHub",
      href: "https://github.com/HarshSingh1814",
      text: "@HarshSingh1814",
      Icon: SiGithub,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/harsh-singh-50709a228/",
      text: "@HarshSingh",
      Icon: SiLinkedin,
    },
    {
      title: "Leetcode",
      href: "https://leetcode.com/u/harsh_singh876/",
      text: "harsh_singh876",
      Icon: SiLeetcode,
    },
  ];

  const handleSocialLinkCommand = () => {
    setShowSocialLinks((prev) => !prev); // Toggle visibility of social links
  };

  return (
    <div className="mt-2 mb-2 w-11/12 mx-auto">
      <div className="flex items-center gap-3 mb-3">
        <div>
          <div className="flex items-center gap-1">
            <h1 className="text-2xl">Harsh Singh</h1>
            <GoVerified className="text-black-500 text-2xl" />
          </div>
          <p className="text-lg text-gray-400">Age {age}.</p>
        </div>
      </div>
      <p>
      I am Harsh Singh, a Computer Science Engineering graduate from Panjab University, Chandigarh. With a deep passion for technology and innovation, I have honed my skills in web development, AI integration, and competitive programming. My experience spans both backend and frontend development, leveraging modern technologies like React, Node.js, and MongoDB, alongside creating intuitive user experiences.
      </p>
      
      <button 
        onClick={handleSocialLinkCommand} 
        className="bg-black text-white px-4 py-2 rounded transition-colors duration-600 hover:bg-gray-500 animate-reveal-0.7"
      >
        {showSocialLinks ? "Hide Social Links" : "Show Social Links"}
      </button>
      
      {showSocialLinks && (
        <div className="mt-2">
          <h2 className="text-lg font-bold">Social Links</h2>
          <ul className="mt-2">
            {links.map(({ title, href, text, Icon }) => (
              <li key={title} className="flex items-center mt-2">
                <Icon className="mr-2" />
                <a href={href} target="_blank" rel="noreferrer" className="underline">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}