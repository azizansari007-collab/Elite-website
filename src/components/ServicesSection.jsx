import { 
  Briefcase, 
  Calendar, 
  DollarSign, 
  ClipboardCheck, 
  FileText, 
  MapPin,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Project Management Consultancy',
      description: 'Comprehensive oversight of every aspect of a project lifecycle with strategic planning, team coordination, risk mitigation and resource management.',
      features: ['Project brief development', 'Team selection & planning', 'Progress monitoring', 'Risk evaluation'],
    },
    {
      icon: Calendar,
      title: 'Project Planning & Scheduling',
      description: 'Developing robust schedules that align project milestones with deliverables, resource allocation, and timelines for efficient delivery.',
      features: ['Timeline forecasting', 'Critical Path identification', 'Resource optimization', 'Progress tracking'],
    },
    {
      icon: DollarSign,
      title: 'Cost Control & Budget Management',
      description: 'Establishing and maintaining realistic, optimized project budgets. From cost estimation to continuous monitoring for financial efficiency.',
      features: ['Budget planning', 'Value engineering', 'Cost trend analysis', 'Procurement oversight'],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Assurance & Control',
      description: 'Ensuring project standards meet regulatory and client expectations through rigorous inspections and compliance tracking.',
      features: ['Material inspection', 'Compliance standards', 'Quality checkpoints', 'Improvement tracking'],
    },
    {
      icon: FileText,
      title: 'Contract Administration',
      description: 'Efficient contract oversight ensuring obligations are fulfilled, deliverables are met, and disputes are minimized.',
      features: ['Contract drafting', 'Scope verification', 'Change management', 'Payment certification'],
    },
    {
      icon: MapPin,
      title: 'Site Coordination & Monitoring',
      description: 'Establishing consistent communication channels onsite, coordinating teams, and monitoring progress aligned with safety standards.',
      features: ['Onsite coordination', 'Team management', 'Safety compliance', 'Progress monitoring'],
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
            We provide comprehensive solutions tailored to your project's unique requirements. 
            Every phase—from planning to handover—is executed with precision and transparency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-secondary font-semibold text-sm group-hover:gap-3 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
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

