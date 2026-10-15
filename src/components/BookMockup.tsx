import { useState } from "react";
import { product } from "@/config/product";

/**
 * Mockup 3D do devocional (representação visual de um produto digital).
 * Se `product.coverImage` estiver preenchido, a capa real é usada.
 * Caso contrário, mostra uma capa provisória preta e dourada.
 */
export function BookMockup({ size = "lg", tilt = -22, animated = false }: { size?: "sm" | "md" | "lg"; tilt?: number; animated?: boolean }) {
  const [entered, setEntered] = useState(false);
  const w = size === "lg" ? "w-[15rem] sm:w-[19rem]" : size === "md" ? "w-52 sm:w-60" : "w-40";
  return (
    <div className="relative flex items-center justify-center" style={{ perspective: "1600px" }}>
      <div className="glow-spot pointer-events-none absolute inset-[-30%] rounded-full" />
      <div className={animated ? "book-float" : ""} style={{ transformStyle: "preserve-3d" }}>
      <div
        className={animated ? `book-hero relative aspect-[3/4] ${w} ${entered ? "book-entered" : ""}` : `relative aspect-[3/4] ${w} transition-transform duration-700 hover:[transform:rotateY(-12deg)_rotateX(3deg)]`}
        style={{ transformStyle: "preserve-3d", ...(animated ? {} : { transform: `rotateY(${tilt}deg) rotateX(4deg)` }) }}
        onAnimationEnd={animated ? () => setEntered(true) : undefined}
      >
        {/* páginas (lateral) */}
        <div
          className="absolute right-0 top-[1.5%] h-[97%] w-6 origin-right bg-[repeating-linear-gradient(90deg,var(--muted-foreground)_0_1px,var(--foreground)_1px_3px)] opacity-80"
          style={{ transform: "rotateY(90deg) translateX(12px)" }}
        />
        {/* lombada */}
        <div
          className="absolute left-0 top-0 h-full w-6 origin-left bg-card"
          style={{ transform: "rotateY(-90deg)" }}
        />
        {/* capa */}
        <div className="book-cover shadow-book absolute inset-0 overflow-hidden rounded-r-md rounded-l-sm bg-background" style={{ transform: "translateZ(12px)" }}>
          {product.coverImage ? (
            <img src={product.coverImage} alt={`Capa do devocional ${product.name}`} className="h-full w-full object-cover" />
          ) : (
            <PlaceholderCover />
          )}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,oklch(1_0_0/0.09)_50%,transparent_60%)]" />
          {animated && <div className="book-shine pointer-events-none absolute inset-0" />}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-[linear-gradient(90deg,oklch(0_0_0/0.6),transparent)]" />
        </div>
      </div>
      </div>
    </div>
  );
}

function PlaceholderCover() {
  return (
    <div className="flex h-full flex-col items-center justify-between bg-[radial-gradient(ellipse_at_50%_30%,var(--secondary),var(--background)_70%)] p-[9%] text-center">
      <div className="h-full w-full rounded-sm border border-primary/40 p-[8%]">
        <div className="flex h-full flex-col items-center justify-center">
          <p className="text-[0.55em] font-semibold tracking-[0.35em] text-primary sm:text-[0.6rem]">DEVOCIONAL</p>
          <div className="my-3 h-px w-10 bg-primary/60" />
          <p className="text-gold font-display text-6xl leading-none sm:text-7xl">30</p>
          <p className="mt-1 font-display text-xl tracking-[0.2em] text-foreground sm:text-2xl">DIAS</p>
          <p className="font-display text-sm italic text-accent sm:text-base">de Encontro com Deus</p>
          <div className="my-3 h-px w-10 bg-primary/60" />
          <p className="px-2 text-[0.6rem] leading-snug text-muted-foreground">{product.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
