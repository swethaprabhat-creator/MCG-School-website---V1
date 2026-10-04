import React, { useState } from 'react';
import { NavigationTab } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CampusTourModal } from './components/CampusTourModal';
import { PortalLoginModal } from './components/PortalLoginModal';
import { SearchModal } from './components/SearchModal';
import { FloatingAICounselor } from './components/FloatingAICounselor';

import { HomeView } from './views/HomeView';
import { AcademicsView } from './views/AcademicsView';
import { AdmissionsView } from './views/AdmissionsView';
import { AICounselorView } from './views/AICounselorView';
import { CampusFacilitiesView } from './views/CampusFacilitiesView';
import { StudentLifeView } from './views/StudentLifeView';
import { AboutUsView } from './views/AboutUsView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('home');
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isPortalLoginOpen, setIsPortalLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [counselorQuestion, setCounselorQuestion] = useState<string | undefined>(undefined);

  const handleSelectTab = (tab: NavigationTab) => {
    if (tab === 'portal-login') {
      setIsPortalLoginOpen(true);
      return;
    }
    if (tab === 'apply-now') {
      setCurrentTab('admissions');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAICounselor = (initialQuery?: string) => {
    setCounselorQuestion(initialQuery);
    setCurrentTab('ai-counselor');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased flex flex-col justify-between">
      {/* Universal Fixed Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenPortalLogin={() => setIsPortalLoginOpen(true)}
      />

      {/* Main Content Area with Header padding offset */}
      <main className="w-full pt-[7.5rem] bg-surface flex-1">
        {currentTab === 'home' && (
          <HomeView
            onSelectTab={handleSelectTab}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAICounselor={handleOpenAICounselor}
          />
        )}

        {currentTab === 'academics' && (
          <AcademicsView onSelectTab={handleSelectTab} />
        )}

        {currentTab === 'admissions' && (
          <AdmissionsView
            onSelectTab={handleSelectTab}
            onOpenAICounselor={handleOpenAICounselor}
          />
        )}

        {currentTab === 'ai-counselor' && (
          <AICounselorView
            onSelectTab={handleSelectTab}
            initialQuestion={counselorQuestion}
          />
        )}

        {currentTab === 'campus-facilities' && (
          <CampusFacilitiesView
            onSelectTab={handleSelectTab}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        )}

        {currentTab === 'student-life' && (
          <StudentLifeView
            onSelectTab={handleSelectTab}
            onOpenAICounselor={handleOpenAICounselor}
          />
        )}

        {currentTab === 'about-us' && (
          <AboutUsView
            onSelectTab={handleSelectTab}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        )}

        {currentTab === 'contact' && (
          <ContactView
            onSelectTab={handleSelectTab}
            onOpenAICounselor={handleOpenAICounselor}
          />
        )}
      </main>

      {/* Floating Carmel AI Counselor Button (available when not already on AI Counselor tab) */}
      {currentTab !== 'ai-counselor' && (
        <FloatingAICounselor onOpenFullCounselor={handleOpenAICounselor} />
      )}

      {/* Modals */}
      <CampusTourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        onBookTour={() => {
          handleSelectTab('admissions');
        }}
      />

      <PortalLoginModal
        isOpen={isPortalLoginOpen}
        onClose={() => setIsPortalLoginOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSelectTab}
      />

      {/* Universal Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenPortalLogin={() => setIsPortalLoginOpen(true)}
      />
    </div>
  );
}
