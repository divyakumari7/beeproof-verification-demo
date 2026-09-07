import React from 'react';
import { Check } from 'lucide-react';

interface VerificationBadgeProps {
  size?: 'md' | 'lg' | 'compact';
  statusText?: string;
  batchId?: string;
}

export const VerificationBadge: React.FC<VerificationBadgeProps> = ({
  size = 'lg',
  statusText = 'Provenance Confirmed',
  batchId = 'BP-2026-SUN-001',
}) => {
  if (size === 'compact') {
    return (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 font-bold text-xs tracking-wide">
        <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
        <span>VERIFIED</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center">
      {/* Centered Squircle Green Icon */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/20 mb-3 sm:mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/90 flex items-center justify-center">
          <Check className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[3.5]" />
        </div>
      </div>

      {/* VERIFIED Pill with Icon */}
      <div className="inline-flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-md bg-emerald-500 flex items-center justify-center text-white font-bold shadow-xs">
          <Check className="w-4 h-4 text-white stroke-[3]" />
        </div>
        <span className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
          VERIFIED
        </span>
      </div>

      {/* Provenance Confirmed Subtitle */}
      <h2 className="text-base sm:text-lg font-semibold text-slate-700 mb-3">
        {statusText}
      </h2>

      {/* Batch ID Pill */}
      {batchId && (
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-300/80 bg-white text-xs sm:text-sm font-mono text-slate-700 font-medium shadow-2xs mb-2">
          <span>Batch ID: </span>
          <span className="font-bold text-slate-900 ml-1">{batchId}</span>
        </div>
      )}
    </div>
  );
};

