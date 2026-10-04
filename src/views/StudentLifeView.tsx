import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { IMAGES } from '../data/schoolData';

interface StudentLifeViewProps {
  onSelectTab: (tab: NavigationTab) => void;
  onOpenAICounselor: (query?: string) => void;
}

export const StudentLifeView: React.FC<StudentLifeViewProps> = ({
  onSelectTab,
  onOpenAICounselor,
}) => {
  const [activeHouse, setActiveHouse] = useState<number>(0);

  const houses = [
    {
      name: 'St. Augustine House',
      motto: 'Virtus et Scientia (Valour & Knowledge)',
      color: 'bg-amber-600',
      badge: 'Gold Lion Crest',
      prefect: 'Master Aditya V. Sharma (Class XII)',
      quote: 'Fostering analytical tenacity in national quiz bowls and competitive physics Olympiads.',
      achievements: 'Inter-House Academic Cup Champions (2024, 2025)',
    },
    {
      name: 'St. Teresa House',
      motto: 'Caritas et Veritas (Compassion & Truth)',
      color: 'bg-emerald-700',
      badge: 'Emerald Olive Branch',
      prefect: 'Miss Sanjana M. Rao (Class XII)',
      quote: 'Championing grassroots environmental conservation, community outreach, and social welfare drives.',
      achievements: 'Community Service Leadership Shield (3 Consecutive Years)',
    },
    {
      name: 'St. Francis House',
      motto: 'Pax et Bonum (Peace & Harmony)',
      color: 'bg-sky-700',
      badge: 'Azure Falcon',
      prefect: 'Master Neil K. Sen (Class XII)',
      quote: 'Nurturing symphonic harmony, dramatic elocution, choral mastery, and literary excellence.',
      achievements: 'Annual Inter-Collegiate Cultural Trophy (2025)',
    },
    {
      name: 'St. Patrick House',
      motto: 'Semper Fidelis (Always Steadfast)',
      color: 'bg-indigo-700',
      badge: 'Sapphire Shield',
      prefect: 'Miss Tarini Joshi (Class XII)',
      quote: 'Dominating field sports, track championships, cricket matches, and aquatic leagues.',
      achievements: 'Overall Athletic Shield Winners (2023, 2024, 2025)',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header Canopy */}
      <section className="relative w-full -mt-[7.5rem] pt-[7.5rem] bg-primary-container text-on-primary overflow-hidden pb-20">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 flex flex-col gap-space-md">
          <div className="inline-flex items-center gap-space-xs self-start px-space-md py-1.5 rounded-full bg-surface-container-highest/20 backdrop-blur-md border border-white/10 text-secondary-fixed text-label-sm font-semibold uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">celebration</span>
            <span>Vibrant Collegiate Community</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-primary max-w-3xl leading-tight">
            Nurturing Well-Rounded Scholars, Resilient Leaders & Lifelong Bonds
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl leading-relaxed">
            Beyond test scores lies the true heartbeat of Mount Carmel: dynamic pastoral houses, 45+ guilds, championship sports tournaments, and nurturing residential boarding care.
          </p>
        </div>
      </section>

      {/* House System Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              Pastoral Governance
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">
              The Four Historic Houses
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed">
            Every Mount Carmel scholar is inducted into one of four storied houses upon enrollment, igniting healthy rivalry, leadership camaraderie, and inter-house brotherhood.
          </p>
        </div>

        {/* House Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-16">
          {houses.map((house, idx) => (
            <div
              key={idx}
              onClick={() => setActiveHouse(idx)}
              className={`p-space-lg rounded-xl flex flex-col justify-between cursor-pointer transition-all duration-300 border ${
                activeHouse === idx
                  ? 'bg-surface-container-lowest shadow-xl ring-2 ring-secondary -translate-y-1'
                  : 'bg-surface-container-lowest/80 shadow-sm hover:shadow-md border-surface-container-high/60'
              }`}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className={`w-3.5 h-3.5 rounded-full ${house.color}`}></span>
                  <span className="text-xs uppercase font-bold text-outline">{house.badge}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  {house.name}
                </h3>
                <span className="font-label-sm text-label-sm text-secondary italic font-semibold">
                  {house.motto}
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {house.quote}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-surface-container flex flex-col gap-1 text-xs">
                <span className="text-outline uppercase tracking-wider font-semibold">Head Prefect</span>
                <span className="font-semibold text-on-surface">{house.prefect}</span>
                <span className="text-on-tertiary-fixed-variant font-medium mt-1">{house.achievements}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Residential Boarding Showcase */}
        <div className="rounded-2xl bg-surface-container-low p-8 lg:p-12 border border-surface-container-high/60 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
              Home Away From Home
            </span>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">
              Pastoral Residential Boarding Care
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Available from Grade 5 upwards, our boarding houses offer structured daily schedules with evening prep mentoring, organic dining crafted by executive nutritionists, round-the-clock infirmary physicians, and weekend outdoor retreats.
            </p>
            <div className="grid grid-cols-2 gap-3 text-body-sm font-semibold text-on-surface pt-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">restaurant</span>
                <span>Chef-Curated Organic Meals</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">local_hospital</span>
                <span>24/7 Campus Infirmary</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">menu_book</span>
                <span>Supervised Evening Prep Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">sports</span>
                <span>Dedicated Boarder Sports Leagues</span>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onOpenAICounselor('What are the residential boarding options and fees?')}
                className="px-5 py-2.5 bg-primary-container text-on-primary rounded-lg font-label-md font-semibold hover:bg-black transition-colors cursor-pointer"
              >
                Inquire About Boarding Vacancies
              </button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <img
              src={IMAGES.quadrangle}
              alt="Collegiate boarding campus"
              className="w-full h-80 rounded-xl object-cover shadow-md border border-surface-container-high"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
