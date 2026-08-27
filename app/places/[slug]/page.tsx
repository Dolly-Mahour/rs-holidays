import TripDetailsTemplate from "@/src/components/trip-details-template";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PlacePage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "bali";
  
  return <TripDetailsTemplate slug={slug} />;
}
