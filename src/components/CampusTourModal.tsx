import React, { useState } from 'react';
import { IMAGES } from '../data/schoolData';

interface CampusTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookTour: () => void;
}

export const CampusTourModal: React.FC<CampusTourModalProps> = ({ isOpen, onClose, onBookTour }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-container/85 backdrop-blur-md p-4 animate-in fade-in">
      <div className="bg-surface-container-lowest max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-surface-container-highest">
        {/* Header */}
        <div className="p-4 px-6 flex items-center justify-between bg-primary-container text-on-primary">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-fixed text-[20px]">villa</span>
            <span className="font-title-md text-title-md">
              Mount Carmel Heritage Grounds • 360° Aerial Tour
            </span>
          </div>
          <button
            className="text-inverse-on-surface hover:text-on-primary w-8 h-8 rounded-full hover:bg-surface-container-highest/20 flex items-center justify-center transition-colors cursor-pointer"
            onClick={onClose}
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Video / Visual Simulation Player */}
        <div className="relative w-full h-96 bg-primary-container flex items-center justify-center overflow-hidden">
          <img
            alt="Heritage campus view"
            className={`w-full h-full object-cover transition-transform duration-1000 ${
              isPlaying ? 'scale-110 filter brightness-105' : 'opacity-85'
            }`}
            src={IMAGES.heroBg}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/20 to-transparent"></div>

          {/* Play/Pause Overlay */}
          {!isPlaying ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-20 h-20 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-secondary-fixed transition-all cursor-pointer group"
                type="button"
              >
                <span className="material-symbols-outlined text-[44px] ml-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                  play_arrow
                </span>
              </button>
              <span className="font-label-md text-label-md text-on-primary bg-primary-container/80 px-3 py-1 rounded-full backdrop-blur-sm">
                Click to Start 4K Heritage Flythrough
              </span>
            </div>
          ) : (
            <div className="absolute top-4 left-4 bg-primary-container/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-on-primary text-label-sm font-label-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
              <span>LIVE: Main Quadrangle & Alan Turing Labs</span>
            </div>
          )}

          {/* Bottom Video Controls Info */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-on-primary">
            <div className="flex flex-col">
              <span className="font-title-md font-serif text-secondary-fixed">
                The 42-Acre Collegiate Estate
              </span>
              <span className="font-body-sm text-inverse-on-surface">
                Including Sir Donald Turf Cricket Academy, Olympic Natatorium & Research Labs
              </span>
            </div>
            {isPlaying && (
              <button
                onClick={() => setIsPlaying(false)}
                className="px-3 py-1 bg-surface-container-lowest/20 hover:bg-surface-container-lowest/30 rounded text-xs backdrop-blur-md transition-colors"
              >
                Pause
              </button>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-on-surface-variant font-body-sm text-body-sm bg-surface-container-lowest">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
            <span>Personal campus walk-throughs available every Saturday from 9:30 AM to 1:00 PM.</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors cursor-pointer"
              onClick={onClose}
              type="button"
            >
              Close
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed font-label-md text-label-md font-semibold transition-colors cursor-pointer shadow-sm"
              onClick={() => {
                onClose();
                onBookTour();
              }}
              type="button"
            >
              Book Physical Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
