import React, { useState } from 'react';
import { IMAGES } from '../data/schoolData';

interface PortalLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortalLoginModal: React.FC<PortalLoginModalProps> = ({ isOpen, onClose }) => {
  const [role, setRole] = useState<'parent' | 'student' | 'faculty'>('parent');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setLoggedIn(true);
      setTimeout(() => {
        setLoggedIn(false);
        onClose();
      }, 2000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-container/85 backdrop-blur-md p-4 animate-in fade-in">
      <div className="bg-surface-container-lowest max-w-md w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-surface-container-highest">
        {/* Header */}
        <div className="p-6 bg-primary-container text-on-primary relative">
          <div className="flex items-center gap-3">
            <img src={IMAGES.logo} alt="Mount Carmel Emblem" className="h-8 w-auto object-contain brightness-0 invert" />
            <div className="flex flex-col">
              <h3 className="font-headline-sm text-headline-sm text-on-primary">
                Collegiate Portal
              </h3>
              <p className="font-label-sm text-label-sm text-secondary-fixed">
                Mount Carmel School Secure Gateway
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-inverse-on-surface hover:text-on-primary w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 flex flex-col gap-4">
          {loggedIn ? (
            <div className="p-6 text-center flex flex-col items-center justify-center gap-2">
              <div className="w-12 h-12 rounded-full bg-tertiary-container text-on-tertiary-fixed-variant flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">check_circle</span>
              </div>
              <h4 className="font-title-md text-title-md font-semibold text-on-surface">
                Welcome to Mount Carmel Portal
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Session established securely. Redirecting to your academic dashboard...
              </p>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              {/* Role Switcher */}
              <div className="grid grid-cols-3 gap-1 p-1 bg-surface-container-low rounded-lg">
                <button
                  type="button"
                  onClick={() => setRole('parent')}
                  className={`py-1.5 text-xs font-semibold rounded transition-colors ${
                    role === 'parent'
                      ? 'bg-surface-container-lowest text-on-surface shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  Parent
                </button>
                <button
                  type="button"
                  onClick={() => setRole('student')}
                  className={`py-1.5 text-xs font-semibold rounded transition-colors ${
                    role === 'student'
                      ? 'bg-surface-container-lowest text-on-surface shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  Scholar
                </button>
                <button
                  type="button"
                  onClick={() => setRole('faculty')}
                  className={`py-1.5 text-xs font-semibold rounded transition-colors ${
                    role === 'faculty'
                      ? 'bg-surface-container-lowest text-on-surface shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  Faculty
                </button>
              </div>

              {/* ID / Username */}
              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                  {role === 'parent'
                    ? 'Registered Mobile / Parent ID'
                    : role === 'student'
                    ? 'Student Roll / Admission ID'
                    : 'Faculty Email / MCS Code'}
                </label>
                <input
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder={role === 'parent' ? 'e.g. 98110XXXXX or PAR-2024' : 'e.g. MCS-DEL-10492'}
                  className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/30 transition-all border border-transparent focus:border-outline-variant"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                    Security Passcode
                  </label>
                  <a href="#reset" onClick={(e) => { e.preventDefault(); alert('Password reset link dispatched to your registered SMS/email.'); }} className="text-xs text-secondary hover:underline">
                    Forgot?
                  </a>
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="px-3.5 py-2.5 rounded-lg bg-surface-container-low text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/30 transition-all border border-transparent focus:border-outline-variant"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-primary-container text-on-primary rounded-lg font-label-lg text-label-lg font-semibold hover:bg-black transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                    <span>Authenticating...</span>
                  </span>
                ) : (
                  <>
                    <span>Enter {role === 'parent' ? 'Parent Portal' : role === 'student' ? 'Scholar Dossier' : 'Faculty Console'}</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </>
                )}
              </button>

              <div className="pt-2 border-t border-surface-container text-center text-xs text-on-surface-variant flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-on-tertiary-fixed-variant">lock</span>
                <span>Protected by 2FA & 256-Bit SSL Institutional Encryption</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
