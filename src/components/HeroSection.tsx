import React, { useState, useRef } from 'react';
import { Play, ArrowRight, X } from 'lucide-react';

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handlePlayVideo = () => {
    setShowVideo(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 100);
  };
  
  const handleCloseVideo = () => {
    setShowVideo(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/✨Uno dei giorni più belli della vostra vita..perché non viverlo così, al massimo 🤩! Amici , div.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-playfair">
            <span className="block text-white">Trasforma il tuo</span>
            <span className="block text-gold font-great-vibes text-6xl md:text-8xl">
              evento
            </span>
            <span className="block text-white">in un ricordo</span>
            <span className="block text-gold font-great-vibes text-6xl md:text-8xl">
              indimenticabile
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-champagne leading-relaxed max-w-3xl mx-auto font-lato">
            DJ Set, animazione e intrattenimento professionale per matrimoni, 
            feste private e celebrazioni uniche.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group bg-gold text-night-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold/90 transition-all transform hover:scale-105 flex items-center space-x-2 font-lato">
              <span>Prenota ora la tua festa</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={handlePlayVideo}
              className="group flex items-center space-x-2 text-champagne border-2 border-gold/50 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold/20 transition-all font-lato"
            >
              <Play className="w-5 h-5" />
              <span>Guarda i nostri eventi</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <div className="relative w-full max-w-5xl">
            <button 
              onClick={handleCloseVideo}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <video 
              ref={videoRef}
              controls 
              className="w-full rounded-lg shadow-2xl"
            >
              <source src="/video/✨Uno dei giorni più belli della vostra vita..perché non viverlo così, al massimo 🤩! Amici , div.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;