import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ApproachSection from '@/components/ApproachSection';
import TeamSection from '@/components/TeamSection';
import ProjectsSection from '@/components/ProjectsSection';
import IndustriesSection from '@/components/IndustriesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Elite Design and Engineering Solutions | Project Management Company</title>
        <meta 
          name="description" 
          content="Elite Design and Engineering Solutions is a leading Project Management company in Bhopal and Gwalior. Planning, procurement, design coordination, value engineering and quality control from pre-construction to handover." 
        />
        <meta name="keywords" content="project management, cost management, energy audit, value engineering, MEPF, Bhopal, Gwalior, construction management" />
        <meta property="og:title" content="Elite Design and Engineering Solutions" />
        <meta property="og:description" content="Leading Project Management company in Bhopal and Gwalior — from planning to handover." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://elitedesign.com" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ApproachSection />
          <TeamSection />
          <ProjectsSection />
          <IndustriesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
