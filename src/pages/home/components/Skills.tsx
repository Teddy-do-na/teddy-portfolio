export default function Skills() {
  const frontendSkills = [
    { name: 'React.js', icon: 'ri-reactjs-line', level: 90 },
    { name: 'TypeScript', icon: 'ri-code-line', level: 85 },
    { name: 'JavaScript', icon: 'ri-javascript-line', level: 90 },
    { name: 'Vite', icon: 'ri-flashlight-line', level: 85 },
    { name: 'HTML/CSS', icon: 'ri-html5-line', level: 95 },
    { name: 'Axios', icon: 'ri-exchange-line', level: 80 }
  ];

  const backendSkills = [
    { name: 'Java', icon: 'ri-java-line', level: 85 },
    { name: 'API REST', icon: 'ri-server-line', level: 80 },
    { name: 'Node.js', icon: 'ri-nodejs-line', level: 75 },
    { name: 'Gestion erreurs', icon: 'ri-bug-line', level: 90 },
    { name: 'Architecture', icon: 'ri-building-line', level: 75 }
  ];

  const toolsSkills = [
    { name: 'Git & GitHub', icon: 'ri-git-branch-line', level: 85 },
    { name: 'VS Code', icon: 'ri-code-box-line', level: 90 },
    { name: 'IntelliJ', icon: 'ri-terminal-box-line', level: 80 },
    { name: 'npm', icon: 'ri-npmjs-line', level: 85 },
    { name: 'Terminal', icon: 'ri-terminal-line', level: 85 },
    { name: 'Windows/macOS', icon: 'ri-computer-line', level: 90 }
  ];

  const renderSkillCard = (skill: { name: string; icon: string; level: number }, index: number) => (
    <div 
      key={skill.name}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
      data-aos="flip-left"
      data-aos-delay={index * 50}
      data-aos-duration="600"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg">
          <i className={`${skill.icon} text-2xl text-blue-600`}></i>
        </div>
        <h4 className="font-bold text-gray-900">{skill.name}</h4>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-500 mt-2 text-right">{skill.level}%</p>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mes <span className="text-blue-600">Compétences</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise et pratique régulièrement dans mes projets
          </p>
        </div>

        {/* Frontend Skills */}
        <div className="mb-16" data-aos="fade-right" data-aos-duration="800">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-lg">
              <i className="ri-layout-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Développement Front-end</h3>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Je travaille beaucoup sur des projets en <strong>React.js</strong>, notamment avec Vite et ses plugins. J'ai de l'expérience avec l'initialisation de projets, la résolution de problèmes liés aux dépendances, la configuration d'environnement, et la gestion des erreurs courantes (500, fetch, CORS, erreurs de build…).
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frontendSkills.map((skill, index) => renderSkillCard(skill, index))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-16" data-aos="fade-left" data-aos-duration="800">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-lg">
              <i className="ri-server-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Développement Back-end</h3>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed">
            J'ai travaillé sur le traitement d'erreurs API, les endpoints REST, le débogage entre Front-end et Back-end, et la compréhension des logs serveur. J'apprends également à structurer un Back-office et concevoir des architectures simples.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backendSkills.map((skill, index) => renderSkillCard(skill, index))}
          </div>
        </div>

        {/* Tools & Systems */}
        <div data-aos="fade-right" data-aos-duration="800">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-lg">
              <i className="ri-tools-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Outils & Systèmes</h3>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Je manipule régulièrement Git, npm, VS Code, IntelliJ et la ligne de commande. Je suis capable de diagnostiquer des problèmes sur Windows et macOS, avec un bon niveau dans la compréhension des erreurs système.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolsSkills.map((skill, index) => renderSkillCard(skill, index))}
          </div>
        </div>

        {/* Ma façon de travailler */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl" data-aos="zoom-in" data-aos-duration="800">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Ma façon de <span className="text-blue-600">travailler</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4 mx-auto">
                <i className="ri-focus-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-center">Persévérant</h4>
              <p className="text-gray-600 text-sm text-center">Je repars au fond de la question jusqu'à comprendre</p>
            </div>
            <div className="bg-white p-6 rounded-xl" data-aos="fade-up" data-aos-delay="200">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4 mx-auto">
                <i className="ri-question-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-center">Questions précises</h4>
              <p className="text-gray-600 text-sm text-center">Esprit technique structuré</p>
            </div>
            <div className="bg-white p-6 rounded-xl" data-aos="fade-up" data-aos-delay="300">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4 mx-auto">
                <i className="ri-code-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-center">Pratique intensive</h4>
              <p className="text-gray-600 text-sm text-center">Projets réels et bugs concrets</p>
            </div>
            <div className="bg-white p-6 rounded-xl" data-aos="fade-up" data-aos-delay="400">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4 mx-auto">
                <i className="ri-speed-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-center">Progression rapide</h4>
              <p className="text-gray-600 text-sm text-center">Apprentissage optimal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
