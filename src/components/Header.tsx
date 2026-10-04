import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { IMAGES } from '../data/schoolData';

interface HeaderProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  onOpenSearch: () => void;
  onOpenPortalLogin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenSearch,
  onOpenPortalLogin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavigationTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about-us', label: 'About Us' },
    { id: 'academics', label: 'Academics' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'campus-facilities', label: 'Campus & Facilities' },
    { id: 'student-life', label: 'Student Life' },
    { id: 'ai-counselor', label: 'AI Counselor' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Banner */}
      <div className="w-full bg-primary-container text-on-primary border-b border-primary-container/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-10 flex items-center justify-between font-label-sm text-label-sm">
          <div className="flex items-center gap-space-md">
            <span className="flex items-center gap-space-xs text-secondary-fixed">
              <span className="material-symbols-outlined text-[16px]">campaign</span>
              <span className="tracking-wider uppercase font-semibold">Admissions Open 2026-27</span>
            </span>
            <span className="hidden md:inline-block text-on-primary-container">|</span>
            <span className="hidden md:inline-block text-inverse-on-surface">
              CBSE Affiliation No. 1930248 • Cambridge Int. Centre IN482
            </span>
          </div>
          <div className="flex items-center gap-space-lg">
            <a
              className="flex items-center gap-space-xs text-inverse-on-surface hover:text-secondary-fixed transition-colors"
              href="tel:+911126183920"
            >
              <span className="material-symbols-outlined text-[15px]">call</span>
              <span>+91 (0) 11 2618 3920</span>
            </a>
            <button
              className="flex items-center gap-space-xs text-inverse-on-surface hover:text-secondary-fixed transition-colors focus:outline-none"
              onClick={onOpenPortalLogin}
              type="button"
            >
              <span className="material-symbols-outlined text-[15px]">vpn_key</span>
              <span>Portal Login</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-space-md">
          {/* Logo & School Name */}
          <button
            onClick={() => onSelectTab('home')}
            className="flex items-center gap-space-md text-left cursor-pointer group"
          >
            <img
              alt="Mount Carmel School Crest"
              className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
              src={IMAGES.logo}
            />
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md tracking-tight text-primary leading-none">
                Mount Carmel School
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mt-1">
                Est. 1996 • Excellence & Character
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-space-lg font-label-lg text-label-lg">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onSelectTab(link.id)}
                  className={`py-1 transition-colors relative cursor-pointer ${
                    isActive
                      ? 'text-secondary border-b-2 border-secondary font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {link.label}
                  {link.id === 'ai-counselor' && (
                    <span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] bg-secondary-container text-on-secondary-container font-bold uppercase tracking-wider">
                      AI
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions: Search, Apply Now, User Profile, Mobile Menu Toggle */}
          <div className="flex items-center gap-space-md">
            <button
              aria-label="Search Catalogue"
              onClick={onOpenSearch}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>
            <button
              onClick={() => onSelectTab('admissions')}
              className="hidden sm:inline-flex items-center justify-center bg-secondary-container text-on-secondary-container font-label-lg text-label-lg px-space-lg py-2.5 rounded-lg hover:bg-secondary-fixed transition-all shadow-[0_2px_4px_-1px_rgba(11,25,44,0.06)] hover:scale-102 cursor-pointer font-semibold"
              type="button"
            >
              Apply Now
            </button>
            <button
              onClick={onOpenPortalLogin}
              title="Parent / Student Portal Account"
              className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-9 h-9 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container"
              type="button"
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-surface-container-high bg-surface-container-lowest px-6 py-4 flex flex-col gap-2 shadow-xl animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onSelectTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2.5 rounded-lg font-label-lg text-label-lg ${
                  currentTab === link.id
                    ? 'bg-secondary-container text-on-secondary-container font-semibold'
                    : 'text-on-surface-variant hover:bg-surface-container-low'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-surface-container flex flex-col gap-2">
              <button
                onClick={() => {
                  onSelectTab('admissions');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 bg-secondary-container text-on-secondary-container text-center rounded-lg font-label-lg font-semibold"
              >
                Apply Now (2026–27)
              </button>
              <button
                onClick={() => {
                  onOpenPortalLogin();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 bg-surface-container text-on-surface text-center rounded-lg font-label-md"
              >
                Parent / Student Portal Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
