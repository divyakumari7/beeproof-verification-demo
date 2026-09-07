import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DEMO_BATCH } from '../data/demoBatch';
import { Header } from '../components/Header';
import { DetailCard } from '../components/DetailCard';
import { LabMetrics } from '../components/LabMetrics';
import { LabReportButton } from '../components/LabReportButton';
import { ProvenanceTimeline } from '../components/ProvenanceTimeline';
import { BlockchainRecord } from '../components/BlockchainRecord';
import {
  ArrowLeft,
  Check,
  MapPin,
  Flower2,
  Calendar,
  Award,
  Truck,
  Clock,
} from 'lucide-react';

export const FullDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const batch = DEMO_BATCH;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleBack = () => {
    navigate(`/verify/${batch.batchId}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-brand-500 selection:text-white">
      {/* Top Header */}
      <Header />

      {/* Sub-header Navigation with Back Button & Batch Status matching screenshot 2 */}
      <div className="max-w-5xl mx-auto w-full px-4 pt-4 pb-2">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          {/* Back Pill Button */}
          <button
            onClick={handleBack}
            id="btn-back-to-summary"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm shadow-2xs transition-colors cursor-pointer"
            aria-label="Back to Verification Summary"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>

          {/* Batch & Verified Tag */}
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm text-slate-600 font-medium">
              Batch: <span className="font-mono font-bold text-slate-900">{batch.batchId}</span>
            </span>

            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-[11px]">
              <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
              VERIFIED
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto w-full px-4 py-4 sm:py-6 space-y-4 flex-1">
        {/* Row 1: Origin & Floral Source Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1: ORIGIN APIARY & HARVEST DETAILS */}
          <DetailCard
            title={batch.origin.title}
            icon={<MapPin className="w-3.5 h-3.5 text-amber-600" />}
          >
            <div className="space-y-1">
              <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                {batch.origin.cluster}
              </p>
              <p className="text-xs text-slate-500 font-medium">
                {batch.origin.location}
              </p>
            </div>
          </DetailCard>

          {/* Card 2: FLORAL SOURCE & PROCESSING DETAILS */}
          <DetailCard
            title={batch.floral.title}
            icon={<Flower2 className="w-3.5 h-3.5 text-amber-600" />}
          >
            <div className="space-y-1">
              <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                {batch.floral.source}
              </p>
              <p className="text-xs text-slate-500 font-medium">
                Total Harvest Yield: {batch.floral.yield}
              </p>
            </div>
          </DetailCard>
        </div>

        {/* Row 2: Harvest Date & Quality Verdict */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 3: HARVEST DATE */}
          <DetailCard
            title={batch.harvest.title}
            icon={<Calendar className="w-3.5 h-3.5 text-amber-600" />}
          >
            <div className="space-y-1">
              <p className="text-base sm:text-lg font-black font-mono text-slate-900">
                {batch.harvest.date}
              </p>
              <p className="text-xs text-slate-500 font-medium">
                {batch.harvest.method}
              </p>
            </div>
          </DetailCard>

          {/* Card 4: QUALITY VERDICT */}
          <DetailCard
            title={batch.quality.title}
            icon={<Award className="w-3.5 h-3.5 text-amber-600" />}
          >
            <div className="space-y-1">
              <p className="text-sm sm:text-base font-bold text-emerald-700">
                {batch.quality.verdict}
              </p>
              <p className="text-xs text-slate-500 font-mono">
                {batch.quality.certificateNumber}
              </p>
            </div>
          </DetailCard>
        </div>

        {/* Card 5: DISTRIBUTION & RETAIL LOGISTICS DETAILS (Full Width) */}
        <DetailCard
          title={batch.distribution.title}
          icon={<Truck className="w-3.5 h-3.5 text-amber-600" />}
        >
          <div className="space-y-1">
            <p className="text-sm sm:text-base font-bold text-slate-900">
              {batch.distribution.status}
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              {batch.distribution.guidelines}
            </p>
          </div>
        </DetailCard>

        {/* Card 6: NABL LABORATORY SECTION & METRICS */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 sm:p-5 space-y-4">
          {/* Section Header matching screenshot 4 */}
          <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
            {batch.labSection.title}
          </h3>

          {/* 4 Metric Boxes */}
          <LabMetrics metrics={batch.labSection.metrics} />

          {/* STATIC LAB REPORT PDF BUTTON */}
          <div className="pt-2">
            <LabReportButton
              pdfUrl={batch.labSection.reportPdfPath}
              fileName={batch.labSection.reportFileName}
            />
          </div>
        </div>

        {/* Card 7: PROVENANCE CUSTODY TRAIL (5 STAGES) */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 sm:p-5 space-y-4">
          <div className="flex items-center gap-1.5 mb-1">
            <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
              {batch.lifecycle.title}
            </h3>
          </div>

          {/* Vertical 5-Stage Timeline */}
          <ProvenanceTimeline stages={batch.lifecycle.stages} />
        </div>

        {/* Card 8: BLOCKCHAIN DETAILS & INTEGRITY RECORD */}
        <BlockchainRecord data={batch.blockchain} />
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-slate-400 border-t border-slate-200/60 bg-white">
        <p>© 2026 BeeProof • Honey Traceability & Verification</p>
      </footer>
    </div>
  );
};

