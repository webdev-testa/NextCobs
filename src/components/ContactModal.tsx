"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Check, Mail, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [projectType, setProjectType] = useState("Spatial Systems");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Focus trap & Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const timer = setTimeout(() => {
      nameInputRef.current?.focus();
    }, 100);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  const validateEmail = (val: string) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    if (!val) {
      setEmailError("Work email is required");
      return false;
    }
    if (!isValid) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    if (!validateEmail(email)) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");
        setEmailError("");
        onClose();
      }, 2200);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Surface */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-[28px] bg-[#141414] border border-[#262626] shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-white p-6 sm:p-8 z-10 no-scrollbar"
        >
          {/* Close button with high-contrast visible focus */}
          <button
            onClick={onClose}
            aria-label="Close commission modal"
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#1c1c1c] border border-[#262626] flex items-center justify-center text-[#999999] hover:text-white hover:border-[#444] focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none transition-all"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-mono text-[#0099ff] mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>Commission Inquiries</span>
            </div>
            <h2
              id="contact-modal-title"
              className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] font-[var(--font-outfit)]"
            >
              Initiate Project Scope
            </h2>
            <p className="text-xs sm:text-sm text-[#999999] mt-1">
              Currently accepting selected commissions for Q3/Q4 2025.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#22c55e]/20 border border-[#22c55e] flex items-center justify-center text-[#22c55e]">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Proposal Dispatched</h3>
              <p className="text-xs text-[#999999] max-w-xs">
                Alex will review your architectural specifications within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Category Radio Group */}
              <div>
                <span id="discipline-label" className="block text-xs font-mono text-[#999999] mb-2">
                  Scope Discipline
                </span>
                <div
                  role="radiogroup"
                  aria-labelledby="discipline-label"
                  className="grid grid-cols-2 gap-2"
                >
                  {[
                    "Spatial Systems",
                    "Design Infrastructure",
                    "Creative Engineering",
                    "Advisory",
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      role="radio"
                      aria-checked={projectType === type}
                      onClick={() => setProjectType(type)}
                      className={cn(
                        "py-2 px-3 rounded-xl text-xs font-medium border text-left transition-all focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none",
                        projectType === type
                          ? "bg-[#1c1c1c] text-white border-[#0099ff] shadow-[0_0_12px_rgba(0,153,255,0.2)]"
                          : "bg-[#090909] text-[#999999] border-[#262626] hover:border-[#444]"
                      )}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Fields with strict htmlFor / id association */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono text-[#999999] mb-1.5"
                  >
                    Your Name <span className="text-[#0099ff]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    ref={nameInputRef}
                    type="text"
                    required
                    maxLength={100}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Elena Rostova"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090909] border border-[#262626] text-xs text-white placeholder-[#555] focus:border-[#0099ff] focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono text-[#999999] mb-1.5"
                  >
                    Work Email <span className="text-[#0099ff]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    maxLength={120}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) validateEmail(e.target.value);
                    }}
                    onBlur={() => validateEmail(email)}
                    placeholder="elena@company.com"
                    aria-invalid={!!emailError}
                    aria-describedby={emailError ? "email-error" : undefined}
                    className={cn(
                      "w-full px-3.5 py-2.5 rounded-xl bg-[#090909] border text-xs text-white placeholder-[#555] focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none transition-all",
                      emailError ? "border-[#ff5577]" : "border-[#262626] focus:border-[#0099ff]"
                    )}
                  />
                  {emailError && (
                    <div id="email-error" className="flex items-center gap-1 mt-1 text-[11px] text-[#ff5577]">
                      <AlertCircle className="w-3 h-3" />
                      <span>{emailError}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono text-[#999999] mb-1.5"
                >
                  Project Brief &amp; Architecture Details
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  maxLength={1000}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline the interface, performance goals, or design system requirements..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#090909] border border-[#262626] text-xs text-white placeholder-[#555] focus:border-[#0099ff] focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-full bg-white hover:bg-white/90 disabled:opacity-50 text-black text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-95 mt-4 focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Validating Proposal...</span>
                  </>
                ) : (
                  <>
                    <span>Transmit Specification</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
