import { useState } from 'react';
import { Eye, Github as GitHub, ExternalLink } from 'lucide-react';
import { Project } from '../types';

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Face-Biometric',
      description: 'A facial recognition system using computer vision techniques for secure authentication and identity verification.',
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'React'],
      githubUrl: 'https://github.com/shreeja-29/FaceBiometricAttendance',
      liveUrl: '#',
    },
    {
      id: 2,
      title: 'ChatBot-For-Customer-Support',
      description: 'An AI-powered chatbot designed to provide instant customer support and answer frequently asked questions.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Node.js', 'NLP', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/shreeja-29/ChatBot-For-Customer-Support',
      liveUrl: '#',
    },
    {
      id: 3,
      title: 'Movie Rating Prediction',
      description: 'A machine learning model that predicts movie ratings based on various features like cast, director, and genre.',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
      githubUrl: 'https://github.com/shreeja-29/Movie-Rating-Prediction',
      liveUrl: '#',
    },
  ];

  const handleProjectHover = (id: number | null) => {
    setActiveProject(id);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my featured projects. Each one was built to solve a specific problem
            and showcases different aspects of my technical skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => handleProjectHover(project.id)}
              onMouseLeave={() => handleProjectHover(null)}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
                <div className={`absolute inset-0 bg-blue-600/70 flex items-center justify-center transition-opacity duration-300 ${
                  activeProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <GitHub className="w-5 h-5 text-blue-600" />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="View live site"
                    >
                      <ExternalLink className="w-5 h-5 text-blue-600" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
