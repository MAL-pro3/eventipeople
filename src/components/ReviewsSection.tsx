import React, { useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
  useEffect(() => {
    // Carica lo script del widget di Matrimonio.com
    const script = document.createElement('script');
    script.src = 'https://cdn1.matrimonio.com/js/wp-widget.js?symfnw-IT73-1-20250918-008_www_m_';
    script.async = true;
    document.head.appendChild(script);

    // Inizializza il widget quando lo script è caricato
    script.onload = () => {
      if ((window as any).wpShowReviews) {
        (window as any).wpShowReviews(412165, "white");
      }
    };

    return () => {
      // Cleanup dello script quando il componente viene smontato
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="recensioni" className="py-20 bg-champagne">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-night-blue mb-6 font-playfair">
            Dicono di <span className="text-gold font-great-vibes">Noi</span>
          </h2>
          <p className="text-xl text-pearl-gray max-w-3xl mx-auto font-lato">
            Le testimonianze dei nostri clienti sono la nostra migliore referenza
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Widget Container */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <Quote className="text-gold mr-3" size={32} />
              <h3 className="text-2xl font-bold text-night-blue font-playfair">
                Recensioni Verificate
              </h3>
              <Quote className="text-gold ml-3" size={32} />
            </div>
            
            {/* Widget di Matrimonio.com */}
            <div id="wp-widget-reviews" className="text-center">
              <div id="wp-widget-preview" className="text-pearl-gray font-lato">
                Leggi{' '}
                <a 
                  href="https://www.matrimonio.com/musica-matrimonio/eventi-people--e412165/opinioni" 
                  rel="nofollow" 
                  className="text-gold hover:text-night-blue transition-colors font-semibold"
                  target="_blank"
                >
                  le nostre recensioni
                </a>
                {' '}su{' '}
                <a 
                  href="https://www.matrimonio.com" 
                  rel="nofollow"
                  className="inline-flex items-center hover:opacity-80 transition-opacity"
                  target="_blank"
                >
                  <img 
                    src="https://cdn1.matrimonio.com/assets/img/logos/gen_logoHeader.svg" 
                    height="20" 
                    alt="Matrimonio.com"
                    className="ml-1"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Statistiche delle recensioni */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-gold fill-current" size={24} />
                ))}
              </div>
              <h4 className="text-2xl font-bold text-night-blue font-playfair mb-2">5.0</h4>
              <p className="text-pearl-gray font-lato">Valutazione Media</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <h4 className="text-3xl font-bold text-gold font-playfair mb-2">100+</h4>
              <p className="text-pearl-gray font-lato">Eventi Realizzati</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <h4 className="text-3xl font-bold text-gold font-playfair mb-2">98%</h4>
              <p className="text-pearl-gray font-lato">Clienti Soddisfatti</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
