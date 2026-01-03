import { Search, FileSpreadsheet, PlayCircle, CheckSquare, ClipboardList } from 'lucide-react';

const ApproachSection = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery & Strategy',
      description: 'Understand your goals, constraints and project vision. We analyze requirements and define clear objectives.',
    },
    {
      number: '02',
      icon: FileSpreadsheet,
      title: 'Detailed Planning',
      description: 'Create comprehensive schedules, cost plans, risk frameworks and resource maps tailored to your project.',
    },
    {
      number: '03',
      icon: PlayCircle,
      title: 'Execution & Monitoring',
      description: 'Oversee implementation with real-time tracking, ensuring milestones are met and quality is maintained.',
    },
    {
      number: '04',
      icon: CheckSquare,
      title: 'Quality & Compliance',
      description: 'Maintain strict adherence to specifications, standards and regulatory requirements throughout.',
    },
    {
      number: '05',
      icon: ClipboardList,
      title: 'Closure & Review',
      description: 'Final handover, comprehensive documentation, and performance assessment for continuous improvement.',
    },
  ];

  return (
    <section id="approach" className="section-padding bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label mb-6 justify-center">
            <span>Our Approach</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            How We{' '}
            <span className="text-secondary">Work</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            We follow a structured methodology that ensures success at every phase of your project.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-28 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Step Card */}
                <div className="bg-background rounded-2xl p-6 border border-border hover:border-secondary/30 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 h-full">
                  {/* Number Badge */}
                  <div className="w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center mb-5 shadow-gold group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <span className="font-display font-bold text-accent-foreground text-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="w-5 h-5 text-secondary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow - Mobile/Tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-secondary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to experience our proven methodology?
          </p>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all duration-300"
          >
            Start Your Project Today
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;

