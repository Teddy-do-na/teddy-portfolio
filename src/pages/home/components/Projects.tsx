export default function Projects() {
  const projects = [
    {
      title: 'Kotaflix RCA',
      description: 'Plateforme de streaming vidéo complète avec gestion de contenu, système d\'authentification et interface utilisateur moderne. Projet démontrant ma maîtrise du développement Full Stack.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20video%20streaming%20platform%20interface%20with%20dark%20theme%2C%20Netflix-style%20layout%2C%20movie%20thumbnails%20grid%2C%20professional%20UI%20design%2C%20blue%20accent%20colors%2C%20high%20quality%20mockup%2C%208k%20resolution&width=800&height=500&seq=kotaflix-project-001&orientation=landscape',
      tags: ['React', 'TypeScript', 'API REST', 'Streaming'],
      link: 'https://kotaflix-rca.onrender.com',
      github: 'https://github.com/Teddy-do-na'
    },
    {
      title: 'Management Backend',
      description: 'Système de gestion back-end robuste avec API REST, gestion des erreurs avancée et architecture scalable. Démontre mes compétences en développement serveur et traitement de données.',
      image: 'https://readdy.ai/api/search-image?query=Backend%20API%20dashboard%20interface%2C%20server%20management%20system%2C%20data%20flow%20visualization%2C%20modern%20admin%20panel%20with%20blue%20theme%2C%20technical%20architecture%20diagram%2C%20professional%20design%2C%208k%20quality&width=800&height=500&seq=management-backend-001&orientation=landscape',
      tags: ['Node.js', 'API REST', 'Backend', 'Architecture'],
      link: '#',
      github: 'https://github.com/Teddy-do-na/management-backend'
    },
    {
      title: 'Management Frontend',
      description: 'Interface d\'administration moderne et intuitive avec React. Gestion complète des composants, routing avancé et intégration API. Projet illustrant mes compétences Front-end.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20admin%20dashboard%20interface%2C%20clean%20management%20system%20UI%2C%20data%20tables%20and%20charts%2C%20blue%20color%20scheme%2C%20professional%20frontend%20design%2C%20responsive%20layout%2C%208k%20resolution&width=800&height=500&seq=management-frontend-001&orientation=landscape',
      tags: ['React', 'TypeScript', 'Vite', 'UI/UX'],
      link: '#',
      github: 'https://github.com/Teddy-do-na/management-frontend'
    },
    {
      title: 'HEGC - Système de Gestion Scolaire',
      description: 'Application complète de gestion d\'établissement scolaire avec modules étudiants, cours, notes et administration. Projet Full Stack démontrant ma capacité à gérer des systèmes complexes.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20school%20management%20system%20interface%2C%20educational%20platform%20dashboard%2C%20student%20and%20course%20management%20UI%2C%20clean%20blue%20design%2C%20professional%20academic%20software%2C%208k%20quality&width=800&height=500&seq=hegc-project-001&orientation=landscape',
      tags: ['React', 'Backend', 'Gestion', 'Full Stack'],
      link: '#',
      github: 'https://github.com/Teddy-do-na/HEGC'
    },
    {
      title: 'HEGC Backend',
      description: 'Architecture back-end du système HEGC avec gestion des données scolaires, API sécurisées et logique métier complexe. Illustre ma maîtrise des systèmes serveur.',
      image: 'https://readdy.ai/api/search-image?query=Backend%20server%20architecture%20visualization%2C%20database%20schema%20diagram%2C%20API%20endpoints%20structure%2C%20technical%20system%20design%20with%20blue%20accents%2C%20professional%20backend%20illustration%2C%208k%20resolution&width=800&height=500&seq=hegc-backend-001&orientation=landscape',
      tags: ['Backend', 'API', 'Base de données', 'Architecture'],
      link: '#',
      github: 'https://github.com/Teddy-do-na/HEGC-Backend'
    },
    {
      title: 'Gestion École Frontend',
      description: 'Interface utilisateur complète pour la gestion scolaire avec React. Design moderne, navigation intuitive et expérience utilisateur optimisée pour les établissements éducatifs.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20educational%20management%20interface%2C%20school%20administration%20dashboard%2C%20clean%20UI%20with%20student%20cards%2C%20blue%20theme%20design%2C%20professional%20education%20software%20frontend%2C%208k%20quality&width=800&height=500&seq=gestion-ecole-001&orientation=landscape',
      tags: ['React', 'TypeScript', 'UI/UX', 'Éducation'],
      link: '#',
      github: 'https://github.com/Teddy-do-na/Gestion-Ecole-Frontend'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mes <span className="text-blue-600">Projets</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez mes réalisations concrètes qui démontrent mes compétences en développement Full Stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="600"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  title={project.title}
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.link !== '#' && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-all text-center whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-external-link-line mr-2"></i>
                      Voir le projet
                    </a>
                  )}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-all whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-github-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pourquoi me choisir */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white" data-aos="zoom-in" data-aos-duration="800">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Pourquoi me <span className="text-blue-200">choisir ?</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg mb-4">
                <i className="ri-rocket-line text-2xl"></i>
              </div>
              <h4 className="font-bold text-lg mb-2">Motivé & Actif</h4>
              <p className="text-blue-100 text-sm">Je progresse rapidement et reste constamment actif dans mon apprentissage</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl" data-aos="fade-up" data-aos-delay="200">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg mb-4">
                <i className="ri-bug-2-line text-2xl"></i>
              </div>
              <h4 className="font-bold text-lg mb-2">Résolution de bugs réels</h4>
              <p className="text-blue-100 text-sm">Habitué à résoudre des problèmes concrets, pas uniquement des exercices</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl" data-aos="fade-up" data-aos-delay="300">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg mb-4">
                <i className="ri-stack-line text-2xl"></i>
              </div>
              <h4 className="font-bold text-lg mb-2">Vision globale</h4>
              <p className="text-blue-100 text-sm">Je comprends les problématiques système, front, back et architecture</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl" data-aos="fade-up" data-aos-delay="400">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg mb-4">
                <i className="ri-question-answer-line text-2xl"></i>
              </div>
              <h4 className="font-bold text-lg mb-2">Questions pertinentes</h4>
              <p className="text-blue-100 text-sm">Je pose les bonnes questions et cherche toujours la solution optimale</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl" data-aos="fade-up" data-aos-delay="500">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg mb-4">
                <i className="ri-lightbulb-flash-line text-2xl"></i>
              </div>
              <h4 className="font-bold text-lg mb-2">Apprentissage rapide</h4>
              <p className="text-blue-100 text-sm">Je comprends vite et j'aime construire des solutions complètes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl" data-aos="fade-up" data-aos-delay="600">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg mb-4">
                <i className="ri-heart-line text-2xl"></i>
              </div>
              <h4 className="font-bold text-lg mb-2">Passion authentique</h4>
              <p className="text-blue-100 text-sm">J'aime comprendre et créer, pas seulement coder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
