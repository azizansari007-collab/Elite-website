import { ArrowUp, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#contact' },
      { name: 'News & Insights', href: '#' },
    ],
    services: [
      { name: 'Project Management', href: '#services' },
      { name: 'Cost Control', href: '#services' },
      { name: 'Quality Assurance', href: '#services' },
      { name: 'Contract Administration', href: '#services' },
    ],
    resources: [
      { name: 'Case Studies', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'FAQs', href: '#' },
      { name: 'Downloads', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-gold hover:scale-110 transition-transform duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="container-custom pt-20 pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-gradient-gold rounded-xl flex items-center justify-center shadow-gold">
                <span className="font-display font-bold text-accent-foreground text-xl">E</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg leading-tight block">
                  Elite Design
                </span>
                <span className="text-primary-foreground/70 text-xs font-medium tracking-wide">
                  Engineering Solutions
                </span>
              </div>
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-sm">
              Delivering projects on time, within budget, and with exceptional quality. 
              Your trusted partner in project management consultancy.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display font-semibold mb-5 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Elite Design and Engineering Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-xs text-primary-foreground/60 hover:text-accent transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

