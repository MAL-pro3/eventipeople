import React from 'react';

const ServicesSection = () => {
  const images = [
    "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
    "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
    "https://images.pexels.com/photos/1649690/pexels-photo-1649690.jpeg",
    "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    "https://images.pexels.com/photos/1983046/pexels-photo-1983046.jpeg",
    "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg"
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-serif">
                Cosa Facciamo
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ogni evento merita un intrattenimento studiato nei minimi dettagli. 
                Con <span className="font-semibold text-amber-600">Eventi People</span> creiamo 
                atmosfere uniche, con musica, animazione e momenti che esaltano il giorno 
                più bello della tua vita.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-600">
                  <span className="font-semibold">Matrimoni indimenticabili</span> - 
                  Dal primo ballo alle danze di fine serata
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-600">
                  <span className="font-semibold">Feste di compleanno</span> - 
                  18esimi e compleanni speciali pieni di energia
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-600">
                  <span className="font-semibold">Eventi privati</span> - 
                  Feste a tema e celebrazioni uniche
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl">
              <p className="text-gray-700 italic text-center">
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