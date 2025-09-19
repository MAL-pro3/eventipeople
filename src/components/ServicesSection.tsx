import React from 'react';

const ServicesSection = () => {
  const images = [
    "/images/action.JPG",
    "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    "/images/action1.JPG",
    "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    "/images/action2.JPG",
    "/images/action3.JPG"
  ];

  return (
    <section id="servizi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-night-blue mb-6 font-playfair">
                Cosa Facciamo
              </h2>
              <p className="text-lg text-pearl-gray leading-relaxed font-lato">
                Ogni evento merita un intrattenimento studiato nei minimi dettagli. 
                Con <span className="font-semibold text-gold">Eventi People</span> creiamo 
                atmosfere uniche, con musica, animazione e momenti che esaltano il giorno 
                più bello della tua vita.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-pearl-gray font-lato">
                  <span className="font-semibold text-night-blue">Matrimoni indimenticabili</span> - 
                  Dal primo ballo alle danze di fine serata
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-pearl-gray font-lato">
                  <span className="font-semibold text-night-blue">Feste di compleanno</span> - 
                  18esimi e compleanni speciali pieni di energia
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-pearl-gray font-lato">
                  <span className="font-semibold text-night-blue">Eventi privati</span> - 
                  Feste a tema e celebrazioni uniche
                </p>
              </div>
            </div>

            <div className="bg-gold/10 p-6 rounded-2xl border border-gold/20">
              <p className="text-night-blue italic text-center font-great-vibes text-xl">
                "Noi facciamo vibrare l'energia della festa e trasformiamo 
                ogni momento in un ricordo prezioso"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;