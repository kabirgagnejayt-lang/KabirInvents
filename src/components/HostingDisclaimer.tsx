"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HostingDisclaimer() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      const hidden = localStorage.getItem("hosting_disclaimer_hidden");
      if (hidden === "1") setVisible(false);
    } catch (e) {
      // ignore
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="bg-yellow-50 border-b border-yellow-200 text-yellow-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between text-sm">
          <p className="text-center w-full sm:w-auto">
            We have moved hosting from Firebase to Vercel for all our sites. Vercel is faster and cheaper to operate.
          </p>
          <div className="ml-4 flex-shrink-0">
            <button
              onClick={() => {
                setVisible(false);
                try {
                  localStorage.setItem("hosting_disclaimer_hidden", "1");
                } catch (e) {
                  // ignore
                }
              }}
              className="inline-flex items-center rounded-md bg-yellow-100 px-2.5 py-1 text-xs font-medium hover:bg-yellow-200"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
