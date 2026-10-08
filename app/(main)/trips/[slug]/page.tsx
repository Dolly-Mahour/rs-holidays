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
    ? `${trip.title} - ${trip.location || "International"} Tour Package | RS Holidays`
    : "International Holiday Tour Package | RS Holidays";
  const description =
    trip.description ||
    "Explore curated international holiday packages with RS Holidays. Premium stays, seamless itineraries, and unforgettable experiences.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: trip.image ? [{ url: trip.image, alt: trip.title || "Tour Package" }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: trip.image ? [trip.image] : [],
    },
  };
}

export default async function TripPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "bali";
  
  return <TripDetailsTemplate slug={slug} />;
}
