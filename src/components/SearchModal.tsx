import React, { useState } from 'react';
import { NavigationTab } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (tab: NavigationTab) => void;
}

interface SearchItem {
  title: string;
  category: string;
  description: string;
  tab: NavigationTab;
}

const CATALOG_ITEMS: SearchItem[] = [
  {
    title: 'Admissions Criteria 2026-27',
    category: 'Admissions',
    description: 'Detailed age benchmark, eligibility matrix, and registration portal.',
    tab: 'admissions',
  },
  {
    title: 'CBSE & Cambridge Dual Framework',
    category: 'Academics',
    description: 'National NCERT curriculum and CAIE International IGCSE and A-Levels.',
    tab: 'academics',
  },
  {
    title: 'Alan Turing STEM, Robotics & AI Labs',
    category: 'Innovation',
    description: 'Python AI neural nets, cloud GPU clusters, 3D printing ateliers, and drone testing.',
    tab: 'campus-facilities',
  },
  {
    title: 'Sir Donald Turf Cricket Academy',
    category: 'Athletics',
    description: 'BCCI-standard 70m turf cricket ground with 6 practice nets and video biomechanics.',
    tab: 'campus-facilities',
  },
  {
    title: 'Olympic 50-Meter Heated Natatorium',
    category: 'Sports',
    description: '8-lane indoor temperature-controlled swimming pool with NIS certified coaches.',
    tab: 'campus-facilities',
  },
  {
    title: 'Annual & Quarterly Fee Schedule',
    category: 'Admissions',
    description: 'Full tuition breakdown across Nursery, Primary, Middle, and Senior wings.',
    tab: 'admissions',
  },
  {
    title: 'Carmel AI Academic Counselor',
    category: 'Support',
    description: 'Live automated advisory for eligibility, syllabus questions, and campus tours.',
    tab: 'ai-counselor',
  },
  {
    title: 'Residential Boarding Houses',
    category: 'Student Life',
    description: 'Pastoral care, housemasters, chef-prepared nutrition, and evening prep tutors.',
    tab: 'student-life',
  },
  {
    title: 'Carmel Euphoria Model United Nations',
    category: 'Diplomacy',
    description: 'Premier youth diplomacy conference hosting over 800 international delegates.',
    tab: 'academics',
  },
  {
    title: 'Central Heritage Library & Archives',
    category: 'Facilities',
    description: '45,000 archival volumes, JSTOR institutional access, and digital RFID indexing.',
    tab: 'campus-facilities',
  },
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectResult }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim()
    ? CATALOG_ITEMS.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : CATALOG_ITEMS.slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-primary-container/85 backdrop-blur-md p-4 animate-in fade-in">
      <div className="bg-surface-container-lowest max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-surface-container-highest">
        {/* Search Bar Input */}
        <div className="p-4 px-6 border-b border-surface-container flex items-center gap-3">
          <span className="material-symbols-outlined text-secondary text-[24px]">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search curricula, faculty, admission fees, sports, or labs..."
            className="flex-1 bg-transparent text-body-lg text-on-surface placeholder:text-outline focus:outline-none"
          />
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs bg-surface-container hover:bg-surface-container-high rounded text-on-surface-variant cursor-pointer transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 max-h-[60vh] overflow-y-auto flex flex-col gap-2">
          <div className="px-2 pb-1 text-xs uppercase font-bold tracking-wider text-outline flex items-center justify-between">
            <span>{query ? `Search results (${filtered.length})` : 'Frequently Searched'}</span>
            <span>Jump to Section</span>
          </div>

          {filtered.length === 0 ? (
            <div className="py-12 text-center text-on-surface-variant flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-[36px] text-outline">search_off</span>
              <p className="font-body-md">No institutional records found matching "{query}"</p>
              <button
                onClick={() => {
                  onClose();
                  onSelectResult('ai-counselor');
                }}
                className="mt-2 text-xs font-semibold text-secondary hover:underline flex items-center gap-1"
              >
                <span>Ask Carmel AI Counselor</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          ) : (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSelectResult(item.tab);
                  onClose();
                }}
                className="w-full text-left p-3 rounded-xl hover:bg-surface-container-low transition-colors flex items-start justify-between group cursor-pointer"
              >
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded bg-surface-container text-secondary font-semibold">
                      {item.category}
                    </span>
                    <span className="font-title-md text-title-md font-semibold text-on-surface group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                    {item.description}
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline text-[18px] opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                  chevron_right
                </span>
              </button>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 px-6 bg-surface-container-low text-xs text-on-surface-variant flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>Mount Carmel Institutional Archive • Live Index</span>
          </div>
          <span>Press ESC or Click Outside to Dismiss</span>
        </div>
      </div>
    </div>
  );
};
