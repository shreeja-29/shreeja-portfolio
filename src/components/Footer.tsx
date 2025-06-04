import { Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">Shreeja</h2>
            <p className="text-gray-400">
              Crafting digital experiences with code.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#home" 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#skills" 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/shreeja-29" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="GitHub"
                >
                  <GitHub className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rachakonda-shreeja/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:rachakondashreeja@gmail.com" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {year} Shreeja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;