import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Image as ImageIcon, LogOut, ArrowLeft, X, Plus } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL, getMetadata } from 'firebase/storage';

interface PhotoItem {
  url: string;
  name: string;
  uploadedAt: Date;
}

const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [uploadError, setUploadError] = useState('');
  
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  // Carica le foto esistenti
  useEffect(() => {
    if (currentUser) {
      loadPhotos();
    }
  }, [currentUser]);

  const loadPhotos = async () => {
    try {
      const photosRef = ref(storage, 'gallery/');
      const photosList = await listAll(photosRef);
      
      const photoPromises = photosList.items.map(async (item) => {
        const url = await getDownloadURL(item);
        const metadata = await getMetadata(item);
        return {
          url,
          name: item.name,
          uploadedAt: new Date(metadata.timeCreated)
        };
      });

      const loadedPhotos = await Promise.all(photoPromises);
      // Ordina per data di upload (più recenti prima)
      loadedPhotos.sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime());
      setPhotos(loadedPhotos);
    } catch (error) {
      console.error('Errore nel caricamento delle foto:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    setUploading(true);
    setUploadError('');
    
    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        if (file.type.startsWith('image/')) {
          const timestamp = Date.now();
          const fileName = `${timestamp}_${file.name}`;
          const photoRef = ref(storage, `gallery/${fileName}`);
          
          try {
            await uploadBytes(photoRef, file);
            const url = await getDownloadURL(photoRef);
            return {
              url,
              name: fileName,
              uploadedAt: new Date()
            };
          } catch (error) {
            console.error('Errore nell\'upload del file:', file.name, error);
            throw error;
          }
        }
        return null;
      });

      const uploadedPhotos = (await Promise.all(uploadPromises)).filter(Boolean) as PhotoItem[];
      
      if (uploadedPhotos.length > 0) {
        setPhotos(prev => [...uploadedPhotos, ...prev]);
      }
      
      // Reset dell'input file
      const fileInputs = document.querySelectorAll('input[type="file"]');
      fileInputs.forEach(input => {
        (input as HTMLInputElement).value = '';
      });
      
    } catch (error: any) {
      console.error('Errore generale nell\'upload:', error);
      setUploadError('Errore nel caricamento delle foto. Verifica la configurazione Firebase.');
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Errore nel logout:', error);
    }
  };

  if (!currentUser) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-champagne">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-pearl-gray hover:text-night-blue transition-colors font-lato"
              >
                <ArrowLeft size={20} />
                Torna al sito
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-night-blue font-playfair">
                Album Foto Eventi People
              </h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-pearl-gray text-white px-4 py-2 rounded-lg hover:bg-night-blue transition-colors font-lato"
            >
              <LogOut size={18} />
              Esci
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Upload Area */}
        <div className="mb-8">
          <div
            className={`border-2 border-dashed rounded-2xl p-8 text-center transition-colors ${
              dragOver
                ? 'border-gold bg-gold/10'
                : 'border-gray-300 hover:border-gold hover:bg-gold/5'
            }`}
            onDrop={handleDrop}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
                <Upload className="text-gold" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-night-blue mb-2 font-playfair">
                  Carica Nuove Foto
                </h3>
                <p className="text-pearl-gray font-lato mb-4">
                  Trascina le foto qui o clicca per selezionarle
                </p>
                <label className="bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors cursor-pointer inline-flex items-center gap-2 font-lato">
                  <Plus size={18} />
                  Seleziona Foto
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e.target.files)}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gold"></div>
            <p className="mt-4 text-pearl-gray font-lato">Caricamento foto...</p>
          </div>
        )}

        {/* Uploading */}
        {uploading && (
          <div className="bg-white rounded-lg p-4 mb-6 border border-gold/20">
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gold"></div>
              <span className="text-night-blue font-lato">Upload in corso...</span>
            </div>
          </div>
        )}

        {/* Upload Error */}
        {uploadError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <X size={12} className="text-white" />
              </div>
              <div>
                <p className="text-red-700 font-semibold font-lato">Errore nel caricamento</p>
                <p className="text-red-600 text-sm font-lato">{uploadError}</p>
              </div>
              <button
                onClick={() => setUploadError('')}
                className="ml-auto text-red-500 hover:text-red-700 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        {!loading && photos.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-night-blue mb-6 font-playfair">
              Album Foto ({photos.length} foto)
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-square bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <img
                    src={photo.url}
                    alt={photo.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && photos.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ImageIcon className="text-gray-400" size={48} />
            </div>
            <h3 className="text-xl font-bold text-night-blue mb-2 font-playfair">
              Nessuna foto caricata
            </h3>
            <p className="text-pearl-gray font-lato">
              Inizia caricando le prime foto dell'evento!
            </p>
          </div>
        )}
      </div>

      {/* Modal per visualizzare foto */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={32} />
            </button>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.name}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
              <p className="font-lato">
                Caricata il {selectedPhoto.uploadedAt.toLocaleDateString('it-IT')}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;