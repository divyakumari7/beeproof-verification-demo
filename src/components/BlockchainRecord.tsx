import React, { useState } from 'react';
import { DEMO_BATCH, BlockchainRecordData } from '../data/demoBatch';
import { ShieldCheck, Copy, Check } from 'lucide-react';

interface BlockchainRecordProps {
  data?: BlockchainRecordData;
}

export const BlockchainRecord: React.FC<BlockchainRecordProps> = ({
  data = DEMO_BATCH.blockchain,
}) => {
  const [copiedTx, setCopiedTx] = useState(false);
  const [copiedState, setCopiedState] = useState(false);

  const copyToClipboard = (text: string, type: 'tx' | 'state') => {
    navigator.clipboard.writeText(text);
    if (type === 'tx') {
      setCopiedTx(true);
      setTimeout(() => setCopiedTx(false), 2000);
    } else {
      setCopiedState(true);
      setTimeout(() => setCopiedState(false), 2000);
    }
  };

  return (
    <div className="rounded-2xl bg-[#131c2e] border border-slate-800 text-slate-100 p-5 sm:p-6 shadow-xl space-y-3.5">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 flex-wrap pb-1">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400">
            BLOCKCHAIN DETAILS & INTEGRITY RECORD
          </h3>
        </div>

        <span className="text-[11px] font-mono font-medium text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700">
          Hardhat EVM Local (31337)
        </span>
      </div>

      {/* Record Check */}
      <div className="text-xs sm:text-sm">
        <span className="text-slate-400">Record Check: </span>
        <span className="text-emerald-400 font-bold">Matches On-Chain Hash</span>
      </div>

      {/* Transaction Hash */}
      <div className="space-y-1 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-slate-400">Transaction Hash: </span>
          <button
            onClick={() => copyToClipboard(data.transactionHash, 'tx')}
            className="text-[10px] text-slate-400 hover:text-emerald-400 flex items-center gap-1 cursor-pointer"
            type="button"
          >
            {copiedTx ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copiedTx ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
        <p className="font-mono text-[11px] sm:text-xs text-emerald-400/90 break-all leading-relaxed select-all">
          {data.transactionHash}
        </p>
      </div>

      {/* State Hash */}
      <div className="space-y-1 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-slate-400">State Hash: </span>
          <button
            onClick={() => copyToClipboard(data.stateHash, 'state')}
            className="text-[10px] text-slate-400 hover:text-amber-400 flex items-center gap-1 cursor-pointer"
            type="button"
          >
            {copiedState ? <Check className="w-3 h-3 text-amber-400" /> : <Copy className="w-3 h-3" />}
            <span>{copiedState ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
        <p className="font-mono text-[11px] sm:text-xs text-amber-300/90 break-all leading-relaxed select-all">
          {data.stateHash}
        </p>
      </div>

      {/* Block Height */}
      <div className="text-xs sm:text-sm pt-1">
        <span className="text-slate-400">Block Height: </span>
        <span className="text-white font-mono font-bold">#1</span>
      </div>
    </div>
  );
};
