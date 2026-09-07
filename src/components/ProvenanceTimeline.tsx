import React from 'react';
import { DEMO_BATCH, LifecycleStage } from '../data/demoBatch';

interface ProvenanceTimelineProps {
  stages?: LifecycleStage[];
}

export const ProvenanceTimeline: React.FC<ProvenanceTimelineProps> = ({
  stages = DEMO_BATCH.lifecycle.stages,
}) => {
  return (
    <div className="relative pl-6 sm:pl-7">
      {/* Amber vertical connecting line */}
      <div
        className="absolute left-[7px] top-3 bottom-6 w-0.5 bg-amber-500/80"
        aria-hidden="true"
      />

      <div className="space-y-6 sm:space-y-7">
        {stages.map((stage) => {
          return (
            <div key={stage.stageNumber} className="relative">
              {/* Amber circular dot matching screenshot 3 */}
              <div
                className="absolute -left-[24px] sm:-left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-amber-600 border-2 border-white shadow-xs z-10"
                aria-label={`Stage ${stage.stageNumber}`}
              />

              {/* Stage content */}
              <div className="space-y-1">
                {/* Title & Date */}
                <div className="flex items-baseline justify-between gap-2 flex-wrap">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                    {stage.title}
                  </h4>
                  <span className="text-xs sm:text-xs font-medium text-slate-500 shrink-0">
                    {stage.date}
                  </span>
                </div>

                {/* Organization */}
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  {stage.organization}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-xs text-slate-500 leading-relaxed pt-0.5">
                  {stage.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

