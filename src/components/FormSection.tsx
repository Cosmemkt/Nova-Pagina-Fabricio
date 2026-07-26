import React, { useState } from 'react';
import { LeadFormData } from '../types';
import { WHATSAPP_NUMBER, getWhatsAppLink } from '../config/whatsapp';
import { trackFormSubmit, trackWhatsAppClick } from '../config/tracking';
import { MessageSquare, Send, CheckCircle2, ShieldCheck, Lock } from 'lucide-react';

export const FormSection: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    whatsapp: '',
    email: '',
    subject: 'Pensão alimentícia',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [directWaLink, setDirectWaLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp) {
      alert('Por favor, preencha pelo menos seu Nome e WhatsApp.');
      return;
    }

    // Trigger Tracking Event
    trackFormSubmit(formData.subject);

    // Build Custom WhatsApp Message for redirection
    const customText = `Olá, meu nome é ${formData.name}. Gostaria de orientação sobre: ${formData.subject}.${
      formData.message ? ` Resumo do meu caso: ${formData.message}` : ''
    }`;

    const generatedLink = getWhatsAppLink(customText);
    setDirectWaLink(generatedLink);
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-16 lg:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-slate-800/95 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
              Solicite Sua Orientação
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-50 mt-3">
              Fale com um advogado sobre a sua situação
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Cada situação familiar ou sucessória possui suas próprias particularidades. Entre em contato para explicar o seu caso e entender quais podem ser os próximos passos.
            </p>
          </div>

          {submitted ? (
            /* Success View */
            <div className="bg-slate-900 border border-emerald-500/40 rounded-2xl p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-white">
                  Informações Enviadas com Sucesso!
                </h3>
                <p className="text-slate-300 text-sm max-w-lg mx-auto">
                  Obrigado, <strong className="text-white">{formData.name}</strong>. Para acelerar o atendimento e falar diretamente com nossa equipe agora mesmo, clique no botão abaixo para abrir o WhatsApp.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={directWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('FormSucesso', 'Abrir WhatsApp Acelerar')}
                  className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-8 py-4 rounded-xl transition-all shadow-lg hover:scale-105"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>Abrir WhatsApp com meus dados pré-preenchidos</span>
                </a>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-slate-400 hover:text-slate-200 underline block mx-auto"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            /* Lead Capture Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Nome */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-200 uppercase tracking-wide">
                    Nome Completo <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome completo"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm"
                  />
                </div>

                {/* WhatsApp */}
                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="block text-xs font-semibold text-slate-200 uppercase tracking-wide">
                    WhatsApp com DDD <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="(48) 99999-9999"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* E-mail */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-200 uppercase tracking-wide">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seuemail@exemplo.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm"
                  />
                </div>

                {/* Subject Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-200 uppercase tracking-wide">
                    Qual assunto deseja tratar? <span className="text-amber-400">*</span>
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm"
                  >
                    <option value="Pensão alimentícia">Pensão alimentícia</option>
                    <option value="Guarda dos filhos">Guarda dos filhos</option>
                    <option value="Alimentos e dependentes">Alimentos e dependentes</option>
                    <option value="Regulamentação de visitas">Regulamentação de visitas</option>
                    <option value="Inventário judicial">Inventário judicial</option>
                    <option value="Partilha de bens">Partilha de bens</option>
                    <option value="Outro assunto de Direito de Família ou Sucessões">Outro assunto de Família ou Sucessões</option>
                  </select>
                </div>

              </div>

              {/* Message (Optional) */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-semibold text-slate-200 uppercase tracking-wide">
                  Conte brevemente o que aconteceu <span className="text-slate-400">(opcional)</span>
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Escreva um breve resumo da sua dúvida ou necessidade..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm"
                />
              </div>

              {/* Submit Button & Direct WhatsApp Alternative */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base px-6 py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar e Receber Orientação</span>
                </button>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('FormSecao', 'Botão WhatsApp Direto ao Lado Form')}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-6 py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>Falar pelo WhatsApp agora</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                <Lock className="w-3.5 h-3.5 text-slate-500" />
                <span>Seus dados estão seguros e protegidos pelo sigilo profissional.</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
