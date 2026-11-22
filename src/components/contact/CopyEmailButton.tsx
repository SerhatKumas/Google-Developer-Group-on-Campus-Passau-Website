"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyEmailButtonProps {
  email: string;
}

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#202124] dark:text-[#F1F3F4] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
      title="Copy email to clipboard"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-[#34A853]" />
          <span className="text-[#34A853]">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-neutral-500" />
          <span>Copy Email</span>
        </>
      )}
    </button>
  );
}
