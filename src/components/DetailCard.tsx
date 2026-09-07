import React, { ReactNode } from 'react';

interface DetailCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  badge?: ReactNode;
}

export const DetailCard: React.FC<DetailCardProps> = ({
  title,
  icon,
  children,
  className = '',
  badge,
}) => {
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 sm:p-5 flex flex-col justify-between ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-1.5 min-w-0">
          {icon && <span className="text-amber-600 shrink-0">{icon}</span>}
          <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 truncate">
            {title}
          </h3>
        </div>
        {badge && <div className="shrink-0">{badge}</div>}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
};

