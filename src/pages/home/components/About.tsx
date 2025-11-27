export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            À propos de <span className="text-blue-600">moi</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-duration="800">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Un développeur passionné par la <span className="text-blue-600">compréhension profonde</span>
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Je m'appelle <strong>Teddy Komta</strong>, un passionné d'informatique orienté développement Full Stack. J'aime comprendre comment les technologies fonctionnent en profondeur, résoudre des bugs complexes et apprendre en continu.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              À travers mes échanges techniques et mes recherches régulières, j'ai développé une vraie logique de développeur : <strong>analyser, diagnostiquer, tester, corriger, optimiser</strong>.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Je suis quelqu'un de très <strong>curieux</strong>, <strong>persévérant</strong> et toujours prêt à chercher la cause exacte d'un problème plutôt que de contourner la difficulté. Qu'il s'agisse de développement web, Java, systèmes, API ou gestion d'erreurs, j'aborde chaque sujet avec sérieux et détermination.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg" data-aos="fade-up" data-aos-delay="200">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Ma vision du développement</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-blue-600 text-xl flex-shrink-0 mt-1"></i>
                  <span className="text-gray-700"><strong>Comprendre</strong> avant d'exécuter</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-blue-600 text-xl flex-shrink-0 mt-1"></i>
                  <span className="text-gray-700"><strong>Tester</strong> avant de valider</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-blue-600 text-xl flex-shrink-0 mt-1"></i>
                  <span className="text-gray-700"><strong>Corriger</strong> avant de passer à la suite</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-blue-600 text-xl flex-shrink-0 mt-1"></i>
                  <span className="text-gray-700"><strong>Documenter</strong> pour apprendre durablement</span>
                </li>
              </ul>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="800">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all" data-aos="zoom-in" data-aos-delay="100">
                <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                  <i className="ri-code-s-slash-line text-3xl text-blue-600"></i>
                </div>
                <h4 className="text-3xl font-bold text-blue-600 mb-2">Full Stack</h4>
                <p className="text-gray-600 text-sm">Front & Back-end</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all" data-aos="zoom-in" data-aos-delay="200">
                <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                  <i className="ri-bug-line text-3xl text-blue-600"></i>
                </div>
                <h4 className="text-3xl font-bold text-blue-600 mb-2">Debug</h4>
                <p className="text-gray-600 text-sm">Expert résolution</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all" data-aos="zoom-in" data-aos-delay="300">
                <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                  <i className="ri-lightbulb-line text-3xl text-blue-600"></i>
                </div>
                <h4 className="text-3xl font-bold text-blue-600 mb-2">Curieux</h4>
                <p className="text-gray-600 text-sm">Apprentissage continu</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all" data-aos="zoom-in" data-aos-delay="400">
                <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                  <i className="ri-rocket-line text-3xl text-blue-600"></i>
                </div>
                <h4 className="text-3xl font-bold text-blue-600 mb-2">Motivé</h4>
                <p className="text-gray-600 text-sm">Progression rapide</p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl text-white" data-aos="fade-up" data-aos-delay="500">
              <h4 className="font-bold text-lg mb-3"> Mon objectif</h4>
              <p className="text-blue-50 leading-relaxed">
                Devenir un développeur Full Stack capable de créer des applications complètes de bout en bout, avec une maîtrise globale du Front-end et du Back-end.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
