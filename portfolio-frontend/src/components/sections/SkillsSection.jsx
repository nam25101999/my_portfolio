import { motion } from "framer-motion";
import { useState } from "react";
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaJava,
    FaPython,
    FaDocker,
    FaGithub,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiMongodb,
    SiNextdotjs,
    SiDjango,
    SiMysql,
} from "react-icons/si";
    import { DiJavascript1 } from "react-icons/di";

    export default function SkillsSection() {
    const skillGroups = {
        Frontend: [
        { name: "React.js", icon: <FaReact color="#61DBFB" />, level: 90, description: "Xây dựng UI tương tác, SPA với React.js" },
        { name: "JavaScript (ES6+)", icon: <DiJavascript1 color="#F7DF1E" />, level: 85, description: "Ngôn ngữ lập trình web phổ biến" },
        { name: "HTML5", icon: <FaHtml5 color="#E44D26" />, level: 95, description: "Cấu trúc nội dung trang web" },
        { name: "CSS3", icon: <FaCss3Alt color="#1572B6" />, level: 90, description: "Trang trí và bố cục trang web" },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" />, level: 85, description: "CSS tiện ích nhanh với Tailwind" },
        { name: "Next.js", icon: <SiNextdotjs color="#fff" />, level: 80, description: "Framework React tối ưu SEO & SSR" },
        ],
        Backend: [
        { name: "Node.js", icon: <FaNodeJs color="#68A063" />, level: 80, description: "Xây dựng server, API với Node.js" },
        { name: "MongoDB", icon: <SiMongodb color="#4DB33D" />, level: 75, description: "Cơ sở dữ liệu NoSQL" },
        { name: "MySQL", icon: <SiMysql color="#4479A1" />, level: 70, description: "Cơ sở dữ liệu quan hệ" },
        { name: "Python", icon: <FaPython color="#FFD43B" />, level: 85, description: "Ngôn ngữ lập trình đa dụng" },
        { name: "Django", icon: <SiDjango color="#092E20" />, level: 80, description: "Framework Python phát triển web" },
        { name: "Java", icon: <FaJava color="#f89820" />, level: 70, description: "Ngôn ngữ lập trình backend phổ biến" },
        ],
        DevOps: [
        { name: "Docker", icon: <FaDocker color="#0db7ed" />, level: 75, description: "Container hóa ứng dụng" },
        { name: "GitHub", icon: <FaGithub color="#fff" />, level: 85, description: "Quản lý mã nguồn, CI/CD" },
        ],
        "Soft Skills": [
        { name: "Communication", icon: <FaReact color="#E75480" />, level: 90, description: "Kỹ năng giao tiếp hiệu quả" },
        { name: "Teamwork", icon: <FaReact color="#E75480" />, level: 85, description: "Làm việc nhóm tốt" },
        { name: "Problem Solving", icon: <FaReact color="#E75480" />, level: 90, description: "Giải quyết vấn đề nhanh nhạy" },
        ],
    };

    const directions = [
        { x: -80, y: 0 },
        { x: 80, y: 0 },
        { x: 0, y: -80 },
        { x: 0, y: 80 },
    ];

    // State tooltip
    const [tooltip, setTooltip] = useState({
        visible: false,
        content: "",
        x: 0,
        y: 0,
    });

    // Hàm xử lý hover skill
    function handleMouseEnter(skill, e) {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip({
        visible: true,
        content: skill.description,
        x: rect.left + rect.width / 2,
        y: rect.top - 10, // hiển thị trên skill
        });
    }
    function handleMouseMove(e) {
        setTooltip((t) => ({
        ...t,
        x: e.clientX,
        y: e.clientY - 10,
        }));
    }
    function handleMouseLeave() {
        setTooltip((t) => ({
        ...t,
        visible: false,
        }));
    }

    return (
        <section id="skills" className="min-h-screen p-8 relative">
        {/* Tooltip */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: tooltip.visible ? 1 : 0, scale: tooltip.visible ? 1 : 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
            position: "fixed",
            top: tooltip.y,
            left: tooltip.x,
            pointerEvents: "none",
            background: "rgba(236,72,153,0.9)",
            color: "white",
            padding: "6px 12px",
            borderRadius: 6,
            fontSize: 12,
            whiteSpace: "nowrap",
            transform: "translate(-50%, -100%)",
            zIndex: 9999,
            userSelect: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
        >
            {tooltip.content}
        </motion.div>

        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
            My Skills
        </h2>
        <p className="text-center text-pink-200 mb-12 max-w-xl mx-auto">
            Những công nghệ và kỹ năng mình đã và đang sử dụng để xây dựng các sản phẩm web hiện đại.
        </p>

        {Object.entries(skillGroups).map(([groupName, skills], groupIndex) => (
            <div key={groupName} className="mb-14">
            <h3 className="text-xl font-semibold mb-6 text-pink-400 border-b border-pink-600 pb-2 max-w-max mx-auto">
                {groupName}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, i) => {
                const dir = directions[Math.floor(Math.random() * directions.length)];
                const [hovered, setHovered] = useState(false);

                return (
                    <motion.div
                    key={`${groupName}-${i}`}
                    initial={{ opacity: 0, x: dir.x, y: dir.y, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    onMouseEnter={(e) => {
                        setHovered(true);
                        handleMouseEnter(skill, e);
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => {
                        setHovered(false);
                        handleMouseLeave();
                    }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 10px rgba(236,72,153,0.7)",
                    }}
                    transition={{
                        duration: 0.6,
                        delay: i * 0.08 + groupIndex * 0.4,
                        ease: "easeOut",
                    }}
                    className="flex items-center gap-4 p-2 rounded-lg border border-pink-300/30 backdrop-blur-sm cursor-pointer hover:border-pink-400/50"
                    style={{ height: 50 }}
                    >
                    <div className="text-3xl flex-shrink-0">{skill.icon}</div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-pink-200 truncate">{skill.name}</p>

                        {/* Thanh progress */}
                        <div className="w-full h-2 bg-pink-200/20 rounded-full overflow-hidden mt-1">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: hovered ? `${skill.level}%` : 0 }}
                            transition={{ duration: 1 }}
                            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                        />
                        </div>
                    </div>

                    {/* % hiển thị bên phải */}
                    <div className="w-10 flex justify-end items-center">
                        <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-xs text-pink-300 tabular-nums"
                        >
                        {skill.level}%
                        </motion.span>
                    </div>
                    </motion.div>
                );
                })}
            </div>
            </div>
        ))}
        </section>
    );
    }