"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  category: z.enum(["general", "team", "talk"]),
  subject: z.string().min(3, "Subject must be at least 3 characters long"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  studyProgram: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [selectedCategory, setSelectedCategory] = useState<"general" | "team" | "talk">("general");
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      category: "general",
    },
  });

  const handleCategoryChange = (cat: "general" | "team" | "talk") => {
    setSelectedCategory(cat);
    setValue("category", cat);
  };

  const onSubmit = async (data: ContactFormData) => {
    setStatus({ type: null, message: "" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resJson = await response.json();

      if (response.ok && resJson.success) {
        setStatus({
          type: "success",
          message: resJson.message || "Thank you! We received your message and will respond soon.",
        });
        reset();
      } else {
        setStatus({
          type: "error",
          message: resJson.error || "Submission failed. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error occurred. Please try again later.",
      });
    }
  };

  return (
    <div className="rounded-3xl bg-[#F8F9FA] dark:bg-[#1E1F23] border border-[#E8EAED] dark:border-[#2D2F34] p-6 sm:p-10 shadow-xs">
      <div className="max-w-xl mx-auto space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[#202124] dark:text-[#F1F3F4] font-display">
            Send us a Direct Message
          </h2>
          <p className="text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6] mt-1">
            Choose what you&apos;d like to talk about and our student leadership team will respond promptly.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="grid grid-cols-3 gap-2 p-1 rounded-2xl bg-neutral-200/60 dark:bg-neutral-800/80 border border-[#E8EAED] dark:border-[#2D2F34]">
          <button
            type="button"
            onClick={() => handleCategoryChange("general")}
            className={cn(
              "py-2 px-2 text-xs font-semibold rounded-xl transition-all text-center",
              selectedCategory === "general"
                ? "bg-white dark:bg-[#121316] text-[#4285F4] dark:text-blue-400 shadow-xs"
                : "text-[#5F6368] dark:text-[#9AA0A6] hover:text-[#202124] dark:hover:text-white"
            )}
          >
            General Inquiry
          </button>
          <button
            type="button"
            onClick={() => handleCategoryChange("team")}
            className={cn(
              "py-2 px-2 text-xs font-semibold rounded-xl transition-all text-center",
              selectedCategory === "team"
                ? "bg-white dark:bg-[#121316] text-[#34A853] dark:text-emerald-400 shadow-xs"
                : "text-[#5F6368] dark:text-[#9AA0A6] hover:text-[#202124] dark:hover:text-white"
            )}
          >
            Join a Core Team
          </button>
          <button
            type="button"
            onClick={() => handleCategoryChange("talk")}
            className={cn(
              "py-2 px-2 text-xs font-semibold rounded-xl transition-all text-center",
              selectedCategory === "talk"
                ? "bg-white dark:bg-[#121316] text-[#EA4335] dark:text-red-400 shadow-xs"
                : "text-[#5F6368] dark:text-[#9AA0A6] hover:text-[#202124] dark:hover:text-white"
            )}
          >
            Propose a Talk
          </button>
        </div>

        {status.type === "success" && (
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 shrink-0 text-[#34A853] mt-0.5" />
            <p>{status.message}</p>
          </div>
        )}

        {status.type === "error" && (
          <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 text-[#EA4335] mt-0.5" />
            <p>{status.message}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input type="hidden" {...register("category")} value={selectedCategory} />

          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#202124] dark:text-[#F1F3F4] mb-1">
                Your Name *
              </label>
              <input
                {...register("name")}
                placeholder="Full Name"
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-[#121316] border border-[#E8EAED] dark:border-[#2D2F34] focus:ring-2 focus:ring-[#4285F4] focus:outline-none"
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#202124] dark:text-[#F1F3F4] mb-1">
                Your Email *
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="e.g. name@uni-passau.de"
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-[#121316] border border-[#E8EAED] dark:border-[#2D2F34] focus:ring-2 focus:ring-[#4285F4] focus:outline-none"
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Subject & Optional Major */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#202124] dark:text-[#F1F3F4] mb-1">
                Subject *
              </label>
              <input
                {...register("subject")}
                placeholder="Topic or question"
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-[#121316] border border-[#E8EAED] dark:border-[#2D2F34] focus:ring-2 focus:ring-[#4285F4] focus:outline-none"
              />
              {errors.subject && (
                <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#202124] dark:text-[#F1F3F4] mb-1">
                Study Program / Faculty (Optional)
              </label>
              <input
                {...register("studyProgram")}
                placeholder="e.g. B.Sc. CS / LL.B. Law"
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-[#121316] border border-[#E8EAED] dark:border-[#2D2F34] focus:ring-2 focus:ring-[#4285F4] focus:outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-[#202124] dark:text-[#F1F3F4] mb-1">
              Your Message *
            </label>
            <textarea
              rows={4}
              {...register("message")}
              placeholder={
                selectedCategory === "team"
                  ? "Which core team interests you (Tech, Events, Marketing, Community/Law) and what skills would you like to develop?"
                  : selectedCategory === "talk"
                  ? "What technical topic or workshop format would you like to present?"
                  : "How can we help you?"
              }
              className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-[#121316] border border-[#E8EAED] dark:border-[#2D2F34] focus:ring-2 focus:ring-[#4285F4] focus:outline-none"
            />
            {errors.message && (
              <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#4285F4] hover:bg-[#1A73E8] disabled:opacity-70 shadow-md transition-all"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
