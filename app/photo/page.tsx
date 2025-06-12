"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react"; // For lightbox close button

export default function PhotoPortfolio() {
  // Sample photo data - replace with your actual images
  const photos = [
    { id: 1, src: "/photos/photo1.jpg", alt: "Poster for Computer Subject SHS" },
    { id: 2, src: "/photos/photo2.png", alt: "Endless February Logo" },
    { id: 3, src: "/photos/photo3.png", alt: "Kim Chaewon Poster" },
    { id: 4, src: "/photos/photo4.jpg", alt: "Kurt Axie" },
    { id: 5, src: "/photos/photo5.png", alt: "LBJ Poster" },
    { id: 6, src: "/photos/photo6.jpg", alt: "MKB Rabbitry Logo" },
    { id: 7, src: "/photos/photo7.png", alt: "JPCS Parade Banner 2024" },
    { id: 8, src: "/photos/photo8.png", alt: "RBRT Medisina Cover" },
    { id: 9, src: "/photos/photo9.png", alt: "SC30 Poster" },
    { id: 10, src: "/photos/photo10.png", alt: "RecipeNest Survey" },
    { id: 11, src: "/photos/photo11.jpg", alt: "McDonald's" },
    { id: 12, src: "/photos/photo12.jpg", alt: "San Juan Parish Church" },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white p-8 md:p-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-800">Photo Portfolio</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="relative aspect-square overflow-hidden rounded-md border border-gray-200 hover:border-red-300 transition-colors group cursor-pointer"
            onClick={() => setSelectedPhoto(photo.id)}
          >
            {/* Image with hover effects */}
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              placeholder="blur" // Optional blur-up effect
              blurDataURL="data:image/svg+xml;base64,[...]" // Tiny placeholder
            />

            {/* Hover caption overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                {photo.alt}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white hover:text-red-300 transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative w-full max-w-6xl h-[90vh]">
            <Image
              src={photos.find(p => p.id === selectedPhoto)!.src}
              alt={photos.find(p => p.id === selectedPhoto)!.alt}
              fill
              className="object-contain"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h2 className="text-2xl font-bold">
                {photos.find(p => p.id === selectedPhoto)!.alt}
              </h2>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}