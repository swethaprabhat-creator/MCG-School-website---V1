import React, { useState } from 'react';
import { NavigationTab } from '../types';

interface FooterProps {
  onSelectTab: (tab: NavigationTab) => void;
  onOpenPortalLogin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenPortalLogin }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer className="w-full bg-primary-container text-inverse-on-surface pt-space-xl pb-space-lg mt-space-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-xl">
          {/* Column 1 & 2: School Overview & Accreditation Seals */}
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-8 h-8 rounded bg-surface flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-primary-container text-[20px]">school</span>
              </div>
              <span className="font-headline-md text-headline-md text-on-primary">
                Mount Carmel School
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-primary-container max-w-sm leading-relaxed">
              Dedicated to nurturing intellectual curiosity, ethical character, and global scholarship since 1996 through visionary pedagogical standards.
            </p>
            <div className="flex flex-wrap gap-space-xs pt-space-xs">
              <span className="inline-flex items-center px-space-sm py-1 rounded-full bg-tertiary-container text-on-tertiary-fixed-variant font-label-sm text-label-sm border border-tertiary-fixed-dim/30">
                CBSE Board of Excellence
              </span>
              <span className="inline-flex items-center px-space-sm py-1 rounded-full bg-secondary-container/20 text-secondary-fixed font-label-sm text-label-sm border border-secondary-fixed/30">
                Cambridge Pathway Partner
              </span>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-space-md">
            <h4 className="font-title-md text-title-md text-on-primary">Quick Links</h4>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-primary-container">
              <li>
                <button
                  onClick={() => onSelectTab('about-us')}
                  className="hover:text-on-primary transition-colors text-left cursor-pointer"
                >
                  Our Heritage & Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('academics')}
                  className="hover:text-on-primary transition-colors text-left cursor-pointer"
                >
                  Curriculum Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('admissions')}
                  className="hover:text-on-primary transition-colors text-left cursor-pointer"
                >
                  Admissions Criteria
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('campus-facilities')}
                  className="hover:text-on-primary transition-colors text-left cursor-pointer"
                >
                  STEM & AI Labs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('student-life')}
                  className="hover:text-on-primary transition-colors text-left cursor-pointer"
                >
                  Boarding & Sports
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Institutional Links */}
          <div className="flex flex-col gap-space-md">
            <h4 className="font-title-md text-title-md text-on-primary">Institutional</h4>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-primary-container">
              <li>
                <button
                  onClick={onOpenPortalLogin}
                  className="hover:text-on-primary transition-colors text-left cursor-pointer"
                >
                  Parent & Student Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('contact')}
                  className="hover:text-on-primary transition-colors text-left cursor-pointer"
                >
                  Faculty Recruitment
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('about-us')}
                  className="hover:text-on-primary transition-colors text-left cursor-pointer"
                >
                  Alumni Association
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('admissions')}
                  className="hover:text-on-primary transition-colors text-left cursor-pointer"
                >
                  Annual Disclosure Report
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('contact')}
                  className="hover:text-on-primary transition-colors text-left cursor-pointer"
                >
                  Campus Safety & Vigilance
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Academic Gazette */}
          <div className="flex flex-col gap-space-md">
            <h4 className="font-title-md text-title-md text-on-primary">Academic Gazette</h4>
            <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
              Receive our collegiate journals, admissions announcements, and scholarly publications.
            </p>
            <div className="flex flex-col gap-space-xs">
              {subscribed ? (
                <div className="p-2.5 rounded-lg bg-tertiary-container text-on-tertiary-fixed-variant text-label-sm font-label-sm flex items-center gap-1.5 border border-tertiary-fixed/30">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>Enrolled into Gazette Dispatch!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center rounded-lg bg-surface-container-highest p-1 shadow-inner">
                  <input
                    className="w-full px-space-sm py-1.5 bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none"
                    placeholder="Your institutional email"
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                  />
                  <button
                    className="bg-secondary-container text-on-secondary-container px-space-md py-1.5 rounded-lg font-label-md text-label-md hover:bg-secondary-fixed transition-colors font-semibold cursor-pointer shrink-0"
                    type="submit"
                  >
                    Join
                  </button>
                </form>
              )}
              <span className="font-label-sm text-label-sm text-on-primary-container">
                Confidential and spam-free correspondence.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-lg border-t border-surface-container-highest/20 flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-primary-container">
          <p>© 2026 Mount Carmel School. All academic and institutional rights reserved.</p>
          <div className="flex items-center gap-space-lg font-label-sm text-label-sm">
            <span>Institutional Code: MCS-DEL-1996</span>
            <span>Accredited A+++ Grade</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
