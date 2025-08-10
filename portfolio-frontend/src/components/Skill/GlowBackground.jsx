import React, { useEffect, useRef } from "react";

const GlowBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const dotsCount = 3;

    const positions = [
      { top: "20vh", left: "15vw" },
      { top: "60vh", left: "40vw" },
      { top: "30vh", left: "80vw" },
    ];

    for (let i = 0; i < dotsCount; i++) {
      const dot = document.createElement("div");
      dot.className = "glow-dot";
      dot.style.top = positions[i].top;
      dot.style.left = positions[i].left;
      dot.style.animationDelay = `${i * 3}s`;
      container.appendChild(dot);
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        .glow-container {
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(270deg, #050505, #0a0a0a, #050505);
          background-size: 600% 600%;
          animation: backgroundShift 30s ease infinite;
          overflow: hidden;
          z-index: -1;
        }
        @keyframes backgroundShift {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }
        .glow-dot {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.4;
          animation: glowColor 15s infinite alternate ease-in-out;
        }
        @keyframes glowColor {
          0% {
            background-color: #ff4d6d;
            box-shadow: 0 0 40px 20px #ff4d6d;
          }
          50% {
            background-color: #4d94ff;
            box-shadow: 0 0 60px 30px #4d94ff;
          }
          100% {
            background-color: #9d4dff;
            box-shadow: 0 0 40px 20px #9d4dff;
          }
        }
      `}</style>
      <div className="glow-container" ref={containerRef}></div>
    </>
  );
};

export default GlowBackground;
