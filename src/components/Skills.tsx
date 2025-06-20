
const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 70 },
    { name: "SQL", level: 65 },
    { name: "MongoDB", level: 60 },
    { name: "AWS", level: 55 },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600">
            Technologies I work with to bring ideas to life
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-medium text-gray-900">
                  {skill.name}
                </span>
                <span className="text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
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
    </section>
  );
};

export default Skills;
