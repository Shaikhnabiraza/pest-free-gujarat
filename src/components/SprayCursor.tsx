import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor: a crisp arrow that glides smoothly after the pointer with
 * gentle easing, growing over links/buttons and pressing down on click.
 * Disabled on touch / coarse pointers.
 */
export function SprayCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("spray-cursor-active");

    // Actual pointer position and the eased position the arrow renders at.
    const target = { x: -100, y: -100 };
    const current = { x: -100, y: -100 };
    let raf: number | null = null;
    let running = true;

    const frame = () => {
      current.x += (target.x - current.x) * 0.28;
      current.y += (target.y - current.y) * 0.28;
      const el = nodeRef.current;
      if (el) {
        el.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      }
      if (running) raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const el = e.target as Element | null;
      setHovering(
        !!el?.closest("a, button, [role='button'], input, textarea, select, label")
      );
      if (raf === null) raf = requestAnimationFrame(frame);
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    // Start the loop once; it keeps running so easing continues after moves.
    raf = requestAnimationFrame(frame);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    return () => {
      running = false;
      if (raf !== null) cancelAnimationFrame(raf);
      document.documentElement.classList.remove("spray-cursor-active");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  if (!enabled) return null;

  const classes = [
    "spray-cursor",
    hovering ? "spray-cursor--hover" : "",
    pressed ? "spray-cursor--pressed" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={nodeRef} className={classes} aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        {/* classic arrow shape, slightly refined */}
        <path
          d="M4 2 L18.5 11 L11.6 12.4 L14.6 19.2 L11.8 20.4 L8.9 13.6 L4 17.4 Z"
          fill="var(--color-brand)"
          stroke="var(--color-navy)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
et    </div>
  );
}

export default SprayCursor;
