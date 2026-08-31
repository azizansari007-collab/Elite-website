import { HeartPulse, Hotel, Leaf, Home } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      icon: Home,
      title: 'High-end Bungalow',
      location: 'Gwalior',
      tags: ['Residential'],
      stats: [
        { label: 'Built-up area', value: '27,000 sq. ft.' },
      ],
    },
    {
      icon: HeartPulse,
      title: 'Rainbow Hospital',
      location: 'Madhya Pradesh',
      tags: ['Healthcare'],
      stats: [
        { label: 'Built-up area', value: '188,000 sq. ft.' },
        { label: 'Beds', value: '200' },
      ],
    },
    {
      icon: HeartPulse,
      title: 'Krishna Hospital',
      location: 'Madhya Pradesh',
      tags: ['Healthcare'],
      stats: [
        { label: 'Built-up area', value: '175,000 sq. ft.' },
        { label: 'Beds', value: '150' },
      ],
    },
    {
      icon: Hotel,
      title: 'ITC WelcomHotel',
      location: 'Jabalpur, M.P.',
      tags: ['Hospitality', 'Greenfield'],
      stats: [
        { label: 'Built-up area', value: '220,000 sq. ft.' },
        { label: 'Rooms', value: '125' },
      ],
    },
    {
      icon: Hotel,
      title: 'ITC WelcomHotel',
      location: 'Gwalior, M.P.',
      tags: ['5 Star Hotel', 'Greenfield'],
      stats: [
        { label: 'Built-up area', value: '225,000 sq. ft.' },
        { label: 'Rooms', value: '125' },
      ],
    },
    {
      icon: Leaf,
      title: 'Panna Eco Resort',
      location: 'Madhya Pradesh',
      tags: ['Hospitality', 'Eco Resort'],
      stats: [],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-card relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label mb-6 justify-center">
            <span>Our Projects</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Work That Speaks for{' '}
            <span className="text-secondary">Itself</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            We believe in giving 100% to our clients. With years of rich experience and expertise,
            we assure complete peace of mind while we manage agile workflows.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={`${project.title}-${project.location}`}
              className="group relative bg-background rounded-2xl p-8 border border-border overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-secondary/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary/15 transition-colors duration-300">
                    <project.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.location}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent-foreground border border-accent/20 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.stats.length > 0 && (
                  <div className="pt-4 border-t border-border grid grid-cols-2 gap-3">
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-xs text-muted-foreground mb-0.5">{stat.label}</div>
                        <div className="font-display font-semibold text-sm">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary strip */}
        <div className="mt-16 bg-gradient-navy rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent/15 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {['Defining Responsibility', 'Resource Allocation', 'Planning & Execution'].map((item) => (
                <span
                  key={item}
                  className="text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-primary-foreground/90 leading-relaxed">
              We believe in giving 100% to our clients. By using our years of rich experience
              and expertise, we assure our clients complete peace of mind while we manage
              agile workflows. We thrive because of our knowledge, commitment and a team
              of highly skilled and motivated professionals working all round to serve you better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
