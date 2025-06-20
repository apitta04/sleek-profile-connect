
const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Tech Company",
      period: "Summer 2024",
      description: "Developed web applications using React and Node.js, collaborated with cross-functional teams",
      skills: ["React", "Node.js", "JavaScript", "Git"]
    },
    {
      title: "Computer Science Student",
      company: "University",
      period: "2022 - Present",
      description: "Pursuing Bachelor's degree in Computer Science with focus on software engineering and algorithms",
      skills: ["Data Structures", "Algorithms", "Software Engineering", "Database Design"]
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      period: "2023 - Present",
      description: "Built custom websites and applications for small businesses and personal projects",
      skills: ["Full-Stack Development", "UI/UX Design", "Client Communication"]
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
            My journey in software development and computer science
          </p>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="border border-purple-500/20 rounded-lg p-6 bg-gradient-to-r from-purple-900/10 to-pink-900/10 hover:from-purple-900/20 hover:to-pink-900/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-purple-300">{exp.title}</h3>
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
    </section>
  );
};

export default Experience;
