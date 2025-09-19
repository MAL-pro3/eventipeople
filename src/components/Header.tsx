import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Camera, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './LoginModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleAlbumClick = () => {
    if (currentUser) {
      navigate('/gallery');
    } else {
      setShowLoginModal(true);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Errore nel logout:', error);
    }
  };

  return (
    <header className="fixed w-full bg-champagne/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="Eventi People Logo" 
              className="w-12 h-12 object-contain"
            />
            <h1 className="text-2xl font-bold text-night-blue font-playfair">
              Eventi People
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-night-blue hover:text-gold transition-colors font-medium font-lato">
              Home
            </a>
            <a href="#servizi" className="text-night-blue hover:text-gold transition-colors font-medium font-lato">
              Servizi
            </a>
            <a href="#team" className="text-night-blue hover:text-gold transition-colors font-medium font-lato">
              Team
            </a>
            <a href="#contatti" className="text-night-blue hover:text-gold transition-colors font-medium font-lato">
              Contatti
            </a>
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleAlbumClick}
                className="flex items-center space-x-2 bg-gold text-night-blue px-4 py-2 rounded-full hover:bg-gold/90 transition-all transform hover:scale-105 font-lato"
              >
                <Camera className="w-4 h-4" />
                <span className="font-medium">Album Foto</span>
              </button>
              {currentUser && (
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-pearl-gray text-white px-4 py-2 rounded-full hover:bg-night-blue transition-all font-lato"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Home
              </a>
              <a href="#servizi" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Servizi
              </a>
              <a href="#team" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Team
              </a>
              <a href="#contatti" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Contatti
              </a>
              <button 
                onClick={handleAlbumClick}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-3 rounded-full hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                <Camera className="w-4 h-4" />
                <span className="font-medium">Album Foto</span>
              </button>
              {currentUser && (
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center space-x-2 bg-pearl-gray text-white px-4 py-3 rounded-full hover:bg-night-blue transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="font-medium">Logout</span>
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
      
      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal 
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onSuccess={() => {
            setShowLoginModal(false);
            navigate('/gallery');
          }}
        />
      )}
    </header>
  );
};

export default Header;