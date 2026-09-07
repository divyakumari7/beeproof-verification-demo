import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { ArrowRight, ShieldAlert } from 'lucide-react';
import { DEMO_BATCH } from '../data/demoBatch';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const { batchId } = useParams<{ batchId?: string }>();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md mx-auto bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 text-center shadow-lg">
          <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto mb-4">
            <ShieldAlert className="w-8 h-8 stroke-[2.2]" />
          </div>

          <h1 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
            Verification Record Not Found
          </h1>

          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            The batch identifier{' '}
            <span className="font-mono font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">
              {batchId || 'UNKNOWN'}
            </span>{' '}
            could not be located in the verification registry.
          </p>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-500 mb-6 text-left">
            <p className="font-semibold text-slate-700 mb-1">
              Demo Demonstration Note:
            </p>
            <p>
              For this public evaluation showcase, please access the verified reference batch{' '}
              <strong className="text-slate-800">{DEMO_BATCH.batchId}</strong>.
            </p>
          </div>

          <button
            onClick={() => navigate(`/verify/${DEMO_BATCH.batchId}`)}
            className="w-full py-3.5 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Open Reference Batch ({DEMO_BATCH.batchId})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      <footer className="py-4 text-center text-xs text-slate-400 border-t border-slate-200/60">
        <p>© 2026 BEEPROOF Traceability Platform</p>
      </footer>
    </div>
  );
};
