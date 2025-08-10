import { useState, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiTypescript, SiNextdotjs } from "react-icons/si";
import Rotating3DIcons from "../Skill/Rotating3DIcons";
import IntroSection from "../Skill/IntroSection";

export default function HomeSection() {
  const techIcons = [
    <FaHtml5 color="#E34F26" size={40} />,
    <FaCss3Alt color="#1572B6" size={40} />,
    <FaJs color="#F7DF1E" size={40} />,
    <FaReact color="#61DAFB" size={40} />,
    <FaNodeJs color="#68A063" size={40} />,
    <SiTailwindcss color="#38BDF8" size={40} />,
    <FaGitAlt color="#F1502F" size={40} />,
    <SiMongodb color="#4DB33D" size={40} />,
    <SiTypescript color="#3178C6" size={40} />,
    <SiNextdotjs color="#ffffff" size={40} />,
  ];

  const techLinks = [
    "https://developer.mozilla.org/en-US/docs/Web/HTML",
    "https://developer.mozilla.org/en-US/docs/Web/CSS",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "https://reactjs.org/",
    "https://nodejs.org/",
    "https://tailwindcss.com/",
    "https://git-scm.com/",
    "https://www.mongodb.com/",
    "https://www.typescriptlang.org/",
    "https://nextjs.org/",
  ];

  // Nếu có phần typing effect hoặc state cần thì khai báo ở đây

    return (
        <section id="home" className="w-full h-screen flex px-12 text-white">
        {/* Left side - Giới thiệu ngắn */}
        <IntroSection />
        
        {/* Right side - 3D rotating icons */}
        <div className="w-1/2 flex flex-col h-full">
            <div className="flex-none flex items-center justify-center italic relative top-[60px] mb-6 text-xl">
            Languages & Frameworks
            </div>

            <div
            className="flex-1 max-w-md mx-auto flex justify-center items-center relative"
            style={{ position: "relative" }}
            >
            {/* Glow Layer */}
            <div
                style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                margin: "auto",
                width: "300px",
                height: "300px",
                borderRadius: "20px",
                boxShadow:
                    "0 0 20px 10px rgba(155, 89, 182, 0.7), 0 0 40px 20px rgba(142, 68, 173, 0.5), 0 0 60px 40px rgba(155, 89, 182, 0.3)",
                zIndex: 10,
                backgroundColor: "rgba(75, 0, 130, 0.15)",
                pointerEvents: "none",
                }}
            ></div>

            {/* Nội dung bát giác */}
            <Rotating3DIcons icons={techIcons} links={techLinks} radius={120} />
            </div>
        </div>
        </section>
    );
}
