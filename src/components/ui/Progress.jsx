import React from "react";

export function Progress({ value = 0, className = "" }) {
  const safeValue = Math.min(Math.max(value, 0), 100);
  return (
    <div className={`w-full h-3 bg-white/30 rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full bg-emerald-500 rounded-full transition-all"
        style={{ width: `${safeValue}%` }}
      ></div>
    </div>
  );
}
