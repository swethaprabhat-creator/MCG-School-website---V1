import React, { useState } from 'react';
import { NavigationTab } from '../types';

interface FloatingAICounselorProps {
  onOpenFullCounselor: (initialQuestion?: string) => void;
}

export const FloatingAICounselor: React.FC<FloatingAICounselorProps> = ({
  onOpenFullCounselor,
}) => {
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [quickInput, setQuickInput] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickInput.trim()) {
      onOpenFullCounselor(quickInput.trim());
      setQuickInput('');
      setBubbleOpen(false);
    } else {
      onOpenFullCounselor();
      setBubbleOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Quick Chat Popover Bubble */}
      {bubbleOpen && (
        <div className="mb-3 bg-surface-container-lowest p-4 rounded-2xl shadow-2xl w-80 flex flex-col gap-2.5 border border-surface-container-highest animate-in slide-in-from-bottom-3">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm font-bold text-secondary uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              Carmel AI Admissions Guide
            </span>
            <button
              className="text-on-surface-variant hover:text-on-surface w-6 h-6 flex items-center justify-center rounded hover:bg-surface-container cursor-pointer"
              onClick={() => setBubbleOpen(false)}
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Have questions regarding CBSE/Cambridge streams, fee schedules, or hostel vacancies?
          </p>
          <form onSubmit={handleQuickSubmit} className="flex items-center gap-1.5 pt-1">
            <input
              className="w-full px-3 py-2 rounded-lg bg-surface-container-low text-xs text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary/40"
              placeholder="Ask your question..."
              type="text"
              value={quickInput}
              onChange={(e) => setQuickInput(e.target.value)}
              autoFocus
            />
            <button
              type="submit"
              className="p-2 rounded-lg bg-primary-container text-on-primary hover:bg-black transition-colors cursor-pointer shrink-0"
              title="Send to AI Counselor"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </form>
          <button
            type="button"
            onClick={() => {
              setBubbleOpen(false);
              onOpenFullCounselor();
            }}
            className="text-[11px] text-secondary hover:underline text-left font-semibold"
          >
            Launch full interactive workspace →
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        className="bg-primary-container text-on-primary p-3.5 px-5 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer border border-secondary/20 hover:border-secondary-fixed/50"
        onClick={() => setBubbleOpen(!bubbleOpen)}
        type="button"
      >
        <span className="material-symbols-outlined text-[22px] text-secondary-fixed">
          neurology
        </span>
        <span className="font-label-md text-label-md pr-1 font-semibold">
          Carmel AI Counselor
        </span>
      </button>
    </div>
  );
};
