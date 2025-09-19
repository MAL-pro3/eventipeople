import React from 'react';
import { PartyPopper, Heart, Smile, Globe } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <PartyPopper className="w-8 h-8 text-amber-600" />,
      number: "+1000",
      label: "eventi organizzati"
    },
    {
      icon: <Heart className="w-8 h-8 text-amber-600" />,
      number: "Centinaia",
      label: "di matrimoni indimenticabili"
    },
    {
      icon: <Smile className="w-8 h-8 text-amber-600" />,
      number: "100%",
      label: "clienti soddisfatti"
    },
    {
      icon: <Globe className="w-8 h-8 text-amber-600" />,
      number: "Tutta Italia",
      label: "operiamo ovunque"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">
            Oltre 15 anni di esperienze
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            che parlano per noi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-100 rounded-full group-hover:bg-amber-200 transition-colors">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;