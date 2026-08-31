import { ArrowRight, CheckCircle2, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const highlights = [
    'On-Time Handover',
    'CAPEX & OPEX Savings',
    'Quality Control',
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-36 sm:pt-40 md:pt-44 pb-16 overflow-hidden bg-gradient-hero">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full mb-8 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground">Project Management Company · Bhopal | Gwalior</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-primary-foreground leading-tight tracking-tight mb-6 animate-fade-up animation-delay-100">
              Elite Design &{' '}
              <span className="text-accent">Engineering</span>{' '}
              Solutions
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 animate-fade-up animation-delay-200">
              Hassle-free, affordable and cost-effective project management —
              from planning and procurement through construction to handover,
              with in-house engineering that saves{' '}
              <span className="text-primary-foreground font-semibold">CAPEX</span> and{' '}
              <span className="text-primary-foreground font-semibold">OPEX</span>.
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
                  const element = document.querySelector('#projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Our Projects
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
                    <div className="font-display text-4xl font-bold text-accent mb-1">22+</div>
                    <div className="text-sm text-muted-foreground font-medium">Years of Experience</div>
                  </div>
                  <div className="text-center p-5 bg-background rounded-xl border border-border">
                    <div className="font-display text-4xl font-bold text-primary mb-1">10+</div>
                    <div className="text-sm text-muted-foreground font-medium">Leadership Team</div>
                  </div>
                  <div className="text-center p-5 bg-background rounded-xl border border-border">
                    <div className="font-display text-4xl font-bold text-primary mb-1">5</div>
                    <div className="text-sm text-muted-foreground font-medium">Management Steps</div>
                  </div>
                  <div className="text-center p-5 bg-background rounded-xl border border-border">
                    <div className="font-display text-4xl font-bold text-primary mb-1">2</div>
                    <div className="text-sm text-muted-foreground font-medium">Cities We Serve</div>
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
                  <div className="text-sm font-semibold text-foreground">Resource Optimisation</div>
                  <div className="text-xs text-muted-foreground">Significant project cost savings</div>
                </div>
              </div>
            </div>

            {/* Top Right Badge */}
            <div className="absolute -top-4 right-8 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-gold animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span className="text-sm font-bold">22+ Years Experience</span>
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
