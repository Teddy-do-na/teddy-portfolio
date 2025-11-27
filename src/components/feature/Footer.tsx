
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-lg">
                <span className="text-white font-bold text-xl">TK</span>
              </div>
              <span className="text-xl font-bold">
                Teddy <span className="text-blue-400">Komta</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Développeur Full Stack passionné, spécialisé en React, Java et API REST. Toujours prêt à relever de nouveaux défis techniques.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  À propos
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Projets
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Me suivre</h3>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://github.com/Teddy-do-na" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-blue-600 transition-all cursor-pointer"
              >
                <i className="ri-github-fill text-xl"></i>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-blue-600 transition-all cursor-pointer"
              >
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a 
                href="mailto:contact@teddykomta.dev"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-blue-600 transition-all cursor-pointer"
              >
                <i className="ri-mail-fill text-xl"></i>
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              <i className="ri-mail-line mr-2"></i>
              contact@teddykomta.dev
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Teddy Komta. Tous droits réservés.
          </p>
          <a 
            href="https://readdy.ai/?origin=logo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 text-sm transition-colors cursor-pointer"
          >
            Website Builder
          </a>
        </div>
      </div>
    </footer>
  );
}
