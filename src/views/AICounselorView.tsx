import React, { useState, useEffect, useRef } from 'react';
import { NavigationTab, ChatMessage } from '../types';
import { IMAGES, INITIAL_CHAT_MESSAGES, KNOWLEDGE_BASE } from '../data/schoolData';

interface AICounselorViewProps {
  onSelectTab: (tab: NavigationTab) => void;
  initialQuestion?: string;
}

export const AICounselorView: React.FC<AICounselorViewProps> = ({
  onSelectTab,
  initialQuestion,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_CHAT_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(1);
  const [tourConfirmed, setTourConfirmed] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialQuestion && initialQuestion.trim()) {
      handleUserSubmit(initialQuestion.trim());
    }
  }, [initialQuestion]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleUserSubmit = (userText: string) => {
    if (!userText.trim()) return;

    const newMsgId = `usr-${Date.now()}`;
    const userMessage: ChatMessage = {
      id: newMsgId,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      senderName: 'Prospective Parent',
      type: 'text',
      text: userText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Generate intelligent contextual response
    setTimeout(() => {
      const lower = userText.toLowerCase();
      let responseText = '';
      let responseType: ChatMessage['type'] = 'text';

      if (lower.includes('fee') || lower.includes('cost') || lower.includes('tuition')) {
        responseText = KNOWLEDGE_BASE['fees'];
        responseType = 'tuition-card';
      } else if (lower.includes('age') || lower.includes('cutoff') || lower.includes('eligib')) {
        responseText = KNOWLEDGE_BASE['age'];
        responseType = 'age-criteria';
      } else if (lower.includes('robot') || lower.includes('stem') || lower.includes('tour') || lower.includes('lab')) {
        responseText = KNOWLEDGE_BASE['robotics'];
        responseType = 'robotics-tour';
      } else if (lower.includes('sport') || lower.includes('swim') || lower.includes('cricket') || lower.includes('pool')) {
        responseText = KNOWLEDGE_BASE['sports'];
      } else if (lower.includes('hostel') || lower.includes('board')) {
        responseText = KNOWLEDGE_BASE['boarding'];
      } else if (lower.includes('bus') || lower.includes('transport') || lower.includes('route')) {
        responseText = KNOWLEDGE_BASE['transport'];
      } else if (lower.includes('curriculum') || lower.includes('cbse') || lower.includes('cambridge')) {
        responseText = KNOWLEDGE_BASE['curriculum'];
      } else {
        responseText = `Mount Carmel School strictly maintains the highest standard of academic excellence and holistic character formation. Our admissions cycle 2026–27 is open with priority assessment rounds. Would you like to schedule an executive consultation, review fee structures, or book a Saturday campus tour?`;
      }

      const aiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        senderName: 'Carmel Admissions Desk',
        type: responseType,
        text: responseText,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 900);
  };

  const handleCuratedInquiry = (topic: string) => {
    handleUserSubmit(topic);
  };

  const toggleMic = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTimeout(() => {
        setInputText('What are the scholarship criteria for national sports medalists?');
        setIsListening(false);
      }, 1500);
    }
  };

  const handleConfirmTour = () => {
    setTourConfirmed(true);
    setTimeout(() => {
      setTourConfirmed(false);
      alert('Walkthrough Pass #MCS-782 has been confirmed and saved to your device.');
    }, 1800);
  };

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Subtle decorative ambient glow behind top bar */}
      <div className="relative w-full px-6 lg:px-12 py-6 bg-surface">
        {/* Header Sub-banner & Context Indicator */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-container text-secondary-fixed text-label-sm font-label-sm uppercase tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse"></span>
                Institutional Intelligence
              </span>
              <span className="text-outline text-label-sm font-label-sm">• Active Academic Year 2026-27</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Carmel AI Academic Desk
            </h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
              Real-time admissions counsel, prospectus queries, and campus scheduling powered by verified institutional archives.
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="flex items-center gap-3">
            <div className="bg-surface-container-lowest px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-3 border border-surface-container-high/60">
              <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined text-[20px]">verified</span>
              </div>
              <div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  CBSE & CAIE Desk
                </div>
                <div className="font-title-md text-title-md text-on-surface leading-tight font-bold">
                  Accredited A+++
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-3 border border-surface-container-high/60">
              <div className="w-9 h-9 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
              </div>
              <div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Cycle 1 Deadline
                </div>
                <div className="font-title-md text-title-md text-on-surface leading-tight font-bold">
                  15 March 2026
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column AI Counselor Desktop Canvas */}
        <div className="grid grid-cols-12 gap-5 h-[calc(100vh-17.5rem)] min-h-[720px] max-h-[920px]">
          {/* ================= LEFT SIDEBAR (Col 3) ================= */}
          <aside className="col-span-12 lg:col-span-3 flex flex-col justify-between bg-surface-container-lowest rounded-xl p-5 shadow-sm overflow-hidden border border-surface-container-high/60">
            <div className="flex flex-col h-full overflow-y-auto pr-1 space-y-5">
              {/* Assistant Profile Card */}
              <div className="bg-surface-container-low p-4 rounded-xl relative overflow-hidden border border-surface-container-high/40">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-11 h-11 rounded-lg bg-primary-container flex items-center justify-center text-secondary-fixed shadow-md">
                        <span className="material-symbols-outlined text-[24px]">smart_toy</span>
                      </div>
                      <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-on-tertiary-container ring-2 ring-surface-container-low"></span>
                    </div>
                    <div>
                      <h3 className="font-title-md text-title-md text-on-surface leading-tight font-semibold">
                        Carmel AI Assistant
                      </h3>
                      <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
                        <span className="text-secondary font-semibold">Gemini 1.5 Pro</span>
                        <span>• Online</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant border-t border-surface-container/60">
                  <span>Latency: 140ms</span>
                  <span className="inline-flex items-center gap-1 text-on-tertiary-fixed-variant font-semibold">
                    <span className="material-symbols-outlined text-[13px]">shield</span> Verified Corpus
                  </span>
                </div>
              </div>

              {/* Quick Topic Categories */}
              <div className="flex flex-col space-y-2">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider px-1 font-bold">
                  Curated Inquiries
                </span>
                <button
                  onClick={() => handleCuratedInquiry('What are the key admissions criteria and deadlines for 2026-27?')}
                  className="w-full text-left px-3 py-2.5 rounded-lg bg-surface-container-high/60 hover:bg-secondary-container hover:text-on-secondary-container text-on-surface transition-all flex items-center justify-between group cursor-pointer"
                  type="button"
                >
                  <span className="flex items-center gap-2.5 font-label-lg text-label-lg font-semibold">
                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-on-secondary-container">
                      how_to_reg
                    </span>
                    Admissions Criteria 26-27
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </button>
                <button
                  onClick={() => handleCuratedInquiry('Can you provide the fee estimator breakdown and scholarship grants?')}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-all flex items-center justify-between group cursor-pointer"
                  type="button"
                >
                  <span className="flex items-center gap-2.5 font-body-md text-body-md">
                    <span className="material-symbols-outlined text-[18px] text-outline">calculate</span>
                    Fee Estimator & Grants
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </button>
                <button
                  onClick={() => handleCuratedInquiry('What are the school bus routes, GPS monitoring, and transit security?')}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-all flex items-center justify-between group cursor-pointer"
                  type="button"
                >
                  <span className="flex items-center gap-2.5 font-body-md text-body-md">
                    <span className="material-symbols-outlined text-[18px] text-outline">directions_bus</span>
                    Bus Route & Transit Finder
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </button>
                <button
                  onClick={() => handleCuratedInquiry('What is the official age cutoff for Grade 1 admission?')}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-all flex items-center justify-between group cursor-pointer"
                  type="button"
                >
                  <span className="flex items-center gap-2.5 font-body-md text-body-md">
                    <span className="material-symbols-outlined text-[18px] text-outline">child_care</span>
                    Grade 1 Age Cutoffs
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </button>
                <button
                  onClick={() => handleCuratedInquiry('How does the Cambridge International curriculum compare to CBSE at Mount Carmel?')}
                  className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-all flex items-center justify-between group cursor-pointer"
                  type="button"
                >
                  <span className="flex items-center gap-2.5 font-body-md text-body-md">
                    <span className="material-symbols-outlined text-[18px] text-outline">menu_book</span>
                    Cambridge Entrance Syllabus
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-outline opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </button>
              </div>

              {/* Session History */}
              <div className="flex flex-col space-y-2 pt-2 border-t border-surface-container/60">
                <div className="flex items-center justify-between px-1">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                    Recent Sessions
                  </span>
                  <button
                    onClick={() => setMessages(INITIAL_CHAT_MESSAGES)}
                    className="font-label-sm text-label-sm text-secondary hover:underline cursor-pointer"
                    type="button"
                  >
                    Reset
                  </button>
                </div>
                <div className="flex flex-col space-y-1">
                  <button
                    onClick={() => handleCuratedInquiry('What are the residential boarding options and athletic scholarships?')}
                    className="px-3 py-2 rounded-lg bg-surface-container-low/70 hover:bg-surface-container flex flex-col gap-0.5 transition-colors text-left cursor-pointer"
                  >
                    <span className="font-label-md text-label-md text-on-surface truncate font-semibold">
                      Boarding Scholarship & Athletic Quota
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">Today, 10:14 AM</span>
                  </button>
                  <button
                    onClick={() => handleCuratedInquiry('What is the difference between CBSE and Cambridge pathways?')}
                    className="px-3 py-2 rounded-lg hover:bg-surface-container flex flex-col gap-0.5 transition-colors text-left cursor-pointer"
                  >
                    <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                      IB vs CBSE Curriculum Comparison
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">Yesterday</span>
                  </button>
                  <button
                    onClick={() => handleCuratedInquiry('Does Mount Carmel give priority points to siblings?')}
                    className="px-3 py-2 rounded-lg hover:bg-surface-container flex flex-col gap-0.5 transition-colors text-left cursor-pointer"
                  >
                    <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                      Sibling Admission Priority Policy
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">Feb 21, 2026</span>
                  </button>
                </div>
              </div>

              {/* Direct Human Escalation Fallback */}
              <div className="mt-auto pt-4 bg-primary-container text-on-primary rounded-xl p-4 flex flex-col gap-3 shadow-md border border-secondary/20">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">support_agent</span>
                  <span className="font-title-md text-title-md text-on-primary leading-none font-bold">
                    Need Human Guidance?
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                  Our Senior Admissions Officers are seated at the Central Campus Secretariat.
                </p>
                <div className="flex flex-col gap-2 pt-1 font-label-md text-label-md">
                  <a
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-inverse-on-surface transition-colors"
                    href="tel:+911126183920"
                  >
                    <span className="material-symbols-outlined text-[16px] text-secondary-fixed">call</span>
                    <span>+91 (0) 11 2618 3920</span>
                  </a>
                  <a
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-tertiary-container hover:bg-tertiary-container/80 text-tertiary-fixed transition-colors"
                    href="https://wa.me/911126183920"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-[16px]">chat</span>
                    <span>Dean's Desk WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* ================= MAIN CHAT AREA (Col 6) ================= */}
          <main className="col-span-12 lg:col-span-6 flex flex-col justify-between bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden relative border border-surface-container-high/60">
            {/* Chat Stream Header */}
            <div className="px-6 py-3.5 bg-surface-container-low/60 flex items-center justify-between border-b border-surface-container-high/60">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></div>
                <div>
                  <div className="font-title-md text-title-md text-on-surface leading-tight font-semibold">
                    Live Admissions Session
                  </div>
                  <div className="font-label-sm text-label-sm text-outline">
                    Session Token: #MCS-ADM-8831-2026
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="w-8 h-8 rounded-lg hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors cursor-pointer"
                  title="Print transcript"
                  onClick={() => alert('Transcript sent to printer.')}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">print</span>
                </button>
                <button
                  className="w-8 h-8 rounded-lg hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors cursor-pointer"
                  title="Download official brochure"
                  onClick={() => alert('Downloading official Mount Carmel brochure...')}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">download</span>
                </button>
                <button
                  className="w-8 h-8 rounded-lg hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors cursor-pointer"
                  title="Refresh session"
                  onClick={() => setMessages(INITIAL_CHAT_MESSAGES)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">refresh</span>
                </button>
              </div>
            </div>

            {/* Chat History Scrollable Window */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((msg) => {
                if (msg.sender === 'user') {
                  return (
                    <div key={msg.id} className="flex items-start justify-end gap-3 max-w-[90%] ml-auto animate-in fade-in">
                      <div className="flex flex-col items-end gap-1.5">
                        <div className="flex items-center gap-2">
                          <span className="font-label-sm text-label-sm text-outline">{msg.time}</span>
                          <span className="font-label-md text-label-md text-on-surface font-semibold">
                            {msg.senderName}
                          </span>
                        </div>
                        <div className="p-4 rounded-xl rounded-tr-sm bg-primary-container text-on-primary font-body-md text-body-md leading-relaxed shadow-sm">
                          {msg.text}
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-secondary-container flex-shrink-0 flex items-center justify-center text-on-secondary-container mt-1 font-label-md font-bold">
                        P
                      </div>
                    </div>
                  );
                }

                // AI Response
                return (
                  <div key={msg.id} className="flex items-start gap-3 max-w-[95%] animate-in fade-in">
                    <div className="w-8 h-8 rounded-lg bg-primary-container flex-shrink-0 flex items-center justify-center text-secondary-fixed mt-1 shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">school</span>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-center gap-2">
                        <span className="font-label-md text-label-md text-on-surface font-semibold">
                          {msg.senderName}
                        </span>
                        <span className="font-label-sm text-label-sm text-outline">{msg.time}</span>
                      </div>

                      {/* Card Type: Age Criteria Breakdown */}
                      {msg.type === 'age-criteria' && (
                        <div className="p-4 rounded-xl rounded-tl-sm bg-surface-container-low text-on-surface flex flex-col gap-3 border border-surface-container-high/60">
                          <p className="font-body-md text-body-md leading-relaxed">
                            As per the Directorate of Education guidelines and Mount Carmel Collegiate Statute, here are the validated parameters for <strong>Grade 1 (Session 2026–27)</strong>:
                          </p>
                          <div className="grid grid-cols-2 gap-3 bg-surface-container-lowest p-3.5 rounded-lg shadow-sm border border-surface-container-high/40">
                            <div className="flex flex-col">
                              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                                Eligible Birth Range
                              </span>
                              <span className="font-title-md text-title-md text-on-surface font-semibold mt-0.5">
                                April 1, 2019 – March 31, 2020
                              </span>
                              <span className="font-body-sm text-body-sm text-on-surface-variant">
                                Must complete 6 years as of March 31, 2026
                              </span>
                            </div>
                            <div className="flex flex-col">
                              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                                Evaluation Process
                              </span>
                              <span className="font-title-md text-title-md text-on-surface font-semibold mt-0.5">
                                Informal Interaction
                              </span>
                              <span className="font-body-sm text-body-sm text-on-surface-variant">
                                No written examinations for primary admissions
                              </span>
                            </div>
                          </div>
                          {/* Point System Breakdown */}
                          <div className="bg-surface-container-lowest p-3.5 rounded-lg flex flex-col gap-2 border border-surface-container-high/40">
                            <span className="font-label-md text-label-md text-on-surface font-semibold">
                              Point Matrix (100-Point Scale)
                            </span>
                            <div className="space-y-1.5">
                              <div className="flex items-center justify-between text-body-sm font-body-sm">
                                <span className="text-on-surface-variant">Neighborhood Distance (&lt; 3km radius)</span>
                                <span className="font-semibold text-on-surface">50 pts</span>
                              </div>
                              <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                                <div className="bg-secondary h-full rounded-full" style={{ width: '50%' }}></div>
                              </div>
                              <div className="flex items-center justify-between text-body-sm font-body-sm pt-1">
                                <span className="text-on-surface-variant">Sibling Enrolled at Mount Carmel</span>
                                <span className="font-semibold text-on-surface">25 pts</span>
                              </div>
                              <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                                <div className="bg-secondary h-full rounded-full" style={{ width: '25%' }}></div>
                              </div>
                              <div className="flex items-center justify-between text-body-sm font-body-sm pt-1">
                                <span className="text-on-surface-variant">Alumni Ward / Staff Quota</span>
                                <span className="font-semibold text-on-surface">15 pts</span>
                              </div>
                              <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                                <div className="bg-secondary h-full rounded-full" style={{ width: '15%' }}></div>
                              </div>
                              <div className="flex items-center justify-between text-body-sm font-body-sm pt-1">
                                <span className="text-on-surface-variant">Single Parent / Girl Child Priority</span>
                                <span className="font-semibold text-on-surface">10 pts</span>
                              </div>
                              <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                                <div className="bg-secondary h-full rounded-full" style={{ width: '10%' }}></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 pt-1">
                            <button
                              onClick={() => onSelectTab('admissions')}
                              className="px-3.5 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-black transition-colors flex items-center gap-1.5 shadow-sm font-semibold cursor-pointer"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[16px]">file_open</span>
                              Fill Online Application
                            </button>
                            <button
                              onClick={() => onSelectTab('admissions')}
                              className="px-3.5 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1.5 cursor-pointer font-semibold"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[16px]">assignment</span>
                              Documents Checklist
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Card Type: Robotics Visual Card + Walkthrough Booking Widget */}
                      {msg.type === 'robotics-tour' && (
                        <div className="flex flex-col gap-3">
                          {/* Media Card: Alan Turing Lab */}
                          <div className="rounded-xl overflow-hidden bg-surface-container-low shadow-sm border border-surface-container-high/60">
                            <div
                              className="relative h-48 w-full bg-cover bg-center"
                              style={{ backgroundImage: `url('${IMAGES.roboticsLab}')` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/40 to-transparent"></div>
                              <div className="absolute top-3 left-3">
                                <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold uppercase tracking-wider shadow-sm">
                                  Campus Spotlight
                                </span>
                              </div>
                              <div className="absolute bottom-3 left-4 right-4 text-on-primary">
                                <h4 className="font-headline-sm text-headline-sm text-on-primary leading-tight font-serif">
                                  Alan Turing Innovation & Robotics Complex
                                </h4>
                                <p className="font-body-sm text-body-sm text-inverse-on-surface line-clamp-1">
                                  8,500 sq.ft facility equipped with Boston Dynamics spot SDKs, humanoid robotics rigs & IoT rapid prototyping.
                                </p>
                              </div>
                            </div>
                            <div className="p-4 flex flex-col gap-3">
                              <div className="grid grid-cols-3 gap-2 text-center">
                                <div className="bg-surface-container-lowest p-2 rounded-lg border border-surface-container-high/40">
                                  <div className="font-title-md text-title-md text-on-surface font-bold">Grade 3+</div>
                                  <div className="font-label-sm text-label-sm text-on-surface-variant">Coding Curriculum</div>
                                </div>
                                <div className="bg-surface-container-lowest p-2 rounded-lg border border-surface-container-high/40">
                                  <div className="font-title-md text-title-md text-on-surface font-bold">14 Labs</div>
                                  <div className="font-label-sm text-label-sm text-on-surface-variant">Specialized STEM Units</div>
                                </div>
                                <div className="bg-surface-container-lowest p-2 rounded-lg border border-surface-container-high/40">
                                  <div className="font-title-md text-title-md text-on-surface font-bold">1st Place</div>
                                  <div className="font-label-sm text-label-sm text-on-surface-variant">World Robot Olympiad '25</div>
                                </div>
                              </div>

                              {/* Campus Walkthrough Booking Widget */}
                              <div className="bg-surface-container-lowest p-4 rounded-lg flex flex-col gap-3 border border-surface-container-high/60">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-secondary text-[20px]">villa</span>
                                    <span className="font-title-md text-title-md text-on-surface font-semibold">
                                      Book Saturday Campus Walkthrough
                                    </span>
                                  </div>
                                  <span className="font-label-sm text-label-sm bg-tertiary-fixed text-on-tertiary-fixed-variant px-2.5 py-0.5 rounded-full font-bold">
                                    Slots Open
                                  </span>
                                </div>
                                <p className="font-body-sm text-body-sm text-on-surface-variant">
                                  Guided 90-minute tour led by Senior Faculty with access to the Robotics Hall, Olympic Pool, and Cambridge Block.
                                </p>
                                <div className="grid grid-cols-3 gap-2 pt-1">
                                  {[
                                    { date: 'Sat, Mar 07', time: '09:30 AM - 11:00 AM' },
                                    { date: 'Sat, Mar 07', time: '11:30 AM - 01:00 PM' },
                                    { date: 'Sat, Mar 14', time: '09:30 AM - 11:00 AM' },
                                  ].map((slot, sIdx) => {
                                    const isSelected = selectedSlotIndex === sIdx;
                                    return (
                                      <button
                                        key={sIdx}
                                        type="button"
                                        onClick={() => setSelectedSlotIndex(sIdx)}
                                        className={`py-2 px-3 rounded-lg text-label-sm font-label-sm text-center transition-all cursor-pointer ${
                                          isSelected
                                            ? 'bg-secondary-container text-on-secondary-container shadow-sm font-bold border border-secondary'
                                            : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                                        }`}
                                      >
                                        <span className="block font-semibold">{slot.date}</span>
                                        <span className={isSelected ? 'text-on-secondary-container/80' : 'text-outline'}>
                                          {slot.time}
                                        </span>
                                      </button>
                                    );
                                  })}
                                </div>
                                <div className="flex items-center justify-between pt-2">
                                  <span className="text-label-sm font-label-sm text-on-surface-variant flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[16px] text-secondary">family_restroom</span>
                                    Admits up to 3 family members
                                  </span>
                                  <button
                                    onClick={handleConfirmTour}
                                    className={`px-4 py-2 rounded-lg text-label-md font-label-md transition-all shadow-sm flex items-center gap-1.5 cursor-pointer font-semibold ${
                                      tourConfirmed
                                        ? 'bg-tertiary-container text-tertiary-fixed'
                                        : 'bg-primary-container text-on-primary hover:bg-black'
                                    }`}
                                    type="button"
                                  >
                                    <span className="material-symbols-outlined text-[16px]">
                                      {tourConfirmed ? 'verified' : 'check_circle'}
                                    </span>
                                    {tourConfirmed ? 'Tour Pass Issued #MCS-782' : 'Confirm Walkthrough Pass'}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Tuition Fee Breakdown Card */}
                          <div className="p-4 rounded-xl rounded-tl-sm bg-surface-container-low text-on-surface flex flex-col gap-3 border border-surface-container-high/60">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary text-[20px]">payments</span>
                                <span className="font-title-md text-title-md text-on-surface font-semibold">
                                  Annual Tuition Framework (2026-27)
                                </span>
                              </div>
                              <span className="font-label-sm text-label-sm text-outline">INR / Termly Option</span>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                              <div className="bg-surface-container-lowest p-3 rounded-lg border border-surface-container-high/40">
                                <span className="font-label-sm text-label-sm text-outline">Primary (Grades 1-5)</span>
                                <div className="font-title-md text-title-md text-on-surface font-bold mt-1">₹ 1,85,000</div>
                                <span className="font-body-sm text-body-sm text-on-surface-variant">Per annum (All inclusive)</span>
                              </div>
                              <div className="bg-surface-container-lowest p-3 rounded-lg border border-surface-container-high/40">
                                <span className="font-label-sm text-label-sm text-outline">Middle (Grades 6-8)</span>
                                <div className="font-title-md text-title-md text-on-surface font-bold mt-1">₹ 2,15,000</div>
                                <span className="font-body-sm text-body-sm text-on-surface-variant">Includes STEM lab levies</span>
                              </div>
                              <div className="bg-surface-container-lowest p-3 rounded-lg border border-surface-container-high/40">
                                <span className="font-label-sm text-label-sm text-outline">Cambridge Senior (9-12)</span>
                                <div className="font-title-md text-title-md text-on-surface font-bold mt-1">₹ 2,75,000</div>
                                <span className="font-body-sm text-body-sm text-on-surface-variant">Includes CAIE registration</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between pt-1">
                              <span className="font-label-sm text-label-sm text-on-surface-variant">
                                * Merit scholarships up to 40% fee waiver for state rank holders.
                              </span>
                              <button
                                onClick={() => alert('Official Prospectus & Detailed Fee Schedule downloaded.')}
                                className="px-3.5 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md hover:bg-secondary-fixed transition-colors flex items-center gap-1.5 shadow-sm font-semibold cursor-pointer"
                                type="button"
                              >
                                <span className="material-symbols-outlined text-[16px]">download</span>
                                Download Prospectus & Fee Sheet (PDF)
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Generic text message */}
                      {msg.type === 'text' && (
                        <div className="p-4 rounded-xl rounded-tl-sm bg-surface-container-low text-on-surface font-body-md text-body-md leading-relaxed border border-surface-container-high/40">
                          {msg.text}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-on-surface-variant text-sm italic">
                  <div className="w-6 h-6 rounded-md bg-primary-container text-secondary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[14px] animate-spin">progress_activity</span>
                  </div>
                  <span>Carmel Admissions Desk is retrieving institutional records...</span>
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            {/* Chat Input Footer Area */}
            <div className="p-4 bg-surface-container-lowest border-t border-surface-container-high/60">
              {/* Suggestion Quick Chips */}
              <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
                <span className="font-label-sm text-label-sm text-outline whitespace-nowrap font-semibold">
                  Suggested:
                </span>
                <button
                  className="px-3 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface text-label-sm font-label-sm whitespace-nowrap transition-colors cursor-pointer"
                  onClick={() => handleUserSubmit('What sports facilities and swimming programs are offered on campus?')}
                  type="button"
                >
                  Swimming & Equestrian facilities?
                </button>
                <button
                  className="px-3 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface text-label-sm font-label-sm whitespace-nowrap transition-colors cursor-pointer"
                  onClick={() => handleUserSubmit('Does Mount Carmel provide residential boarding and what are the hostel fees?')}
                  type="button"
                >
                  Boarding & Hostel fee?
                </button>
                <button
                  className="px-3 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface text-label-sm font-label-sm whitespace-nowrap transition-colors cursor-pointer"
                  onClick={() => handleUserSubmit('What is the teacher to student ratio and mentorship model?')}
                  type="button"
                >
                  Student-Teacher Ratio
                </button>
              </div>

              {/* Input Bar */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUserSubmit(inputText);
                }}
                className="flex items-center gap-2 p-1.5 bg-surface-container-low rounded-xl focus-within:ring-2 focus-within:ring-primary-container transition-all border border-surface-container-high/60"
              >
                <button
                  className="w-9 h-9 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors cursor-pointer"
                  title="Attach student records"
                  onClick={() => alert('Secure file attachment dialog. You can upload candidate marksheets and certificates during registration.')}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">attach_file</span>
                </button>
                <input
                  className="flex-1 bg-transparent px-2 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
                  placeholder="Ask about admissions criteria, syllabus, school fees, or faculty..."
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <button
                  className={`w-9 h-9 rounded-lg transition-colors flex items-center justify-center cursor-pointer ${
                    isListening
                      ? 'bg-error text-on-error animate-pulse'
                      : 'hover:bg-surface-container text-on-surface-variant hover:text-on-surface'
                  }`}
                  onClick={toggleMic}
                  title="Dictate voice inquiry"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">mic</span>
                </button>
                <button
                  className="px-4 py-2 rounded-lg bg-primary-container text-on-primary hover:bg-black transition-colors flex items-center gap-1.5 shadow-sm font-semibold cursor-pointer"
                  type="submit"
                >
                  <span className="font-label-md text-label-md">Send</span>
                  <span className="material-symbols-outlined text-[16px]">send</span>
                </button>
              </form>
              <div className="flex items-center justify-between px-2 pt-2 text-label-sm font-label-sm text-outline">
                <span>Official Mount Carmel Automated Regulatory Desk</span>
                <span>All responses recorded for institutional accuracy</span>
              </div>
            </div>
          </main>

          {/* ================= RIGHT CONTEXT PANEL (Col 3) ================= */}
          <aside className="col-span-12 lg:col-span-3 flex flex-col gap-4 overflow-y-auto pr-1">
            {/* Institutional Profile Card */}
            <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col gap-4 border border-surface-container-high/60">
              <div className="flex items-center justify-between">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">
                  Institutional Ledger
                </h3>
                <span className="material-symbols-outlined text-secondary text-[22px]">policy</span>
              </div>
              <div className="space-y-3 font-body-sm text-body-sm">
                <div className="p-3 bg-surface-container-low rounded-lg flex flex-col gap-0.5 border border-surface-container-high/40">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                    CBSE Affiliation No.
                  </span>
                  <span className="font-title-md text-title-md text-on-surface font-bold">
                    1930248 (Since 1996)
                  </span>
                  <span className="text-on-surface-variant">All India Senior Secondary Examination</span>
                </div>
                <div className="p-3 bg-surface-container-low rounded-lg flex flex-col gap-0.5 border border-surface-container-high/40">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                    Cambridge Assessment Int.
                  </span>
                  <span className="font-title-md text-title-md text-on-surface font-bold">
                    Centre ID: IN482
                  </span>
                  <span className="text-on-surface-variant">IGCSE & Cambridge International A-Levels</span>
                </div>
                <div className="p-3 bg-surface-container-low rounded-lg flex flex-col gap-0.5 border border-surface-container-high/40">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                    Campus Area & Infrastructure
                  </span>
                  <span className="font-title-md text-title-md text-on-surface font-bold">
                    22 Acres Green Belt
                  </span>
                  <span className="text-on-surface-variant">Air-purified smart classrooms & astroturf</span>
                </div>
              </div>
            </div>

            {/* Admissions Critical Dates Drawer */}
            <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col gap-3 border border-surface-container-high/60">
              <div className="flex items-center justify-between">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">
                  Cycle Deadlines
                </h3>
                <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Live
                </span>
              </div>
              <div className="relative pl-4 space-y-4 before:absolute before:left-1 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-high">
                <div className="relative flex flex-col gap-0.5">
                  <div className="absolute -left-[19px] top-1 w-2.5 h-2.5 rounded-full bg-secondary"></div>
                  <span className="font-label-sm text-label-sm text-outline font-semibold">Phase 1 Submissions</span>
                  <span className="font-label-md text-label-md text-on-surface font-bold">15 March 2026</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    General Category Registrations close at 5:00 PM
                  </span>
                </div>
                <div className="relative flex flex-col gap-0.5">
                  <div className="absolute -left-[19px] top-1 w-2.5 h-2.5 rounded-full bg-outline-variant"></div>
                  <span className="font-label-sm text-label-sm text-outline font-semibold">First Merit List Display</span>
                  <span className="font-label-md text-label-md text-on-surface font-bold">22 March 2026</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Parent portal publishing & campus notice board
                  </span>
                </div>
                <div className="relative flex flex-col gap-0.5">
                  <div className="absolute -left-[19px] top-1 w-2.5 h-2.5 rounded-full bg-outline-variant"></div>
                  <span className="font-label-sm text-label-sm text-outline font-semibold">Academic Term Commencement</span>
                  <span className="font-label-md text-label-md text-on-surface font-bold">07 April 2026</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Orientation for incoming Primary & Senior scholars
                  </span>
                </div>
              </div>
            </div>

            {/* Campus Facilities Quick-Look Visual */}
            <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm flex flex-col gap-3 border border-surface-container-high/60">
              <div className="flex items-center justify-between">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">
                  Campus Grounds
                </h3>
                <span className="font-label-sm text-label-sm text-secondary font-bold">New Delhi</span>
              </div>
              <div
                className="relative h-28 rounded-lg overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url('${IMAGES.quadrangle}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-on-primary">
                  <span className="font-label-sm text-label-sm font-semibold">Main Heritage Quadrangle</span>
                  <span className="font-label-sm text-label-sm bg-white/20 px-2 py-0.5 rounded backdrop-blur-sm font-bold">
                    Est. 1996
                  </span>
                </div>
              </div>
              {/* Admissions FAQ Accordion Highlights */}
              <div className="space-y-2 pt-1 font-body-sm text-body-sm">
                <details className="group bg-surface-container-low p-2.5 rounded-lg cursor-pointer border border-surface-container-high/40">
                  <summary className="font-label-md text-label-md text-on-surface list-none flex items-center justify-between font-semibold">
                    <span>Is daily transport available in NCR?</span>
                    <span className="material-symbols-outlined text-[16px] text-outline group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Yes, our AC GPS-tracked bus fleet covers 42 routes across Delhi, Gurugram, and Noida with security personnel aboard.
                  </p>
                </details>
                <details className="group bg-surface-container-low p-2.5 rounded-lg cursor-pointer border border-surface-container-high/40">
                  <summary className="font-label-md text-label-md text-on-surface list-none flex items-center justify-between font-semibold">
                    <span>What are the foreign language options?</span>
                    <span className="material-symbols-outlined text-[16px] text-outline group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    French, German, Spanish, and Sanskrit are offered from Grade 4 upwards with certified Goethe & Alliance Française faculty.
                  </p>
                </details>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
