import { ArrowRight, CheckCircle2, Shield, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const highlights = [
    'On-Time Delivery',
    'Budget Control',
    'Quality Assurance',
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary-foreground">Project Management Excellence</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-up animation-delay-100">
              Elite Design &{' '}
              <span className="text-accent">Engineering</span>{' '}
              Solutions
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 animate-fade-up animation-delay-200">
              Delivering projects{' '}
              <span className="text-primary-foreground font-semibold">on time</span>,{' '}
              <span className="text-primary-foreground font-semibold">within budget</span>, and with{' '}
              <span className="text-primary-foreground font-semibold">exceptional quality</span>. 
              Professional project management consultancy for seamless execution.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-up animation-delay-300">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Get Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl"
                onClick={() => {
                  const element = document.querySelector('#services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Our Services
              </Button>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 animate-fade-up animation-delay-400">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-primary-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block animate-fade-up animation-delay-300">
            {/* Main Card */}
            <div className="relative bg-card rounded-2xl p-8 shadow-xl border border-border/50">
              {/* Decorative accent */}
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-gradient-gold rounded-xl opacity-30 blur-xl" />
              
              <div className="relative">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-5 mb-8">
                  <div className="text-center p-5 bg-background rounded-xl border border-border">
                    <div className="font-display text-4xl font-bold text-accent mb-1">15+</div>
                    <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
                  </div>
                  <div className="text-center p-5 bg-background rounded-xl border border-border">
                    <div className="font-display text-4xl font-bold text-primary mb-1">200+</div>
                    <div className="text-sm text-muted-foreground font-medium">Projects Delivered</div>
                  </div>
                  <div className="text-center p-5 bg-background rounded-xl border border-border">
                    <div className="font-display text-4xl font-bold text-primary mb-1">98%</div>
                    <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-5 bg-background rounded-xl border border-border">
                    <div className="font-display text-4xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-muted-foreground font-medium">Expert Consultants</div>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="w-12 h-12 bg-gradient-navy rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Trusted Partner</div>
                    <div className="text-sm text-muted-foreground">ISO 9001:2015 Certified</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">On-Time Delivery</div>
                  <div className="text-xs text-muted-foreground">99.5% Success Rate</div>
                </div>
              </div>
            </div>

            {/* Top Right Badge */}
            <div className="absolute -top-4 right-8 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-gold animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span className="text-sm font-bold">PMI Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-fade-up animation-delay-500">
        <span className="text-xs text-primary-foreground/60 uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

