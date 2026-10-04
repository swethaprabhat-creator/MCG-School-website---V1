import React, { useState } from 'react';
import { NavigationTab } from '../types';

interface ContactViewProps {
  onSelectTab: (tab: NavigationTab) => void;
  onOpenAICounselor: (query?: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onSelectTab, onOpenAICounselor }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Admissions Office',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', department: 'Admissions Office', message: '' });
    }, 4000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header Canopy */}
      <section className="relative w-full -mt-[7.5rem] pt-[7.5rem] bg-primary-container text-on-primary overflow-hidden pb-20">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 flex flex-col gap-space-md">
          <div className="inline-flex items-center gap-space-xs self-start px-space-md py-1.5 rounded-full bg-surface-container-highest/20 backdrop-blur-md border border-white/10 text-secondary-fixed text-label-sm font-semibold uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">call</span>
            <span>Admissions Secretariat & Administration</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-primary max-w-3xl leading-tight">
            Connect with Mount Carmel School
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl leading-relaxed">
            Our admissions counselors, academic registrars, and transport coordinators are here to assist your family with every inquiry.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Left: Contact Info Directory */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm border border-surface-container-high/60 flex flex-col gap-4">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Central Campus Secretariat
              </h3>

              <div className="flex items-start gap-3 text-body-md text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">location_on</span>
                <div>
                  <strong className="text-on-surface block font-semibold">Mount Carmel School Grounds</strong>
                  <span>Sector 22, Institutional Area, Dwarka, New Delhi 110077, India</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-body-md text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">call</span>
                <div>
                  <strong className="text-on-surface block font-semibold">Direct Telephone</strong>
                  <span>+91 (0) 11 2618 3920 / +91 (0) 11 2618 3921</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-body-md text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">mail</span>
                <div>
                  <strong className="text-on-surface block font-semibold">Official Correspondence</strong>
                  <span>admissions@mountcarmel.edu.in</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-body-md text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">schedule</span>
                <div>
                  <strong className="text-on-surface block font-semibold">Secretariat Hours</strong>
                  <span>Monday – Friday: 8:00 AM – 4:30 PM<br />Saturday: 8:30 AM – 1:30 PM (Campus Visits by Appointment)</span>
                </div>
              </div>
            </div>

            {/* Quick AI Counselor Promo */}
            <div className="bg-primary-container text-on-primary p-6 rounded-2xl shadow-md border border-secondary/30 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-secondary-fixed font-label-sm font-semibold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[18px]">neurology</span>
                <span>Immediate Digital Support</span>
              </div>
              <h4 className="font-title-md text-title-md text-on-primary font-serif">
                Have instant questions about age cutoffs or bus routes?
              </h4>
              <p className="font-body-sm text-on-primary-container">
                Our Carmel AI Academic Desk is active 24/7 with verified institutional answers and tour bookings.
              </p>
              <button
                onClick={() => onOpenAICounselor()}
                className="mt-1 bg-secondary-container text-on-secondary-container px-4 py-2.5 rounded-lg font-label-md font-semibold hover:bg-secondary-fixed transition-colors self-start cursor-pointer"
              >
                Launch Carmel AI Counselor
              </button>
            </div>
          </div>

          {/* Right: Message Dispatch Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-8 lg:p-10 rounded-2xl shadow-md border border-surface-container-high/60">
            <h3 className="font-headline-md text-headline-md text-on-surface font-serif mb-2">
              Send an Official Inquiry
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Please complete the docket below. A member of our administration will contact you within 24 hours.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-tertiary-container text-on-tertiary-fixed-variant flex flex-col items-center justify-center text-center gap-2 border border-tertiary-fixed/30 animate-in fade-in">
                <span className="material-symbols-outlined text-[36px]">task_alt</span>
                <h4 className="font-title-md font-bold text-on-tertiary-fixed">
                  Inquiry Dispatched Successfully
                </h4>
                <p className="font-body-sm max-w-sm">
                  Thank you. Your message has been routed to the {formData.department}. A confirmation copy was sent to your email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                      Your Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/30 transition-all border border-transparent focus:border-outline-variant"
                      placeholder="e.g. Dr. Ramesh Chander"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/30 transition-all border border-transparent focus:border-outline-variant"
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/30 transition-all border border-transparent focus:border-outline-variant"
                      placeholder="+91 98110 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                      Department / Wing
                    </label>
                    <select
                      className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/30 transition-all border border-transparent focus:border-outline-variant cursor-pointer"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    >
                      <option value="Admissions Office">Admissions Office (2026-27)</option>
                      <option value="Dean of Academics">Dean of Academics (CBSE & Cambridge)</option>
                      <option value="Hostel & Boarding Ward">Hostel & Boarding Ward</option>
                      <option value="Transport & Security">Transport & Security Administration</option>
                      <option value="Accounts & Fee Desk">Accounts & Fee Desk</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                    Inquiry Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/30 transition-all border border-transparent focus:border-outline-variant"
                    placeholder="Provide details of your inquiry, student age, prior school syllabus, or specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary-container text-on-primary rounded-lg font-label-lg font-semibold hover:bg-black transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  <span>Transmit Official Inquiry</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
