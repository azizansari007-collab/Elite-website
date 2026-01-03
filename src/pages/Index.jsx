import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ApproachSection from '@/components/ApproachSection';
import IndustriesSection from '@/components/IndustriesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Elite Design and Engineering Solutions | Project Management Consultancy</title>
        <meta 
          name="description" 
          content="Professional project management consultancy delivering projects on time, within budget, and with exceptional quality. Expert services in cost control, quality assurance, and site coordination." 
        />
        <meta name="keywords" content="project management, consultancy, engineering solutions, cost control, quality assurance, construction management" />
        <meta property="og:title" content="Elite Design and Engineering Solutions" />
        <meta property="og:description" content="Professional project management consultancy for seamless execution." />
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
          <IndustriesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

