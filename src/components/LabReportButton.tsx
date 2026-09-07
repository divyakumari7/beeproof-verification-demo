import { FileText, Download } from 'lucide-react';
import { DEMO_BATCH } from '../data/demoBatch';

interface LabReportButtonProps {
  pdfUrl?: string;
  fileName?: string;
  className?: string;
}

export const LabReportButton: React.FC<LabReportButtonProps> = ({
  pdfUrl = DEMO_BATCH.labSection.reportPdfPath,
  fileName = DEMO_BATCH.labSection.reportFileName,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        download={fileName}
        id="btn-download-lab-report"
        className="group relative w-full flex items-center justify-between gap-3 px-5 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white font-semibold text-sm sm:text-base shadow-md shadow-slate-900/10 hover:shadow-lg hover:shadow-slate-900/20 hover:from-slate-850 hover:to-slate-950 active:scale-[0.99] transition-all duration-200 border border-slate-700/80 focus:outline-hidden focus:ring-2 focus:ring-verified-500 focus:ring-offset-2"
        aria-label="Download Official NABL Laboratory Quality Certificate PDF for Batch BP-2026-SUN-001"
      >
        {/* Left Side Icon + Info */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-lg bg-verified-500/20 border border-verified-400/30 flex items-center justify-center text-verified-400 shrink-0 group-hover:scale-105 group-hover:bg-verified-500/30 transition-transform">
            <FileText className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="text-left min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white tracking-tight truncate">
                Download Lab Report PDF
              </span>
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-mono font-medium bg-emerald-950 text-emerald-300 border border-emerald-800">
                NABL
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-300 font-mono truncate">
              {fileName} • 542 KB
            </p>
          </div>
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-slate-300 font-medium hidden xs:inline">
            Open PDF
          </span>
          <div className="p-2 rounded-lg bg-white/10 group-hover:bg-verified-500 group-hover:text-white transition-colors">
            <Download className="w-4 h-4 text-slate-200 group-hover:text-white" />
          </div>
        </div>
      </a>
    </div>
  );
};
