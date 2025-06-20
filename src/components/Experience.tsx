
const Experience = () => {
  const experiences = [
    {
      title: "Student Assistant - English Department",
      company: "Department of Philosophy at Texas Tech University",
      period: "January 2024 – Present",
      description: "Managed, organized data and was responsible for customer relations, answering phones, assisting with other office assignments as needed.",
      skills: ["Customer Service", "Data Management", "Office Administration", "Communication"]
    },
    {
      title: "Part Time - Marketing Analyst",
      company: "MyWorkBelt, Michigan USA",
      period: "May 2024– Present",
      description: "Creating engaging advertisements using Canva and other software to maximize audience interaction and to drive brand awareness. My focus is on crafting visually appealing content that fosters meaningful customer engagement and promote company's growth.",
      skills: ["Marketing", "Canva", "Brand Awareness", "Content Creation", "Customer Engagement"]
    },
    {
      title: "Student Assistant - Computer Science Department",
      company: "College of Engineering at Texas Tech University",
      period: "January 2023 – May 2023",
      description: "Managed, organized data and was responsible for customer relations, computer troubleshooting, answering phones, assisting with other office assignments as needed.",
      skills: ["Technical Support", "Computer Troubleshooting", "Data Organization", "Customer Service"]
    },
    {
      title: "President & Engineer Lead",
      company: "BEST Robotics",
      period: "September 2021 – May 2022",
      description: "Led robot design and construction, managed resources, coordinated team collaboration, and promoted STEM engagement through creative designs.",
      skills: ["Leadership", "Robot Design", "Team Management", "STEM Education", "Project Coordination"]
    }
  ];

  const involvement = [
    {
      title: "Electrical Lead",
      company: "Robotics And Advanced Tech Society",
      period: "September 2022 – May 2023",
      description: "As an Electrical Engineer Lead, I'm involved in developing cutting-edge robotics technology projects, collaborating with team members, and solving technical challenges.",
      skills: ["Robotics", "Electrical Engineering", "Team Collaboration", "Technical Problem Solving"]
    },
    {
      title: "Participant and Project Presenter",
      company: "HackWesTX 2024",
      period: "September 2024",
      description: "Developed and presented 'Lock-In,' a 2-factor authentication system using Face ID and RFID for secure safe lock access, integrating hardware and software solutions.",
      skills: ["Hackathon", "Face ID", "RFID", "Authentication Systems", "Hardware Integration"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            My professional journey and leadership experience
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-purple-300 mb-8 text-center">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="border border-purple-500/20 rounded-lg p-6 bg-gradient-to-r from-purple-900/10 to-pink-900/10 hover:from-purple-900/20 hover:to-pink-900/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-purple-300">{exp.title}</h4>
                    <p className="text-lg text-pink-300">{exp.company}</p>
                  </div>
                  <span className="text-blue-300 font-medium">{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-300 mb-8 text-center">Leadership & Involvement</h3>
          <div className="space-y-8">
            {involvement.map((inv, index) => (
              <div 
                key={index} 
                className="border border-blue-500/20 rounded-lg p-6 bg-gradient-to-r from-blue-900/10 to-purple-900/10 hover:from-blue-900/20 hover:to-purple-900/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-blue-300">{inv.title}</h4>
                    <p className="text-lg text-purple-300">{inv.company}</p>
                  </div>
                  <span className="text-pink-300 font-medium">{inv.period}</span>
                </div>
                <p className="text-gray-300 mb-4">{inv.description}</p>
                <div className="flex flex-wrap gap-2">
                  {inv.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {skill}
                    </span>
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

export default Experience;
