import React from 'react';
import { DEMO_BATCH, LabMetric } from '../data/demoBatch';

interface LabMetricsProps {
  metrics?: LabMetric[];
}

export const LabMetrics: React.FC<LabMetricsProps> = ({
  metrics = DEMO_BATCH.labSection.metrics,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {metrics.map((metric) => (
        <div
          key={metric.id}
          className="bg-white rounded-xl p-4 border border-slate-200/90 text-center flex flex-col justify-between"
        >
          <span className="text-xs font-semibold text-slate-500 mb-1.5">
            {metric.name}
          </span>

          <span
            className={`text-xl sm:text-2xl font-black tracking-tight my-1 ${
              metric.value === 'PASSED' || metric.value === 'NEGATIVE'
                ? 'text-emerald-700'
                : 'text-slate-900'
            }`}
          >
            {metric.value}
          </span>

          <span className="text-[11px] text-slate-400 font-medium">
            {metric.standard}
          </span>
        </div>
      ))}
    </div>
  );
};

