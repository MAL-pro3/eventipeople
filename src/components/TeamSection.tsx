import React from 'react';
import { Music, Users, Sparkles, Award } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Andrea",
      role: "DJ Professionista",
      description: "Esperto di matrimoni e feste private, con un tocco unico per ogni evento",
      icon: <Music className="w-8 h-8 text-amber-600" />,
      image: "/images/andrea.jpeg"
    },
    {
      name: "Matteo",
      role: "Specialista Animazione",
      description: "Gestione eventi e animazione, sempre pronto a coinvolgere tutti",
      icon: <Users className="w-8 h-8 text-amber-600" />,
      image: "/images/matte.JPG"
    },
    {
      name: "Emanuele",
      role: "Intrattenitore & Vocalist",
      description: "Energia contagiosa e sorriso che illumina ogni festa",
      icon: <Sparkles className="w-8 h-8 text-amber-600" />,
      image: "/images/berni.JPG"
    }
  ];

  return (
    <section id="team" className="py-20 bg-champagne">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-night-blue mb-4 font-playfair">
            Il cuore di Eventi People
          </h2>
          <p className="text-xl text-pearl-gray max-w-3xl mx-auto font-lato">
            Tre professionisti, una sola missione: rendere la tua festa indimenticabile
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Badge PRO */}
                <div className="absolute top-3 right-3 bg-gold text-white px-3 py-1 rounded-full text-sm font-bold font-lato flex items-center gap-1 shadow-lg">
                  <Award size={14} />
                  PRO
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-night-blue mb-1 font-playfair">
                      {member.name}
                    </h3>
                    <p className="text-gold font-semibold font-lato">
                      {member.role}
                    </p>
                  </div>
                  <div className="p-3 bg-gold/20 rounded-full">
                    <div className="text-gold">
                      {member.icon}
                    </div>
                  </div>
                </div>
                
                <p className="text-pearl-gray leading-relaxed font-lato">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
