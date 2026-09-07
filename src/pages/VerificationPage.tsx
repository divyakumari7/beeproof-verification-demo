import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DEMO_BATCH } from '../data/demoBatch';
import { Header } from '../components/Header';
import { VerificationBadge } from '../components/VerificationBadge';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const VerificationPage: React.FC = () => {
  const navigate = useNavigate();
  const currentBatch = DEMO_BATCH;

  const handleViewDetails = () => {
    navigate(`/verify/${currentBatch.batchId}/details`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-brand-500 selection:text-white">
      {/* Top Header */}
      <Header />

      {/* Sub Header Navigation Bar */}
      <div className="max-w-5xl mx-auto w-full px-4 pt-4 pb-2 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-slate-500" />
          <span>Back to BeeProof</span>
        </button>

        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
          PUBLIC CONSUMER VERIFICATION
        </span>
      </div>

      {/* Main Verification Card Area */}
      <main className="flex-1 flex items-center justify-center px-4 py-6 sm:py-8">
        <div className="w-full max-w-2xl mx-auto">
          {/* Main Card with Soft Mint / Green Border */}
          <div className="bg-[#fafffb] rounded-3xl border-2 border-emerald-500/30 shadow-sm p-6 sm:p-10 text-center relative">
            {/* Verification Squircle & Badge */}
            <VerificationBadge
              size="lg"
              statusText={currentBatch.statusText}
              batchId={currentBatch.batchId}
            />

            {/* Reconciliation Description matching screenshot */}
            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
              Batch {currentBatch.batchId} cryptographic record has been reconciled with the blockchain ledger. Harvest origin, processing parameters, laboratory testing, and custody transit are confirmed authentic.
            </p>

            {/* ONLY ONE ACTION BUTTON: View Full Details */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleViewDetails}
                id="btn-view-full-details"
                className="w-full sm:w-auto min-w-[200px] py-3.5 px-8 rounded-xl bg-[#253243] hover:bg-[#1a2533] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                aria-label={`View Full Details for Batch ${currentBatch.batchId}`}
              >
                <span>View Full Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="py-4 text-center text-xs text-slate-400 border-t border-slate-200/60 bg-white">
        <p>© 2026 BeeProof • Honey Traceability & Verification</p>
      </footer>
    </div>
  );
};

