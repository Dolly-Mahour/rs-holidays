export interface ItineraryDay {
  day: string;
  title: string;
  description: string;
}

export interface PackageData {
  id: number;
  slug: string;
  title: string;
  fullName: string;
  state: string;
  duration: string;
  price: string;
  image: string;
  video?: string;
  rating: string;
  reviews: string;
  bestFor: string;
  itinerary: ItineraryDay[];
  importantDetails: string[];
}

export const ALL_PACKAGES: PackageData[] = [
  {
    id: 1,
    slug: "kheerganga-trek",
    title: "Kheerganga Trek",
    fullName: "Kasol Kheerganga Trek",
    state: "Himachal Pradesh",
    duration: "5 Days / 2 Nights (Delhi to Delhi, incl. 2 overnight bus journeys)",
    price: "999",
    image: "/images/kheerganga-trek.png",
    video: "/videos/waterfall.mp4",
    rating: "4.9",
    reviews: "210+",
    bestFor: "Trekking, Nature, Camping",
    itinerary: [
      { day: "Day 0", title: "Delhi to Kasol", description: "Overnight journey; board at Majnu Ka Tilla, meet Trip Captain." },
      { day: "Day 1", title: "Kasol Arrival", description: "Check-in, explore Chalal bridge, cafe hopping, hippie vibes; trek briefing in evening." },
      { day: "Day 2", title: "Kheerganga Trek", description: "Drive to Barshaini Dam, trek through forests & waterfalls to Kheerganga; overnight camping." },
      { day: "Day 3", title: "Manikaran Hot Springs", description: "Trek down, visit Manikaran Sahib Gurudwara & hot springs, overnight bus to Delhi." },
      { day: "Day 4", title: "Delhi Arrival", description: "Trip ends early morning." }
    ],
    importantDetails: [
      "Altitude: Kasol 1,580m | Kheerganga 2,960m; trek distance 24–26 km round trip.",
      "Difficulty: Moderate — suitable for beginners and experienced trekkers.",
      "Best time: April to November.",
      "2 nights accommodation (1 hotel in Kasol, 1 camp in Rudranag) + 4 meals included.",
      "GST (5%) charged extra; carry ID proof, first-aid, headlamp, poncho & trekking pole."
    ]
  },
  {
    id: 2,
    slug: "jispa-getaway",
    title: "Jispa Getaway",
    fullName: "Manali Jispa",
    state: "Himachal Pradesh",
    duration: "5 Days / 2 Nights (Delhi to Delhi, incl. overnight bus journeys)",
    price: "999",
    image: "/images/jispa-getaway.png",
    video: "/videos/banner-video.mp4",
    rating: "4.8",
    reviews: "180+",
    bestFor: "Road Trips, Mountains, Camping",
    itinerary: [
      { day: "Day 0", title: "Delhi to Manali", description: "Overnight journey." },
      { day: "Day 1", title: "Manali Arrival", description: "Hadimba Temple, Van Vihar, Old Manali cafes, Mall Road." },
      { day: "Day 2", title: "Drive to Jispa via Atal Tunnel", description: "Explore Baralacha La; overnight in Jispa (3,200m)." },
      { day: "Day 3", title: "Drive to Manali via Sissu Village", description: "Depart for Delhi overnight." },
      { day: "Day 4", title: "Delhi Arrival", description: "Trip ends." }
    ],
    importantDetails: [
      "Jispa altitude ~3,200m; expect cold nights even in summer — pack warm layers.",
      "Road can be affected by weather/snow on the Manali–Leh highway stretch; itinerary is flexible around conditions.",
      "2 nights accommodation on sharing basis; meals as per inclusions list.",
      "GST extra; personal expenses, entry tickets, and travel insurance excluded."
    ]
  },
  {
    id: 3,
    slug: "manali-leh-srinagar",
    title: "Manali-Leh-Srinagar",
    fullName: "Manali Leh Srinagar Expedition",
    state: "Himachal Pradesh / Ladakh / J&K",
    duration: "11 Days / 9 Nights (Delhi to Srinagar, one-way overland)",
    price: "999",
    image: "/images/manali-leh-srinagar.png",
    video: "/videos/ladakh.mp4",
    rating: "4.95",
    reviews: "340+",
    bestFor: "Overland Expedition, Bikers, Photography",
    itinerary: [
      { day: "Day 0", title: "Delhi to Manali", description: "Overnight journey." },
      { day: "Day 1", title: "Manali Arrival", description: "Acclimatization day at leisure." },
      { day: "Day 2", title: "Manali to Sarchu", description: "Via Atal Tunnel." },
      { day: "Day 3", title: "Sarchu to Leh", description: "Via Gata Loops, Pang & Moore Plains." },
      { day: "Day 4", title: "Leh to Nubra Valley", description: "Via Khardung La; Hunder arrival." },
      { day: "Day 5", title: "Turtuk Day Trip", description: "Day trip to India's last village, back to Hunder." },
      { day: "Day 6", title: "Nubra to Pangong Tso", description: "Via Shyok Valley." },
      { day: "Day 7", title: "Pangong to Leh", description: "Via Chang La, Thiksey monastery." },
      { day: "Day 8", title: "Leh to Kargil", description: "Via Pathar Sahib Gurudwara, Lamayuru." },
      { day: "Day 9", title: "Kargil to Srinagar", description: "Via Drass, Zojila Pass, Sonamarg." },
      { day: "Day 10", title: "Departure from Srinagar", description: "Trip ends." }
    ],
    importantDetails: [
      "This is a long, high-altitude overland circuit (max altitude ~5,300m at Khardung La) — acclimatization days are built in.",
      "Turtuk and some Nubra/Pangong areas require Inner Line/Protected Area Permits — arranged by the operator.",
      "Best attempted May–September when passes are open.",
      "9 nights accommodation on sharing basis across multiple stops.",
      "Carry motion-sickness medicine, warm clothing for all seasons, and valid government ID."
    ]
  },
  {
    id: 4,
    slug: "sissu-kasol-trip",
    title: "Sissu-Kasol Trip",
    fullName: "Manali Sissu Kasol",
    state: "Himachal Pradesh",
    duration: "6 Days / 3 Nights (Delhi to Delhi, incl. overnight bus journeys)",
    price: "999",
    image: "/images/sissu-kasol-trip.png",
    video: "/videos/waterfall.mp4",
    rating: "4.85",
    reviews: "150+",
    bestFor: "Cafes, Valleys, Relaxation",
    itinerary: [
      { day: "Day 0", title: "Delhi to Manali", description: "Overnight journey." },
      { day: "Day 1", title: "Manali Arrival", description: "Local exploration & cafe hopping." },
      { day: "Day 2", title: "Drive to Sissu", description: "Via Atal Tunnel & Solang Valley." },
      { day: "Day 3", title: "Manali to Kasol", description: "Kasol arrival & cafe hopping." },
      { day: "Day 4", title: "Manikaran Hot Springs", description: "Depart for Delhi." },
      { day: "Day 5", title: "Delhi Arrival", description: "Trip ends." }
    ],
    importantDetails: [
      "Atal Tunnel crossing can close temporarily due to weather — itinerary may adjust accordingly.",
      "3 nights accommodation on sharing basis; mix of hotel stays.",
      "Best time: March–June and September–November for pleasant weather.",
      "GST extra; personal shopping, insurance and optional activities not included."
    ]
  },
  {
    id: 5,
    slug: "himachal-explorer",
    title: "Himachal Explorer",
    fullName: "Manali Sissu Kasol Kheerganga",
    state: "Himachal Pradesh",
    duration: "7 Days / 4 Nights (Delhi to Delhi, incl. overnight bus journeys)",
    price: "999",
    image: "/images/himachal-explorer.png",
    video: "/videos/waterfall.mp4",
    rating: "4.9",
    reviews: "280+",
    bestFor: "Road Trip, Camping, Trekking",
    itinerary: [
      { day: "Day 0", title: "Delhi to Manali", description: "Overnight journey." },
      { day: "Day 1", title: "Manali Arrival", description: "Local exploration & cafe hopping." },
      { day: "Day 2", title: "Drive to Sissu", description: "Via Atal Tunnel & Solang Valley." },
      { day: "Day 3", title: "Manali to Kasol", description: "Kasol arrival & cafe hopping." },
      { day: "Day 4", title: "Kheerganga Trek", description: "Overnight camping at Kheerganga." },
      { day: "Day 5", title: "Manikaran Hot Springs", description: "Depart for Delhi." },
      { day: "Day 6", title: "Delhi Arrival", description: "Trip ends." }
    ],
    importantDetails: [
      "Combines road-trip sightseeing with one moderate trekking day (Kheerganga).",
      "4 nights accommodation (hotels + 1 camp night) on sharing basis.",
      "Best time: March–June and September–November; avoid heavy monsoon/winter snow.",
      "Carry trekking shoes, a warm layer, and a basic first-aid kit for the Kheerganga leg."
    ]
  },
  {
    id: 6,
    slug: "zanskar-expedition",
    title: "Zanskar Expedition",
    fullName: "Manali Zanskar with Drang-Drung Glacier",
    state: "Himachal Pradesh / Ladakh",
    duration: "9 Days / 6 Nights (Delhi to Delhi)",
    price: "999",
    image: "/images/zanskar-expedition.png",
    video: "/videos/banner-video.mp4",
    rating: "4.95",
    reviews: "140+",
    bestFor: "Offbeat Adventure, Glaciers, High Passes",
    itinerary: [
      { day: "Day 0", title: "Delhi to Manali", description: "Overnight journey." },
      { day: "Day 1", title: "Manali Arrival", description: "Acclimatization day." },
      { day: "Day 2", title: "Manali to Gumbok Rangan", description: "Via Shinku La Pass." },
      { day: "Day 3", title: "Drive to Padum", description: "Via Kargyak Valley & Phugtal Monastery." },
      { day: "Day 4", title: "Padum Sightseeing", description: "Local exploration." },
      { day: "Day 5", title: "Pensi La Pass & Drang-Drung Glacier", description: "Full day exploration." },
      { day: "Day 6", title: "Padum to Jispa", description: "Via Lahaul Valley." },
      { day: "Day 7", title: "Jispa to Manali", description: "Depart for Delhi." },
      { day: "Day 8", title: "Reach Delhi", description: "Trip ends." }
    ],
    importantDetails: [
      "One of the most remote routes — expect limited network connectivity & basic homestays/guesthouses.",
      "High-altitude passes (Shinku La, Pensi La) mean acclimatization matters.",
      "Best time: July–September when the Shinku La/Padum route is open.",
      "6 nights accommodation on sharing basis; carry cash as ATMs are scarce beyond Keylong."
    ]
  },
  {
    id: 7,
    slug: "triund-trek",
    title: "Triund Trek",
    fullName: "Mcleodganj & Triund Trek",
    state: "Himachal Pradesh",
    duration: "5 Days / 2 Nights (Delhi to Delhi, incl. overnight bus journeys)",
    price: "999",
    image: "/images/triund-trek.png",
    video: "/videos/waterfall.mp4",
    rating: "4.8",
    reviews: "310+",
    bestFor: "Beginner Trekking, Camping, Sunset Views",
    itinerary: [
      { day: "Day 0", title: "Delhi to Mcleodganj", description: "Overnight journey." },
      { day: "Day 1", title: "Mcleodganj Arrival", description: "Tibetan market, Dalai Lama Temple, cafe hopping." },
      { day: "Day 2", title: "Trek to Triund", description: "Overnight camping at Triund Top." },
      { day: "Day 3", title: "Bhagsunag Waterfall", description: "Depart for Delhi." },
      { day: "Day 4", title: "Delhi Arrival", description: "Trip ends." }
    ],
    importantDetails: [
      "Triund trek (~9 km one-way) is moderate; carry good trekking shoes and a light jacket.",
      "2 nights accommodation (1 hotel, 1 camp) on sharing basis.",
      "Best time: March–June and September–December.",
      "GST extra; camping gear provided but personal warm-wear is traveler's responsibility."
    ]
  },
  {
    id: 8,
    slug: "triund-bir-adventure",
    title: "Triund-Bir Adventure",
    fullName: "Mcleodganj Triund Bir",
    state: "Himachal Pradesh",
    duration: "6 Days / 3 Nights (Delhi to Delhi, incl. overnight bus journeys)",
    price: "999",
    image: "/images/triund-bir-adventure.png",
    video: "/videos/banner-video.mp4",
    rating: "4.9",
    reviews: "220+",
    bestFor: "Trekking, Paragliding, Tibetan Culture",
    itinerary: [
      { day: "Day 0", title: "Delhi to Mcleodganj", description: "Overnight journey." },
      { day: "Day 1", title: "Mcleodganj Arrival", description: "Local exploration & cafe hopping." },
      { day: "Day 2", title: "Trek to Triund", description: "Overnight camping." },
      { day: "Day 3", title: "Mcleodganj to Bir", description: "Paragliding session in Bir." },
      { day: "Day 4", title: "Bir Local Exploration", description: "Depart for Delhi." },
      { day: "Day 5", title: "Delhi Arrival", description: "Trip ends." }
    ],
    importantDetails: [
      "Combines moderate trek (Triund) with tandem paragliding in Bir.",
      "3 nights accommodation on sharing basis; paragliding is weather-dependent.",
      "Paragliding insurance (~₹150) collected on-site.",
      "Best time: March–June and September–November; carry ID proof."
    ]
  },
  {
    id: 9,
    slug: "ladakh-turtuk",
    title: "Ladakh & Turtuk",
    fullName: "Leh Ladakh with Turtuk",
    state: "Ladakh",
    duration: "7 Days / 6 Nights (Leh to Leh, fly-in/fly-out)",
    price: "999",
    image: "/images/ladakh-turtuk.png",
    video: "/videos/banner-video.mp4",
    rating: "4.95",
    reviews: "450+",
    bestFor: "Monasteries, Lakes, Culture",
    itinerary: [
      { day: "Day 1", title: "Leh Arrival", description: "Acclimatization & leisure day." },
      { day: "Day 2", title: "Leh Sightseeing", description: "Cafe hopping, bazaars, local sights." },
      { day: "Day 3", title: "Leh to Nubra Valley", description: "Via Khardung La; Hunder arrival." },
      { day: "Day 4", title: "Turtuk Excursion", description: "Day trip to India's last village, back to Hunder." },
      { day: "Day 5", title: "Nubra to Pangong Tso", description: "Via Shyok Valley." },
      { day: "Day 6", title: "Pangong to Leh", description: "Via Chang La, Thiksey monastery & more." },
      { day: "Day 7", title: "Back Home", description: "Trip ends." }
    ],
    importantDetails: [
      "Fly into Leh (11,500 ft) — mandatory rest day built in on Day 1 to avoid altitude sickness.",
      "Turtuk requires Protected Area Permit (PAP) — arranged by the operator.",
      "Best time: April to September.",
      "6 nights accommodation on sharing basis; carry sunscreen, sunglasses, cash."
    ]
  },
  {
    id: 10,
    slug: "winter-spiti",
    title: "Winter Spiti",
    fullName: "Winter Spiti Expedition",
    state: "Himachal Pradesh",
    duration: "9 Days / 6 Nights (Delhi to Delhi)",
    price: "999",
    image: "/images/winter-spiti.png",
    video: "/videos/ladakh.mp4",
    rating: "4.9",
    reviews: "190+",
    bestFor: "Snow Landscapes, Extreme Winter, Culture",
    itinerary: [
      { day: "Day 0", title: "Delhi to Shimla", description: "Overnight journey." },
      { day: "Day 1", title: "Shimla to Sarahan", description: "Visit Bhimakali Temple." },
      { day: "Day 2", title: "Sarahan to Chitkul", description: "Explore India's last inhabited village." },
      { day: "Day 3", title: "Chitkul to Tabo", description: "Via Khab Sangam, Nako & Gue." },
      { day: "Day 4", title: "Tabo to Kaza", description: "Explore Dhankar, Langza, Komic & Hikkim." },
      { day: "Day 5", title: "Key Monastery & Kibber", description: "Key Monastery, Chicham Bridge & Kaza chill evening." },
      { day: "Day 6", title: "Kaza to Kalpa", description: "Via Reckong Peo." },
      { day: "Day 7", title: "Kalpa to Shimla", description: "Depart for Delhi." },
      { day: "Day 8", title: "Delhi Arrival", description: "Trip ends." }
    ],
    importantDetails: [
      "Winter temperatures drop to -13°C to -27°C — heavy-duty thermal wear essential.",
      "Roads can be snowbound; operator may re-route or use snow-chained vehicles.",
      "Best time: November to February.",
      "6 nights accommodation on sharing basis; limited ATMs beyond Kaza."
    ]
  },
  {
    id: 11,
    slug: "sainj-valley",
    title: "Sainj Valley",
    fullName: "Shangarh & Sainj Valley",
    state: "Himachal Pradesh",
    duration: "5 Days / 2 Nights (Delhi to Delhi, incl. overnight bus journeys)",
    price: "999",
    image: "/images/sainj-valley.png",
    video: "/videos/waterfall.mp4",
    rating: "4.8",
    reviews: "110+",
    bestFor: "Meadows, Offbeat, Peace",
    itinerary: [
      { day: "Day 0", title: "Delhi to Shangarh", description: "Overnight journey." },
      { day: "Day 1", title: "Shangarh Arrival", description: "Explore Sainj Valley meadows." },
      { day: "Day 2", title: "Drive to Jhilli Neahi", description: "Hike to Pundrik Rishi Lake." },
      { day: "Day 3", title: "Raila Fort & Waterfall", description: "Raila Fort & Raila Waterfall hike — Depart for Delhi." },
      { day: "Day 4", title: "Delhi Arrival", description: "Trip ends." }
    ],
    importantDetails: [
      "Shangarh sits at ~7,000 ft — an offbeat, less-crowded alternative to Kasol/Manali.",
      "2 nights accommodation on sharing basis in homestays.",
      "Best time: March–June and September–November.",
      "Limited network connectivity in the valley."
    ]
  },
  {
    id: 12,
    slug: "jibhi-escape",
    title: "Jibhi Escape",
    fullName: "Jibhi & Tirthan Valley",
    state: "Himachal Pradesh",
    duration: "5 Days / 2 Nights (Delhi to Delhi, incl. overnight bus journeys)",
    price: "999",
    image: "/images/jibhi-escape.png",
    video: "/videos/waterfall.mp4",
    rating: "4.85",
    reviews: "260+",
    bestFor: "Waterfalls, Lake Trek, Wooden Cottages",
    itinerary: [
      { day: "Day 0", title: "Delhi to Jibhi", description: "Overnight journey." },
      { day: "Day 1", title: "Jibhi Arrival", description: "Jibhi Waterfall & leisure." },
      { day: "Day 2", title: "Jalori Pass & Serolsar Lake", description: "Jalori Pass drive & Serolsar Lake trek." },
      { day: "Day 3", title: "Chhoie Waterfall", description: "Chhoie Waterfall hike — Depart for Delhi." },
      { day: "Day 4", title: "Delhi Arrival", description: "Trip ends." }
    ],
    importantDetails: [
      "Serolsar Lake trek is a moderate day hike through dense forest — carry good grip shoes.",
      "2 nights accommodation (cottages/homestays) on sharing basis.",
      "Best time: March–May (spring) and September–November.",
      "Great Himalayan National Park entry permits arranged by operator if included."
    ]
  },
  {
    id: 13,
    slug: "bir-paragliding",
    title: "Bir Paragliding",
    fullName: "Bir Billing Paragliding Escape",
    state: "Himachal Pradesh",
    duration: "3 Days / 1 Night (Delhi to Delhi, incl. overnight bus journeys)",
    price: "999",
    image: "/images/bir-paragliding.png",
    video: "/videos/banner-video.mp4",
    rating: "4.9",
    reviews: "380+",
    bestFor: "Paragliding, Sunset, Cafes",
    itinerary: [
      { day: "Day 0", title: "Delhi to Bir", description: "Overnight journey from Delhi to Bir." },
      { day: "Day 1", title: "Paragliding & Bir Exploration", description: "Tandem flight from Billing (~2,400m) to Bir (~1,500m), local streets, bonfire evening." },
      { day: "Day 2", title: "Gunehar Waterfall Hike", description: "Gunehar Waterfall hike & departure back to Delhi." }
    ],
    importantDetails: [
      "Tandem paragliding flight from Billing takeoff to Bir landing.",
      "Paragliding insurance (~₹150) collected in cash on-site.",
      "1 night accommodation (hotel/campsite) on sharing basis.",
      "Best time: March–June and September–November; valid photo ID required."
    ]
  },
  {
    id: 14,
    slug: "yulla-kanda-trek",
    title: "Yulla Kanda Trek",
    fullName: "Yulla Kanda Trek (World's Highest Krishna Temple)",
    state: "Himachal Pradesh",
    duration: "5 Days / 2 Nights (Delhi to Delhi, incl. overnight bus journeys)",
    price: "999",
    image: "/images/yulla-kanda-trek.png",
    video: "/videos/banner-video.mp4",
    rating: "4.85",
    reviews: "95+",
    bestFor: "High Altitude Trekking, Sacred Lakes, Kinnaur",
    itinerary: [
      { day: "Day 0", title: "Delhi to Tapri", description: "Overnight journey." },
      { day: "Day 1", title: "Arrival & Acclimatization", description: "Leisure day for acclimatization." },
      { day: "Day 2", title: "Trek to Yulla Base Camp", description: "Overnight camping." },
      { day: "Day 3", title: "Krishna Temple Summit", description: "Trek to Krishna Temple (~3,895m) — Depart for Delhi." },
      { day: "Day 4", title: "Delhi Arrival", description: "Trip ends." }
    ],
    importantDetails: [
      "Difficulty: Moderate to Difficult; max altitude 3,895m (13,500 ft).",
      "Best time: mid-May to mid-October.",
      "2 nights accommodation (camping/guesthouse) on sharing basis.",
      "Kinnaur district may require Inner Line Permit for certain stretches."
    ]
  },
  {
    id: 15,
    slug: "valley-of-flowers",
    title: "Valley of Flowers",
    fullName: "Valley of Flowers Trek",
    state: "Uttarakhand",
    duration: "6 Days (Rishikesh to Rishikesh)",
    price: "999",
    image: "/images/valley-of-flowers.png",
    video: "/videos/waterfall.mp4",
    rating: "4.95",
    reviews: "290+",
    bestFor: "UNESCO Heritage, Alpine Flowers, Hemkund Sahib",
    itinerary: [
      { day: "Day 1", title: "Rishikesh to Govindghat", description: "Drive from Rishikesh to Joshimath/Govindghat (~260 km)." },
      { day: "Day 2", title: "Govindghat to Ghangaria", description: "Trek via Pulna to Ghangaria (~9 km)." },
      { day: "Day 3", title: "Valley of Flowers Exploration", description: "Ghangaria to Valley of Flowers & back (~8 km)." },
      { day: "Day 4", title: "Hemkund Sahib Trek", description: "Ghangaria to Hemkund Sahib & back (~12 km)." },
      { day: "Day 5", title: "Ghangaria to Govindghat", description: "Trek down to Pulna, drive to Joshimath/Govindghat." },
      { day: "Day 6", title: "Drive back to Rishikesh", description: "Trek ends." }
    ],
    importantDetails: [
      "UNESCO World Heritage Site inside Nanda Devi Biosphere Reserve — forest permit mandatory.",
      "Best time: July to mid-September, peak bloom mid-July to mid-August.",
      "Difficulty: Moderate, gradual ascent over rugged terrain; base altitude ~3,000m+.",
      "Weather is unpredictable — carry rain gear, layered clothing, trekking poles."
    ]
  },
  {
    id: 16,
    slug: "mukteshwar-retreat",
    title: "Mukteshwar Retreat",
    fullName: "Mukteshwar & Kainchi Dham",
    state: "Uttarakhand",
    duration: "3 Days / 1 Night (Delhi to Delhi, incl. overnight bus journeys)",
    price: "999",
    image: "/images/mukteshwar-retreat.png",
    video: "/videos/waterfall.mp4",
    rating: "4.8",
    reviews: "170+",
    bestFor: "Weekend Getaway, Spiritual, Waterfalls",
    itinerary: [
      { day: "Day 0", title: "Delhi to Mukteshwar", description: "Overnight journey." },
      { day: "Day 1", title: "Mukteshwar Arrival", description: "Balugarh Waterfall hike, Chauli Ki Jali, Mukteshwar Temple, bonfire evening." },
      { day: "Day 2", title: "Kainchi Dham Visit", description: "Visit Kainchi Dham (Neem Karoli Baba Ashram) — Depart for Delhi." }
    ],
    importantDetails: [
      "A short, weekend-friendly trip — ideal for first-timers.",
      "Kainchi Dham can get crowded on Saturdays and June 15 anniversary.",
      "1 night accommodation on sharing basis (camps/rooms).",
      "Best time: Year-round, carry a light jacket regardless of season."
    ]
  },
  {
    id: 17,
    slug: "chopta-deoriatal-trek",
    title: "Chopta-Deoriatal Trek",
    fullName: "Chopta Tungnath Deoriatal Trek",
    state: "Uttarakhand",
    duration: "5 Days / 2 Nights (Delhi to Delhi, incl. overnight bus journeys)",
    price: "999",
    image: "/images/chopta-deoriatal-trek.png",
    video: "/videos/waterfall.mp4",
    rating: "4.9",
    reviews: "410+",
    bestFor: "Highest Shiva Temple, Chandrashila Peak, Lakes",
    itinerary: [
      { day: "Day 0", title: "Delhi to Chopta", description: "Overnight journey." },
      { day: "Day 1", title: "Devprayag Sangam En Route", description: "Witness Devprayag confluence, Chopta arrival." },
      { day: "Day 2", title: "Tungnath & Chandrashila Peak", description: "Trek to Chandrashila via Tungnath Temple (~3,680m)." },
      { day: "Day 3", title: "Deoriatal Lake Trek", description: "Trek to Deoriatal — Depart for Delhi via Rishikesh." },
      { day: "Day 4", title: "Delhi Arrival", description: "Trip ends." }
    ],
    importantDetails: [
      "Tungnath–Chandrashila trek (~3.5 km to temple, +1.5 km to peak) is easy-to-moderate.",
      "2 nights accommodation on sharing basis.",
      "Best time: March–June and September–November; avoid heavy monsoon (July–Aug).",
      "Carry warm layers even in summer — temperatures drop sharply at Chandrashila peak."
    ]
  },
  {
    id: 18,
    slug: "chakrata-getaway",
    title: "Chakrata Getaway",
    fullName: "Chakrata Offbeat Escape",
    state: "Uttarakhand",
    duration: "4 Days / 1 Night (Delhi to Delhi, incl. overnight bus journeys)",
    price: "999",
    image: "/images/chakrata-getaway.png",
    video: "/videos/waterfall.mp4",
    rating: "4.75",
    reviews: "130+",
    bestFor: "Tiger Falls, Caves, Hill Views",
    itinerary: [
      { day: "Day 0", title: "Delhi to Chakrata", description: "Overnight journey." },
      { day: "Day 1", title: "Chakrata Arrival", description: "Bhuder Cave trek & local exploration." },
      { day: "Day 2", title: "Tiger Waterfall & Chirmiri Neck", description: "Visit Tiger Waterfall & Chirmiri Neck sunset point — Depart for Delhi." },
      { day: "Day 3", title: "Delhi Arrival", description: "Trip ends." }
    ],
    importantDetails: [
      "Chakrata is a restricted cantonment area — carry valid government ID.",
      "Tiger Falls trek involves moderate descent/climb.",
      "1 night accommodation on sharing basis (resort/cottages).",
      "Best time: March–June and September–November."
    ]
  },
  {
    id: 19,
    slug: "auli-joshimath-trip",
    title: "Auli-Joshimath Trip",
    fullName: "Auli & Joshimath Snow Escape",
    state: "Uttarakhand",
    duration: "5 Days / 2 Nights (Delhi to Delhi, incl. overnight bus journeys)",
    price: "999",
    image: "/images/auli-joshimath-trip.png",
    video: "/videos/banner-video.mp4",
    rating: "4.9",
    reviews: "320+",
    bestFor: "Skiing, Ropeway, Snow Peaks",
    itinerary: [
      { day: "Day 0", title: "Delhi to Auli", description: "Overnight journey." },
      { day: "Day 1", title: "Holy Sangams En Route", description: "Joshimath arrival." },
      { day: "Day 2", title: "Auli Sightseeing", description: "Ropeway & adventure activities (skiing in season)." },
      { day: "Day 3", title: "Rishikesh Exploration", description: "Depart for Delhi." },
      { day: "Day 4", title: "Delhi Arrival", description: "Trip ends." }
    ],
    importantDetails: [
      "Skiing at Auli is seasonal (roughly December–March).",
      "Ropeway (cable car) tickets may be excluded from package cost.",
      "2 nights accommodation on sharing basis.",
      "Best time: Winter (Dec–Feb) for snow; April–June for greenery and clear views."
    ]
  },
  {
    id: 20,
    slug: "kashmir-paradise",
    title: "Kashmir Paradise",
    fullName: "Kashmir Paradise 6 Days 5 Nights",
    state: "Jammu & Kashmir",
    duration: "6 Days / 5 Nights (Srinagar to Srinagar, fly-in/fly-out)",
    price: "999",
    image: "/images/kashmir-paradise.png",
    video: "/videos/waterfall.mp4",
    rating: "4.95",
    reviews: "520+",
    bestFor: "Dal Lake, Gulmarg Gondola, Pahalgam",
    itinerary: [
      { day: "Day 1", title: "Arrive at Srinagar", description: "Mughal Gardens sightseeing (Shalimar Bagh, Nishat Bagh, Chashmashahi)." },
      { day: "Day 2", title: "Visit Gulmarg", description: "Cable car (Gondola) ride, alpine scenery." },
      { day: "Day 3", title: "Srinagar to Sonamarg & Back", description: "Thajiwas Glacier views & Sonamarg meadows." },
      { day: "Day 4", title: "Srinagar to Pahalgam", description: "Valley of Shepherds, Betaab Valley, meadows." },
      { day: "Day 5", title: "Pahalgam to Srinagar", description: "Shikara ride on Dal Lake & houseboat evening." },
      { day: "Day 6", title: "Departure", description: "Trip ends." }
    ],
    importantDetails: [
      "Fly into and out of Srinagar; private taxi handles all local transfers.",
      "Gondola cable car & pony rides available on-site.",
      "Best time: April–October for pleasant weather; December–February for snow.",
      "5 nights hotel accommodation with home-style meals included."
    ]
  },
  {
    id: 21,
    slug: "rajasthan-backpacking",
    title: "Rajasthan Backpacking",
    fullName: "Rajasthan Backpacking (Udaipur–Jodhpur–Jaisalmer)",
    state: "Rajasthan",
    duration: "6 Days (Udaipur to Udaipur, road trip)",
    price: "999",
    image: "/images/rajasthan-backpacking.png",
    video: "/videos/udaipur.mp4",
    rating: "4.9",
    reviews: "350+",
    bestFor: "Forts, Palaces, Desert Safari, Swiss Camps",
    itinerary: [
      { day: "Day 1", title: "Udaipur Arrival", description: "Local exploration (City Palace, Jagdish Temple, Lake Pichola)." },
      { day: "Day 2", title: "Udaipur to Jodhpur", description: "Via Kumbhalgarh Fort." },
      { day: "Day 3", title: "Jodhpur Local Exploration", description: "Mehrangarh Fort, Jaswant Thada, old city markets." },
      { day: "Day 4", title: "Jodhpur to Jaisalmer", description: "Thar Desert diaries, camel safari & desert camp." },
      { day: "Day 5", title: "Jaisalmer City Exploration", description: "Depart for Udaipur." },
      { day: "Day 6", title: "Reach Udaipur", description: "Trip ends." }
    ],
    importantDetails: [
      "Accommodation mix: 1 night hotel (Udaipur), 2 nights hotel (Jodhpur), 1 night Swiss camp (Jaisalmer).",
      "Desert safari and cultural evening in Jaisalmer included.",
      "Best time: October to March; summers (April–June) are extremely hot.",
      "8 meals included (breakfast + dinner on most days) + complimentary snacks in Jaisalmer."
    ]
  },
  {
    id: 22,
    slug: "udaipur-abu-trip",
    title: "Udaipur-Abu Trip",
    fullName: "Udaipur & Mount Abu Weekend Getaway",
    state: "Rajasthan",
    duration: "5 Days / 2 Nights (Gurugram to Gurugram, incl. overnight bus journeys)",
    price: "999",
    image: "/images/udaipur-abu-trip.png",
    video: "/videos/udaipur.mp4",
    rating: "4.8",
    reviews: "190+",
    bestFor: "Hill Station, Temples, Lakes",
    itinerary: [
      { day: "Day 0", title: "Gurugram to Udaipur", description: "Overnight journey." },
      { day: "Day 1", title: "Udaipur Arrival", description: "Old City exploration (City Palace, Lake Pichola, Saheliyon Ki Bari)." },
      { day: "Day 2", title: "Drive to Mount Abu", description: "Full-day sightseeing (Nakki Lake, Dilwara Jain Temples, sunset point)." },
      { day: "Day 3", title: "Back to Udaipur", description: "Lakes & hills, depart for Gurugram." },
      { day: "Day 4", title: "Gurugram Arrival", description: "Trip ends." }
    ],
    importantDetails: [
      "Mount Abu is Rajasthan's only hill station.",
      "2 nights accommodation (hotel in Udaipur) on sharing basis; 4 meals included.",
      "Best time: Winter (October–March).",
      "Dilwara Temples have modest-dress requirements and restrict photography inside."
    ]
  },
  {
    id: 23,
    slug: "udaipur-kumbhalgarh",
    title: "Udaipur-Kumbhalgarh",
    fullName: "Udaipur & Kumbhalgarh Fort Heritage Tour",
    state: "Rajasthan",
    duration: "5 Days / 2 Nights (Gurugram to Gurugram, incl. overnight bus journeys)",
    price: "999",
    image: "/images/udaipur-kumbhalgarh.png",
    video: "/videos/udaipur.mp4",
    rating: "4.85",
    reviews: "160+",
    bestFor: "World's 2nd Longest Wall, Heritage, Lakes",
    itinerary: [
      { day: "Day 0", title: "Gurugram to Udaipur", description: "Overnight journey." },
      { day: "Day 1", title: "Udaipur Arrival", description: "Lakes, bazaars & sightseeing." },
      { day: "Day 2", title: "Udaipur Old City Exploration", description: "Cafe hopping, heritage sites." },
      { day: "Day 3", title: "Kumbhalgarh Fort Day Trip", description: "Explore Kumbhalgarh Fort wall — Depart for Gurugram." },
      { day: "Day 4", title: "Gurugram Arrival", description: "Trip ends." }
    ],
    importantDetails: [
      "Kumbhalgarh Fort has the second-longest continuous wall in the world (36+ km).",
      "2 nights accommodation (hotel in Udaipur) on sharing basis.",
      "Best time: October to March; avoid peak summer heat.",
      "Kumbhalgarh Wildlife Sanctuary safaris optional add-on."
    ]
  },
  {
    id: 24,
    slug: "jaisalmer-longewala",
    title: "Jaisalmer-Longewala",
    fullName: "Jaisalmer & Longewala Battlefield Tour",
    state: "Rajasthan",
    duration: "4 Days / 2 Nights (Gurugram to Gurugram, incl. overnight bus journeys)",
    price: "999",
    image: "/images/jaisalmer-longewala.png",
    video: "/videos/udaipur.mp4",
    rating: "4.9",
    reviews: "240+",
    bestFor: "Golden Fort, War Memorial, Desert Camping",
    itinerary: [
      { day: "Day 0", title: "Gurugram to Jaisalmer", description: "Overnight journey." },
      { day: "Day 1", title: "Jaisalmer Arrival", description: "Desert safari at Sam Sand Dunes & Rajasthani folk night." },
      { day: "Day 2", title: "Kuldhara & Longewala", description: "Kuldhara ghost village & Longewala War Memorial." },
      { day: "Day 3", title: "Jaisalmer City Exploration", description: "Jaisalmer Fort, Patwon Ki Haveli — Depart for Gurugram." }
    ],
    importantDetails: [
      "Longewala is near India-Pakistan border — carry valid photo ID.",
      "Desert safari includes camel rides and overnight desert camp experience.",
      "2 nights accommodation on sharing basis.",
      "Best time: October to March."
    ]
  },
  {
    id: 25,
    slug: "kerala-backpacking",
    title: "Kerala Backpacking",
    fullName: "Kerala Backpacking (Munnar–Alleppey–Varkala)",
    state: "Kerala",
    duration: "7 Days / 6 Nights (Kochi to Trivandrum, one-way)",
    price: "999",
    image: "/images/kerala-backpacking.png",
    video: "/videos/waterfall.mp4",
    rating: "4.95",
    reviews: "470+",
    bestFor: "Tea Gardens, Houseboat, Cliff Beaches",
    itinerary: [
      { day: "Day 1", title: "Kochi Arrival to Munnar", description: "Drive to Munnar, tea plantation views." },
      { day: "Day 2", title: "Munnar Exploration", description: "Tea gardens, Eravikulam National Park." },
      { day: "Day 3", title: "Munnar to Thekkady", description: "Periyar National Park, bamboo rafting." },
      { day: "Day 4", title: "Thekkady to Alleppey", description: "Backwaters & houseboat experience." },
      { day: "Day 5", title: "Alleppey to Varkala", description: "Cliffside beaches & sunset cafes." },
      { day: "Day 6", title: "Varkala to Munroe Island", description: "Backwater exploration." },
      { day: "Day 7", title: "Varkala to Trivandrum", description: "Trip ends." }
    ],
    importantDetails: [
      "Route is one-way (Kochi in, Trivandrum out) — plan onward travel from Trivandrum.",
      "Houseboat stay in Alleppey backwaters included.",
      "Best time: September to March, avoiding heavy monsoon.",
      "6 nights accommodation on sharing basis across multiple towns."
    ]
  },
  {
    id: 26,
    slug: "ooty-coorg-escape",
    title: "Ooty-Coorg Escape",
    fullName: "Ooty & Coorg Escape (4N/5D)",
    state: "Tamil Nadu / Karnataka",
    duration: "5 Days / 4 Nights (Bangalore to Bangalore)",
    price: "999",
    image: "/images/ooty-coorg-escape.png",
    video: "/videos/waterfall.mp4",
    rating: "4.85",
    reviews: "310+",
    bestFor: "Coffee Estates, Toy Train, Waterfalls",
    itinerary: [
      { day: "Day 1", title: "Bangalore to Coorg", description: "Kaveri Nisarga Dhama, Dubare Elephant Camp, Golden Temple." },
      { day: "Day 2", title: "Coorg Local Sightseeing", description: "Abbey Falls, Raja's Seat, coffee plantations." },
      { day: "Day 3", title: "Coorg to Ooty", description: "National park visits en route." },
      { day: "Day 4", title: "Ooty Local Sightseeing", description: "Nilgiri Mountain Railway (toy train), tea gardens." },
      { day: "Day 5", title: "Departure to Bangalore", description: "Trip ends." }
    ],
    importantDetails: [
      "2 nights in Ooty + 2 nights in Coorg, hotel accommodation on sharing basis.",
      "Nilgiri Mountain Railway (toy train) tickets subject to availability.",
      "Best time: October to June; Ooty gets cold in winter (Dec–Jan).",
      "Elephant camp and national park entries may have separate entry fees."
    ]
  },
  {
    id: 27,
    slug: "meghalaya-backpacking",
    title: "Meghalaya Backpacking",
    fullName: "Meghalaya Backpacking & Living Root Bridges",
    state: "Meghalaya",
    duration: "6 Days / 5 Nights (Guwahati to Guwahati)",
    price: "999",
    image: "/images/meghalaya-backpacking.png",
    video: "/videos/waterfall.mp4",
    rating: "4.95",
    reviews: "390+",
    bestFor: "Living Root Bridges, Dawki Clear River, Waterfalls",
    itinerary: [
      { day: "Day 1", title: "Guwahati Arrival", description: "Drive to Shillong, evening chill scenes." },
      { day: "Day 2", title: "Shillong to Cherrapunji", description: "Waterfalls & viewpoints." },
      { day: "Day 3", title: "Living Root Bridges", description: "Double-Decker Living Root Bridge trek." },
      { day: "Day 4", title: "Cherrapunji to Shnongpdeng", description: "Dawki crystal-clear river camping." },
      { day: "Day 5", title: "Dawki Water Sports & Shillong", description: "Boating & cliff jumping, drive back to Shillong." },
      { day: "Day 6", title: "Shillong to Guwahati", description: "Trip ends." }
    ],
    importantDetails: [
      "Reaching Living Root Bridges involves a steep trek with hundreds of steps down and back up.",
      "Cherrapunji is one of the wettest places on Earth — rain gear recommended.",
      "Best time: October to April for clearest views.",
      "5 nights accommodation on sharing basis."
    ]
  }
];

export function getPackageBySlug(slug: string): PackageData {
  const normalized = slug.toLowerCase().replace(/[^a-z0-9]/g, "");
  const found = ALL_PACKAGES.find(p =>
    p.slug.replace(/[^a-z0-9]/g, "") === normalized ||
    normalized.includes(p.slug.replace(/[^a-z0-9]/g, "")) ||
    p.slug.replace(/[^a-z0-9]/g, "").includes(normalized)
  );
  return found || ALL_PACKAGES[0];
}
