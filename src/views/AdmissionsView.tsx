import React, { useState } from 'react';
import { NavigationTab, CandidateRegistration } from '../types';
import { IMAGES } from '../data/schoolData';

interface AdmissionsViewProps {
  onSelectTab: (tab: NavigationTab) => void;
  onOpenAICounselor: (query?: string) => void;
}

export const AdmissionsView: React.FC<AdmissionsViewProps> = ({ onSelectTab, onOpenAICounselor }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [downloadingFee, setDownloadingFee] = useState(false);
  const [feeDownloaded, setFeeDownloaded] = useState(false);

  const [formData, setFormData] = useState<CandidateRegistration>({
    parentName: '',
    mobile: '',
    email: '',
    studentName: '',
    dob: '',
    currentClass: '',
    targetGrade: '',
    curriculum: 'cbse',
    tourSlot: 'morning',
    talents: '',
    agreed: false,
  });

  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = `MCS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedId(newId);
  };

  const handleDownloadFee = () => {
    setDownloadingFee(true);
    setTimeout(() => {
      setDownloadingFee(false);
      setFeeDownloaded(true);
      setTimeout(() => setFeeDownloaded(false), 3000);
    }, 1000);
  };

  const faqs = [
    {
      q: 'What evaluation criteria are applied during the student diagnostic interaction?',
      a: 'For early foundational years (Nursery to Grade 1), the interaction is informal, observational, and play-centric—focusing on curiosity, motor milestones, and social receptivity. For Grades 2 and above, candidates undertake a streamlined diagnostic assessment covering foundational English, Mathematics, and Analytical Reasoning to determine appropriate stream placement and academic support requirements.',
    },
    {
      q: 'Can our child switch from CBSE to Cambridge International in middle school?',
      a: 'Yes. Mount Carmel provides a dual-track pathway. Students can transition seamlessly between CBSE and Cambridge curricula up to Grade 8, supervised by our Academic Advisory Committee to ensure conceptual alignment and bridge courses where required.',
    },
    {
      q: 'Are merit-based scholarships and sports bursaries available?',
      a: "Mount Carmel awards the prestigious Founder's Merit Scholarship (up to 75% tuition fee waiver) for students with outstanding performance in state/national Olympiads, Grade 10 Board examinations, and recognized National Sports Federations. Details can be requested at the time of Stage 3 interactions.",
    },
    {
      q: 'What safety and GPS surveillance systems protect student transit?',
      a: 'The school operates an air-conditioned fleet of 68 GPS-tracked school coaches. Every coach features onboard speed governors, dual CCTV cameras, RFID attendance tapping, and a female attendant alongside vetted drivers certified in basic life support.',
    },
    {
      q: 'What are the residential boarding facilities and pastoral care standards?',
      a: 'We offer termly and full-boarding accommodations for students from Grade 5 onwards. Housemasters supervise dedicated pastoral houses supported by in-house physicians, executive chefs, evening prep tutors, and pastoral counselors within secure premises.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Immersive Admissions Editorial Hero */}
      <section className="relative w-full -mt-[7.5rem] bg-primary-container text-on-primary overflow-hidden">
        {/* Background Photo with Dignified Editorial Scrim */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('${IMAGES.admissionsHero}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/85 to-primary-container/40"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-20 flex flex-col gap-space-lg">
          {/* Priority Notice Banner */}
          <div className="inline-flex items-center gap-space-sm bg-surface-container-lowest/10 backdrop-blur-md px-4 py-2 rounded-full w-fit shadow-sm border border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-secondary -ml-3.5"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
              Admissions Open 2026–27
            </span>
            <span className="text-on-primary-container font-body-sm text-body-sm">•</span>
            <span className="font-label-sm text-label-sm text-inverse-on-surface font-semibold tracking-wide">
              Priority Round Closes: November 15, 2025
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
            <div className="lg:col-span-8 flex flex-col gap-space-sm">
              <p className="font-label-lg text-label-lg tracking-widest text-secondary-fixed uppercase font-semibold">
                Gateway to Leadership • Cohort 2026–27
              </p>
              <h1 className="font-display-lg text-display-lg text-on-primary leading-tight font-serif">
                A Tradition of Intellectual Nobility & Moral Character
              </h1>
              <p className="font-body-lg text-body-lg text-inverse-on-surface max-w-2xl mt-2 leading-relaxed">
                Welcome to the Mount Carmel institutional enrollment portal. We seek young minds driven by curiosity, resilience, and ethical scholarship to join our legacy of over three decades of academic distinction.
              </p>
            </div>

            {/* Metric highlights */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl border border-white/10">
              <div className="flex items-center justify-between pb-space-xs border-b border-white/10">
                <span className="font-body-sm text-body-sm text-on-primary-container">Collegiate Student-Faculty Ratio</span>
                <span className="font-headline-sm text-headline-sm text-secondary-fixed font-bold">12 : 1</span>
              </div>
              <div className="flex items-center justify-between py-space-xs border-b border-white/10">
                <span className="font-body-sm text-body-sm text-on-primary-container">Median Class XII Board Score</span>
                <span className="font-headline-sm text-headline-sm text-on-primary font-bold">94.8%</span>
              </div>
              <div className="flex items-center justify-between pt-space-xs">
                <span className="font-body-sm text-body-sm text-on-primary-container">World University Ivy / Russell Placements</span>
                <span className="font-headline-sm text-headline-sm text-secondary-fixed font-bold">38%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Stage Interactive Journey Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 -mt-10 relative z-20 w-full">
        <div className="bg-surface-container-lowest shadow-xl rounded-xl p-space-lg border border-surface-container-high/60">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-space-lg">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                Step-by-Step Pathway
              </span>
              <h2 className="font-headline-md text-headline-md text-primary font-serif">
                Five-Stage Admissions Architecture
              </h2>
            </div>
            <div className="flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm font-semibold">
              <span className="material-symbols-outlined text-[18px] text-on-tertiary-fixed-variant">verified_user</span>
              <span>Verified CBSE & Cambridge Directives</span>
            </div>
          </div>

          {/* Five Steps Visual Workflow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-space-md relative">
            {/* Stage 1 */}
            <div className="flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-low transition-all duration-200 hover:bg-surface-container border border-surface-container-high/40">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-md text-label-md font-bold">
                  01
                </span>
                <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                  Active
                </span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mt-2 font-semibold">
                Registration & Prospectus
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Fill the encrypted student registry form, generate applicant ID, and download formal prospectus dossier.
              </p>
            </div>

            {/* Stage 2 */}
            <div className="flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-low transition-all duration-200 hover:bg-surface-container border border-surface-container-high/40">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">
                  02
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                  Digital
                </span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mt-2 font-semibold">
                Dossier Submission
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Upload verified transcripts, government ID, medical dossier, and academic references via applicant portal.
              </p>
            </div>

            {/* Stage 3 */}
            <div className="flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-low transition-all duration-200 hover:bg-surface-container border border-surface-container-high/40">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">
                  03
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                  Campus
                </span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mt-2 font-semibold">
                Assessment & Interface
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Diagnostic cognitive evaluation followed by mutual headmaster dialogue to ascertain student alignment.
              </p>
            </div>

            {/* Stage 4 */}
            <div className="flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-low transition-all duration-200 hover:bg-surface-container border border-surface-container-high/40">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">
                  04
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                  Official
                </span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mt-2 font-semibold">
                Offer of Admission
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Receipt of conditional collegiate seat, curriculum commitment deed, and statutory fee remittance.
              </p>
            </div>

            {/* Stage 5 */}
            <div className="flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-low transition-all duration-200 hover:bg-surface-container border border-surface-container-high/40">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md font-bold">
                  05
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                  Ceremony
                </span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mt-2 font-semibold">
                Induction Assembly
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Collegiate blazer investiture, residential house allocation, and orientation convocation with faculty deans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Two-Column Desktop Portal Workspace */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* LEFT COLUMN: Documentation, Age Eligibility, Key Dates, Tuition Matrix */}
          <div className="lg:col-span-7 flex flex-col gap-space-xl">
            {/* Document Verification Checklist */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col gap-space-md border border-surface-container-high/60">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary-container text-[28px]">folder_managed</span>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary font-serif">
                      Required Scanned Documents
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Checklist for verification prior to Stage 2 document submission
                    </p>
                  </div>
                </div>
                <span className="px-space-sm py-1 bg-surface-container text-on-surface-variant rounded-full font-label-sm text-label-sm font-semibold">
                  PDF/JPG &lt; 5MB
                </span>
              </div>

              <div className="flex flex-col gap-space-sm">
                {/* Item 1 */}
                <div className="flex items-center justify-between p-3.5 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-space-md">
                    <span className="material-symbols-outlined text-secondary text-[22px]">badge</span>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md text-on-surface font-medium">
                        Municipal Birth Certificate
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Attested original scan issued by competent registrar
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span> Mandatory
                  </span>
                </div>

                {/* Item 2 */}
                <div className="flex items-center justify-between p-3.5 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-space-md">
                    <span className="material-symbols-outlined text-secondary text-[22px]">swap_horiz</span>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md text-on-surface font-medium">
                        Official Transfer Certificate (TC)
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Countersigned by Regional Education Directorate (Grade 2+)
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[14px]">hourglass_top</span> For Grade 2+
                  </span>
                </div>

                {/* Item 3 */}
                <div className="flex items-center justify-between p-3.5 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-space-md">
                    <span className="material-symbols-outlined text-secondary text-[22px]">fingerprint</span>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md text-on-surface font-medium">
                        National Identity (Aadhaar / Passport)
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Both candidate and both biological/legal guardians
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span> Mandatory
                  </span>
                </div>

                {/* Item 4 */}
                <div className="flex items-center justify-between p-3.5 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-space-md">
                    <span className="material-symbols-outlined text-secondary text-[22px]">medical_services</span>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md text-on-surface font-medium">
                        Comprehensive Medical & Vaccine Dossier
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Blood group certificate, pediatric allergies, and vaccine history
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span> Mandatory
                  </span>
                </div>

                {/* Item 5 */}
                <div className="flex items-center justify-between p-3.5 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-space-md">
                    <span className="material-symbols-outlined text-secondary text-[22px]">portrait</span>
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md text-on-surface font-medium">
                        4 Recent Passport Photographs
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        White background, formal attire, matte finish specs
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span> Mandatory
                  </span>
                </div>
              </div>
            </div>

            {/* Standardized Age Benchmark & Eligibility Matrix */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col gap-space-md border border-surface-container-high/60">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                    Standardized Criteria
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary font-serif">
                    Age Benchmark & Academic Matrix (As of March 31, 2026)
                  </h3>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                  CBSE Circular Compliance
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-body-sm text-body-sm">
                  <thead className="bg-surface-container text-on-surface font-label-md text-label-md uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4 rounded-l-lg">Grade / Level</th>
                      <th className="py-3 px-4">Min. Age</th>
                      <th className="py-3 px-4">Max. Age</th>
                      <th className="py-3 px-4">Available Curricula</th>
                      <th className="py-3 px-4 rounded-r-lg">Intake Capacity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-0 text-on-surface">
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-4 font-semibold text-primary">Nursery / Foundation 1</td>
                      <td className="py-3 px-4">3 Years</td>
                      <td className="py-3 px-4">4 Years</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 bg-surface-container rounded font-label-sm text-label-sm text-on-surface-variant font-medium">
                          Early Years EYFS
                        </span>
                      </td>
                      <td className="py-3 px-4 font-semibold text-secondary">60 Seats</td>
                    </tr>
                    <tr className="bg-surface-container-low/40 hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-4 font-semibold text-primary">Kindergarten / Prep</td>
                      <td className="py-3 px-4">4 Years</td>
                      <td className="py-3 px-4">5 Years</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 bg-surface-container rounded font-label-sm text-label-sm text-on-surface-variant font-medium">
                          Integrated EYFS
                        </span>
                      </td>
                      <td className="py-3 px-4 font-semibold text-secondary">75 Seats</td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-4 font-semibold text-primary">Grade 1</td>
                      <td className="py-3 px-4">6 Years</td>
                      <td className="py-3 px-4">7 Years</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 bg-surface-container rounded font-label-sm text-label-sm text-on-surface-variant font-medium">
                          CBSE • Cambridge Primary
                        </span>
                      </td>
                      <td className="py-3 px-4 font-semibold text-secondary">90 Seats</td>
                    </tr>
                    <tr className="bg-surface-container-low/40 hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-4 font-semibold text-primary">Grades 2 to 5</td>
                      <td className="py-3 px-4">7 - 10 Years</td>
                      <td className="py-3 px-4">8 - 11 Years</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 bg-surface-container rounded font-label-sm text-label-sm text-on-surface-variant font-medium">
                          CBSE • Cambridge Primary
                        </span>
                      </td>
                      <td className="py-3 px-4 font-medium text-on-surface-variant">Subject to TC vacancy</td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-4 font-semibold text-primary">Grades 6 to 8 (Middle)</td>
                      <td className="py-3 px-4">11 - 13 Years</td>
                      <td className="py-3 px-4">12 - 14 Years</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 bg-surface-container rounded font-label-sm text-label-sm text-on-surface-variant font-medium">
                          CBSE • Cambridge Lower Sec.
                        </span>
                      </td>
                      <td className="py-3 px-4 font-medium text-on-surface-variant">Merit Assessment</td>
                    </tr>
                    <tr className="bg-surface-container-low/40 hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-4 font-semibold text-primary">Grades 9 & 10 (Secondary)</td>
                      <td className="py-3 px-4">14 - 15 Years</td>
                      <td className="py-3 px-4">15 - 16 Years</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 bg-surface-container rounded font-label-sm text-label-sm text-on-surface-variant font-medium">
                          CBSE AISSE • IGCSE
                        </span>
                      </td>
                      <td className="py-3 px-4 font-medium text-on-surface-variant">Competitive Exam</td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-4 font-semibold text-primary">Grade 11 (Senior Sec.)</td>
                      <td className="py-3 px-4">15 - 16 Years</td>
                      <td className="py-3 px-4">17 Years</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 bg-surface-container rounded font-label-sm text-label-sm text-on-surface-variant font-medium">
                          Science, Comm, Humanities, A-Levels
                        </span>
                      </td>
                      <td className="py-3 px-4 font-semibold text-secondary">Selective Cut-off</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Important Calendar Dates Card */}
            <div className="bg-primary-container text-on-primary p-space-lg rounded-xl shadow-lg flex flex-col gap-space-md relative overflow-hidden border border-secondary/30">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/20 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary-fixed text-[26px]">calendar_month</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-primary font-serif">
                    Important Admissions Milestones 2026–27
                  </h3>
                </div>
                <span className="px-3 py-1 bg-surface-container-lowest/10 text-secondary-fixed rounded-full font-label-sm text-label-sm font-semibold tracking-wider uppercase border border-secondary-fixed/30">
                  Official Gazette
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                <div className="bg-surface-container-lowest/5 p-space-md rounded-lg backdrop-blur-sm flex flex-col gap-1 border border-white/5">
                  <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-semibold">
                    Phase I: Priority Round
                  </span>
                  <span className="font-headline-md text-headline-md text-on-primary font-serif">15 Nov 2025</span>
                  <p className="font-body-sm text-body-sm text-on-primary-container">
                    Registration closing deadline for preferential seat allocation.
                  </p>
                </div>
                <div className="bg-surface-container-lowest/5 p-space-md rounded-lg backdrop-blur-sm flex flex-col gap-1 border border-white/5">
                  <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-semibold">
                    Phase II: Assessments
                  </span>
                  <span className="font-headline-md text-headline-md text-on-primary font-serif">28 Nov – 05 Dec</span>
                  <p className="font-body-sm text-body-sm text-on-primary-container">
                    Diagnostic scholastic assessment & family interactions.
                  </p>
                </div>
                <div className="bg-surface-container-lowest/5 p-space-md rounded-lg backdrop-blur-sm flex flex-col gap-1 border border-white/5">
                  <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-semibold">
                    Phase III: First Merit List
                  </span>
                  <span className="font-headline-md text-headline-md text-on-primary font-serif">16 Dec 2025</span>
                  <p className="font-body-sm text-body-sm text-on-primary-container">
                    Dispatch of formal offer letters and provisional enrollment ledger.
                  </p>
                </div>
              </div>
            </div>

            {/* Transparent Annual & Quarterly Fee Schedule Matrix */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col gap-space-md border border-surface-container-high/60">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                    Institutional Transparency
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary font-serif">
                    Annual & Quarterly Fee Schedule (2026–27)
                  </h3>
                </div>
                <button
                  onClick={handleDownloadFee}
                  className="inline-flex items-center gap-space-xs px-4 py-2 bg-surface-container hover:bg-surface-container-high rounded-lg text-primary font-label-md text-label-md transition-colors shadow-sm cursor-pointer font-semibold"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    {feeDownloaded ? 'check' : 'download'}
                  </span>
                  <span>{feeDownloaded ? 'Fee PDF Saved' : 'Download Fee Prospectus (PDF)'}</span>
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-body-sm text-body-sm">
                  <thead className="bg-surface-container text-on-surface font-label-md text-label-md uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4 rounded-l-lg">Wing / Division</th>
                      <th className="py-3 px-4">One-Time Admission</th>
                      <th className="py-3 px-4">Quarterly Tuition</th>
                      <th className="py-3 px-4">Annual Composite</th>
                      <th className="py-3 px-4 rounded-r-lg">Lab / STEM Levy</th>
                    </tr>
                  </thead>
                  <tbody className="text-on-surface">
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-4 font-semibold text-primary">Pre-Primary (Nursery - KG)</td>
                      <td className="py-3 px-4">₹ 45,000</td>
                      <td className="py-3 px-4">₹ 28,500</td>
                      <td className="py-3 px-4 font-semibold text-secondary">₹ 1,59,000</td>
                      <td className="py-3 px-4 text-on-surface-variant">Included</td>
                    </tr>
                    <tr className="bg-surface-container-low/40 hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-4 font-semibold text-primary">Primary Wing (Grades 1 - 5)</td>
                      <td className="py-3 px-4">₹ 55,000</td>
                      <td className="py-3 px-4">₹ 34,200</td>
                      <td className="py-3 px-4 font-semibold text-secondary">₹ 1,91,800</td>
                      <td className="py-3 px-4 text-on-surface-variant">₹ 6,000 / yr</td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-4 font-semibold text-primary">Middle Wing (Grades 6 - 8)</td>
                      <td className="py-3 px-4">₹ 60,000</td>
                      <td className="py-3 px-4">₹ 38,750</td>
                      <td className="py-3 px-4 font-semibold text-secondary">₹ 2,15,000</td>
                      <td className="py-3 px-4 text-on-surface-variant">₹ 8,500 / yr</td>
                    </tr>
                    <tr className="bg-surface-container-low/40 hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-4 font-semibold text-primary">Senior Secondary (CBSE 9 - 12)</td>
                      <td className="py-3 px-4">₹ 65,000</td>
                      <td className="py-3 px-4">₹ 44,500</td>
                      <td className="py-3 px-4 font-semibold text-secondary">₹ 2,43,000</td>
                      <td className="py-3 px-4 text-on-surface-variant">₹ 12,000 / yr</td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-4 font-semibold text-primary">Cambridge Track (IGCSE / A-Levels)</td>
                      <td className="py-3 px-4">₹ 85,000</td>
                      <td className="py-3 px-4">₹ 62,000</td>
                      <td className="py-3 px-4 font-semibold text-secondary">₹ 3,33,000</td>
                      <td className="py-3 px-4 text-on-surface-variant">₹ 18,500 / yr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center gap-2 p-3 bg-surface-container-low rounded-lg text-on-surface-variant font-body-sm text-body-sm border border-surface-container-high/40">
                <span className="material-symbols-outlined text-[18px] text-secondary">info</span>
                <span>
                  Fee includes smart library access, robotic lab modules, sports academies, and daily nutritious balanced collation. Sibling concessions of 10% apply on younger siblings.
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Desktop Application Form with Step Progress */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-xl flex flex-col gap-space-md border border-surface-container-high/60">
              {/* Registration Header & Step Progress Bar */}
              <div className="flex flex-col gap-space-xs pb-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                    Online Admissions Docket
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                    Step 1 of 3
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary font-serif">
                  Candidate Registration
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Initiate formal candidature for the 2026–27 cohort.
                </p>
                {/* Visual Progress Bar */}
                <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden mt-2">
                  <div className="bg-secondary h-full w-1/3 rounded-full transition-all duration-300"></div>
                </div>
              </div>

              {/* Submission Result / Confirmation */}
              {submittedId ? (
                <div className="p-space-md bg-tertiary-container rounded-lg text-on-tertiary-fixed-variant flex flex-col gap-2 border border-tertiary-fixed/30 animate-in fade-in">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[24px]">task_alt</span>
                    <span className="font-label-lg text-label-lg font-bold">
                      Registration Docket Created!
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm">
                    Your provisional application ID is{' '}
                    <strong className="text-on-tertiary-fixed font-mono">{submittedId}</strong>. A confirmation SMS and digital verification packet have been dispatched to your email address ({formData.email || 'your email'}).
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <button
                      onClick={() => alert(`Official Receipt for ${submittedId} prepared for print.`)}
                      className="px-3 py-1.5 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm rounded-lg font-semibold cursor-pointer"
                    >
                      Print Docket Receipt
                    </button>
                    <button
                      onClick={() => setSubmittedId(null)}
                      className="px-3 py-1.5 bg-white/10 text-on-tertiary-fixed-variant font-label-sm rounded-lg cursor-pointer"
                    >
                      Register Another Candidate
                    </button>
                  </div>
                </div>
              ) : (
                /* Application Form */
                <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
                  {/* Guardian Particulars */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-md text-label-md text-primary uppercase tracking-wider font-semibold">
                      1. Parent / Legal Guardian Information
                    </label>
                    <div className="flex flex-col gap-2">
                      <input
                        className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm border border-transparent focus:border-outline-variant"
                        placeholder="Full Legal Name of Parent / Guardian *"
                        required
                        type="text"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <input
                          className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm border border-transparent focus:border-outline-variant"
                          placeholder="+91 Mobile Number *"
                          required
                          type="tel"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        />
                        <input
                          className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm border border-transparent focus:border-outline-variant"
                          placeholder="Verified Email Address *"
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Student Particulars */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-md text-label-md text-primary uppercase tracking-wider font-semibold">
                      2. Student Profile
                    </label>
                    <input
                      className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm border border-transparent focus:border-outline-variant"
                      placeholder="Student's Full Legal Name *"
                      required
                      type="text"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">
                          Date of Birth *
                        </span>
                        <input
                          className="w-full px-space-sm py-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest shadow-sm border border-transparent focus:border-outline-variant"
                          required
                          type="date"
                          value={formData.dob}
                          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">
                          Current Class *
                        </span>
                        <select
                          className="w-full px-space-sm py-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest shadow-sm border border-transparent focus:border-outline-variant cursor-pointer"
                          required
                          value={formData.currentClass}
                          onChange={(e) => setFormData({ ...formData, currentClass: e.target.value })}
                        >
                          <option value="">Select</option>
                          <option value="none">Pre-School</option>
                          <option value="kg">Kindergarten</option>
                          <option value="1">Grade 1</option>
                          <option value="2">Grade 2</option>
                          <option value="3">Grade 3</option>
                          <option value="4">Grade 4</option>
                          <option value="5">Grade 5</option>
                          <option value="6">Grade 6</option>
                          <option value="7">Grade 7</option>
                          <option value="8">Grade 8</option>
                          <option value="9">Grade 9</option>
                          <option value="10">Grade 10</option>
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">
                          Target Grade *
                        </span>
                        <select
                          className="w-full px-space-sm py-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest shadow-sm border border-transparent focus:border-outline-variant cursor-pointer"
                          required
                          value={formData.targetGrade}
                          onChange={(e) => setFormData({ ...formData, targetGrade: e.target.value })}
                        >
                          <option value="">Select</option>
                          <option value="nursery">Nursery</option>
                          <option value="kg">Kindergarten</option>
                          <option value="1">Grade 1</option>
                          <option value="2">Grade 2</option>
                          <option value="3">Grade 3</option>
                          <option value="4">Grade 4</option>
                          <option value="5">Grade 5</option>
                          <option value="6">Grade 6</option>
                          <option value="7">Grade 7</option>
                          <option value="8">Grade 8</option>
                          <option value="9">Grade 9</option>
                          <option value="10">Grade 10</option>
                          <option value="11-sci">Grade 11 - Science</option>
                          <option value="11-comm">Grade 11 - Commerce</option>
                          <option value="11-hum">Grade 11 - Humanities</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Curriculum Stream Selection */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-md text-label-md text-primary uppercase tracking-wider font-semibold">
                      3. Curriculum Stream Preference
                    </label>
                    <div className="grid grid-cols-2 gap-space-sm">
                      <label
                        className={`flex flex-col p-3 rounded-lg cursor-pointer transition-colors border ${
                          formData.curriculum === 'cbse'
                            ? 'bg-secondary-container/20 border-secondary'
                            : 'bg-surface-container-low border-transparent hover:bg-surface-container'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-title-md text-title-md text-primary font-serif">CBSE National</span>
                          <input
                            checked={formData.curriculum === 'cbse'}
                            onChange={() => setFormData({ ...formData, curriculum: 'cbse' })}
                            className="accent-secondary"
                            name="curriculum"
                            type="radio"
                            value="cbse"
                          />
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Holistic national curriculum, NCERT aligned
                        </span>
                      </label>
                      <label
                        className={`flex flex-col p-3 rounded-lg cursor-pointer transition-colors border ${
                          formData.curriculum === 'cambridge'
                            ? 'bg-secondary-container/20 border-secondary'
                            : 'bg-surface-container-low border-transparent hover:bg-surface-container'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-title-md text-title-md text-primary font-serif">Cambridge Int.</span>
                          <input
                            checked={formData.curriculum === 'cambridge'}
                            onChange={() => setFormData({ ...formData, curriculum: 'cambridge' })}
                            className="accent-secondary"
                            name="curriculum"
                            type="radio"
                            value="cambridge"
                          />
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          IGCSE & Cambridge International Assessment
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Saturday Campus Tour Slot Preference */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-md text-label-md text-primary uppercase tracking-wider font-semibold">
                      4. Preferred Saturday Campus Tour Slot
                    </label>
                    <div className="grid grid-cols-2 gap-space-sm">
                      <label
                        className={`flex items-center gap-space-xs p-3 rounded-lg cursor-pointer transition-colors border ${
                          formData.tourSlot === 'morning'
                            ? 'bg-secondary-container/20 border-secondary'
                            : 'bg-surface-container-low border-transparent hover:bg-surface-container'
                        }`}
                      >
                        <input
                          checked={formData.tourSlot === 'morning'}
                          onChange={() => setFormData({ ...formData, tourSlot: 'morning' })}
                          className="accent-secondary"
                          name="tour_slot"
                          type="radio"
                          value="morning"
                        />
                        <div className="flex flex-col">
                          <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                            Morning Session
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            09:30 AM – 11:30 AM
                          </span>
                        </div>
                      </label>
                      <label
                        className={`flex items-center gap-space-xs p-3 rounded-lg cursor-pointer transition-colors border ${
                          formData.tourSlot === 'afternoon'
                            ? 'bg-secondary-container/20 border-secondary'
                            : 'bg-surface-container-low border-transparent hover:bg-surface-container'
                        }`}
                      >
                        <input
                          checked={formData.tourSlot === 'afternoon'}
                          onChange={() => setFormData({ ...formData, tourSlot: 'afternoon' })}
                          className="accent-secondary"
                          name="tour_slot"
                          type="radio"
                          value="afternoon"
                        />
                        <div className="flex flex-col">
                          <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                            Afternoon Session
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            02:30 PM – 04:30 PM
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Special Talents and Note */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-md text-label-md text-primary uppercase tracking-wider font-semibold">
                      5. Talents, Hobbies & Accommodations
                    </label>
                    <textarea
                      className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest shadow-sm border border-transparent focus:border-outline-variant"
                      placeholder="Mention exceptional aptitude in Robotics, Music, Sports (State/National), or any medical/learning support needed..."
                      rows={2}
                      value={formData.talents}
                      onChange={(e) => setFormData({ ...formData, talents: e.target.value })}
                    ></textarea>
                  </div>

                  {/* Confirmation & Submit */}
                  <div className="flex flex-col gap-space-sm pt-2">
                    <label className="flex items-start gap-space-xs cursor-pointer">
                      <input
                        className="accent-secondary mt-1"
                        required
                        type="checkbox"
                        checked={formData.agreed}
                        onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      />
                      <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                        I hereby declare that the particulars furnished are authentic, and I agree to abide by the statutory guidelines of Mount Carmel School.
                      </span>
                    </label>
                    <button
                      className="w-full py-3.5 bg-primary-container text-on-primary hover:bg-black rounded-lg font-title-md text-title-md font-semibold transition-all duration-200 shadow-md flex items-center justify-center gap-space-sm group cursor-pointer"
                      type="submit"
                    >
                      <span>Submit Admissions Registration</span>
                      <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </button>
                    {/* SSL Badge */}
                    <div className="flex items-center justify-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm pt-1">
                      <span className="material-symbols-outlined text-[16px] text-on-tertiary-fixed-variant">lock</span>
                      <span>256-Bit SSL Encrypted Collegiate Admissions Ledger</span>
                    </div>
                  </div>
                </form>
              )}

              {/* Direct Counselor Helpline callout */}
              <div className="mt-space-md p-space-md bg-secondary-container/30 rounded-xl flex items-center gap-space-md border border-secondary/20">
                <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">support_agent</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md text-primary font-semibold">
                    Admissions Advisory Desk
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Speak directly with an Admissions Officer:{' '}
                    <strong className="text-primary font-semibold">+91 (0) 11 2618 3920</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Admissions FAQ Accordion Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl w-full">
        <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md flex flex-col gap-space-lg border border-surface-container-high/60">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-sm">
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                Inquiries & Protocols
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-serif">
                Frequently Asked Questions
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed">
                Everything prospective families need to know about the Mount Carmel assessment standard, transport network, scholarship allotments, and boarding houses.
              </p>
            </div>
            <div className="flex items-center gap-space-sm">
              <button
                className="px-space-md py-2.5 rounded-lg bg-surface-container text-primary hover:bg-surface-container-high transition-colors font-label-md text-label-md font-semibold cursor-pointer"
                onClick={() => onSelectTab('contact')}
                type="button"
              >
                General Inquiries
              </button>
              <button
                className="px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary hover:bg-black transition-colors font-label-md text-label-md flex items-center gap-1 font-semibold cursor-pointer shadow-sm"
                onClick={() => onOpenAICounselor()}
                type="button"
              >
                <span className="material-symbols-outlined text-[16px] text-secondary-fixed">neurology</span>
                <span>Ask AI Admissions Counselor</span>
              </button>
            </div>
          </div>

          {/* FAQ Accordion Items */}
          <div className="flex flex-col gap-space-sm">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-lg bg-surface-container-low transition-all duration-200 border border-surface-container-high/40 overflow-hidden"
                >
                  <button
                    className="w-full p-space-md flex items-center justify-between text-left focus:outline-none cursor-pointer"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    type="button"
                  >
                    <span className="font-title-md text-title-md text-primary font-serif">
                      {faq.q}
                    </span>
                    <span
                      className={`material-symbols-outlined text-secondary transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-space-md pb-space-md text-on-surface-variant font-body-md text-body-md leading-relaxed border-t border-surface-container/60 pt-3 animate-in fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
