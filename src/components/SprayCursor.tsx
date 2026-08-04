import { useEffect, useRef, useState } from "react";

type Mist = { id: number; x: number; y: number; dx: number; dy: number; s: number };

/**
 * Custom cursor: a pest-control spray pipe/nozzle that follows the pointer and
 * puffs mist particles on click. Disabled on touch / coarse pointers.
 */
export function SprayCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [mist, setMist] = useState<Mist[]>([]);
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: -200, y: -200 });
  const raf = useRef<number | null>(null);
  const seed = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("spray-cursor-active");

    const onMove = (e: PointerEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (raf.current === null) {
        raf.current = requestAnimationFrame(() => {
          raf.current = null;
          const el = nodeRef.current;
          if (el) {
            el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
          }
        });
      }
    };
    const onDown = () => {
      setPressed(true);
      const { x, y } = pos.current;
      const puff: Mist[] = Array.from({ length: 8 }, () => {
        seed.current += 1;
        const angle = (-35 + Math.random() * 45) * (Math.PI / 180);
        const dist = 40 + Math.random() * 90;
        return {
          id: seed.current,
          x,
          y,
          dx: Math.cos(angle) * dist,
          dy: Math.sin(angle) * dist,
          s: 4 + Math.random() * 10,
        };
      });
      setMist((m) => [...m, ...puff]);
      window.setTimeout(() => {
        const ids = new Set(puff.map((p) => p.id));
        setMist((m) => m.filter((p) => !ids.has(p.id)));
      }, 750);
    };
    const onUp = () => setPressed(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    return () => {
      document.documentElement.classList.remove("spray-cursor-active");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={nodeRef} className="spray-cursor" aria-hidden="true">
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          className={pressed ? "spray-cursor-svg spray-cursor-svg--pressed" : "spray-cursor-svg"}
        >
          {/* nozzle tip */}
          <path
            d="M4 10 L18 15 L18 21 L4 26 Z"
            fill="var(--color-brand)"
            stroke="var(--color-navy)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* lance / pipe */}
          <rect
            x="17"
            y="15.5"
            width="20"
            height="5.5"
            rx="2.5"
            fill="var(--color-navy)"
          />
          <rect x="21" y="16.8" width="12" height="1.4" rx="0.7" fill="var(--color-brand)" opacity="0.8" />
          {/* grip */}
          <path
            d="M36 13 h9 a3 3 0 0 1 3 3 v5 a3 3 0 0 1 -3 3 h-9 z"
            fill="var(--color-navy)"
            stroke="var(--color-brand)"
            strokeWidth="1.2"
          />
          {/* trigger */}
          <path
            d="M40 24 q-2 6 -6 8"
            stroke="var(--color-brand)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* hose */}
          <path
            d="M48 21 q7 4 3 11 t-9 8"
            stroke="var(--color-navy)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          {/* idle jet hint */}
          <g className="spray-cursor-jet">
            <circle cx="2" cy="18" r="1.6" fill="var(--color-brand)" />
            <circle cx="-4" cy="14" r="1.1" fill="var(--color-brand)" opacity="0.7" />
            <circle cx="-4" cy="22" r="1.1" fill="var(--color-brand)" opacity="0.7" />
          </g>
        </svg>
      </div>

      <div className="spray-mist-layer" aria-hidden="true">
        {mist.map((p) => (
          <span
            key={p.id}
            className="spray-mist"
            style={
              {
                left: p.x,
                top: p.y,
                width: p.s,
                height: p.s,
                "--mx": `${p.dx}px`,
                "--my": `${p.dy}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </>
  );
}

export default SprayCursor;
