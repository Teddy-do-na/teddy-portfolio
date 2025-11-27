
export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://readdy.ai/api/search-image?query=Modern%20developer%20workspace%20with%20multiple%20monitors%20showing%20code%2C%20clean%20minimalist%20desk%20setup%20with%20laptop%2C%20blue%20ambient%20lighting%2C%20professional%20tech%20environment%2C%20futuristic%20atmosphere%2C%20high-tech%20coding%20station%2C%20ultra-modern%20design%20with%20blue%20tones%2C%208k%20quality&width=1920&height=1080&seq=hero-bg-teddy-001&orientation=landscape)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Photo Profile */}
          <div className="flex-shrink-0" data-aos="fade-right">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
              <img 
                src="https://res.cloudinary.com/dgy1nyv1r/image/upload/v1764200237/kotaflix/20251127_001042_bgjzgd.jpg"
                alt="Teddy Komta - Développeur Full Stack"
                title="Teddy Komta - Développeur Full Stack"
                className="relative w-full h-full object-cover object-top rounded-full border-4 border-white shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-50 rounded-full" data-aos="fade-up">
              <span className="text-blue-600 font-medium text-sm">Bienvenue sur mon portfolio</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" data-aos="fade-up" data-aos-delay="100">
              Teddy <span className="text-blue-600">Komta</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-4 font-medium" data-aos="fade-up" data-aos-delay="200">
              Développeur Full Stack | React • Java • API REST
            </p>
            
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              Passionné par la résolution de problèmes complexes et la création d'applications complètes. J'aime comprendre en profondeur comment les technologies fonctionnent et transformer des idées en solutions digitales performantes.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="400">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                Découvrir mes projets
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all whitespace-nowrap cursor-pointer"
              >
                Me contacter
              </a>
            </div>
            
            <div className="flex gap-6 mt-12 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="500">
              <a href="https://github.com/Teddy-do-na" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                <i className="ri-github-fill text-xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="mailto:contact@teddykomta.dev" className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                <i className="ri-mail-fill text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
