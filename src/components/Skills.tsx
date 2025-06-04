import { useState, useEffect } from 'react';
import { Code, Database, Server, Globe } from 'lucide-react';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'other';
  level: number;
}

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  const skills: Skill[] = [
    { name: 'HTML', category: 'frontend', level: 90 },
    { name: 'CSS', category: 'frontend', level: 85 },
    { name: 'JavaScript', category: 'frontend', level: 85 },
    { name: 'React.js', category: 'frontend', level: 80 },
    { name: 'Next.js', category: 'frontend', level: 75 },
    { name: 'Node.js', category: 'backend', level: 80 },
    { name: 'Python', category: 'backend', level: 75 },
    { name: 'MySQL', category: 'database', level: 70 },
    { name: 'MongoDB', category: 'database', level: 75 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) observer.observe(skillsSection);

    return () => observer.disconnect();
  }, []);

  const getSkillsByCategory = (category: Skill['category']) => {
    return skills.filter(skill => skill.category === category);
  };

  const renderSkillCategory = (
    title: string, 
    category: Skill['category'], 
    icon: JSX.Element
  ) => {
    const categorySkills = getSkillsByCategory(category);
    
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
        </div>
        
        <div className="space-y-4">
          {categorySkills.map(skill => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-blue-500 dark:bg-blue-400 rounded-full transition-all duration-1000 ease-out ${
                    animated ? 'w-[var(--skill-level)]' : 'w-0'
                  }`}
                  style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies in web development,
            from front-end frameworks to back-end solutions and databases.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderSkillCategory('Frontend', 'frontend', 
            <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          )}
          
          {renderSkillCategory('Backend', 'backend', 
            <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          )}
          
          {renderSkillCategory('Database', 'database', 
            <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          )}
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Other Skills</h3>
            </div>
            
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                Version Control (Git)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                RESTful API Design
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                Responsive Web Design
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                Problem Solving
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                Team Collaboration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;