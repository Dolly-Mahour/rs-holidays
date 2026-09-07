import type { Metadata } from "next";
import TripDetailsTemplate from "@/src/components/trip-details-template";
import { TRIPS_DATABASE, DEFAULT_TRIP } from "@/src/types/tripsData";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "bali";
  const trip = TRIPS_DATABASE[slug] || DEFAULT_TRIP;
  const title = trip.title
    ? `${trip.title} - Tourist Places & Itineraries | RS Holidays`
    : "Travel Destination & Itinerary | RS Holidays";
  const description =
    trip.description ||
    "Explore breathtaking tourist spots, activities, and holiday packages with RS Holidays.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: trip.image ? [{ url: trip.image, alt: trip.title || "Destination" }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: trip.image ? [trip.image] : [],
    },
  };
}

export default async function PlacePage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "bali";
  
  return <TripDetailsTemplate slug={slug} />;
}
