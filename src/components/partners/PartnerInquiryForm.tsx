"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const partnerInquirySchema = z.object({
  organizationName: z.string().min(2, "Organization name is required"),
  organizationType: z.enum(["company", "student_group", "university"]),
  contactName: z.string().min(2, "Contact person name is required"),
  email: z.string().email("Valid email address is required"),
  collaborationInterest: z.string().min(2, "Please select an interest"),
  message: z.string().min(10, "Please provide more details (minimum 10 characters)"),
});

type PartnerInquiryFormData = z.infer<typeof partnerInquirySchema>;

export function PartnerInquiryForm() {
  const [serverStatus, setServerStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PartnerInquiryFormData>({
    resolver: zodResolver(partnerInquirySchema),
    defaultValues: {
      organizationType: "company",
      collaborationInterest: "Co-Host a Workshop or Tech Talk",
    },
  });

  const onSubmit = async (data: PartnerInquiryFormData) => {
    setServerStatus({ type: null, message: "" });
    try {
      const response = await fetch("/api/partners/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resJson = await response.json();

      if (response.ok && resJson.success) {
        setServerStatus({
          type: "success",
          message: resJson.message || "Thank you! We received your inquiry and will reply soon.",
        });
        reset();
      } else {
        setServerStatus({
          type: "error",
          message: resJson.error || "Failed to submit inquiry. Please try again.",
        });
      }
    } catch {
      setServerStatus({
        type: "error",
        message: "Network error occurred. Please try again or reach out directly via email.",
      });
    }
  };

  return (
    <div className="rounded-3xl bg-[#F8F9FA] dark:bg-[#1E1F23] border border-[#E8EAED] dark:border-[#2D2F34] p-6 sm:p-10 shadow-sm">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-[#202124] dark:text-[#F1F3F4] font-display">
            Partner With GDG on Campus Passau
          </h3>
          <p className="text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6]">
            Connect your company, startup, or student initiative directly with our community.
          </p>
        </div>

        {serverStatus.type === "success" && (
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm flex items-start gap-3 animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 shrink-0 text-[#34A853] mt-0.5" />
            <p>{serverStatus.message}</p>
          </div>
        )}

        {serverStatus.type === "error" && (
          <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 text-sm flex items-start gap-3 animate-in fade-in">
            <AlertCircle className="w-5 h-5 shrink-0 text-[#EA4335] mt-0.5" />
            <p>{serverStatus.message}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Org Name & Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#202124] dark:text-[#F1F3F4] mb-1">
                Organization Name *
              </label>
              <input
                {...register("organizationName")}
                placeholder="e.g. Google Munich / Tech Club"
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-[#121316] border border-[#E8EAED] dark:border-[#2D2F34] focus:ring-2 focus:ring-[#4285F4] focus:outline-none"
              />
              {errors.organizationName && (
                <p className="text-xs text-red-500 mt-1">{errors.organizationName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#202124] dark:text-[#F1F3F4] mb-1">
                Organization Type *
              </label>
              <select
                {...register("organizationType")}
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-[#121316] border border-[#E8EAED] dark:border-[#2D2F34] focus:ring-2 focus:ring-[#4285F4] focus:outline-none"
              >
                <option value="company">Company / Industry Sponsor</option>
                <option value="student_group">Fellow Student Initiative</option>
                <option value="university">University Faculty / Department</option>
              </select>
            </div>
          </div>

          {/* Contact Person Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#202124] dark:text-[#F1F3F4] mb-1">
                Contact Person *
              </label>
              <input
                {...register("contactName")}
                placeholder="Full Name"
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-[#121316] border border-[#E8EAED] dark:border-[#2D2F34] focus:ring-2 focus:ring-[#4285F4] focus:outline-none"
              />
              {errors.contactName && (
                <p className="text-xs text-red-500 mt-1">{errors.contactName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#202124] dark:text-[#F1F3F4] mb-1">
                Official Email *
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="contact@company.com"
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-[#121316] border border-[#E8EAED] dark:border-[#2D2F34] focus:ring-2 focus:ring-[#4285F4] focus:outline-none"
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Collaboration Interest */}
          <div>
            <label className="block text-xs font-semibold text-[#202124] dark:text-[#F1F3F4] mb-1">
              Collaboration Interest *
            </label>
            <select
              {...register("collaborationInterest")}
              className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-[#121316] border border-[#E8EAED] dark:border-[#2D2F34] focus:ring-2 focus:ring-[#4285F4] focus:outline-none"
            >
              <option value="Co-Host a Workshop or Tech Talk">Co-Host a Workshop / Tech Talk</option>
              <option value="Sponsor Hackathon Challenge">Sponsor Civic Hackathon (Code for Passau)</option>
              <option value="Host Company Tech Trip">Host Company Tech Visit in Munich/Passau</option>
              <option value="Recruiting & CV Clinics">Recruiting & Career / Portfolio Clinics</option>
              <option value="Joint Student Event">Joint Student Event / Faculty Collaboration</option>
              <option value="Other">Other Collaboration</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-[#202124] dark:text-[#F1F3F4] mb-1">
              Details & Message *
            </label>
            <textarea
              rows={4}
              {...register("message")}
              placeholder="Tell us about your team, proposed topic, timeline, or how you'd like to collaborate..."
              className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-[#121316] border border-[#E8EAED] dark:border-[#2D2F34] focus:ring-2 focus:ring-[#4285F4] focus:outline-none"
            />
            {errors.message && (
              <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#4285F4] hover:bg-[#1A73E8] disabled:opacity-70 shadow-md transition-all"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Inquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Partnership Inquiry</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
