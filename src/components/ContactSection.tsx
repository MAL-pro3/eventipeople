import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Calendar, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contatti" className="py-20 bg-gradient-to-br from-amber-900 to-amber-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            È il momento di dare vita al tuo evento!
          </h2>
          <p className="text-xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
            Non lasciare al caso il giorno più importante. Affidati a chi da oltre 15 anni 
            crea eventi indimenticabili in tutta Italia. Contattaci subito per fissare un 
            appuntamento e iniziare a organizzare la tua festa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-amber-500/30 rounded-full">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Sede Principale</h3>
                <p className="text-amber-100">Eventi People – Anzio, Roma e provincia</p>
                <p className="text-amber-200 text-sm">(disponibili in tutta Italia)</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-amber-500/30 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Telefono</h3>
                <p className="text-amber-100">+39 328 951 3661</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-amber-500/30 rounded-full">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-amber-100">info.eventipeople@gmail.com</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Contattaci subito
              </h3>
              
              <div className="space-y-4">
                <button 
                  onClick={() => window.location.href = "tel:3289513661"}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-full font-semibold transition-all flex items-center justify-center space-x-2 group">
                  <Phone className="w-5 h-5" />
                  <span>Chiama Ora</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  onClick={() => window.open("https://wa.me/393289513661?text=Ciao!%20Vorrei%20maggiori%20informazioni.", "_blank")}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full font-semibold transition-all flex items-center justify-center space-x-2 group">
                  <MessageCircle className="w-5 h-5" />
                  <span>Scrivici su WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  onClick={() => {
                    const date = prompt("Seleziona la data del tuo appuntamento (es. 15/09/2025):");
                    if (date) {
                      const msg = `Ciao! Sarei disponibile per la data selezionata: ${date}`;
                      window.open(`https://wa.me/393289513661?text=${encodeURIComponent(msg)}`, "_blank");
                    }
                  }}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white px-6 py-4 rounded-full font-semibold transition-all flex items-center justify-center space-x-2 group">
                  <Calendar className="w-5 h-5" />
                  <span>Prenota il tuo appuntamento</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="text-center text-amber-200 text-sm">
              <p>Rispondiamo entro 2 ore • Consulenza gratuita</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;