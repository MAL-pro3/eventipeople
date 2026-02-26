import React, { useState, useEffect } from 'react';
import { Music, Mic2, Star, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const ServicesSection = () => {
  const images = [
    "/images/festa1.jpeg",
    "/images/action1.JPG",
    "/images/festa4.jpeg",
    "/images/action2.JPG",
    "/images/festa2.jpeg",
    "/images/festa5.jpeg"
  ];

  const services = [
    {
      title: "Servizio Top",
      description: "Intrattenimento e musica per l'evento. Creiamo la colonna sonora perfetta, curando ogni dettaglio sonoro per accompagnare i tuoi momenti speciali.",
      icon: <Music className="w-6 h-6" />
    },
    {
      title: "Servizio Glamour",
      description: "Il perfetto mix tra DJ Set e musica dal vivo. Scegli un artista tra Sax, Violino, Piano, Voce (Femminile o Maschile) o Chitarra per un tocco di eleganza unico.",
      icon: <Mic2 className="w-6 h-6" />
    },
    {
      title: "Servizio Luxury",
      description: "L'esperienza suprema: DJ Set accompagnato da 2 o più artisti live. Una vera e propria performance che trasforma il tuo evento in uno spettacolo esclusivo.",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Special Effects",
      description: "Rendi magica l'atmosfera con i nostri servizi Pirotecnici o Cromatici. Un plus scenografico che lascerà tutti i tuoi ospiti a bocca aperta.",
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="servizi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT COLUMN: Cosa Facciamo + Carousel */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-night-blue mb-6 font-playfair">
                Cosa Facciamo
              </h2>
              <p className="text-lg text-pearl-gray leading-relaxed font-lato mb-6">
                Ogni evento merita un intrattenimento studiato nei minimi dettagli. 
                Con <span className="font-semibold text-gold">Eventi People</span> creiamo 
                atmosfere uniche, trasformando la musica in emozione pura.
              </p>
              
              <div className="bg-gold/10 p-6 rounded-2xl border border-gold/20 mb-8">
                <p className="text-night-blue font-semibold italic text-center">
                  "Noi facciamo vibrare l'energia della festa e trasformiamo 
                  ogni momento in un ricordo prezioso"
                </p>
              </div>
            </div>

            {/* Carousel */}
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl aspect-video w-full">
              <div 
                className="absolute inset-0 flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                {images.map((img, index) => (
                  <div key={index} className="min-w-full h-full">
                    <img 
                      src={img} 
                      alt={`Slide ${index}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-night-blue hover:bg-white transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full text-night-blue hover:bg-white transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImage === index ? "bg-white w-6" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: I Nostri Servizi */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-night-blue mb-6 font-playfair">
                I Nostri Servizi
              </h2>
              <p className="text-lg text-pearl-gray leading-relaxed font-lato mb-8">
                Scegli il pacchetto perfetto per il tuo evento. Dalla selezione musicale curata ai live show più esclusivi.
              </p>
            </div>

            <div className="grid gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <div className="bg-gold/10 p-3 rounded-full text-gold mr-4 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-night-blue mb-2 font-playfair">{service.title}</h3>
                    <p className="text-pearl-gray text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
