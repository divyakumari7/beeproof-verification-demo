import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-slate-200/80 sticky top-0 z-30">
      {/* Top Main Nav */}
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white shadow-sm font-bold text-base">
            🐝
          </div>
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 font-sans">
            BeeProof
          </span>
        </div>

        {/* Center links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-600">
          <span className="text-slate-800 hover:text-brand-600 transition-colors cursor-pointer">Platform</span>
          <span className="text-slate-800 hover:text-brand-600 transition-colors cursor-pointer">Traceability Chain</span>
          <span className="text-slate-800 hover:text-brand-600 transition-colors cursor-pointer">Cooperatives</span>
        </nav>

        {/* Right side Consumer Portal Badge */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-wider text-slate-400">
            PUBLIC CONSUMER VERIFICATION
          </span>
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>VERIFIED PORTAL</span>
          </div>
        </div>
      </div>
    </header>
  );
};

