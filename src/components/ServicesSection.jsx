import { 
  Briefcase, 
  DollarSign, 
  Lightbulb, 
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Project Management',
      description: 'Seamless execution for exceptional results — from pre-construction through construction, post-construction and handover, within the stipulated timeline.',
      features: [
        'Collaborative working with Client, Brand and consultants',
        'Brand design standards identified before the project',
        'Planning, procurement and execution across all phases',
        'In-house engineering to save CAPEX & OPEX',
      ],
    },
    {
      icon: DollarSign,
      title: 'Cost Management',
      description: 'Optimising resources for business value. We use our experience to reduce overall project cost without compromising quality or timelines.',
      features: [
        'Resource optimisation through every project phase',
        'Significant savings in overall project cost',
        'Interest during construction (IDC) savings',
        'CAPEX and OPEX reduction',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Expert Opinion',
      description: 'Expert technical advisory for complex projects, drawing on decades of experience across hotels, hospitals, commercial and high-rise buildings.',
      features: [
        'Technical advisory for complex projects',
        'Design basis review and optimisation',
        'Brand and consultant coordination',
        'Method-oriented operations',
      ],
    },
    {
      icon: Zap,
      title: 'Energy Audit',
      description: 'Identifying energy-saving opportunities to minimise operational losses and deliver a quality, efficient product.',
      features: [
        'Energy-saving opportunity identification',
        'Reduced operational losses',
        'Efficient product delivery',
        'Long-term OPEX savings',
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label mb-6 justify-center">
            <span>Our Services</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            End-to-End Solutions for{' '}
            <span className="text-secondary">Your Projects</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            We work collaboratively with the Client, Brand and the team of consultants —
            identifying design standards, managing planning through handover, and
            delivering in-house engineering to save CAPEX and OPEX.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-7 border border-border hover:border-secondary/30 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-navy rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-navy rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Contact us today to discuss how we can help you achieve your project goals
              with our expert consultancy services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="gold" 
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Get a Free Quote
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Talk to Our Experts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
