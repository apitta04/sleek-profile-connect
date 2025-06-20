
const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 90, category: "Programming" },
    { name: "Python", level: 85, category: "Programming" },
    { name: "React", level: 88, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "TypeScript", level: 75, category: "Programming" },
    { name: "SQL", level: 70, category: "Database" },
    { name: "Git", level: 85, category: "Tools" },
    { name: "AWS", level: 60, category: "Cloud" },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-black to-purple-900/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Technologies I work with to bring ideas to life
          </p>
        </div>
        
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">{category}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.filter(skill => skill.category === category).map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-3">
                    <span className="text-lg font-medium text-pink-300">
                      {skill.name}
                    </span>
                    <span className="text-blue-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden border border-purple-500/20">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
