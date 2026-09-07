import { useState } from "react";

/** Deterministic abstract fallback so no project ever shows a broken image. */
function Fallback({ seed, className }: { seed: string; className?: string }) {
  const n = Array.from(seed).reduce((a, c) => a + c.charCodeAt(0), 0);
  const hue = n % 360;
  return (
    <svg viewBox="0 0 160 120" className={className} aria-hidden="true">
      <rect width="160" height="120" fill={`hsl(${hue} 18% 92%)`} />
      {Array.from({ length: 7 }).map((_, i) => (
        <circle
          key={i}
          cx={20 + ((n * (i + 3)) % 120)}
          cy={20 + ((n * (i + 7)) % 80)}
          r={6 + ((n + i * 13) % 22)}
          fill="none"
          stroke={`hsl(${(hue + i * 12) % 360} 30% 45%)`}
          strokeWidth="0.8"
          opacity="0.55"
        />
      ))}
    </svg>
  );
}

export function Cover({
  src,
  video,
  alt,
  seed,
  className = "h-24 w-32",
}: {
  src?: string;
  video?: string;
  alt: string;
  seed: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const box = `shrink-0 overflow-hidden rounded-sm border border-rule bg-panel ${className}`;

  if (video) {
    return (
      <div className={box}>
        <video
          src={video}
          muted
          loop
          autoPlay
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
    );
  }
  if (!src || failed) {
    return (
      <div className={box}>
        <Fallback seed={seed} className="h-full w-full object-cover" />
      </div>
    );
  }
  return (
    <div className={box}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function Portrait({
  src,
  fallback,
  alt,
}: {
  src: string;
  fallback: string;
  alt: string;
}) {
  const [stage, setStage] = useState(0);
  const source = stage === 0 ? src : stage === 1 ? fallback : "";
  if (stage > 1)
    return (
      <div className="flex h-28 w-28 items-center justify-center rounded-sm border border-rule bg-panel font-serif text-2xl text-muted">
        NB
      </div>
    );
  return (
    <img
      src={source}
      alt={alt}
      onError={() => setStage((s) => s + 1)}
      className="h-28 w-28 shrink-0 rounded-sm border border-rule object-cover"
    />
  );
}
