import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FaSun } from "react-icons/fa";

function matrix3dToEulerAngles(m) {
  let rotateX, rotateY, rotateZ;

  if (m[8] < 1) {
    if (m[8] > -1) {
      rotateY = Math.asin(m[8]);
      rotateX = Math.atan2(-m[9], m[10]);
      rotateZ = Math.atan2(-m[4], m[0]);
    } else {
      rotateY = -Math.PI / 2;
      rotateX = -Math.atan2(m[6], m[5]);
      rotateZ = 0;
    }
  } else {
    rotateY = Math.PI / 2;
    rotateX = Math.atan2(m[6], m[5]);
    rotateZ = 0;
  }

  return {
    rotateX: (rotateX * 180) / Math.PI,
    rotateY: (rotateY * 180) / Math.PI,
    rotateZ: (rotateZ * 180) / Math.PI,
  };
}

export default function Rotating3DIcons({ icons, links, radius = 160 }) {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [pausedRotation, setPausedRotation] = useState({ rotateX: 0, rotateY: 0, rotateZ: 0 });

  useEffect(() => {
    if (hoveredIndex === null) {
      controls.start({
        rotateX: [
          pausedRotation.rotateX,
          pausedRotation.rotateX + 20,
          pausedRotation.rotateX,
          pausedRotation.rotateX - 20,
          pausedRotation.rotateX,
        ],
        rotateY: [pausedRotation.rotateY, pausedRotation.rotateY + 360],
        rotateZ: [
          pausedRotation.rotateZ,
          pausedRotation.rotateZ + 15,
          pausedRotation.rotateZ,
          pausedRotation.rotateZ - 15,
          pausedRotation.rotateZ,
        ],
        transition: {
          rotateX: { repeat: Infinity, duration: 20, ease: "easeInOut" },
          rotateY: { repeat: Infinity, duration: 40, ease: "linear" },
          rotateZ: { repeat: Infinity, duration: 25, ease: "easeInOut" },
        },
      });
    } else {
      controls.stop();

      const style = window.getComputedStyle(containerRef.current);
      const transform = style.transform || style.webkitTransform;

      if (transform && transform !== "none") {
        const matrixValues = transform.match(/matrix3d\((.+)\)/);
        if (matrixValues) {
          const values = matrixValues[1].split(", ").map(Number);
          const angles = matrix3dToEulerAngles(values);
          setPausedRotation(angles);
        }
      }
    }
  }, [hoveredIndex, controls, pausedRotation]);

  const handleClick = (index) => {
    if (!links || !links[index]) return;
    window.open(links[index], "_blank");
  };

  const techNames = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Tailwind CSS",
    "Git",
    "MongoDB",
    "TypeScript",
    "Next.js",
  ];

  return (
    <div className="flex justify-center items-center perspective-1000">
      <motion.div
        ref={containerRef}
        animate={controls}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-[400px] h-[400px] rounded-full flex justify-center items-center"
      >
        <div className="absolute z-10 text-yellow-400 text-5xl pointer-events-none">
            <FaSun />
        </div>
        {icons.map((icon, i) => {
          const angle = (i / icons.length) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = 0;

          const color = icon.props.color || "#fff";

          const total = icons.length;
          let scale = 1;
          let glowFilter = "drop-shadow(0 0 3px rgba(255,255,255,0.1))";

          if (hoveredIndex === null) {
            // Không hover: scale 1, glow nhẹ
            scale = 1;
          } else {
            const dist = Math.min(
              Math.abs(i - hoveredIndex),
              total - Math.abs(i - hoveredIndex)
            );
            const maxDist = 3;

            if (dist === 0) {
              scale = 2.0;
              glowFilter = `drop-shadow(0 0 12px ${color}) drop-shadow(0 0 18px ${color})`;
            } else if (dist <= maxDist) {
              scale = 1.6 - (dist / maxDist) * 0.4; // từ 1.4 về 1.0
              // Glow chỉ nhẹ như khi không hover, không tăng sáng
              glowFilter = "drop-shadow(0 0 3px rgba(255,255,255,0.1))";
            } else {
              scale = 1.0;
              glowFilter = "drop-shadow(0 0 3px rgba(255,255,255,0.1))";
            }
          }

          return (
            <div
              key={i}
              className="absolute cursor-pointer"
              style={{
                transform: `translateX(${x}px) translateZ(${z}px) translateY(${y}px) scale(${scale})`,
                filter: glowFilter,
                transition: "transform 0.3s ease, filter 0.3s ease",
                willChange: "transform, filter",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleClick(i)}
              title={`Đi đến trang của ${techNames[i] || "icon"}`}
            >
              {icon}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
