export function CatMugLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 110" className={className} aria-hidden="true">
      <g className="fill-coffee">
        {/* gato */}
        <path d="M30 30 L28 12 L42 20 Q56 14 70 20 L84 12 L82 30 Q86 40 82 46 L30 46 Q26 40 30 30 Z" />
        {/* caneca */}
        <path d="M18 44 h76 v34 a26 26 0 0 1 -26 26 h-24 a26 26 0 0 1 -26 -26 z" />
        <path d="M94 54 h6 a14 14 0 0 1 0 28 h-8 v-8 h8 a6 6 0 0 0 0 -12 h-6 z" />
      </g>
      <g className="fill-background">
        <ellipse cx="56" cy="46" rx="36" ry="6" />
        <path d="M42 32 q4 -4 8 0" stroke="currentColor" strokeWidth="0" />
        <ellipse cx="45" cy="33" rx="5" ry="3" />
        <ellipse cx="67" cy="33" rx="5" ry="3" />
        <path d="M51 39 q2.5 3 5 0 q2.5 3 5 0" fill="none" className="stroke-background" strokeWidth="1.8" strokeLinecap="round" />
        <ellipse cx="56" cy="78" rx="11" ry="15" transform="rotate(25 56 78)" />
      </g>
      <path d="M50 66 q10 12 12 24" className="stroke-coffee" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}
