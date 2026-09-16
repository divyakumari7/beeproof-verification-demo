import React, { useEffect, useState } from 'react';
import {
  X,
  FileText,
  Download,
  Languages,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { DEMO_BATCH } from '../data/demoBatch';

interface DownloadLanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
  batchId?: string;
  pdfUrlEnglish?: string;
  fileNameEnglish?: string;
  pdfUrlHindi?: string;
  fileNameHindi?: string;
}

export const DownloadLanguageModal: React.FC<DownloadLanguageModalProps> = ({
  isOpen,
  onClose,
  batchId = DEMO_BATCH.batchId,
  pdfUrlEnglish = DEMO_BATCH.labSection.reportPdfPath,
  fileNameEnglish = DEMO_BATCH.labSection.reportFileName,
  pdfUrlHindi = DEMO_BATCH.labSection.reportPdfPathHindi,
  fileNameHindi = DEMO_BATCH.labSection.reportFileNameHindi,
}) => {
  const [downloadingLang, setDownloadingLang] = useState<'en' | 'hi' | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownload = (lang: 'en' | 'hi', url: string, filename: string) => {
    setDownloadingLang(lang);

    // Create programmatic anchor to trigger browser download
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset indicator after short delay and close modal
    setTimeout(() => {
      setDownloadingLang(null);
      onClose();
    }, 900);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all animate-in zoom-in-95 duration-200 z-10">
        {/* Top Header Strip */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white px-6 py-5 relative">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                <Languages className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h2
                  id="modal-title"
                  className="text-base sm:text-lg font-bold text-white tracking-tight"
                >
                  Choose Report Language
                </h2>
                <p className="text-xs text-slate-300 font-medium mt-0.5">
                  रिपोर्ट डाउनलोड करने के लिए भाषा चुनें
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              id="btn-close-lang-modal"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close language selector modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Batch info badge */}
          <div className="mt-3.5 flex items-center gap-2 pt-3 border-t border-slate-700/60 text-xs text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Batch: <strong className="text-white font-mono">{batchId}</strong></span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-300 font-medium">NABL ISO/IEC 17025</span>
          </div>
        </div>

        {/* Modal Body: Language Options */}
        <div className="p-5 sm:p-6 space-y-3.5 bg-slate-50/50">
          <p className="text-xs text-slate-500 font-medium text-center mb-1">
            Select one of the formats below to start immediate download:
          </p>

          {/* Option 1: English Report */}
          <button
            onClick={() => handleDownload('en', pdfUrlEnglish, fileNameEnglish)}
            id="btn-download-english-pdf"
            disabled={downloadingLang !== null}
            className={`w-full group text-left p-4 sm:p-4.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
              downloadingLang === 'en'
                ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-400/30'
                : 'bg-white hover:bg-slate-50/80 border-slate-200 hover:border-slate-300 hover:shadow-md'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex flex-col items-center justify-center font-bold text-xs shrink-0 group-hover:scale-105 transition-transform">
                  <span className="text-amber-400 text-[10px] font-mono leading-none">EN</span>
                  <FileText className="w-4 h-4 text-white mt-0.5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      English (अंग्रेज़ी)
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      Standard
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    Official NABL Laboratory Quality Certificate
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {fileNameEnglish} • 542 KB
                  </p>
                </div>
              </div>

              {/* Action pill / state */}
              <div className="shrink-0 flex items-center">
                {downloadingLang === 'en' ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold animate-pulse">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Downloading...
                  </span>
                ) : (
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <Download className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
          </button>

          {/* Option 2: Hindi Report */}
          <button
            onClick={() => handleDownload('hi', pdfUrlHindi, fileNameHindi)}
            id="btn-download-hindi-pdf"
            disabled={downloadingLang !== null}
            className={`w-full group text-left p-4 sm:p-4.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
              downloadingLang === 'hi'
                ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-400/30'
                : 'bg-white hover:bg-slate-50/80 border-slate-200 hover:border-slate-300 hover:shadow-md'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 text-white flex flex-col items-center justify-center font-bold text-xs shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  <span className="text-amber-100 text-[10px] font-mono leading-none">HI</span>
                  <FileText className="w-4 h-4 text-white mt-0.5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      हिन्दी (Hindi)
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                      हिंदी अनुवाद
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    आधिकारिक प्रयोगशाला गुणवत्ता प्रमाणपत्र (Devanagari)
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {fileNameHindi} • 560 KB
                  </p>
                </div>
              </div>

              {/* Action pill / state */}
              <div className="shrink-0 flex items-center">
                {downloadingLang === 'hi' ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold animate-pulse">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    डाउनलोड हो रहा है...
                  </span>
                ) : (
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-800 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <Download className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
          </button>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <span>Direct PDF download</span>
          </span>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Cancel / रद्द करें
          </button>
        </div>
      </div>
    </div>
  );
};
