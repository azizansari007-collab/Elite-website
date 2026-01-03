import { Building2, Home, Factory, Hotel, Server, HeartPulse } from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      icon: Building2,
      title: 'Commercial Buildings',
      description: 'Office towers, retail centers, and mixed-use developments.',
    },
    {
      icon: Home,
      title: 'Residential Developments',
      description: 'Housing complexes, apartments, and community projects.',
    },
    {
      icon: Factory,
      title: 'Industrial Projects',
      description: 'Manufacturing facilities, warehouses, and logistics centers.',
    },
    {
      icon: Hotel,
      title: 'Hospitality & Retail',
      description: 'Hotels, resorts, shopping malls, and entertainment venues.',
    },
    {
      icon: Server,
      title: 'Technology & Data Centers',
      description: 'IT infrastructure, data centers, and tech campuses.',
    },
    {
      icon: HeartPulse,
      title: 'Healthcare Facilities',
      description: 'Hospitals, clinics, and medical research centers.',
    },
  ];

  return (
    <section id="industries" className="section-padding bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label mb-6 justify-center">
            <span>Industries</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Industries We{' '}
            <span className="text-secondary">Serve</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            We support projects across diverse sectors, bringing specialized expertise 
            and proven methodologies to every industry we serve.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-secondary/30"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/15 transition-colors duration-300">
                  <industry.icon className="w-8 h-8 text-secondary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

