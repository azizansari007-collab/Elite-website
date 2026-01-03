import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Elite Design and Engineering Solutions</title>
        <meta 
          name="description" 
          content="Privacy Policy for Elite Design and Engineering Solutions." 
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
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="prose prose-slate max-w-none space-y-6">
              <section>
                <p className="text-muted-foreground leading-relaxed">
                  Elite Design and Engineering Solutions ("we," "our," or "us") respects your privacy and is committed to 
                  protecting your personal information. This Privacy Policy explains how we handle information when you visit 
                  our website or contact us for our project management consultancy services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you contact us through our website or email, we may collect information such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Your name and contact information (email, phone number)</li>
                  <li>Company name and project details</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information you provide to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Respond to your inquiries and provide our consultancy services</li>
                  <li>Communicate with you about your project</li>
                  <li>Improve our services and website</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Information Protection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We take reasonable measures to protect your personal information. However, no method of transmission over 
                  the Internet is 100% secure. We do not sell or share your personal information with third parties without 
                  your consent, except as required by law.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;
