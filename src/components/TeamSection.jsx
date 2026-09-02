const TeamSection = () => {
  const managingDirector = {
    name: 'Mr. Abdul Aziz Ansari',
    role: 'Managing Director',
    initials: 'AA',
    bio: 'Mr. Abdul Aziz Ansari is an Electrical & Mechanical Engineering graduate and M.Tech in Thermal Engineering. He is a focused and result-oriented professional with over 22 years of rich experience in Project Management, Planning and Execution of Hotels, Hospitals shopping malls, commercial buildings and high-rise buildings. He is known for quality construction, operations and contracts, running successful method-oriented operations and taking initiatives for business growth through process improvement.',
    projects: [
      'Dubai International Airport',
      'Taj Hotel Dubai',
      'Dubai Metro',
      'Fujairah Commercial Project',
      'Integrated Health Center, Qatar',
      '1250 Student Baniyas School, Saudi Arabia',
      'Finance Ministry',
      'Jaber Al Ahmad Al Sabah Hospital, Kuwait',
      'ITC WelcomHotel Jabalpur',
      'Sagar Multispeciality, Bhopal',
      'Panna Jungle Resort',
      'RCH Hospital Bhopal',
      'Krishna Hospital Bhopal',
      'ITC WelcomHotel Gwalior',
    ],
  };

  const team = [
    {
      name: 'Mr. Kadir Hussain',
      role: 'Head — Design & Coordination',
      initials: 'KH',
      bio: 'Mr. Kadir Hussain is a Mechanical Engineer with 20 years of working experience in the Gulf countries. He is an expert in MEPF execution. He has worked on exceptional projects including Al Ain Hypermarket Mezyad, Shiba Park, Al Salama Hospital, Khalifa Trust Building, Al Salama One Day Surgery Center, medical centres, Radisson Blu Udaipur, Hilton Garden Inn Hotel Jabalpur and ITC WelcomHotel. He is currently working on design and coordination for projects such as ITC WelcomHotel, Eco Resort and Hospital Project Bhopal.',
    },
    {
      name: 'Mr. Jitendra',
      role: 'Head — Planning',
      initials: 'JT',
      bio: 'Mr. Jitendra is a Civil Engineering graduate with 30 years of experience. He is Head of Planning for various projects, working on planning of activities and resources for ITC WelcomHotel Gwalior, RCH Hospital Bhopal and Krishna Hospital Project Bhopal.',
    },
    {
      name: 'Mr. Mohit',
      role: 'Head — Procurement',
      initials: 'MH',
      bio: 'Mr. Mohit is a Civil Engineering graduate. He is working on procurement of resources for projects including ITC WelcomHotel Gwalior, Krishna Hospital Project Bhopal and RCH Hospital Project Bhopal.',
    },
    {
      name: 'Mr. Amit',
      role: 'Coordinator — Projects',
      initials: 'AM',
      bio: 'Mr. Amit is a Mechanical Engineering graduate with specialisation in Materials Science. He handles coordination of activities and resources for projects including ITC WelcomHotel Gwalior and Hospital Project Bhopal.',
    },
    {
      name: 'Mr. Sumit',
      role: 'Head — Contracts & Tendering',
      initials: 'SM',
      bio: 'Mr. Sumit is a Mechanical Engineering graduate. He works on contracts and tenders for projects including ITC WelcomHotel Gwalior and Hospital Project Bhopal.',
    },
    {
      name: 'Mr. Rajesh',
      role: 'Head Projects — Civil',
      initials: 'RJ',
      bio: 'Mr. Rajesh is a Civil Engineering graduate with around 30 years of experience in construction across hotels, shopping malls, commercial, residential and institutional buildings. He has successfully delivered projects including Treasure Island Mall Indore, Treasure Island Mall Jabalpur and projects in Bhopal.',
    },
    {
      name: 'Mr. Aftab',
      role: 'Head Projects — MEP',
      initials: 'AF',
      bio: 'Mr. Aftab is a Mechanical Engineering graduate with 15 years of working experience in India and the Gulf countries. He is an expert in the execution of Mechanical, Electrical, Plumbing and Fire Fighting. He has successfully delivered hotels, shopping malls, commercial, residential and institutional buildings.',
    },
    {
      name: 'Mr. Sandeep',
      role: 'Head Projects — Interior',
      initials: 'SD',
      bio: 'Mr. Sandeep is a Civil Engineering graduate with 15 years of working experience. He is an expert in the execution of interior work for public areas, guest rooms and back-of-house areas. He has successfully delivered hotels, shopping malls, commercial, residential and institutional buildings.',
    },
    {
      name: 'Mr. Vivek',
      role: 'Head — EHS',
      initials: 'VK',
      bio: 'Mr. Vivek is an Electrical Engineering graduate with 10 years of working experience. He specialises in environment, health and safety. He has successfully delivered hotels, shopping malls, commercial, residential and institutional buildings.',
    },
  ];

  return (
    <section id="team" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label mb-6 justify-center">
            <span>Allround Team</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            The People Behind{' '}
            <span className="text-secondary">Elite</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            We thrive because of our knowledge, commitment and a team of highly skilled
            and motivated professionals working all round to serve you better.
          </p>
        </div>

        {/* Managing Director — featured */}
        <div className="mb-12 bg-card rounded-2xl p-8 md:p-10 border border-border">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-navy flex items-center justify-center">
                <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                  {managingDirector.initials}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
                {managingDirector.role}
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                {managingDirector.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {managingDirector.bio}
              </p>
              <p className="text-sm font-semibold mb-3">Selected projects:</p>
              <div className="flex flex-wrap gap-2">
                {managingDirector.projects.map((project) => (
                  <span
                    key={project}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Leadership grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-card rounded-2xl p-7 border border-border hover:border-secondary/30 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors duration-300">
                <span className="font-display text-lg font-bold text-secondary">
                  {member.initials}
                </span>
              </div>
              <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">
                {member.role}
              </p>
              <h3 className="font-display text-xl font-semibold mb-3">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
