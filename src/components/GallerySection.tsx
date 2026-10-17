import React, { useState } from 'react';
import { Camera, Image as ImageIcon, ZoomIn, X, Sparkles, UploadCloud } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: '/images/special-veg-thali.jpg',
      title: 'Grand Vegetarian Thali',
      caption: 'Full Maharashtrian spread with Bhakri, Varan Bhaat & curries'
    },
    {
      src: '/images/aamras-thali.jpg',
      title: 'Aamras Thali Feast',
      caption: 'Pure Alphonso Mango Aamras with hot puris and sabzis'
    },
    {
      src: '/images/thali-fusion.jpg',
      title: 'Thali Fusion',
      caption: 'Harman\'s contemporary gourmet presentation'
    },
    {
      src: '/images/ukdiche-modak.jpg',
      title: 'Steamed Ukdiche Modak',
      caption: 'Coconut-jaggery delicacy served with Sajuk Toop'
    },
    {
      src: '/images/aamras-bowl.jpg',
      title: 'Chilled Aamras Bowl',
      caption: 'Cardamom & saffron infused mango delight'
    },
    {
      src: '/images/restaurant-interior.jpg',
      title: 'Welcoming Family Ambiance',
      caption: 'Spotless dining hall with warm hospitality'
    }
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-[#FFFDF9] relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300">
            <Camera className="w-3.5 h-3.5 text-amber-700" />
            <span>Visual Glimpse</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#7C2D12] font-heading">
            Feast for the <span className="text-amber-700">Eyes & Soul</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600">
            A look at our authentic Maharashtrian thali creations, freshly made sweets, and family dining setting in Nishant Colony, Sangli.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img.src)}
              className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-amber-50 h-64 border border-stone-200"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-base font-heading text-amber-200">
                      {img.title}
                    </h4>
                    <p className="text-xs text-stone-200">{img.caption}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "Photos Coming Soon" Section Note as requested in specs */}
        <div className="mt-10 p-6 rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/50 text-center max-w-2xl mx-auto space-y-2">
          <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center mx-auto text-amber-800">
            <UploadCloud className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-sm text-[#7C2D12]">
            More Photos Coming Soon
          </h4>
          <p className="text-xs text-stone-600">
            We are continuously capturing our seasonal festival specials, live kitchen preparations, and guest moments. Additional photography to be confirmed and updated soon by Harman.
          </p>
        </div>

        {/* Modal Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-amber-300 p-2 rounded-full bg-stone-800/80 transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage}
                alt="Selected preview"
                className="max-h-[85vh] w-auto max-w-full rounded-xl shadow-2xl object-contain border border-amber-400/30"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
