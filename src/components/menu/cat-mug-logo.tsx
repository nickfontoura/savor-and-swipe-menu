import logo from "@/assets/gato-caneca-logo.png.asset.json";

export function CatMugLogo({ className }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt=""
      aria-hidden="true"
      className={`object-contain ${className ?? ""}`}
    />
  );
}
