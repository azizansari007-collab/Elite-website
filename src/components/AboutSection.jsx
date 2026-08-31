import { Target, Users, Shield, Award, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: 'Client-First Discipline',
      description: 'Our priority is to fulfill client requirements and deliver the best possible outcome with ease and satisfaction.',
    },
    {
      icon: Users,
      title: 'Equality & Integrity',
      description: 'We maintain equality, diversity and integrity in each of our projects.',
    },
    {
      icon: Shield,
      title: 'In-House Engineering',
      description: 'In-house engineering capabilities help us save CAPEX and OPEX on assigned projects.',
    },
    {
      icon: Award,
      title: 'Resource Optimisation',
      description: 'We use our experience to optimise resources throughout every project phase, delivering significant cost savings.',
    },
  ];

  const whyChooseUs = [
    'Hassle-free, affordable and cost-effective delivery',
    'Collaborative working with Client, Brand and consultants',
    'Pre-construction to handover within stipulated timelines',
    'In-house engineering to save CAPEX & OPEX',
    'Equality, diversity and integrity in every project',
  ];

  return (
    <section id="about" className="section-padding bg-card relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            {/* Section Label */}
            <div className="section-label mb-6">
              <span>Overview</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              A Leading{' '}
              <span className="text-secondary">Project Management</span>{' '}
              Company
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We believe in discipline, and our priority is to fulfill the client's requirements
              and provide them with the best possible solutions with absolute ease and satisfaction.
              We strive to deliver in a hassle-free, affordable and cost-effective way.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Elite Design and Engineering Solutions is a leading Project Management company
              driven by a robust workforce of Project Managers, Team Leaders, Engineers and
              other multi-skilled technical resources. At Elite, our governing principle is to
              maintain equality, diversity and integrity in each of our projects.
            </p>

            {/* Why Choose Us List */}
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-lg">Why Choose Us:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-background rounded-xl border border-border hover:border-secondary/30 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-display font-semibold mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '22+', label: 'Years of Excellence' },
              { value: '10+', label: 'Leadership Team' },
              { value: '2', label: 'Cities — Bhopal & Gwalior' },
              { value: '100%', label: 'Client Commitment' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
