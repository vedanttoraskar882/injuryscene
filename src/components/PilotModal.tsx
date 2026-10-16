import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, AlertCircle, Sparkles, Building, Mail, Phone, User, ArrowRight } from 'lucide-react';
import { savePilotSubmission } from '../services/storage';
import type { PilotFormFields } from '../types';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerElementRef?: React.RefObject<HTMLElement | null>;
  initialNote?: string;
}

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  emailAddress?: string;
  organisationName?: string;
  general?: string;
}

export const PilotModal: React.FC<PilotModalProps> = ({
  isOpen,
  onClose,
  triggerElementRef,
}) => {
  const [formData, setFormData] = useState<PilotFormFields>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    organisationName: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Restore focus to trigger element when modal closes
  useEffect(() => {
    if (!isOpen) {
      if (triggerElementRef?.current) {
        triggerElementRef.current.focus();
      }
    } else {
      setSuccessMessage(null);
      setErrors({});
      const timer = setTimeout(() => {
        firstInputRef.current?.focus();
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [isOpen, triggerElementRef]);

  // Handle ESC key and focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const focusable = Array.from(focusableElements).filter(
          (el) => !el.hasAttribute('disabled') && el.offsetParent !== null
        );

        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{5,20}$/;
    return phoneRegex.test(phone.trim());
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email.trim());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined, general: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    const newErrors: FormErrors = {};

    if (!formData.fullName || !formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.organisationName || !formData.organisationName.trim()) {
      newErrors.organisationName = 'Organisation Name is required.';
    }

    if (!formData.emailAddress || !formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email Address is required.';
    } else if (!validateEmail(formData.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address.';
    }

    if (!formData.phoneNumber || !formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else if (!validatePhone(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setSuccessMessage(null);

    try {
      savePilotSubmission({
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        emailAddress: formData.emailAddress,
        organisationName: formData.organisationName,
      });

      // Clear input fields only after successful save
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        organisationName: '',
      });

      setSuccessMessage(
        'Your enquiry has been saved in this browser. This demo does not send submissions to the team.'
      );
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : 'Failed to save submission to browser storage. Your entered details have been kept so you can try again.';
      setErrors({ general: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#030712]/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-xl my-8 bg-gradient-to-b from-[#0F172A] to-[#0A101D] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100 transition-all"
      >
        {/* Subtle Ambient Radial Highlight */}
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus-visible:ring-2 focus-visible:ring-teal-400 focus:outline-none"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Modal Header */}
        <div className="pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Pilot &amp; Commercial Enquiries</span>
          </div>
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Request a Pilot
          </h2>
          <p id="modal-description" className="text-slate-300 text-sm mt-1.5 leading-relaxed">
            Register your interest in a pilot or discuss your organisation’s requirements.
          </p>
        </div>

        {/* General Error Alert */}
        {errors.general && (
          <div
            role="alert"
            aria-live="assertive"
            className="mt-4 p-4 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-200 text-xs leading-relaxed flex items-start gap-3"
          >
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" aria-hidden="true" />
            <span>{errors.general}</span>
          </div>
        )}

        {/* Success Message Banner */}
        {successMessage && (
          <div
            role="status"
            aria-live="polite"
            className="mt-4 p-4 rounded-xl bg-teal-500/15 border border-teal-500/40 text-teal-200 text-sm leading-relaxed flex items-start gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-teal-300 mb-0.5">Enquiry Recorded</p>
              <p className="text-xs text-teal-100">{successMessage}</p>
            </div>
          </div>
        )}

        {/* Form - Note: Input fields are completely clean with NO pre-entered data or confusing placeholders */}
        <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
            >
              Full Name <span className="text-teal-400" aria-hidden="true">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <User className="w-4 h-4" aria-hidden="true" />
              </div>
              <input
                ref={firstInputRef}
                type="text"
                id="fullName"
                name="fullName"
                autoComplete="name"
                required
                value={formData.fullName}
                onChange={handleChange}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                className={`w-full pl-10 pr-4 py-3 bg-slate-900/90 border rounded-xl text-sm text-slate-100 focus:outline-none transition-all ${
                  errors.fullName
                    ? 'border-rose-500 focus:border-rose-400 focus:ring-1 focus:ring-rose-500'
                    : 'border-slate-700/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400'
                }`}
              />
            </div>
            {errors.fullName && (
              <p id="fullName-error" className="mt-1 text-xs text-rose-400" role="alert">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Organisation Name */}
          <div>
            <label
              htmlFor="organisationName"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
            >
              Organisation Name <span className="text-teal-400" aria-hidden="true">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Building className="w-4 h-4" aria-hidden="true" />
              </div>
              <input
                type="text"
                id="organisationName"
                name="organisationName"
                autoComplete="organization"
                required
                value={formData.organisationName}
                onChange={handleChange}
                aria-invalid={!!errors.organisationName}
                aria-describedby={errors.organisationName ? 'organisationName-error' : undefined}
                className={`w-full pl-10 pr-4 py-3 bg-slate-900/90 border rounded-xl text-sm text-slate-100 focus:outline-none transition-all ${
                  errors.organisationName
                    ? 'border-rose-500 focus:border-rose-400 focus:ring-1 focus:ring-rose-500'
                    : 'border-slate-700/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400'
                }`}
              />
            </div>
            {errors.organisationName && (
              <p id="organisationName-error" className="mt-1 text-xs text-rose-400" role="alert">
                {errors.organisationName}
              </p>
            )}
          </div>

          {/* Email Address & Phone Number in 2 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Address */}
            <div>
              <label
                htmlFor="emailAddress"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
              >
                Email Address <span className="text-teal-400" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </div>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  autoComplete="email"
                  required
                  value={formData.emailAddress}
                  onChange={handleChange}
                  aria-invalid={!!errors.emailAddress}
                  aria-describedby={errors.emailAddress ? 'emailAddress-error' : undefined}
                  className={`w-full pl-10 pr-4 py-3 bg-slate-900/90 border rounded-xl text-sm text-slate-100 focus:outline-none transition-all ${
                    errors.emailAddress
                      ? 'border-rose-500 focus:border-rose-400 focus:ring-1 focus:ring-rose-500'
                      : 'border-slate-700/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400'
                  }`}
                />
              </div>
              {errors.emailAddress && (
                <p id="emailAddress-error" className="mt-1 text-xs text-rose-400" role="alert">
                  {errors.emailAddress}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
              >
                Phone Number <span className="text-teal-400" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                </div>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  autoComplete="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  aria-invalid={!!errors.phoneNumber}
                  aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
                  className={`w-full pl-10 pr-4 py-3 bg-slate-900/90 border rounded-xl text-sm text-slate-100 focus:outline-none transition-all ${
                    errors.phoneNumber
                      ? 'border-rose-500 focus:border-rose-400 focus:ring-1 focus:ring-rose-500'
                      : 'border-slate-700/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400'
                  }`}
                />
              </div>
              {errors.phoneNumber && (
                <p id="phoneNumber-error" className="mt-1 text-xs text-rose-400" role="alert">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>

          {/* Form Actions */}
          <div className="pt-4 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-xl border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800/80 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-[#070B14] bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 transition-all shadow-lg shadow-teal-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 ${
                isSubmitting ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:scale-[1.02]'
              }`}
            >
              <span>{isSubmitting ? 'Saving Enquiry...' : 'Submit Enquiry'}</span>
              {!isSubmitting && <ArrowRight className="w-4 h-4 text-[#070B14]" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
