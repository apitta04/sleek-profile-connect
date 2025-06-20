
const Skills = () => {
  const technicalSkills = [
    "Leadership", "Teamwork", "Communication skills", "Multitasking", "Problem Solving", 
    "Computer Proficiency", "Multilingual", "Autodesk Inventor", "Fusion360", "Microsoft Office", 
    "Arduino", "Python", "Mcad/Ecad", "Fabrication", "Verilog", "FPGA", "C, C++", 
    "Micro-controllers", "KiCad", "MatLab", "LTspice", "Simulink"
  ];

  const categorizedSkills = [
    {
      category: "Programming & Software",
      skills: ["Python", "C/C++", "Arduino", "Verilog", "FPGA", "MatLab", "LTspice", "Simulink"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Design & CAD",
      skills: ["Autodesk Inventor", "Fusion360", "KiCad", "Mcad/Ecad", "Fabrication"],
      color: "from-blue-500 to-purple-500"
    },
    {
      category: "Hardware & Electronics",
      skills: ["Micro-controllers", "Arduino", "FPGA", "Circuit Design"],
      color: "from-pink-500 to-blue-500"
    },
    {
      category: "Professional Skills",
      skills: ["Leadership", "Teamwork", "Communication", "Multitasking", "Problem Solving", "Project Management"],
      color: "from-purple-400 to-pink-400"
    },
    {
      category: "Tools & Software",
      skills: ["Microsoft Office", "Computer Proficiency", "Technical Documentation"],
      color: "from-blue-400 to-purple-400"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-black to-purple-900/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              Skills & Technical Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Comprehensive technical and professional skill set
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              All Technical Skills
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {technicalSkills.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorizedSkills.map((category, categoryIndex) => (
            <div 
              key={category.category} 
              className="border border-purple-500/20 rounded-lg p-6 bg-gradient-to-b from-gray-900/50 to-gray-800/50 hover:from-gray-900/70 hover:to-gray-800/70 transition-all duration-300"
            >
              <h4 className="text-xl font-bold mb-6 text-center">
                <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.category}
                </span>
              </h4>
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-purple-500/10 transition-all duration-200"
                    style={{
                      animationDelay: `${(categoryIndex * 100) + (index * 50)}ms`,
                    }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <span className="text-gray-300 hover:text-purple-300 transition-colors duration-200">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-purple-500/20">
            <p className="text-purple-300 font-semibold mb-2">Special Recognition</p>
            <p className="text-gray-300">
              <span className="text-pink-300 font-medium">Best Invention Award</span> for Self-Cleaning bot 
              <br />
              <span className="text-sm text-gray-400">Given by Oakland Schools of Education Foundation</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
