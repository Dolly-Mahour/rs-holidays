export interface TripHighlight {
  title: string;
  description: string;
  iconType: 'beach' | 'culture' | 'views' | 'adventure' | string;
}

export interface TripData {
  slug: string;
  name: string;
  title: string;
  location: string;
  description: string;
  duration: string;
  bestFor: string;
  rating: string;
  image: string;
  highlights: TripHighlight[];
}

export const DEFAULT_TRIP: TripData = {
  slug: "bali",
  name: "Bali",
  title: "Bali Escape",
  location: "BALI, INDONESIA",
  description: "Discover the beauty of Bali where serene beaches, rich culture and unforgettable adventures come together.",
  duration: "6 Days / 5 Nights",
  bestFor: "Family, Couple, Friends",
  rating: "4.8 (120+)",
  image: "/images/bali.png",
  highlights: [
    {
      title: "Stunning Beaches",
      description: "Relax on crystal clear waters and beautiful white sand beaches.",
      iconType: "beach",
    },
    {
      title: "Rich Culture",
      description: "Experience ancient temples, traditions and local hospitality.",
      iconType: "culture",
    },
    {
      title: "Breathtaking Views",
      description: "From lush rice terraces to majestic sunsets, Bali is pure magic.",
      iconType: "views",
    },
    {
      title: "Adventure & Fun",
      description: "Enjoy water sports, exploring waterfalls and vibrant nightlife.",
      iconType: "adventure",
    },
  ],
};

export const TRIPS_DATABASE: Record<string, Partial<TripData>> = {
  bali: DEFAULT_TRIP,
  singapore: {
    slug: "singapore",
    name: "Singapore",
    title: "Singapore Explorer",
    location: "SINGAPORE",
    description: "Experience futuristic gardens, vibrant street food markets, and world-class attractions in the Lion City.",
    duration: "5 Days / 4 Nights",
    bestFor: "Family, Friends",
    rating: "4.9 (95+)",
    image: "/images/singapore.png",
  },
  dubai: {
    slug: "dubai",
    name: "Dubai",
    title: "Dubai Adventure",
    location: "DUBAI, UAE",
    description: "Explore towering skyscrapers, luxury shopping, and thrilling desert safaris in Arabian magnificence.",
    duration: "5 Days / 4 Nights",
    bestFor: "Luxury, Couple, Family",
    rating: "4.8 (110+)",
    image: "/images/dubai.png",
  },
  thailand: {
    slug: "thailand",
    name: "Thailand",
    title: "Thailand Getaway",
    location: "THAILAND",
    description: "Immerse yourself in pristine islands, bustling street markets, and sacred golden temples.",
    duration: "6 Days / 5 Nights",
    bestFor: "Friends, Couple, Solo",
    rating: "4.7 (140+)",
    image: "/images/thailand.png",
  },
  vietnam: {
    slug: "vietnam",
    name: "Vietnam",
    title: "Vietnam Discovery",
    location: "VIETNAM",
    description: "Journey through emerald waters of Ha Long Bay, historic ancient towns, and rich culinary heritage.",
    duration: "7 Days / 6 Nights",
    bestFor: "Explorers, Culture, Foodies",
    rating: "4.8 (88+)",
    image: "/images/vietnam.png",
  },
  maldives: {
    slug: "maldives",
    name: "Maldives",
    title: "Maldives Paradise",
    location: "MALDIVES",
    description: "Unwind in luxury overwater bungalows surrounded by turquoise lagoons and pristine coral reefs.",
    duration: "5 Days / 4 Nights",
    bestFor: "Honeymoon, Luxury, Couple",
    rating: "4.9 (160+)",
    image: "/images/maldives.png",
  },
  ladakh: {
    slug: "ladakh",
    name: "Leh Ladakh",
    title: "Ladakh Odyssey",
    location: "LEH LADAKH, INDIA",
    description: "Traverse high-altitude mountain passes, serene high-altitude lakes, and tranquil Buddhist monasteries.",
    duration: "7 Days / 6 Nights",
    bestFor: "Adventure, Bikers, Nature",
    rating: "4.9 (200+)",
    image: "/images/ladakh.png",
  },
  spiti: {
    slug: "spiti",
    name: "Spiti",
    title: "Spiti Valley Expedition",
    location: "SPITI VALLEY, INDIA",
    description: "Discover rugged cold deserts, centuries-old monasteries, and untouched Himalayan wilderness.",
    duration: "8 Days / 7 Nights",
    bestFor: "Trekkers, Explorers",
    rating: "4.8 (75+)",
    image: "/images/spiti.png",
  },
  kashmir: {
    slug: "kashmir",
    name: "Kashmir",
    title: "Kashmir Paradise",
    location: "KASHMIR, INDIA",
    description: "Glide on iconic Shikaras across Dal Lake and witness snow-capped peaks in the Heaven on Earth.",
    duration: "6 Days / 5 Nights",
    bestFor: "Family, Couple",
    rating: "4.9 (180+)",
    image: "/images/kashmir.png",
  },
  meghalaya: {
    slug: "meghalaya",
    name: "Meghalaya",
    title: "Meghalaya Wonders",
    location: "MEGHALAYA, INDIA",
    description: "Walk across living root bridges, swim in crystal-clear rivers, and explore the abode of clouds.",
    duration: "6 Days / 5 Nights",
    bestFor: "Nature, Adventure",
    rating: "4.8 (92+)",
    image: "/images/meghalaya.png",
  },
};

export function getTripData(slug: string): TripData {
  const normalizedSlug = slug.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  // Look up in database or match key
  const matchedKey = Object.keys(TRIPS_DATABASE).find(key => 
    normalizedSlug.includes(key) || key.includes(normalizedSlug)
  );

  const found = matchedKey ? TRIPS_DATABASE[matchedKey] : null;

  if (!found) {
    // Generate clean dynamic title if slug is custom
    const formattedName = slug
      .replace(/-/g, " ")
      .replace(/%20/g, " ")
      .replace(/\b\w/g, l => l.toUpperCase());

    return {
      ...DEFAULT_TRIP,
      slug,
      name: formattedName,
      title: `${formattedName} Escape`,
      location: `${formattedName.toUpperCase()}`,
      description: `Discover the beauty of ${formattedName} where serene landscapes, rich culture and unforgettable adventures come together.`,
      highlights: DEFAULT_TRIP.highlights.map(h => ({
        ...h,
        description: h.description.replace(/Bali/g, formattedName)
      }))
    };
  }

  return {
    ...DEFAULT_TRIP,
    ...found,
    highlights: found.highlights || DEFAULT_TRIP.highlights.map(h => ({
      ...h,
      description: h.description.replace(/Bali/g, found.name || "Bali")
    }))
  };
}
