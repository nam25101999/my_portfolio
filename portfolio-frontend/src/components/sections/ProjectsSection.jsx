import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Map màu theo tên ngôn ngữ
const languageColors = {
    JavaScript: "#f1e05a",
    TypeScript: "#2b7489",
    Python: "#3572A5",
    Java: "#b07219",
    CSS: "#563d7c",
    HTML: "#e34c26",
    Shell: "#89e051",
    PHP: "#4F5D95",
    Ruby: "#701516",
    C: "#555555",
    "C++": "#f34b7d",
    "C#": "#178600",
    Go: "#00ADD8",
    Swift: "#ffac45",
    Kotlin: "#F18E33",
    Dart: "#00B4AB",
    Rust: "#dea584",
    Scala: "#c22d40",
    Vue: "#41b883",
    Dockerfile: "#384d54",
    JSON: "#292929",
    // Thêm nếu cần
};

function LanguagesBar({ owner, repo }) {
const [languages, setLanguages] = useState(null);
const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchLanguages() {
        try {
            const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`);
            const data = await res.json();
            setLanguages(data);
        } catch (error) {
            console.error("Error fetching languages:", error);
        } finally {
            setLoading(false);
        }
        }
        fetchLanguages();
    }, [owner, repo]);

    if (loading) return <p className="text-sm text-pink-400">Loading languages...</p>;
    if (!languages || Object.keys(languages).length === 0)
        return <p className="text-sm text-pink-400">No language data</p>;

    const totalBytes = Object.values(languages).reduce((a, b) => a + b, 0);

    return (
        <div className="mt-3">
        <h4 className="text-sm font-semibold text-pink-500 mb-1">Languages</h4>
        <div className="flex flex-col gap-1">
            {Object.entries(languages).map(([lang, bytes]) => {
            const percent = ((bytes / totalBytes) * 100).toFixed(1);
            const color = languageColors[lang] || "#ccc"; // Màu mặc định nếu ko có trong map

            return (
                <div key={lang} className="flex items-center gap-2">
                <span className="w-20 text-xs text-pink-300">{lang}</span>
                <div className="flex-1 h-3 rounded overflow-hidden" style={{ backgroundColor: "#f3e8ff" }}>
                    <div
                    className="h-3 rounded"
                    style={{
                        width: `${percent}%`,
                        backgroundColor: color,
                        transition: "width 0.5s ease",
                    }}
                    title={`${percent}%`}
                    />
                </div>
                <span className="w-10 text-xs text-pink-300 text-right">{percent}%</span>
                </div>
            );
            })}
        </div>
        </div>
    );
    }

    export default function ProjectsSection() {
    const [repos, setRepos] = useState([]);
    const githubUser = "nam25101999";

    useEffect(() => {
        async function fetchRepos() {
        try {
            const res = await fetch(
            `https://api.github.com/users/${githubUser}/repos?per_page=100&sort=updated`
            );
            const data = await res.json();

            const wanted = [
            "quiz-project",
            "testcrawl",
            "django-e-commerce",
            "nodejs-blog",
            "E-Learning",
            ];

            const filtered = data
            .filter((repo) => wanted.includes(repo.name))
            .sort((a, b) => wanted.indexOf(a.name) - wanted.indexOf(b.name));

            setRepos(filtered);
        } catch (error) {
            console.error("Failed to fetch repos:", error);
        }
        }
        fetchRepos();
    }, []);

    return (
        <section id="projects" className="min-h-screen p-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Projects / Dự án
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => (
            <article
                key={repo.id}
                className="flex flex-col justify-between border border-pink-300 rounded-lg p-5 cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
                <div>
                <h3 className="text-xl font-semibold text-pink-600 mb-3 truncate">{repo.name}</h3>
                <p className="text-pink-800 mb-2 min-h-[60px]">{repo.description || "No description"}</p>

                {/* Languages Bar */}
                <LanguagesBar owner={githubUser} repo={repo.name} />
                </div>

                <div className="flex gap-4 mt-5">
                {repo.homepage ? (
                    <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded hover:opacity-90"
                    >
                    <FaExternalLinkAlt /> Demo
                    </a>
                ) : null}

                <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-pink-500 text-pink-600 rounded hover:bg-pink-50 transition"
                >
                    <FaGithub /> GitHub
                </a>
                </div>
            </article>
            ))}
        </div>
        </section>
    );
}
