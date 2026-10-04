import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { IMAGES } from '../data/schoolData';

interface AcademicsViewProps {
  onSelectTab: (tab: NavigationTab) => void;
}

export const AcademicsView: React.FC<AcademicsViewProps> = ({ onSelectTab }) => {
  const [accreditationMode, setAccreditationMode] = useState<'cbse' | 'cambridge'>('cbse');
  const [downloadingProspectus, setDownloadingProspectus] = useState(false);
  const [prospectusDownloaded, setProspectusDownloaded] = useState(false);

  const handleDownloadProspectus = () => {
    setDownloadingProspectus(true);
    setTimeout(() => {
      setDownloadingProspectus(false);
      setProspectusDownloaded(true);
      setTimeout(() => setProspectusDownloaded(false), 3000);
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Immersive Academic Editorial Canopy */}
      <section className="relative w-full -mt-[7.5rem] pt-[7.5rem] bg-primary-container text-on-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 75% 20%, rgba(254, 214, 91, 0.4) 0%, transparent 60%), radial-gradient(circle at 10% 80%, rgba(176, 241, 199, 0.3) 0%, transparent 55%)',
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs self-start px-space-md py-1.5 rounded-full bg-surface-container-highest/20 backdrop-blur-md border border-white/10">
                <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-semibold">
                  Rigorous Scholarship • Future Mastery
                </span>
              </div>
              <h1 className="font-display-lg text-display-lg text-on-primary max-w-3xl leading-tight">
                Academics of Distinction — Holistic Learning from Foundational Wonder to World-Class Senior Scholarship
              </h1>
              <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl leading-relaxed">
                Cultivating agile minds, scientific rigor, and ethical conscience. At Mount Carmel, classical humanist disciplines harmonize with next-generation artificial intelligence, setting gold standards across national and international qualifications.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-space-md bg-surface-container-highest/10 backdrop-blur-md p-space-lg rounded-xl border border-white/10">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-primary-container uppercase tracking-wider font-semibold">
                  Faculty-to-Scholar Ratio
                </span>
                <span className="material-symbols-outlined text-secondary-fixed text-[20px]">groups</span>
              </div>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-display-lg text-display-lg text-secondary-fixed leading-none">1:12</span>
                <span className="font-body-sm text-body-sm text-on-primary-container">
                  personalized collegiate mentorship
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                Every scholar is shepherded by credentialed subject chairs, nurturing bespoke inquiry, peer mentorship, and Ivy League readiness.
              </p>
            </div>
          </div>

          {/* Dual Accreditation Interactive Switcher Banner */}
          <div className="mt-14 p-space-md rounded-xl bg-surface-container-lowest text-on-surface shadow-xl flex flex-col lg:flex-row items-center justify-between gap-space-lg">
            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined text-[28px]">verified</span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                  Dual World-Class Frameworks
                </span>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">
                  Integrated CBSE Board & Cambridge International Pathways
                </h2>
              </div>
            </div>

            <div className="flex items-center p-1 bg-surface-container-low rounded-lg" role="tablist">
              <button
                className={`px-space-md py-2 rounded-md font-label-md text-label-md transition-all duration-200 flex items-center gap-space-xs cursor-pointer font-semibold ${
                  accreditationMode === 'cbse'
                    ? 'bg-primary-container text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
                onClick={() => setAccreditationMode('cbse')}
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">school</span>
                <span>CBSE Affiliation #2730164</span>
              </button>
              <button
                className={`px-space-md py-2 rounded-md font-label-md text-label-md transition-all duration-200 flex items-center gap-space-xs cursor-pointer font-semibold ${
                  accreditationMode === 'cambridge'
                    ? 'bg-primary-container text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
                onClick={() => setAccreditationMode('cambridge')}
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">public</span>
                <span>Cambridge Int. Centre IN482</span>
              </button>
            </div>

            <div className="hidden xl:flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm">
              <span className="inline-flex items-center gap-1 font-semibold">
                <span className="material-symbols-outlined text-[15px] text-on-tertiary-fixed-variant">check_circle</span>
                100% Board First Division
              </span>
              <span className="inline-flex items-center gap-1 font-semibold">
                <span className="material-symbols-outlined text-[15px] text-on-tertiary-fixed-variant">check_circle</span>
                Global IGCSE Laureates
              </span>
            </div>
          </div>

          {/* Accreditation Details Panel */}
          <div className="mt-space-md p-space-md rounded-lg bg-surface-container-low text-on-surface text-body-sm font-body-sm flex flex-col md:flex-row md:items-center justify-between gap-space-sm border border-surface-container-high/60">
            <span className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[18px] text-secondary">workspace_premium</span>
              <strong className="font-title-md text-on-surface">
                {accreditationMode === 'cbse'
                  ? 'CBSE Senior Secondary Continuum (Grades I-XII)'
                  : 'Cambridge International Assessment (IGCSE & AS/A-Levels)'}
              </strong>
              <span className="text-on-surface-variant ml-2">
                {accreditationMode === 'cbse'
                  ? '• Focus on experiential NCERT pedagogies, AI foundational modules, and top percentiles in JEE/NEET/CUET.'
                  : '• International inquiry-driven curriculum with global subject recognition for matriculation into Ivy League, Russell Group, and Oxbridge.'}
              </span>
            </span>
            <a
              className="text-secondary hover:text-on-secondary-fixed font-label-md text-label-md inline-flex items-center gap-1 font-semibold cursor-pointer shrink-0"
              href="#prospectus"
            >
              Download Curriculum Outline <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4-Tier Comprehensive Academic Wings Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              Scholastic Continuum
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">
              Four Distinctive Wings of Mastery
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed">
            From sensory early play through to high-caliber research, our vertical academic structure matches child developmental psychology with progressive challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {/* Tier 1: Early Childhood */}
          <div className="group flex flex-col rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-surface-container-high/60">
            <div className="relative h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Early Childhood Wing"
                src={IMAGES.academicsEarly}
              />
              <div className="absolute top-3 left-3 bg-primary-container text-on-primary px-space-sm py-0.5 rounded font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                Ages 3 – 6
              </div>
            </div>
            <div className="p-space-lg flex flex-col flex-1">
              <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                Foundational Tier
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-1 mb-space-sm">
                Early Childhood Wing
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md flex-1 leading-relaxed">
                Montessori sensory ateliers and emergent literacy frameworks where wonder triggers lifelong love for reading and kinesthetic spatial exploration.
              </p>
              <div className="flex flex-col gap-2 pt-space-sm bg-surface-container-low p-space-md rounded-lg">
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">Key Cornerstones:</span>
                <ul className="font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-1">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Jolly Phonics & Story Weaving
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Reggio Emilia Outdoor Sand & Water Labs
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Expressive Clay & Rhythmic Movement
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tier 2: Primary Wing */}
          <div className="group flex flex-col rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-surface-container-high/60">
            <div className="relative h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Primary Wing"
                src={IMAGES.academicsPrimary}
              />
              <div className="absolute top-3 left-3 bg-primary-container text-on-primary px-space-sm py-0.5 rounded font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                Grades I – V
              </div>
            </div>
            <div className="p-space-lg flex flex-col flex-1">
              <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                Preparatory Tier
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-1 mb-space-sm">
                Primary Wing
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md flex-1 leading-relaxed">
                Nurturing computational reasoning and analytical literacy through Scratch blocks, living botanical greenhouses, and weekly theatrical elocution.
              </p>
              <div className="flex flex-col gap-2 pt-space-sm bg-surface-container-low p-space-md rounded-lg">
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">Key Cornerstones:</span>
                <ul className="font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-1">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Visual Scratch & Computational Logic
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Botanical Flora & Soil Ecology Ateliers
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Theatrical Elocution & LAMDA Speech
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tier 3: Middle School */}
          <div className="group flex flex-col rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-surface-container-high/60">
            <div className="relative h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Middle School Wing"
                src={IMAGES.academicsMiddle}
              />
              <div className="absolute top-3 left-3 bg-primary-container text-on-primary px-space-sm py-0.5 rounded font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                Grades VI – VIII
              </div>
            </div>
            <div className="p-space-lg flex flex-col flex-1">
              <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                Discovery Tier
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-1 mb-space-sm">
                Middle School Wing
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md flex-1 leading-relaxed">
                Bridging foundational wonder to specialized empirical sciences with robotics mechatronics, multilingual mastery, and structured scientific writing.
              </p>
              <div className="flex flex-col gap-2 pt-space-sm bg-surface-container-low p-space-md rounded-lg">
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">Key Cornerstones:</span>
                <ul className="font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-1">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Arduino Mechatronics & Circuitry
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> French DELF & Classical Sanskrit Tracks
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Inter-Collegiate Science Symposia
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tier 4: Senior Secondary Specializations */}
          <div className="group flex flex-col rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-surface-container-high/60">
            <div className="relative h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Senior Secondary"
                src={IMAGES.academicsSenior}
              />
              <div className="absolute top-3 left-3 bg-secondary-container text-on-secondary-container px-space-sm py-0.5 rounded font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                Grades IX – XII
              </div>
            </div>
            <div className="p-space-lg flex flex-col flex-1">
              <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                Scholastic Zenith
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-1 mb-space-sm">
                Senior Secondary
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md flex-1 leading-relaxed">
                Three rigorous streams engineered for Ivy League, Oxbridge, IIT-JEE, and national legal entrance excellence with integrated professional mentoring.
              </p>
              <div className="flex flex-col gap-2 pt-space-sm bg-surface-container-low p-space-md rounded-lg">
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">3 Specialization Streams:</span>
                <ul className="font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-1">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> <strong>Science:</strong> PCM/PCB + JEE/NEET Modules
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> <strong>Commerce:</strong> FinTech, Python & CA Prep
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> <strong>Humanities:</strong> Jurisprudence & CLAT Lab
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEM & AI Innovation Continuum (Regal Dark Showcase) */}
      <section className="w-full bg-primary-container text-on-primary py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center mb-16">
            <div className="lg:col-span-7 flex flex-col gap-space-sm">
              <span className="inline-flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                <span className="material-symbols-outlined text-[16px]">neurology</span> Next-Gen Pedagogy
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-primary">
                The STEM & Artificial Intelligence Continuum
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
                Mount Carmel seamlessly anchors artificial intelligence, high-performance computing, and additive fabrication into the daily learning cadence starting from Grade 5.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3 p-space-md bg-surface-container-highest/10 backdrop-blur-md rounded-xl border border-white/10">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-primary font-semibold">
                  NVIDIA Tensor Core Sandbox
                </span>
                <span className="font-label-sm text-label-sm text-on-tertiary-fixed bg-tertiary-fixed px-2.5 py-0.5 rounded-full font-bold">
                  Online Cluster
                </span>
              </div>
              {/* Progress Ring / Progress Stats */}
              <div className="flex items-center gap-space-md">
                <svg className="w-16 h-16 shrink-0 -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-on-primary-container/20"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  ></path>
                  <path
                    className="text-secondary-fixed"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray="88, 100"
                    strokeLinecap="round"
                    strokeWidth="3"
                  ></path>
                </svg>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md text-on-primary font-bold">
                    88% Scholar Python Fluency
                  </span>
                  <span className="font-body-sm text-body-sm text-on-primary-container">
                    Attained before matriculating to Senior Secondary
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Future-Ready Innovation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {/* Lab 1 */}
            <div className="p-space-lg rounded-xl bg-surface-container-highest/15 backdrop-blur-md flex flex-col justify-between border border-white/10 hover:bg-surface-container-highest/20 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest/30 flex items-center justify-center text-secondary-fixed mb-space-md">
                  <span className="material-symbols-outlined text-[26px]">memory</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-primary mb-space-xs">
                  GPU AI Sandboxes
                </h3>
                <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                  Dedicated cloud-connected GPU compute cluster enabling student teams to train computer vision models, NLP translation tasks, and ethical reinforcement agents.
                </p>
              </div>
              <div className="mt-space-lg pt-space-sm flex items-center gap-space-xs font-label-sm text-label-sm text-secondary-fixed font-semibold">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>PyTorch & HuggingFace Modules</span>
              </div>
            </div>

            {/* Lab 2 */}
            <div className="p-space-lg rounded-xl bg-surface-container-highest/15 backdrop-blur-md flex flex-col justify-between border border-white/10 hover:bg-surface-container-highest/20 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest/30 flex items-center justify-center text-secondary-fixed mb-space-md">
                  <span className="material-symbols-outlined text-[26px]">precision_manufacturing</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-primary mb-space-xs">
                  Maker 3D Atelier
                </h3>
                <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                  Industrial SLA & FDM 3D printers, laser cutters, and CAD parametric modeling workstations transforming abstract physics into tangible tactile prototypes.
                </p>
              </div>
              <div className="mt-space-lg pt-space-sm flex items-center gap-space-xs font-label-sm text-label-sm text-secondary-fixed font-semibold">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Fusion 360 & Rapid Prototyping</span>
              </div>
            </div>

            {/* Lab 3 */}
            <div className="p-space-lg rounded-xl bg-surface-container-highest/15 backdrop-blur-md flex flex-col justify-between border border-white/10 hover:bg-surface-container-highest/20 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest/30 flex items-center justify-center text-secondary-fixed mb-space-md">
                  <span className="material-symbols-outlined text-[26px]">interactive_space</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-primary mb-space-xs">
                  4K Smart Lecture Panels
                </h3>
                <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                  Every learning chamber is fitted with zero-latency 86" 4K interactive multi-touch displays with spatial audio and integrated cloud whiteboarding.
                </p>
              </div>
              <div className="mt-space-lg pt-space-sm flex items-center gap-space-xs font-label-sm text-label-sm text-secondary-fixed font-semibold">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Synchronous Hybrid Delivery</span>
              </div>
            </div>

            {/* Lab 4 */}
            <div className="p-space-lg rounded-xl bg-surface-container-highest/15 backdrop-blur-md flex flex-col justify-between border border-white/10 hover:bg-surface-container-highest/20 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest/30 flex items-center justify-center text-secondary-fixed mb-space-md">
                  <span className="material-symbols-outlined text-[26px]">terminal</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-primary mb-space-xs">
                  Progressive Python
                </h3>
                <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                  A standardized 7-year progression starting from Grade 5 syntax basics leading to NumPy, Pandas statistical modeling, and algorithmic problem-solving by Grade 11.
                </p>
              </div>
              <div className="mt-space-lg pt-space-sm flex items-center gap-space-xs font-label-sm text-label-sm text-secondary-fixed font-semibold">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Industry-Standard Certifications</span>
              </div>
            </div>
          </div>

          {/* Curriculum Roadmap Milestone Display */}
          <div className="mt-14 p-space-lg rounded-xl bg-surface-container-highest/10 backdrop-blur-md border border-white/10">
            <h3 className="font-title-md text-title-md text-on-primary mb-space-md flex items-center gap-space-xs font-semibold">
              <span className="material-symbols-outlined text-secondary-fixed">timeline</span>
              Progressive Python & Data Literacy Pathway
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md">
              <div className="p-space-md rounded-lg bg-surface-container-highest/20 flex flex-col gap-1 border border-white/5">
                <span className="font-label-sm text-label-sm text-secondary-fixed font-semibold">Grade V – VI</span>
                <strong className="font-headline-sm text-on-primary">Logic to Syntax</strong>
                <p className="font-body-sm text-body-sm text-on-primary-container">
                  Turtle graphics, control loops, and elementary variables.
                </p>
              </div>
              <div className="p-space-md rounded-lg bg-surface-container-highest/20 flex flex-col gap-1 border border-white/5">
                <span className="font-label-sm text-label-sm text-secondary-fixed font-semibold">Grade VII – VIII</span>
                <strong className="font-headline-sm text-on-primary">Data Structures</strong>
                <p className="font-body-sm text-body-sm text-on-primary-container">
                  Dictionaries, file input/output, and micro:bit IoT integration.
                </p>
              </div>
              <div className="p-space-md rounded-lg bg-surface-container-highest/20 flex flex-col gap-1 border border-white/5">
                <span className="font-label-sm text-label-sm text-secondary-fixed font-semibold">Grade IX – X</span>
                <strong className="font-headline-sm text-on-primary">Algorithms & OOP</strong>
                <p className="font-body-sm text-body-sm text-on-primary-container">
                  Object-oriented paradigms, binary search, and Pandas tables.
                </p>
              </div>
              <div className="p-space-md rounded-lg bg-surface-container-highest/20 flex flex-col gap-1 border border-white/5">
                <span className="font-label-sm text-label-sm text-secondary-fixed font-semibold">Grade XI – XII</span>
                <strong className="font-headline-sm text-on-primary">AI & Neural Nets</strong>
                <p className="font-body-sm text-body-sm text-on-primary-container">
                  TensorFlow regressions, SQL databases, and research capstone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Co-Curricular & Sports Academies Mosaic */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              The Renaissance Scholar
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">
              Athletic & Diplomatic Academies
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed">
            Intellectual rigor is balanced by athletic endurance and civic leadership across our championship facilities.
          </p>
        </div>

        {/* Asymmetric Sports & Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg">
          {/* Cricket Oval */}
          <div className="md:col-span-7 rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden flex flex-col border border-surface-container-high/60 group">
            <div className="relative h-72 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                alt="Sir Donald Turf Cricket Academy"
                src={IMAGES.cricket}
              />
              <div className="absolute bottom-4 left-4 bg-primary-container/90 backdrop-blur-md px-space-md py-1.5 rounded text-on-primary flex items-center gap-space-xs font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-secondary-fixed">sports_cricket</span>
                <span>BCCI-Certified Turf Oval</span>
              </div>
            </div>
            <div className="p-space-lg flex flex-col gap-space-xs">
              <h3 className="font-headline-md text-headline-md text-on-surface">
                The Sir Donald Turf Cricket Academy
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Full-size 70-meter boundary international pitch with 6 grass practice nets, bowling simulators, and certified NIS coaches training national inter-school championship teams.
              </p>
              <div className="flex items-center gap-space-lg pt-space-xs text-on-surface-variant font-label-sm text-label-sm border-t border-surface-container mt-2">
                <span>• Floodlit Practice Stems</span>
                <span>• Video Motion Biomechanics Lab</span>
              </div>
            </div>
          </div>

          {/* Model UN */}
          <div className="md:col-span-5 rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden flex flex-col border border-surface-container-high/60 group">
            <div className="relative h-72 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                alt="Carmel Euphoria Model UN"
                src={IMAGES.mun}
              />
              <div className="absolute bottom-4 left-4 bg-primary-container/90 backdrop-blur-md px-space-md py-1.5 rounded text-on-primary flex items-center gap-space-xs font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-secondary-fixed">flag</span>
                <span>MUN Secretariat</span>
              </div>
            </div>
            <div className="p-space-lg flex flex-col gap-space-xs">
              <h3 className="font-headline-md text-headline-md text-on-surface">
                ‘Carmel Euphoria’ Model UN
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Asia’s leading inter-collegiate youth diplomacy symposium bringing 800+ international delegates annually for multilateral resolution drafting.
              </p>
              <div className="flex items-center gap-space-lg pt-space-xs text-on-surface-variant font-label-sm text-label-sm border-t border-surface-container mt-2">
                <span>• UN-Affiliated Citations</span>
                <span>• Parliamentary Debate Guild</span>
              </div>
            </div>
          </div>

          {/* Natatorium */}
          <div className="md:col-span-5 rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden flex flex-col border border-surface-container-high/60 group">
            <div className="relative h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                alt="Olympic Aquatic Complex"
                src={IMAGES.natatorium}
              />
              <div className="absolute bottom-4 left-4 bg-primary-container/90 backdrop-blur-md px-space-md py-1.5 rounded text-on-primary flex items-center gap-space-xs font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-secondary-fixed">pool</span>
                <span>Olympic Aquatic Complex</span>
              </div>
            </div>
            <div className="p-space-lg flex flex-col gap-space-xs">
              <h3 className="font-headline-md text-headline-md text-on-surface">
                50-Meter Heated Natatorium
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Eight temperature-regulated lanes with sub-surface stroke analysis cameras, ozone filtration, and water-polo staging facilities.
              </p>
            </div>
          </div>

          {/* Championship AstroTurf Stadium */}
          <div className="md:col-span-7 rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden flex flex-col border border-surface-container-high/60 group">
            <div className="relative h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                alt="FIFA Quality Pro Pitch"
                src={IMAGES.astroturf}
              />
              <div className="absolute bottom-4 left-4 bg-primary-container/90 backdrop-blur-md px-space-md py-1.5 rounded text-on-primary flex items-center gap-space-xs font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-secondary-fixed">sports_soccer</span>
                <span>FIFA Quality Pro Pitch</span>
              </div>
            </div>
            <div className="p-space-lg flex flex-col gap-space-xs">
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Championship AstroTurf Stadium
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Full-size all-weather turf equipped with shock-pad underlay, shock-absorbing cork infill, and stadium floodlighting for premier league derbies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Leadership Showcase */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full bg-surface-container-low rounded-xl mb-20 border border-surface-container-high/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              World-Class Educators
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">
              Scholarly Faculty Leadership
            </h2>
          </div>
          <div className="inline-flex items-center gap-space-xs bg-surface-container-lowest px-space-md py-2 rounded-lg shadow-sm border border-surface-container-high">
            <span className="material-symbols-outlined text-secondary-fixed-dim text-[20px]">verified_user</span>
            <span className="font-label-sm text-label-sm text-on-surface font-semibold">
              Over 84% Faculty Hold Doctoral or Master’s Degrees
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Dean 1 */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between border border-surface-container-high/60">
            <div className="flex flex-col">
              <div className="flex items-center gap-space-md mb-space-md">
                <div className="w-16 h-16 rounded-full bg-surface-container-high overflow-hidden shrink-0 ring-2 ring-secondary/20">
                  <img
                    className="w-full h-full object-cover"
                    alt="Dr. Evelyn V. Thomas"
                    src={IMAGES.deanThomas}
                  />
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface leading-snug">
                    Dr. Evelyn V. Thomas
                  </h3>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    Dean of Academics & Senior Scholar
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                Ph.D. in Cognitive Epistemology (Univ. of Edinburgh). Former Fellow at the National Council of Educational Research; 28 peer-reviewed monographs in adolescent conceptual retention.
              </p>
            </div>
            <div className="pt-space-sm bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between border border-surface-container-high">
              <span className="font-label-sm text-label-sm text-on-surface font-semibold">Recent Monograph:</span>
              <span className="font-label-sm text-label-sm text-secondary truncate max-w-[180px]">
                Oxford Edu. Review ’24
              </span>
            </div>
          </div>

          {/* Dean 2 */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between border border-surface-container-high/60">
            <div className="flex flex-col">
              <div className="flex items-center gap-space-md mb-space-md">
                <div className="w-16 h-16 rounded-full bg-surface-container-high overflow-hidden shrink-0 ring-2 ring-secondary/20">
                  <img
                    className="w-full h-full object-cover"
                    alt="Prof. Arvind K. Swaminathan"
                    src={IMAGES.deanArvind}
                  />
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface leading-snug">
                    Prof. Arvind K. Swaminathan
                  </h3>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    Chair, STEM & Mechatronics Lab
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                M.Tech. IIT Delhi, Visiting Scholar at MIT Media Lab. Directs the school's high-altitude balloon atmospheric payload project and supervised 14 national Olympiad medalists.
              </p>
            </div>
            <div className="pt-space-sm bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between border border-surface-container-high">
              <span className="font-label-sm text-label-sm text-on-surface font-semibold">Recent Monograph:</span>
              <span className="font-label-sm text-label-sm text-secondary truncate max-w-[180px]">
                IEEE Education Jrnl ’25
              </span>
            </div>
          </div>

          {/* Dean 3 */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between border border-surface-container-high/60">
            <div className="flex flex-col">
              <div className="flex items-center gap-space-md mb-space-md">
                <div className="w-16 h-16 rounded-full bg-surface-container-high overflow-hidden shrink-0 ring-2 ring-secondary/20">
                  <img
                    className="w-full h-full object-cover"
                    alt="Dr. Sharmila Ray Choudhury"
                    src={IMAGES.deanSharmila}
                  />
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface leading-snug">
                    Dr. Sharmila Ray Choudhury
                  </h3>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    Head of Humanities & Global Advisory
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                D.Phil. Oxford University. Directs the Carmel Euphoria Model UN and counsels senior scholars on Ivy League, Rhodes Scholarship, and Oxbridge collegiate admissions.
              </p>
            </div>
            <div className="pt-space-sm bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between border border-surface-container-high">
              <span className="font-label-sm text-label-sm text-on-surface font-semibold">Recent Monograph:</span>
              <span className="font-label-sm text-label-sm text-secondary truncate max-w-[180px]">
                Cambridge Hist. Review ’25
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Download 2026 Academic Prospectus Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 w-full" id="prospectus">
        <div className="relative rounded-xl bg-primary-container text-on-primary p-space-xl overflow-hidden shadow-2xl border border-secondary/30">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary-container/10 pointer-events-none blur-3xl"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-8 flex flex-col gap-space-sm">
              <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-semibold">
                <span className="material-symbols-outlined text-[16px]">menu_book</span>
                <span>Comprehensive Academic Gazette</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-primary">
                Download the 2026-27 Academic & STEM Prospectus
              </h2>
              <p className="font-body-md text-body-md text-on-primary-container max-w-2xl leading-relaxed">
                Review detailed grade-by-grade syllabi, faculty qualifications, college matriculation history, laboratory safety protocols, and Cambridge vs. CBSE comparative matrices.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-md">
              <button
                className="w-full bg-secondary-container text-on-secondary-container px-space-lg py-3.5 rounded-lg font-label-lg text-label-lg hover:bg-secondary-fixed transition-colors flex items-center justify-center gap-space-xs shadow-md font-semibold cursor-pointer"
                onClick={handleDownloadProspectus}
                type="button"
                disabled={downloadingProspectus}
              >
                {downloadingProspectus ? (
                  <>
                    <span className="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>
                    <span>Preparing Secure Download...</span>
                  </>
                ) : prospectusDownloaded ? (
                  <>
                    <span className="material-symbols-outlined text-[20px]">check</span>
                    <span>Prospectus Downloaded (PDF)</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[20px]">download</span>
                    <span>Download Prospectus (PDF • 14 MB)</span>
                  </>
                )}
              </button>
              <button
                className="w-full bg-surface-container-highest/20 text-on-primary hover:bg-surface-container-highest/30 px-space-lg py-3 rounded-lg font-label-lg text-label-lg text-center transition-colors font-semibold cursor-pointer"
                onClick={() => onSelectTab('admissions')}
                type="button"
              >
                Initiate Online Admission
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
