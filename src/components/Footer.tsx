import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">EP</span>
              </div>
              <h3 className="text-xl font-bold">Eventi People</h3>
            </div>
            <p className="text-gray-400">
              Trasformiamo i tuoi momenti speciali in ricordi indimenticabili da oltre 15 anni.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#servizi" className="hover:text-amber-400 transition-colors">Servizi</a></li>
              <li><a href="#team" className="hover:text-amber-400 transition-colors">Team</a></li>
              <li><a href="#contatti" className="hover:text-amber-400 transition-colors">Contatti</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <div className="space-y-2 text-gray-400">
              <p>📍 Anzio, Roma e provincia</p>
              <p>📞 +39 328 951 3661</p>
              <p>📧 info.eventipeople@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p className="flex items-center justify-center space-x-1">
            <span>© 2025 Eventi People. Fatto con</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>per i tuoi eventi speciali.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;