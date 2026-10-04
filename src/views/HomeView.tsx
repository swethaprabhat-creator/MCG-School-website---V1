import React, { useState } from 'react';
import { NavigationTab } from '../types';
import { IMAGES } from '../data/schoolData';

interface HomeViewProps {
  onSelectTab: (tab: NavigationTab) => void;
  onOpenTourModal: () => void;
  onOpenAICounselor: (query?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onOpenTourModal,
  onOpenAICounselor,
}) => {
  const [activeCurriculumTab, setActiveCurriculumTab] = useState<number>(0);
  const [consultationSubmitted, setConsultationSubmitted] = useState(false);
  const [consultationData, setConsultationData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    date: '',
  });

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultationSubmitted(true);
    setTimeout(() => {
      setConsultationSubmitted(false);
      setConsultationData({ name: '', email: '', phone: '', grade: '', date: '' });
    }, 4500);
  };

  const curriculumTabs = [
    {
      title: 'Early Years (Nursery – UKG)',
      badge: 'Ages 3 – 5 • Play-Based Foundation',
      heading: 'Early Years Discovery: Wonder, Motor Skills & Phonics',
      desc: 'Reggio Emilia-inspired learning pods providing sensorial stimulation, guided language immersion, foundational numerical intuition, and empathetic social development within safe indoor play sanctuaries.',
      points: [
        'Oxford Jolly Phonics Method',
        'Sensory Garden Exploration',
        '1:8 Caretaker Ratio',
        'Daily Music & Movement',
      ],
      image: IMAGES.earlyYears,
    },
    {
      title: 'Primary School (Grades 1 – 5)',
      badge: 'Ages 6 – 10 • Conceptual Enquiry',
      heading: 'Primary Inquiry & Expression',
      desc: 'Fostering bilingual dexterity, Singapore-style conceptual mathematics, scientific enquiry via garden eco-labs, and stage elocution to cultivate bold self-expression.',
      points: [
        'Inquiry-Driven Thematic Units',
        'Bilingual Hindi & English Stature',
        'Cambridge Primary Checkpoint',
        'Youth Drama & Choral Guild',
      ],
      image: IMAGES.primary,
    },
    {
      title: 'Middle School (Grades 6 – 8)',
      badge: 'Ages 11 – 14 • Cross-Discipline Rigour',
      heading: 'Middle School Analytical Exploration',
      desc: 'Transitioning scholars to abstract deductive reasoning, lab experimentation across Physics, Chemistry & Biology, foreign language pathways (French/German/Sanskrit), and structured debate.',
      points: [
        'Dedicated Science Laboratories',
        'Foreign Language Proficiency',
        'Model UN Middle Delegations',
        'Inter-House Athletic Leagues',
      ],
      image: IMAGES.middle,
    },
    {
      title: 'Senior & College Prep (Grades 9 – 12)',
      badge: 'Ages 15 – 18 • University Preparation',
      heading: 'Senior School & College Entrance Modules',
      desc: 'Advanced Science, Commerce, and Humanities streams paired with integrated coaching tracks for JEE Advanced, NEET-UG, CUET, and CLAT, plus dedicated Ivy League and Oxbridge portfolio mentoring.',
      points: [
        'Integrated JEE / NEET Coaching',
        'CBSE Class XII 100% Distinction',
        'Global Admissions Counselor',
        'Research Capstone Dissertations',
      ],
      image: IMAGES.senior,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Full-width Hero Section bleeding under the translucent shell header */}
      <section className="relative -mt-[7.5rem] w-full min-h-[92vh] flex flex-col justify-between overflow-hidden">
        {/* Hero Background Image & Layered Academic Scrim */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-100"
          style={{ backgroundImage: `url('${IMAGES.heroBg}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/75 to-primary-container/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-primary-container/30 to-primary-container/90"></div>
        </div>

        {/* Main Hero Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-44 pb-20 flex flex-col items-start gap-space-lg">
          <div className="inline-flex items-center gap-space-sm px-space-md py-1.5 rounded-full bg-surface-container-lowest/10 backdrop-blur-md text-secondary-fixed border border-secondary-fixed/30 shadow-sm">
            <span
              className="material-symbols-outlined text-[16px] text-secondary-fixed"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <span className="font-label-sm text-label-sm tracking-widest uppercase font-semibold">
              Nurturing World Leaders • Est. 1996 • 28+ Years of Academic Heritage
            </span>
          </div>

          <div className="max-w-4xl flex flex-col gap-space-md">
            <h1 className="font-display-lg text-display-lg text-on-primary tracking-tight leading-[1.08]">
              Where Young Minds <span className="italic font-normal text-secondary-fixed">Grow</span>, Explore & Lead
            </h1>
            <p className="font-body-lg text-body-lg text-inverse-on-surface/90 max-w-2xl leading-relaxed">
              Empowering future pioneers with disciplined academic excellence, ethical moral clarity, forward-looking STEM innovation, and global collegiate character.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            <button
              onClick={() => onSelectTab('admissions')}
              className="inline-flex items-center gap-space-sm bg-secondary-container text-on-secondary-container font-label-lg text-label-lg px-7 py-4 rounded-lg shadow-md hover:bg-secondary-fixed hover:scale-[1.02] transition-all cursor-pointer font-semibold"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">edit_note</span>
              <span>Admissions Open 2026–27 (Apply Online)</span>
            </button>
            <button
              className="inline-flex items-center gap-space-sm bg-surface-container-lowest/15 backdrop-blur-md text-on-primary font-label-lg text-label-lg px-6 py-4 rounded-lg hover:bg-surface-container-lowest/25 transition-all cursor-pointer"
              onClick={onOpenTourModal}
              type="button"
            >
              <span className="w-7 h-7 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  play_arrow
                </span>
              </span>
              <span>Schedule Heritage Campus Tour</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Floating Ribbon */}
        <div className="relative z-10 w-full bg-surface-container-lowest/90 backdrop-blur-xl shadow-xl">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 grid grid-cols-2 md:grid-cols-4 gap-space-md items-center">
            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary shadow-sm">
                <span className="material-symbols-outlined text-[26px]">military_tech</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold leading-tight">
                  Ranked #1
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  K-12 Day & Boarding School
                </span>
              </div>
            </div>

            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-on-tertiary-fixed-variant shadow-sm">
                <span className="material-symbols-outlined text-[26px]">school</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold leading-tight">
                  100%
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Top University Placement
                </span>
              </div>
            </div>

            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary shadow-sm">
                <span className="material-symbols-outlined text-[26px]">group</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold leading-tight">
                  1:12 Ratio
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Student-Mentor Attention
                </span>
              </div>
            </div>

            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container shadow-sm">
                <span className="material-symbols-outlined text-[26px]">park</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold leading-tight">
                  42 Acres
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Lush Heritage Estate
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 'Why Choose Mount Carmel School' Section */}
      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-space-xl">
          {/* Section Header with Editorial Offset */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                The Carmel Standard
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                Eminence in Every Dimension of Scholarship
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed">
              A bespoke learning ecosystem engineered to nurture inquisitive intellects, disciplined leadership, and moral character.
            </p>
          </div>

          {/* 6-Card Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {/* Card 1 */}
            <div
              onClick={() => onSelectTab('academics')}
              className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between cursor-pointer border border-transparent hover:border-secondary/20"
            >
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[24px]">auto_stories</span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                    Dual Framework
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Dual CBSE & Cambridge Pathways
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Seamlessly blending rigorous national benchmarks with Cambridge Assessment International Education (CAIE) curriculum for boundless global mobility.
                  </p>
                </div>
              </div>
              <div className="mt-space-lg pt-space-md flex items-center justify-between text-secondary">
                <span className="font-label-md text-label-md font-semibold">Explore Accreditations</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div
              onClick={() => onSelectTab('academics')}
              className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between cursor-pointer border border-transparent hover:border-secondary/20"
            >
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-[24px]">psychology</span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                    Scholarly Faculty
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    85% Master's & Doctorate Faculty
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Mentored by seasoned scholars and certified master pedagogues with extensive pedagogical publication credits and university guidance records.
                  </p>
                </div>
              </div>
              <div className="mt-space-lg pt-space-md flex items-center justify-between text-secondary">
                <span className="font-label-md text-label-md font-semibold">Meet Mentors</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div
              onClick={() => onSelectTab('campus-facilities')}
              className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between cursor-pointer border border-transparent hover:border-secondary/20"
            >
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-on-tertiary-fixed-variant group-hover:bg-tertiary-container group-hover:text-tertiary-fixed transition-colors">
                  <span className="material-symbols-outlined text-[24px]">terminal</span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-tertiary-fixed-variant font-semibold">
                    Next-Gen Tech
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    STEM, AI & Robotics Discovery Labs
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    State-of-the-art incubation zones featuring Python neural networking kits, IoT micro-controllers, 3D additive synthesis, and spatial computing.
                  </p>
                </div>
              </div>
              <div className="mt-space-lg pt-space-md flex items-center justify-between text-secondary">
                <span className="font-label-md text-label-md font-semibold">View Lab Infrastructure</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Card 4 */}
            <div
              onClick={() => onSelectTab('campus-facilities')}
              className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between cursor-pointer border border-transparent hover:border-secondary/20"
            >
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[24px]">pool</span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                    Athletics
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Olympic Sports & Aquatic Complex
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    An all-weather 8-lane 50m heated pool, FIFA-standard synthetic turf, indoor air-conditioned squash courts, and certified NIS coaching staff.
                  </p>
                </div>
              </div>
              <div className="mt-space-lg pt-space-md flex items-center justify-between text-secondary">
                <span className="font-label-md text-label-md font-semibold">Athletic Programme</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Card 5 */}
            <div
              onClick={() => onSelectTab('student-life')}
              className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between cursor-pointer border border-transparent hover:border-secondary/20"
            >
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-[24px]">palette</span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                    Aesthetic Expression
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Arts & Symphony Conservatory
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Trinity Guildhall-accredited instrumental suites, ceramic studios, black-box theatrical auditorium, and traditional classical Indian dance ateliers.
                  </p>
                </div>
              </div>
              <div className="mt-space-lg pt-space-md flex items-center justify-between text-secondary">
                <span className="font-label-md text-label-md font-semibold">Arts Guild Showcase</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Card 6 */}
            <div
              onClick={() => onSelectTab('about-us')}
              className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between cursor-pointer border border-transparent hover:border-secondary/20"
            >
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-on-tertiary-fixed-variant group-hover:bg-tertiary-container group-hover:text-tertiary-fixed transition-colors">
                  <span className="material-symbols-outlined text-[24px]">balance</span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-tertiary-fixed-variant font-semibold">
                    Moral Foundation
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Ethical Character & Civic Leadership
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Structured Model UN delegations, inter-house governance, community service chapters, and values curriculum fostering compassionate global citizens.
                  </p>
                </div>
              </div>
              <div className="mt-space-lg pt-space-md flex items-center justify-between text-secondary">
                <span className="font-label-md text-label-md font-semibold">Our Ethos Charter</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Institutional Eminence & Leadership Spotlight */}
      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left: Key Metric Counters & Data Badges */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                Collegiate Milestone
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface">
                A Living Legacy of Scholastic Impact
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                From our founding stones in 1996 to standing among India’s foremost independent day-cum-boarding schools.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-space-md">
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm border border-surface-container-high/60">
                <span className="font-display-lg text-[42px] leading-tight text-primary-container font-bold">
                  2,800+
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Scholars Enrolled</p>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm border border-surface-container-high/60">
                <span className="font-display-lg text-[42px] leading-tight text-secondary font-bold">
                  180+
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Faculty Mentors</p>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm border border-surface-container-high/60">
                <span className="font-display-lg text-[42px] leading-tight text-on-tertiary-fixed-variant font-bold">
                  28+
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Years of Stature</p>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm border border-surface-container-high/60">
                <span className="font-display-lg text-[42px] leading-tight text-primary-container font-bold">
                  45+
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Active Guilds & Clubs</p>
              </div>
            </div>
            <div className="bg-surface-container p-space-md rounded-lg flex items-center justify-between border border-surface-container-highest">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-secondary text-[24px]">grade</span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  CBSE National Roll of Honor (Consecutive 10 Years)
                </span>
              </div>
              <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-bold">
                A+++
              </span>
            </div>
          </div>

          {/* Right: Principal's Editorial Spotlight */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-8 lg:p-12 rounded-xl shadow-md relative overflow-hidden border border-surface-container-high/50">
            <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-secondary-container/15 blur-2xl pointer-events-none"></div>
            <div className="flex flex-col gap-space-lg relative z-10">
              <div className="flex items-center gap-space-md">
                <img
                  className="w-20 h-20 rounded-full object-cover shadow-sm bg-surface-container ring-2 ring-secondary/30"
                  alt="Dr. Elizabeth Thomas, Principal of Mount Carmel School"
                  src={IMAGES.principal}
                />
                <div className="flex flex-col">
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Dr. Elizabeth Thomas
                  </h3>
                  <p className="font-label-sm text-label-sm text-secondary font-semibold">
                    Principal & Academic Director
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Ph.D. Education (Cambridge) • M.Sc. Delhi University
                  </p>
                </div>
              </div>
              <blockquote className="pl-space-lg border-l-4 border-secondary-container">
                <p className="font-headline-sm text-headline-sm italic text-on-surface leading-relaxed font-normal">
                  “True scholastic distinction is never solely about standardized scores; it is the courage to think fearlessly, the integrity to act uprightly, and the wisdom to serve our shared world.”
                </p>
              </blockquote>
              <div className="flex flex-wrap items-center justify-between pt-space-xs gap-space-sm text-on-surface-variant border-t border-surface-container pt-4">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[18px] text-secondary">verified_user</span>
                  <span>Former Member, National Curriculum Advisory Council</span>
                </div>
                <button
                  onClick={() => onSelectTab('about-us')}
                  className="font-label-md text-label-md text-secondary hover:text-on-secondary-fixed transition-colors flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <span>Read Full Director's Address</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Future-Ready Education: STEM, Robotics & AI Continuum */}
      <section className="w-full py-space-xl bg-primary-container text-on-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <div className="inline-flex items-center gap-space-xs text-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">memory</span>
                <span>Applied Innovation Horizon</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-primary tracking-tight">
                The Carmel STEM & AI Continuum
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-primary-container max-w-md">
              Bridging foundational disciplines with experiential computational discovery from grade 4 onwards.
            </p>
          </div>

          {/* 3-Column Innovation Cluster */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* STEM Column 1 */}
            <div className="bg-surface-container-lowest/5 backdrop-blur-sm p-space-lg rounded-xl flex flex-col justify-between hover:bg-surface-container-lowest/10 transition-colors border border-white/5">
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container-lowest/10 flex items-center justify-center text-secondary-fixed">
                  <span className="material-symbols-outlined text-[24px]">precision_manufacturing</span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-md text-headline-md text-on-primary">
                    Tinkering & Micro-Drone Labs
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                    Equipped with laser cutters, programmable micro-controllers, aerodynamics test tunnels, and quadcopter telemetric tuning benches.
                  </p>
                </div>
              </div>
              <div className="mt-space-lg pt-space-sm flex items-center gap-2 text-secondary-fixed font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Supported by Atal Tinkering Mission</span>
              </div>
            </div>

            {/* STEM Column 2 */}
            <div className="bg-surface-container-lowest/5 backdrop-blur-sm p-space-lg rounded-xl flex flex-col justify-between hover:bg-surface-container-lowest/10 transition-colors border border-white/5">
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container-lowest/10 flex items-center justify-center text-tertiary-fixed">
                  <span className="material-symbols-outlined text-[24px]">code</span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-md text-headline-md text-on-primary">
                    AI & Algorithmic Python
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                    Foundations in object-oriented programming, data structures, ethics of generative artificial intelligence, and algorithmic problem-solving.
                  </p>
                </div>
              </div>
              <div className="mt-space-lg pt-space-sm flex items-center gap-2 text-tertiary-fixed font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Kaggle Youth Challenge Cohorts</span>
              </div>
            </div>

            {/* STEM Column 3 */}
            <div className="bg-surface-container-lowest/5 backdrop-blur-sm p-space-lg rounded-xl flex flex-col justify-between hover:bg-surface-container-lowest/10 transition-colors border border-white/5">
              <div className="flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container-lowest/10 flex items-center justify-center text-secondary-fixed">
                  <span className="material-symbols-outlined text-[24px]">cast_for_education</span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-md text-headline-md text-on-primary">
                    Smart 4K Global Classrooms
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                    Interactive sensory displays with seamless telepresence links to partner academies in the UK, Singapore, and Canada for shared seminar sessions.
                  </p>
                </div>
              </div>
              <div className="mt-space-lg pt-space-sm flex items-center gap-2 text-secondary-fixed font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Fiber Gigabit Campus Mesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Curricular Architecture (4 Distinct Tiers) */}
      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-space-xl">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              Progressive Pedagogical Continuum
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface">
              Curricular Architecture Crafted for Mastery
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Every phase is carefully sequenced to transform curiosity into analytical rigour and lifelong purpose.
            </p>
          </div>

          {/* Tab Navigation Container */}
          <div className="flex flex-col gap-space-lg">
            <div className="flex flex-wrap justify-center gap-space-xs p-1.5 rounded-xl bg-surface-container-high max-w-4xl mx-auto shadow-inner">
              {curriculumTabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCurriculumTab(idx)}
                  className={`px-space-lg py-2.5 rounded-lg font-label-md text-label-md transition-all cursor-pointer font-semibold ${
                    activeCurriculumTab === idx
                      ? 'bg-surface-container-lowest text-on-surface shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                  type="button"
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Active Tab Pane */}
            {curriculumTabs.map((pane, idx) => {
              if (activeCurriculumTab !== idx) return null;
              return (
                <div
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center bg-surface-container-lowest p-8 lg:p-12 rounded-xl shadow-sm border border-surface-container-high/60 animate-in fade-in"
                >
                  <div className="lg:col-span-6 flex flex-col gap-space-md">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                      {pane.badge}
                    </span>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface">
                      {pane.heading}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {pane.desc}
                    </p>
                    <div className="grid grid-cols-2 gap-space-sm pt-space-xs font-label-sm text-label-sm text-on-surface">
                      {pane.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[18px]">check</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-2">
                      <button
                        onClick={() => onSelectTab('academics')}
                        className="inline-flex items-center gap-1.5 text-secondary hover:underline font-label-md text-label-md font-semibold cursor-pointer"
                      >
                        <span>Explore Comprehensive Syllabi & Faculty</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                  <div className="lg:col-span-6">
                    <img
                      className="w-full h-80 rounded-xl object-cover shadow-sm bg-surface-container"
                      alt={pane.heading}
                      src={pane.image}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Campus Grounds & State-of-the-Art Facilities */}
      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                42-Acre Heritage Sanctuary
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface">
                World-Class Facilities Designed for Growth
              </h2>
            </div>
            <button
              onClick={onOpenTourModal}
              className="font-label-lg text-label-lg text-secondary hover:text-on-secondary-fixed transition-colors flex items-center gap-1 cursor-pointer font-semibold"
            >
              <span>Take 360° Virtual Campus Walkthrough</span>
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </button>
          </div>

          {/* 3 Facility Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Library */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col border border-surface-container-high/60 group hover:shadow-md transition-shadow">
              <img
                className="w-full h-60 object-cover bg-surface-container group-hover:scale-103 transition-transform duration-500"
                alt="Central Heritage Library"
                src={IMAGES.library}
              />
              <div className="p-space-lg flex flex-col gap-space-xs flex-1 justify-between">
                <div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-label-sm text-label-sm mb-2 font-semibold">
                    Scholarly Archive
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Central Heritage Library
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                    Home to over 45,000 archival volumes, JSTOR institutional access, private quiet carrels, and rare historical manuscripts.
                  </p>
                </div>
                <div className="pt-space-md flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm border-t border-surface-container mt-4">
                  <span>Open: 7:30 AM – 7:00 PM</span>
                  <span className="font-semibold text-secondary">Digital RFID Catalog</span>
                </div>
              </div>
            </div>

            {/* Aquatic Centre */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col border border-surface-container-high/60 group hover:shadow-md transition-shadow">
              <img
                className="w-full h-60 object-cover bg-surface-container group-hover:scale-103 transition-transform duration-500"
                alt="Olympic Aquatic Centre"
                src={IMAGES.pool}
              />
              <div className="p-space-lg flex flex-col gap-space-xs flex-1 justify-between">
                <div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-container text-on-tertiary-fixed-variant font-label-sm text-label-sm mb-2 font-semibold">
                    FINA Standards
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Olympic Heated Aquatic Centre
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                    All-weather temperature-controlled 8-lane 50m pool with anti-wave lane markers, electronic touch-pads, and full lifeguard team.
                  </p>
                </div>
                <div className="pt-space-md flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm border-t border-surface-container mt-4">
                  <span>National Aquatics Meet Host</span>
                  <span className="font-semibold text-on-tertiary-fixed-variant">NIS Coaches</span>
                </div>
              </div>
            </div>

            {/* Transit Fleet */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col border border-surface-container-high/60 group hover:shadow-md transition-shadow">
              <img
                className="w-full h-60 object-cover bg-surface-container group-hover:scale-103 transition-transform duration-500"
                alt="Safe GPS-Monitored Transit Fleet"
                src={IMAGES.transit}
              />
              <div className="p-space-lg flex flex-col gap-space-xs flex-1 justify-between">
                <div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-primary-container font-label-sm text-label-sm mb-2 font-semibold">
                    360° Protection
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Safe GPS-Monitored Transit Fleet
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                    68 air-conditioned vehicles fitted with live dual-channel CCTV, speed governors, RFID student badge swipes, and dedicated female attendants.
                  </p>
                </div>
                <div className="pt-space-md flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm border-t border-surface-container mt-4">
                  <span>Live Parent Mobile Tracking</span>
                  <span className="font-semibold text-primary-container">65+ City Routes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Transparent Admissions Roadmap & Parent Consultation Form */}
      <section className="w-full py-space-xl bg-surface" id="admissions-roadmap">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-space-xl">
          {/* 4-Step Visual Progression */}
          <div className="flex flex-col gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                2026–27 Enrolment Cycle
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface">
                A Transparent Four-Step Admissions Journey
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mt-space-md">
              <div className="p-space-md bg-surface-container-lowest rounded-lg shadow-sm flex flex-col gap-space-xs border border-surface-container-high/60">
                <span className="font-display-lg text-[32px] text-secondary font-bold">01</span>
                <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                  Online Registration
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Submit candidate details and prior transcripts through our encrypted applicant portal.
                </p>
              </div>
              <div className="p-space-md bg-surface-container-lowest rounded-lg shadow-sm flex flex-col gap-space-xs border border-surface-container-high/60">
                <span className="font-display-lg text-[32px] text-secondary font-bold">02</span>
                <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                  Campus Immersion
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Personalised guided heritage walk with our academic counselors and student prefects.
                </p>
              </div>
              <div className="p-space-md bg-surface-container-lowest rounded-lg shadow-sm flex flex-col gap-space-xs border border-surface-container-high/60">
                <span className="font-display-lg text-[32px] text-secondary font-bold">03</span>
                <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                  Holistic Interaction
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Non-stress diagnostic reasoning session and family conversation with department heads.
                </p>
              </div>
              <div className="p-space-md bg-surface-container-lowest rounded-lg shadow-sm flex flex-col gap-space-xs border border-surface-container-high/60">
                <span className="font-display-lg text-[32px] text-secondary font-bold">04</span>
                <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                  Offer & Onboarding
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Formal admissions letter issued within 72 hours, welcoming the scholar to the Carmel fold.
                </p>
              </div>
            </div>
          </div>

          {/* Parent Consultation Intake Form & WhatsApp Help desk */}
          <div className="bg-surface-container-lowest p-8 lg:p-12 rounded-xl shadow-md grid grid-cols-1 lg:grid-cols-12 gap-space-xl border border-surface-container-high/60">
            <div className="lg:col-span-5 flex flex-col justify-between gap-space-lg">
              <div className="flex flex-col gap-space-sm">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                  Admissions Helpdesk
                </span>
                <h3 className="font-headline-lg text-headline-lg text-on-surface">
                  Schedule an Executive Consultation
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Our Admissions Registrar will contact you within one business day to coordinate your visit and answer curriculum choices.
                </p>
              </div>
              <div className="flex flex-col gap-space-md">
                <a
                  className="flex items-center gap-space-sm p-space-md rounded-lg bg-tertiary-container text-on-tertiary-fixed-variant hover:bg-tertiary-fixed-dim/30 transition-colors shadow-sm"
                  href="https://wa.me/911126183920"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[24px]">chat</span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md font-bold">
                      Instant Admissions WhatsApp Line
                    </span>
                    <span className="font-body-sm text-body-sm">
                      Available Mon–Sat, 8:30 AM – 4:30 PM
                    </span>
                  </div>
                </a>
                <div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-[20px] text-secondary">verified</span>
                  <span>All student records and submissions are strictly confidential.</span>
                </div>
              </div>
            </div>

            {consultationSubmitted ? (
              <div className="lg:col-span-7 p-8 bg-tertiary-container text-on-tertiary-fixed-variant rounded-xl flex flex-col items-center justify-center text-center gap-3 border border-tertiary-fixed/30 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-[32px]">task_alt</span>
                </div>
                <h4 className="font-headline-md text-headline-md font-serif text-on-tertiary-fixed">
                  Appointment Request Registered!
                </h4>
                <p className="font-body-md max-w-md">
                  Thank you for your interest in Mount Carmel School. The Admissions Secretariat has reserved your preferred consultation slot and sent confirmation to your phone and email.
                </p>
                <div className="text-xs bg-tertiary-fixed-dim/20 px-4 py-2 rounded-lg font-mono">
                  Reference Token: MCS-VISIT-{Math.floor(1000 + Math.random() * 9000)}
                </div>
              </div>
            ) : (
              <form onSubmit={handleConsultationSubmit} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    className="px-space-md py-3 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/30 transition-all border border-transparent focus:border-outline-variant"
                    placeholder="e.g. Vikramaditya Sharma"
                    required
                    type="text"
                    value={consultationData.name}
                    onChange={(e) => setConsultationData({ ...consultationData, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                    Contact Email *
                  </label>
                  <input
                    className="px-space-md py-3 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/30 transition-all border border-transparent focus:border-outline-variant"
                    placeholder="name@domain.com"
                    required
                    type="email"
                    value={consultationData.email}
                    onChange={(e) => setConsultationData({ ...consultationData, email: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                    Mobile Number *
                  </label>
                  <input
                    className="px-space-md py-3 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/30 transition-all border border-transparent focus:border-outline-variant"
                    placeholder="+91 98110 XXXXX"
                    required
                    type="tel"
                    value={consultationData.phone}
                    onChange={(e) => setConsultationData({ ...consultationData, phone: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                    Candidate's Applying Grade *
                  </label>
                  <select
                    className="px-space-md py-3 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/30 transition-all border border-transparent focus:border-outline-variant cursor-pointer"
                    required
                    value={consultationData.grade}
                    onChange={(e) => setConsultationData({ ...consultationData, grade: e.target.value })}
                  >
                    <option value="">Select Target Grade</option>
                    <option value="early">Nursery / LKG / UKG</option>
                    <option value="pri15">Grades 1 – 5 (Primary)</option>
                    <option value="mid68">Grades 6 – 8 (Middle)</option>
                    <option value="sec910">Grades 9 – 10 (Secondary CBSE/IGCSE)</option>
                    <option value="sen1112">Grades 11 – 12 (Senior College Prep)</option>
                  </select>
                </div>
                <div className="sm:col-span-2 flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                    Preferred Campus Tour Date
                  </label>
                  <input
                    className="px-space-md py-3 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/30 transition-all border border-transparent focus:border-outline-variant"
                    type="date"
                    value={consultationData.date}
                    onChange={(e) => setConsultationData({ ...consultationData, date: e.target.value })}
                  />
                </div>
                <div className="sm:col-span-2 pt-space-xs">
                  <button
                    className="w-full bg-primary-container text-on-primary font-label-lg text-label-lg py-3.5 rounded-lg hover:bg-black transition-colors shadow-sm flex items-center justify-center gap-space-sm font-semibold cursor-pointer"
                    type="submit"
                  >
                    <span>Confirm & Request Campus Appointment</span>
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 8. Voices of Carmel (Parent & Alumni Testimonials) */}
      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-space-xl">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              Voices of Carmel
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface">
              Endorsements from Our Collegiate Family
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between border border-surface-container-high/60">
              <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                “Mount Carmel provides that rare synthesis of old-school moral discipline and uncompromising modern science labs. Our daughter secured admission to Oxford University with foundational research completed in Carmel's high-school labs.”
              </p>
              <div className="mt-space-lg pt-space-md flex items-center gap-space-sm border-t border-surface-container">
                <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary font-bold text-sm">
                  AK
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface font-bold">
                    Ambassador Arvind Kumar
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Parent of Ananya (Class of 2024)
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between border border-surface-container-high/60">
              <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                “The teachers don't merely instruct; they mentor. The robotics coaches spent weekends helping us test autonomous rover code before our national championship. That spirit shaped my path to founding a tech enterprise.”
              </p>
              <div className="mt-space-lg pt-space-md flex items-center gap-space-sm border-t border-surface-container">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container font-bold text-sm">
                  RM
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface font-bold">
                    Rohan Mukherjee
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Alumnus (Batch 2017) • Forbes 30u30
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between border border-surface-container-high/60">
              <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                “The sports culture here is unmatched. The 50m heated pool allowed our son to train year-round without missing a single academic lecture. Carmel's balance of athletics and academics is without peer.”
              </p>
              <div className="mt-space-lg pt-space-md flex items-center gap-space-sm border-t border-surface-container">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim/40 flex items-center justify-center text-on-tertiary-fixed font-bold text-sm">
                  SM
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface font-bold">
                    Sunita Mathur
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Parent of National Swimmer Kabir (Grade 10)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
