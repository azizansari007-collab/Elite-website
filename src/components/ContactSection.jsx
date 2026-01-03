import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Office',
      details: ['A-206 Kasturi heights, New Lambakheda', 'Bhopal, MP 462038'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9039904755', '+91 9893455515'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['md@elitednesolutions.in', 'md.elitednesolutions@gmail.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 10:00 AM - 7:00 PM'],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl -translate-x-1/2" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label mb-6 justify-center">
            <span>Contact Us</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Let's Start Your{' '}
            <span className="text-secondary">Project</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Ready to bring your vision to life? Get in touch with our team to discuss 
            your project requirements and discover how we can help.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-5 p-6 bg-background rounded-xl border border-border hover:border-secondary/30 transition-all duration-300 hover:shadow-card"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-2">
                    {info.title}
                  </h4>
                  {info.details.map((detail, dIndex) => (
                    <p key={dIndex} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

