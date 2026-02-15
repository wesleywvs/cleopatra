
import React, { useState, useEffect, useRef } from 'react';
import type { SalesContent } from '../types';
import { Bucket } from '../types';
import { trackEvent } from '../utils/tracking';

interface SalesPageProps {
  bucket: Bucket;
  config: SalesContent;
}

const faqs = [
  {
    q: "¿Cómo recibiré el acceso?",
    a: "El acceso es inmediato. Tan pronto como se confirme tu pago, recibirás un correo electrónico con todas las instrucciones para acceder a la plataforma e iniciar tu viaje de transformación."
  },
  {
    q: "¿Por cuánto tiempo tendré acceso?",
    a: "¡El acceso a 'El Magnetismo de Cleopatra' y a todos los bonos es de por vida! Puedes volver a ver las clases y materiales siempre que sientas la necesidad de realinear tu energía."
  },
  {
    q: "¿Y si no funciona para mí?",
    a: "Tu transformación es nuestro mayor compromiso. Por eso, ofrecemos una garantía incondicional de 7 dias. Si por alguna razón sientes que el programa no es para ti, simplemente envíanos un correo electrónico y te reembolsaremos el 100% de tu inversión."
  },
  {
    q: "¿Necesito conocimientos previos?",
    a: "Absolutamente no. El método fue diseñado para mujeres en cualquier etapa de su viaje de autoconocimiento. Te guiamos paso a paso, desde cero hasta el despertar de tu reina interior."
  }
];

const testimonials = [
  {
    quote: "Era escéptica, pero en una semana mi energía cambió por completo. Los hombres adecuados empezaron a aparecer, ¡y finalmente cerré un contrato que estaba trabado hace meses!",
    name: "Juliana R.",
    location: "Ciudad de México"
  },
  {
    quote: "Esto es más que un curso, es una reconexión. Me sentía apagada, invisible. Hoy, mi siento magnética, dueña de mí. Gracias por devolverme mi brillo.",
    name: "Carla M.",
    location: "Buenos Aires, Argentina"
  },
  {
    quote: "El desbloqueo financiero fue real. Tenía tanto miedo de cobrar por mi trabalho. Después de aplicar los rituales, mi mentalidad cambió y mis ingresos se duplicaron en 30 días.",
    name: "Fernanda L.",
    location: "Santiago, Chile"
  }
];

const CheckIcon = () => (
  <svg className="w-6 h-6 text-brand-gold flex-shrink-0 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
)

