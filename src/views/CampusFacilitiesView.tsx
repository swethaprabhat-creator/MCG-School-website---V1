import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { IMAGES } from '../data/schoolData';

interface CampusFacilitiesViewProps {
  onSelectTab: (tab: NavigationTab) => void;
  onOpenTourModal: () => void;
}

export const CampusFacilitiesView: React.FC<CampusFacilitiesViewProps> = ({
  onSelectTab,
  onOpenTourModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'stem' | 'sports' | 'library' | 'transit'>('all');

  const facilities = [
    {
      title: 'Central Heritage Library & Archives',
      category: 'library',
      tag: 'Scholarly Archive',
      hours: 'Open: 7:30 AM – 7:00 PM',
      highlight: '45,000+ volumes, JSTOR institutional access & RFID digital catalog',
      image: IMAGES.library,
      desc: 'Two-storey collegiate reading rooms, climate-controlled preservation stacks for rare manuscripts, private research carrels, and soundproof academic discussion suites.',
    },
    {
      title: 'Olympic Heated Natatorium',
      category: 'sports',
      tag: 'FINA Standards',
      hours: '50m All-Weather 8-Lane Pool',
      highlight: 'Sub-surface biomechanical stroke analysis cameras & ozone filtration',
      image: IMAGES.natatorium,
      desc: 'Temperature-regulated year-round facility hosting national inter-school aquatics meets, water polo leagues, and certified NIS coaching for competitive squads.',
    },
    {
      title: 'Sir Donald Turf Cricket Academy',
      category: 'sports',
      tag: 'BCCI-Certified Oval',
      hours: '70m Boundary Pitch',
      highlight: '6 practice nets, bowling simulators & floodlit twilight fixtures',
      image: IMAGES.cricket,
      desc: 'Pristine turf wicket maintained to international test standards, complete with a historic wooden pavilion, boundary sight screens, and digital telemetry.',
    },
    {
      title: 'Alan Turing STEM & Robotics Labs',
      category: 'stem',
      tag: 'Next-Gen Computing',
      hours: '8,500 sq.ft Research Complex',
      highlight: 'NVIDIA GPU clusters, 3D printing ateliers & drone wind tunnels',
      image: IMAGES.roboticsLab,
      desc: 'Equipped with industrial SLA & FDM printers, ROS humanoid bots, Arduino micro-controllers, laser cutters, and spatial computing headsets for applied physics.',
    },
    {
      title: 'Championship AstroTurf Stadium',
      category: 'sports',
      tag: 'FIFA Quality Pro',
      hours: 'Full-Size All-Weather Ground',
      highlight: 'Shock-absorbing cork infill & multi-channel stadium floodlighting',
      image: IMAGES.astroturf,
      desc: 'Engineered for premier inter-school soccer derbies, athletics track meets, and outdoor assemblies with stadium seating for 2,500 spectators.',
    },
    {
      title: 'Safe GPS-Monitored Transit Fleet',
      category: 'transit',
      tag: '360° Safety Shield',
      hours: '65+ NCR Routes',
      highlight: 'Dual CCTV cameras, RFID student tap-in & female attendants on every coach',
      image: IMAGES.transit,
      desc: '68 air-conditioned vehicles fitted with digital speed limiters, automated seat-belt locks, and live parent smartphone telemetry for safe pick-up and drop-off.',
    },
  ];

  const filtered = activeCategory === 'all'
    ? facilities
    : facilities.filter((f) => f.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      {/* Header Canopy */}
      <section className="relative w-full -mt-[7.5rem] pt-[7.5rem] bg-primary-container text-on-primary overflow-hidden pb-20">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 flex flex-col gap-space-md">
          <div className="inline-flex items-center gap-space-xs self-start px-space-md py-1.5 rounded-full bg-surface-container-highest/20 backdrop-blur-md border border-white/10 text-secondary-fixed text-label-sm font-semibold uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">park</span>
            <span>42-Acre Collegiate Estate</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-primary max-w-3xl leading-tight">
            World-Class Infrastructure Built for Scholastic Stature
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl leading-relaxed">
            Every square meter of Mount Carmel’s estate is intentionally architected to elevate curiosity, physical resilience, and scholarly rigor in harmony with nature.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onOpenTourModal}
              className="bg-secondary-container text-on-secondary-container px-6 py-3.5 rounded-lg font-label-lg font-semibold hover:bg-secondary-fixed transition-colors flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">360</span>
              <span>Launch 360° Virtual Campus Tour</span>
            </button>
            <button
              onClick={() => onSelectTab('admissions')}
              className="bg-surface-container-highest/20 hover:bg-surface-container-highest/30 text-on-primary px-6 py-3.5 rounded-lg font-label-lg font-semibold transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              <span>Book Saturday Campus Visit</span>
            </button>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Facilities Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-surface-container-high">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Facilities' },
              { id: 'stem', label: 'STEM & AI Labs' },
              { id: 'sports', label: 'Athletic Academies' },
              { id: 'library', label: 'Library & Archives' },
              { id: 'transit', label: 'GPS Transit Fleet' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-lg text-label-md font-label-md transition-colors cursor-pointer font-semibold ${
                  activeCategory === cat.id
                    ? 'bg-primary-container text-on-primary shadow-sm'
                    : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <span className="text-body-sm text-on-surface-variant">
            Showing {filtered.length} of {facilities.length} major wings
          </span>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col border border-surface-container-high/60 group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={item.title}
                  src={item.image}
                />
                <div className="absolute top-3 left-3 bg-primary-container/90 backdrop-blur-md px-3 py-1 rounded text-secondary-fixed text-label-sm font-semibold uppercase tracking-wider">
                  {item.tag}
                </div>
              </div>
              <div className="p-space-lg flex flex-col justify-between flex-1 gap-space-md">
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-space-md border-t border-surface-container flex flex-col gap-1 text-on-surface-variant font-body-sm text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-secondary">{item.hours}</span>
                    <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
                  </div>
                  <span className="text-on-surface-variant">{item.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
