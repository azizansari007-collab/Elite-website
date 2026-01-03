import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Approach', href: '#approach' },
    { name: 'Industries', href: '#industries' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card shadow-lg py-3'
          : 'bg-card/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-gradient-navy rounded-xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
            <span className="font-display font-bold text-primary-foreground text-xl">E</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-display font-bold text-primary text-lg leading-tight block">
              Elite Design
            </span>
            <span className="text-muted-foreground text-xs font-medium tracking-wide">
              Engineering Solutions
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-3/4 group-hover:left-[12.5%]" />
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="navy-outline" size="sm" onClick={scrollToContact}>
            Get a Quote
          </Button>
          <Button variant="gold" size="sm" onClick={scrollToContact}>
            Get Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-card shadow-xl border-t border-border transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="container-custom py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-secondary hover:bg-muted rounded-lg transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
            <Button variant="navy-outline" className="w-full" onClick={scrollToContact}>
              Get a Quote
            </Button>
            <Button variant="gold" className="w-full" onClick={scrollToContact}>
              Get Consultation
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

