import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulation d'envoi
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Me <span className="text-blue-600">Contacter</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter, je serais ravi d'échanger avec vous
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div data-aos="fade-right" data-aos-duration="800">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Restons en <span className="text-blue-600">contact</span>
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Je suis actuellement à la recherche d'opportunités de stage et de projets freelance. Que vous ayez une question, une proposition de collaboration ou simplement envie de discuter technologie, je suis disponible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="100">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0">
                  <i className="ri-mail-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:contact@teddykomta.dev" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    contact@teddykomta.dev
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0">
                  <i className="ri-github-fill text-xl text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">GitHub</h4>
                  <a href="https://github.com/Teddy-do-na" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    github.com/Teddy-do-na
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0">
                  <i className="ri-linkedin-fill text-xl text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">LinkedIn</h4>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    linkedin.com/in/teddykomta
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg" data-aos="fade-up" data-aos-delay="400">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <i className="ri-time-line text-blue-600"></i>
                Disponibilité
              </h4>
              <p className="text-gray-700">
                Ouvert aux opportunités de stage et projets freelance. Réponse sous 24-48h.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left" data-aos-duration="800">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm"
                  placeholder="Votre nom"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm"
                  placeholder="votre@email.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none text-sm"
                  placeholder="Votre message (max 500 caractères)"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1 text-right">
                  {formData.message.length}/500 caractères
                </p>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              >
                {status === 'sending' ? (
                  <>
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Envoi en cours...
                  </>
                ) : status === 'success' ? (
                  <>
                    <i className="ri-check-line mr-2"></i>
                    Message envoyé !
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line mr-2"></i>
                    Envoyer le message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 text-sm flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-lg"></i>
                    Merci pour votre message ! Je vous répondrai dans les plus brefs délais.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
