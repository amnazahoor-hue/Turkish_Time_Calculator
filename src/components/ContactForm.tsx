"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { hoverScale, resultFade } from "@/lib/animations";

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(data: {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required";
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = "Full name must be at least 2 characters";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required";
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Enter a valid email address";
  }

  if (!data.subject.trim()) {
    errors.subject = "Subject is required";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters";
  }

  return errors;
}

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (honeypot) return;

    const validationErrors = validateForm({ fullName, email, subject, message });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, subject, message, honeypot }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSubmitted(true);
      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setErrors({ message: "Could not send message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        {...resultFade}
        className="rounded-2xl border border-success bg-success-bg p-8 text-center"
        role="status"
      >
        <CheckCircle2 className="h-12 w-12 text-success mx-auto mb-4" />
        <h2 className="text-card-mobile md:text-card text-text-primary mb-3">
          Thank You!
        </h2>
        <p className="text-body-mobile md:text-body text-text-secondary">
          Your message was received. We will get back to you as soon as possible.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative space-y-6" aria-label="Contact form">
      <div className="absolute opacity-0 h-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="text-small font-medium text-text-primary">
            Full Name <span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={`input-field ${errors.fullName ? "border-error" : ""}`}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-small-mobile text-error" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-small font-medium text-text-primary">
            Email Address <span className="text-error">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`input-field ${errors.email ? "border-error" : ""}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-small-mobile text-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-small font-medium text-text-primary">
          Subject <span className="text-error">*</span>
        </label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={`input-field ${errors.subject ? "border-error" : ""}`}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="text-small-mobile text-error" role="alert">
            {errors.subject}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-small font-medium text-text-primary">
          Message <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className={`input-field resize-y min-h-[120px] ${errors.message ? "border-error" : ""}`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-small-mobile text-error" role="alert">
            {errors.message}
          </p>
        )}
        <p className="text-small-mobile text-text-secondary">Minimum 20 characters</p>
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        {...hoverScale}
        className="btn-primary w-full sm:w-auto"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </motion.button>
    </form>
  );
}
