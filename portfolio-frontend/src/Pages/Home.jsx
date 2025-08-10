import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import HomeSection from '../components/sections/HomeSection.jsx';
import AboutSection from '../components/sections/AboutSection.jsx';
import SkillsSection from '../components/sections/SkillsSection.jsx';
import ProjectsSection from '../components/sections/ProjectsSection.jsx';
import ExperienceSection from '../components/sections/ExperienceSection.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';

export default function Home() {
    return (
        <div className="scroll-smooth">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-16 space-y-16">
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
        </main>

        <Footer />
        </div>
    );
}
