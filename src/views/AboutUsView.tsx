import React from 'react';
import { NavigationTab } from '../types';
import { IMAGES } from '../data/schoolData';

interface AboutUsViewProps {
  onSelectTab: (tab: NavigationTab) => void;
  onOpenTourModal: () => void;
}

export const AboutUsView: React.FC<AboutUsViewProps> = ({ onSelectTab, onOpenTourModal }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Canopy */}
      <section className="relative w-full -mt-[7.5rem] pt-[7.5rem] bg-primary-container text-on-primary overflow-hidden pb-20">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 flex flex-col gap-space-md">
          <div className="inline-flex items-center gap-space-xs self-start px-space-md py-1.5 rounded-full bg-surface-container-highest/20 backdrop-blur-md border border-white/10 text-secondary-fixed text-label-sm font-semibold uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">history_edu</span>
            <span>Est. 1996 • 28+ Years of Academic Heritage</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-primary max-w-3xl leading-tight">
            An Enduring Legacy of Intellectual Nobility & Moral Character
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl leading-relaxed">
            Founded with a solemn mandate to bridge classical academic mastery with moral rectitude, Mount Carmel School has graduated thousands of alumni who lead worldwide enterprises, academic faculties, and civil services.
          </p>
        </div>
      </section>

      {/* Heritage Story & Founding Vision */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center mb-16">
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              Our Genesis
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface">
              From Humble Foundations to National Prominence
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Established in 1996 by visionary pedagogues and philanthropic scholars, Mount Carmel started with an inaugural class of 85 pupils. Over nearly three decades, our campus has expanded across 42 lush acres in New Delhi, continuously maintaining a 100% board first-division standard and pioneering dual national and international frameworks.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We believe scholarship without character is barren. Every curriculum choice, pastoral initiative, and sports league is structured to instil humility, civic integrity, and courageous intellectual ambition.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenTourModal}
                className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container font-label-md px-5 py-2.5 rounded-lg hover:bg-secondary-fixed transition-colors font-semibold cursor-pointer shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                <span>Experience the Heritage Campus Walkthrough</span>
              </button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <img
              src={IMAGES.heroBg}
              alt="Mount Carmel School Historic Quadrangle"
              className="w-full h-96 rounded-2xl object-cover shadow-lg border border-surface-container-high"
            />
          </div>
        </div>

        {/* Principal's Full Address */}
        <div className="bg-surface-container-lowest p-8 lg:p-12 rounded-2xl shadow-md border border-surface-container-high/60 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center mb-16">
          <div className="lg:col-span-4 flex flex-col items-center text-center gap-3">
            <img
              src={IMAGES.principal}
              alt="Dr. Elizabeth Thomas"
              className="w-36 h-36 rounded-full object-cover shadow-md ring-4 ring-secondary/20"
            />
            <div className="flex flex-col">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Dr. Elizabeth Thomas
              </h3>
              <span className="font-label-sm text-secondary font-bold">
                Principal & Academic Director
              </span>
              <span className="text-xs text-on-surface-variant mt-1">
                Ph.D. Education (Cambridge) • M.Sc. Delhi University
              </span>
            </div>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-4 border-l-0 lg:border-l lg:border-surface-container lg:pl-10">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
              Director's Address
            </span>
            <blockquote className="font-headline-sm text-headline-sm italic text-on-surface leading-relaxed font-normal">
              “Education at Mount Carmel is never a conveyor belt of rote metrics. It is an intentional, rigorous pilgrimage toward intellectual sovereignty, moral fortitude, and compassionate stewardship of humankind.”
            </blockquote>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              In an era reshaped by artificial intelligence and volatile global shifts, our scholars are grounded in timeless humanist reasoning while mastering contemporary technologies. We welcome families who value academic excellence without compromising on virtue.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onSelectTab('admissions')}
                className="text-secondary font-label-md font-semibold hover:underline flex items-center gap-1"
              >
                <span>Discover 2026-27 Enrolment Opportunities</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