const SalesPage: React.FC<SalesPageProps> = ({ bucket, config }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isCtaSticky, setIsCtaSticky] = useState(false);

  const hasTracked = useRef(false);
  useEffect(() => {
    if (hasTracked.current) return;

    // Track ViewContent when the sales page is viewed
    trackEvent('ViewContent', {
      content_name: 'Magnetismo de Cleopatra',
      content_category: bucket,
      value: 5.9,
      currency: 'USD'
    });
    hasTracked.current = true;

    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsCtaSticky(true);
      } else {
        setIsCtaSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [bucket]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handlePurchaseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackEvent('InitiateCheckout', {
      value: 5.9,
      currency: 'USD',
      content_name: 'Magnetismo de Cleopatra',
      content_type: 'product'
    });
    // Link final do checkout Hotmart
    window.location.href = 'https://pay.hotmart.com/V104456593V';
  };

  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="pb-24 animate-fadeIn text-white">
        <div className="bg-brand-purple-dark/40 backdrop-blur-md rounded-2xl shadow-3xl overflow-hidden max-w-2xl mx-auto border border-white/10">

          {/* Header Section */}
          <div className="p-8 md:p-12 text-center bg-gradient-to-b from-brand-purple-light/10 to-transparent">
            <p className="font-sans text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-4">Tu Perfil es: {config.profile}</p>
            <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-6">{config.headline}</h1>
            <div className="h-1 w-24 gold-gradient mx-auto rounded-full"></div>
          </div>

          {/* Primary CTA - Anchor to Offer */}
          <div className="px-6 md:px-12 pb-12 flex justify-center">
            <a
              href="#oferta"
              onClick={scrollToOffer}
              className="relative group w-full max-w-md"
            >
              <div className="absolute -inset-1 bg-brand-gold rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative block w-full text-center gold-gradient text-brand-purple-dark font-black py-5 px-8 rounded-full text-lg md:text-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] transform transition-all hover:scale-[1.02] active:scale-95 uppercase tracking-widest">
                {config.cta}
              </div>
            </a>
          </div>

          {/* Validation & Explanation */}
          <div className="px-6 md:px-12 py-12 glass-card">
            <div className="space-y-10 text-lg leading-relaxed">
              <div>
                <h3 className="font-serif text-2xl mb-4 text-brand-gold italic">Validación del Dolor</h3>
                <p className="text-white/80 whitespace-pre-line font-light">{config.validation}</p>
              </div>
              <div className="p-6 border-l-2 border-brand-gold bg-brand-gold/5 rounded-r-xl">
                <h3 className="font-serif text-2xl mb-4 text-brand-gold italic">La Culpa NO es Tuya</h3>
                <p className="text-white/80 whitespace-pre-line font-light">{config.explanation}</p>
              </div>
            </div>
          </div>

          {/* Offer Section */}
          <div id="oferta" className="px-6 md:px-12 py-16 bg-brand-purple-dark relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 gold-gradient opacity-30"></div>
            <h3 className="font-serif text-2xl mb-8 text-center text-brand-gold leading-relaxed">{config.bridge}</h3>

            <ul className="space-y-4 mb-10">
              {config.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start text-lg bg-white/5 p-4 rounded-xl border border-white/5">
                  <CheckIcon />
                  <span className="text-white/90">{bullet}</span>
                </li>
              ))}
            </ul>

            <p className="text-center italic text-xl mb-12 text-brand-purple-light/80">{config.finalPitch}</p>

            {/* Ultra Enhanced Price Section */}
            <div className="text-center p-12 md:p-16 border-2 border-brand-gold/60 rounded-[3rem] bg-gradient-to-br from-white/10 via-brand-purple-dark/70 to-brand-purple-dark shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(212,175,55,0.15)] relative overflow-visible mt-10">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 gold-gradient px-10 py-3 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.5)] border border-white/30 z-20">
                <span className="text-[12px] font-black text-brand-purple-dark uppercase tracking-[0.25em] whitespace-nowrap">Oferta por tiempo limitado</span>
              </div>

              <div className="mt-8 mb-8 relative group">
                <div className="absolute -inset-2 gold-gradient rounded-3xl opacity-10 blur-xl group-hover:opacity-25 transition-opacity duration-500"></div>
                <img
                  src="https://www.pequenosludicos.com.br/wp-content/uploads/2026/02/1.png"
                  alt="Magnetismo de Cleopatra"
                  className="relative mx-auto w-full max-w-[280px] h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500 rounded-2xl"
                />
              </div>

              <p className="text-white/40 uppercase tracking-[0.4em] text-[10px] mb-10 font-bold">Acceso completo + Bonos Exclusivos</p>

              <div className="flex flex-col items-center mb-12">
                <span className="text-2xl line-through text-white/20 font-light mb-4 tracking-[0.2em] italic">de $47</span>
                <div className="relative inline-flex items-start justify-center">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 gold-gradient rounded-full opacity-20 blur-[80px]"></div>
                  <span className="text-5xl font-bold text-brand-gold/90 mt-6 mr-1 drop-shadow-sm">$</span>
                  <span className="text-[11rem] font-black text-brand-gold drop-shadow-[0_0_35px_rgba(234,207,122,0.7)] tracking-tighter leading-[0.8]">
                    5
                  </span>
                  <span className="text-6xl font-black text-brand-gold/90 ml-1 leading-none pt-4">.9</span>
                </div>
              </div>

              <a
                href="#"
                onClick={handlePurchaseClick}
                className="relative inline-block group w-full max-w-sm transition-all duration-300"
              >
                <div className="absolute -inset-2 bg-brand-gold rounded-full blur-md opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative gold-gradient px-8 py-5 rounded-full border border-white/30 shadow-2xl flex flex-col items-center justify-center transform group-hover:scale-[1.03] group-active:scale-95 transition-all">
                  <span className="text-brand-purple-dark font-black text-base md:text-lg uppercase tracking-widest text-center leading-tight">
                    ¡Comienza tu transformación hoy!
                  </span>
                </div>
              </a>

              <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] mt-6">Pago 100% seguro y encriptado</p>
            </div>
          </div>

          {/* BONUS SECTION */}
          <div className="px-6 md:px-12 py-16 relative">
            <div className="absolute inset-0 bg-brand-gold/5 blur-[100px] pointer-events-none"></div>

            <div className="max-w-xl mx-auto flex flex-col items-center relative z-10">
              <div className="text-center mb-12">
                <span className="text-brand-gold/60 text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">Acelera tus Resultados</span>
                <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-4 uppercase tracking-tighter">
                  REGALO EXCLUSIVO <br /> <span className="text-brand-gold">DE ACCESO INMEDIATO</span>
                </h2>
                <div className="w-20 h-1 gold-gradient mx-auto rounded-full"></div>
              </div>

              {/* Title of the WorkBook - Exactly like the screenshot */}
              <h3 className="font-serif text-2xl md:text-3xl text-brand-gold mb-6 text-center leading-[1.2] tracking-[0.05em] uppercase font-bold max-w-sm">
                TU GUÍA PRÁCTICA: EL MAGNETISMO DE CLEOPATRA
              </h3>

              {/* Description Card - Styled for maximum impact */}
              <div className="bg-brand-purple-dark/60 backdrop-blur-md p-10 rounded-[2rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all w-full relative mb-12 border-b-brand-gold/30">
                <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light italic text-center">
                  "Un cuaderno de trabajo para reconectar con tu poder interior y activar la ley de atracción desde tu esencia femenina"
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="px-6 md:px-12 py-16 glass-card">
            <h2 className="font-serif text-3xl text-center text-white mb-10">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-white/10 last:border-b-0">
                  <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center text-left py-5 group">
                    <span className="font-semibold text-lg text-white group-hover:text-brand-gold transition-colors">{faq.q}</span>
                    <span className={`transform transition-transform duration-300 text-brand-gold ${openFaq === index ? 'rotate-180' : 'rotate-0'}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="pb-6 pr-6 text-white/60 font-light leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Button */}
          <div className="p-8 md:p-16 text-center">
            <a
              href="#"
              onClick={handlePurchaseClick}
              className="block w-full gold-gradient text-brand-purple-dark font-black py-6 px-8 rounded-full text-2xl shadow-xl hover:scale-[1.03] transition-transform active:scale-95 uppercase tracking-widest"
            >
              <div className="flex flex-col items-center">
                <span>{config.finalCTA}</span>
                <span className="text-[10px] opacity-60 tracking-[0.2em] mt-1">ACELERA TUS RESULTADOS</span>
              </div>
            </a>
          </div>

        </div>
      </div>

      {/* Sticky CTA */}
      {isCtaSticky && (
        <div className="fixed bottom-0 left-0 w-full bg-brand-purple-dark/95 backdrop-blur-lg p-5 shadow-[0_-5px_20px_rgba(0,0,0,0.4)] z-50 animate-fadeIn border-t border-white/10">
          <a
            href="#"
            onClick={handlePurchaseClick}
            className="block w-full max-w-xl mx-auto text-center gold-gradient text-brand-purple-dark font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:scale-[1.02] transition-transform uppercase"
          >
            <div className="flex flex-col items-center leading-tight">
              <span>{config.finalCTA}</span>
              <span className="text-[9px] opacity-60 tracking-[0.2em]">ACELERA TUS RESULTADOS</span>
            </div>
          </a>
        </div>
      )}
    </>
  );
};

export default SalesPage;
