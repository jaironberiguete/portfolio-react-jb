import { AboutSection } from '../components/AboutSection';
import { HeroSection } from '../components/HeroSection';
import { Navbar } from '../components/Navbar';
import { ProjectsSection } from '../components/ProjectsSection';
import { CertificatesSection } from '../components/CertificatesSection';
import { SkillsSection } from '../components/SkillsSection';
import { ThemeToggle } from '../components/ThemeToggle';
import { StarBackground } from '@/components/StarBackground'
import { ContactSection } from '../components/Contact';
import { Footer } from '../components/Footer';
import { GridBackground } from '../components/GridBackground';
export const Home = () => {
    return ( <div className='min-h-screen bg-background text-foreground overflow-x-hidden'> 
        {/* Theme Toggle */}
         < ThemeToggle />
        {/* Star Background Effects */}
         <StarBackground/>
        {/* Grid Background Effects */}
         <GridBackground/>
        {/* NavBar */}
         <Navbar/>
        {/* Main Content */}
         <main>
         <HeroSection/>
         <AboutSection/>
        <ProjectsSection/>
         <SkillsSection/>
         <ContactSection/>
         </main>
        {/* Footer */}
        <Footer/>

    </div>
    );
};