import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Office',
      details: ['123 Business District', 'City, State 12345'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@elitedesign.com', 'projects@elitedesign.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM'],
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-background rounded-2xl p-8 md:p-10 border border-border shadow-card">
            <h3 className="font-display text-2xl font-semibold mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements..."
                  required
                  className="min-h-[140px] resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="gold" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-5">
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

            {/* Map Placeholder */}
            <div className="flex-1 min-h-[200px] bg-secondary/5 rounded-xl border border-border overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-secondary mx-auto mb-3 opacity-40" />
                  <p className="text-muted-foreground text-sm">Interactive map coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

