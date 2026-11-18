export function CatMugLogo({ className }: { className?: string }) {
  return (
    <img
      src="/gato-caneca-logo.png"
      alt=""
      aria-hidden="true"
      className={`object-contain ${className ?? ""}`}
    />
  );
}
