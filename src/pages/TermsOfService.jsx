import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Elite Design and Engineering Solutions</title>
        <meta 
          name="description" 
          content="Terms of Service for Elite Design and Engineering Solutions." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 section-padding bg-background">
          <div className="container-custom max-w-4xl">
            <div className="mb-8">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <span>←</span> Back to Home
              </Link>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Terms of Service
              </h1>
              <p className="text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="prose prose-slate max-w-none space-y-6">
              <section>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the website of Elite Design and Engineering Solutions ("we," "our," or "us"), 
                  you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use 
                  our website.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Our Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Elite Design and Engineering Solutions provides professional project management consultancy services, 
                  including project planning, cost control, quality assurance, contract administration, and site coordination.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  All services are provided subject to separate service agreements that will be executed between you and 
                  Elite Design and Engineering Solutions.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Use of Website</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may use our website for lawful purposes only. You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Use the website in any way that violates applicable laws</li>
                  <li>Transmit any malicious code or harmful materials</li>
                  <li>Attempt to gain unauthorized access to the website</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos, and images, is the property of Elite Design 
                  and Engineering Solutions and is protected by copyright laws. You may not reproduce or distribute any content 
                  without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Service Agreements</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you engage our consultancy services, a separate service agreement will be executed that will specify 
                  the scope of services, timelines, fees, payment terms, and other relevant details. The terms of the service 
                  agreement will govern the specific services provided.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, our liability for any claims arising from our services is limited 
                  to the fees paid for the specific service. We provide consultancy services and recommendations, but final 
                  decisions and implementation are the responsibility of the client.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. We will update the "Last updated" date 
                  when changes are made. Your continued use of our website after such changes constitutes acceptance of the 
                  modified terms.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <p className="text-muted-foreground mb-2">
                    <strong>Elite Design and Engineering Solutions</strong>
                  </p>
                  <p className="text-muted-foreground mb-2">
                    A-206 Kasturi heights, New Lambakheda<br />
                    Bhopal, MP 462038, India
                  </p>
                  <p className="text-muted-foreground mb-2">
                    Email: <a href="mailto:md@elitednesolutions.in" className="text-secondary hover:underline">md@elitednesolutions.in</a>
                  </p>
                  <p className="text-muted-foreground">
                    Phone: <a href="tel:+919039904755" className="text-secondary hover:underline">+91 9039904755</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;

