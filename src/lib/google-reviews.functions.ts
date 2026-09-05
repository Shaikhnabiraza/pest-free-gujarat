import { createServerFn } from "@tanstack/react-start";

const PLACE_ID = "ChIJ2_EOU8DPXzkReg8ZURc-QyE";

export type GoogleReview = {
  name: string;
  rating: number;
  text: string;
  relativeTime: string;
  authorName: string;
  authorPhoto: string | null;
  authorUri: string | null;
};

export type GoogleReviewsPayload = {
  displayName: string | null;
  rating: number | null;
  userRatingCount: number | null;
  reviews: GoogleReview[];
  mapsUri: string;
  error: string | null;
};

type PlacesResponse = {
  displayName?: { text?: string };
  rating?: number;
  userRatingCount?: number;
  reviews?: Array<{
    name?: string;
    rating?: number;
    text?: { text?: string };
    originalText?: { text?: string };
    relativePublishTimeDescription?: string;
    authorAttribution?: { displayName?: string; photoUri?: string; uri?: string };
  }>;
};

const empty = (error: string | null): GoogleReviewsPayload => ({
  displayName: null,
  rating: null,
  userRatingCount: null,
  reviews: [],
  mapsUri: `https://search.google.com/local/reviews?placeid=${PLACE_ID}`,
  error,
});

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<GoogleReviewsPayload> => {
    const apiKey = process.env["GOOGLE_PLACES_API_KEY"];
    if (!apiKey) return empty("Google reviews are not configured yet.");

    try {
      const res = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews",
        },
      });

      if (!res.ok) {
        console.error("Google Places error", res.status, await res.text());
        return empty("We couldn't load Google reviews right now.");
      }

      const data = (await res.json()) as PlacesResponse;

      return {
        displayName: data.displayName?.text ?? null,
        rating: typeof data.rating === "number" ? data.rating : null,
        userRatingCount: typeof data.userRatingCount === "number" ? data.userRatingCount : null,
        reviews: (data.reviews ?? []).map((r, i) => ({
          name: r.name ?? `review-${i}`,
          rating: r.rating ?? 0,
          text: r.text?.text ?? r.originalText?.text ?? "",
          relativeTime: r.relativePublishTimeDescription ?? "",
          authorName: r.authorAttribution?.displayName ?? "Google user",
          authorPhoto: r.authorAttribution?.photoUri ?? null,
          authorUri: r.authorAttribution?.uri ?? null,
        })),
        mapsUri: `https://search.google.com/local/reviews?placeid=${PLACE_ID}`,
        error: null,
      };
    } catch (err) {
      console.error("Google Places request failed", err);
      return empty("We couldn't load Google reviews right now.");
    }
  },
);
