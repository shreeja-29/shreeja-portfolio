import { useContext } from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <section id="home" className="pt-24 pb-20 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              <span className="block">Hi, I'm</span>
              <span className="text-blue-600 dark:text-blue-400">Shreeja Rachakonda</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6">
              Full Stack Developer
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm a passionate full-stack developer with expertise in modern web technologies.
              I enjoy building responsive, user-friendly applications that solve real-world problems.
              My focus is on creating clean, efficient code and delivering exceptional user experiences.
            </p>
            
            <div className="flex space-x-5">
              <a 
                href="https://github.com/shreeja-29" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                aria-label="GitHub"
              >
                <GitHub className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              </a>
              <a 
                href="https://www.linkedin.com/in/rachakonda-shreeja/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              </a>
              <a 
                href="mailto:rachakondashreeja@gmail.com" 
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className={`absolute inset-0 rounded-full ${
                theme === 'dark' ? 'bg-blue-600/20' : 'bg-blue-100'
              } p-2`}>
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400">
                  {/* You can replace this with an actual image URL */}
                  <img className="w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center" src="src/pic.jpg" alt="Your Profile Photo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;