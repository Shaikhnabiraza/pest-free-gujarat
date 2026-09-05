import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { getGoogleReviews } from "../lib/google-reviews.functions";

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 text-brand ${className}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.round(rating) ? "fill-current" : "text-border"}`}
        />
      ))}
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 animate-pulse rounded-full bg-muted" />
        <div className="flex-1 space-y-2">
          <div className="h-3.5 w-1/2 animate-pulse rounded bg-muted" />
          <div className="h-3 w-1/3 animate-pulse rounded bg-muted" />
        </div>
      </div>
      <div className="mt-5 space-y-2.5">
        <div className="h-3 w-full animate-pulse rounded bg-muted" />
        <div className="h-3 w-11/12 animate-pulse rounded bg-muted" />
        <div className="h-3 w-2/3 animate-pulse rounded bg-muted" />
      </div>
    </div>
  );
}

export function GoogleReviews() {
  const fetchReviews = useServerFn(getGoogleReviews);
  const { data, isPending, isError } = useQuery({
    queryKey: ["google-reviews"],
    queryFn: () => fetchReviews(),
    staleTime: 1000 * 60 * 30,
  });

  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  const reviews = data?.reviews ?? [];
  const errorText = isError ? "We couldn't load Google reviews right now." : data?.error ?? null;

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : track.clientWidth;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const card = track.firstElementChild as HTMLElement | null;
      const step = card ? card.offsetWidth + 24 : track.clientWidth;
      setPage(Math.round(track.scrollLeft / step));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [reviews.length]);

  const mapsUri = data?.mapsUri ?? "https://www.google.com/maps";

  return (
    <section id="google-reviews" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Google Reviews</span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
              Real Ratings From Our Google Profile
            </h2>
            {data?.rating != null && (
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <span className="font-display text-4xl font-extrabold text-navy">
                  {data.rating.toFixed(1)}
                </span>
                <div>
                  <Stars rating={data.rating} />
                  <p className="mt-1 text-sm text-muted-foreground">
                    Based on {data.userRatingCount ?? 0} Google reviews
                  </p>
                </div>
              </div>
            )}
            <p className="mt-4 text-sm text-muted-foreground">
              Reviews and ratings provided by Google.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous reviews"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-navy shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next reviews"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-navy shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {isPending ? (
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <SkeletonCard />
            <div className="hidden lg:block">
              <SkeletonCard />
            </div>
            <div className="hidden lg:block">
              <SkeletonCard />
            </div>
          </div>
        ) : errorText || reviews.length === 0 ? (
          <div className="reveal mt-12 rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
            <p className="text-muted-foreground">
              {errorText ?? "No Google reviews to show yet."}
            </p>
            <a
              href={mapsUri}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-bold text-brand-foreground transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              View All Reviews on Google <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        ) : (
          <>
            <div
              ref={trackRef}
              className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {reviews.map((r) => (
                <figure
                  key={r.name}
                  className="w-[85%] shrink-0 snap-start rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift sm:w-[60%] lg:w-[calc((100%-3rem)/3)]"
                >
                  <figcaption className="flex items-center gap-3">
                    {r.authorPhoto ? (
                      <img
                        src={r.authorPhoto}
                        alt={`${r.authorName} on Google`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="h-11 w-11 rounded-full object-cover"
                      />
                    ) : (
                      <span className="flex h-11 w-11 items-center justify-center rounded-full gradient-brand font-display text-lg font-bold text-brand-foreground">
                        {r.authorName.charAt(0)}
                      </span>
                    )}
                    <span className="min-w-0">
                      <span className="block truncate font-bold text-navy">{r.authorName}</span>
                      <span className="block text-sm text-muted-foreground">{r.relativeTime}</span>
                    </span>
                  </figcaption>
                  <Stars rating={r.rating} className="mt-4" />
                  <blockquote className="mt-3 line-clamp-6 text-muted-foreground">{r.text}</blockquote>
                </figure>
              ))}
            </div>

            <div className="mt-4 flex justify-center gap-2 lg:hidden">
              {reviews.map((r, i) => (
                <span
                  key={r.name}
                  className={`h-1.5 rounded-full transition-all ${i === page ? "w-6 bg-brand" : "w-1.5 bg-border"}`}
                />
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href={mapsUri}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-base font-bold text-brand-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                View All Reviews on Google <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
