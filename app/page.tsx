import React from "react";
// import "../styles/Home.css";
import ReusableTripsCarousel from "../src/components/reusable-trips-carousel";
import Banner from "../src/components/banner";
import WhyChooseUse from "../src/components/why-choose-us";
import OurJourneys from "../src/components/our-journeys";
// import Map from "../src/components/t";
import TripsMap from "../src/components/trips-map";
interface trips {
  id: number;
  title: string;
  price: string;
  image: string;
  state?: string;
  slug?: string;
}
const Home = () => {
  const indiaTrips: trips[] = [
    { id: 1, title: "Kheerganga Trek", state: "Himachal Pradesh", price: "5,999", image: "/images/kheerganga-trek.png", slug: "kheerganga-trek" },
    { id: 2, title: "Jispa Getaway", state: "Himachal Pradesh", price: "8,499", image: "/images/jispa-getaway.png", slug: "jispa-getaway" },
    { id: 3, title: "Manali-Leh-Srinagar", state: "Himachal Pradesh / Ladakh / J&K", price: "24,999", image: "/images/manali-leh-srinagar.png", slug: "manali-leh-srinagar" },
    { id: 4, title: "Sissu-Kasol Trip", state: "Himachal Pradesh", price: "7,999", image: "/images/sissu-kasol-trip.png", slug: "sissu-kasol-trip" },
    { id: 5, title: "Himachal Explorer", state: "Himachal Pradesh", price: "9,499", image: "/images/himachal-explorer.png", slug: "himachal-explorer" },
    { id: 6, title: "Zanskar Expedition", state: "Himachal Pradesh / Ladakh", price: "18,999", image: "/images/zanskar-expedition.png", slug: "zanskar-expedition" },
    { id: 7, title: "Triund Trek", state: "Himachal Pradesh", price: "4,999", image: "/images/triund-trek.png", slug: "triund-trek" },
    { id: 8, title: "Triund-Bir Adventure", state: "Himachal Pradesh", price: "6,999", image: "/images/triund-bir-adventure.png", slug: "triund-bir-adventure" },
    { id: 9, title: "Ladakh & Turtuk", state: "Ladakh", price: "21,999", image: "/images/ladakh-turtuk.png", slug: "ladakh-turtuk" },
    { id: 10, title: "Winter Spiti", state: "Himachal Pradesh", price: "17,999", image: "/images/winter-spiti.png", slug: "winter-spiti" },
    { id: 11, title: "Sainj Valley", state: "Himachal Pradesh", price: "6,499", image: "/images/sainj-valley.png", slug: "sainj-valley" },
    { id: 12, title: "Jibhi Escape", state: "Himachal Pradesh", price: "6,999", image: "/images/jibhi-escape.png", slug: "jibhi-escape" },
    { id: 13, title: "Bir Paragliding", state: "Himachal Pradesh", price: "5,499", image: "/images/bir-paragliding.png", slug: "bir-paragliding" },
    { id: 14, title: "Yulla Kanda Trek", state: "Himachal Pradesh", price: "7,499", image: "/images/yulla-kanda-trek.png", slug: "yulla-kanda-trek" },
    { id: 15, title: "Valley of Flowers", state: "Uttarakhand", price: "11,999", image: "/images/valley-of-flowers.png", slug: "valley-of-flowers" },
    { id: 16, title: "Mukteshwar Retreat", state: "Uttarakhand", price: "5,999", image: "/images/mukteshwar-retreat.png", slug: "mukteshwar-retreat" },
    { id: 17, title: "Chopta-Deoriatal Trek", state: "Uttarakhand", price: "6,999", image: "/images/chopta-deoriatal-trek.png", slug: "chopta-deoriatal-trek" },
    { id: 18, title: "Chakrata Getaway", state: "Uttarakhand", price: "4,999", image: "/images/chakrata-getaway.png", slug: "chakrata-getaway" },
    { id: 19, title: "Auli-Joshimath Trip", state: "Uttarakhand", price: "8,999", image: "/images/auli-joshimath-trip.png", slug: "auli-joshimath-trip" },
    { id: 20, title: "Kashmir Paradise", state: "Jammu & Kashmir", price: "16,499", image: "/images/kashmir-paradise.png", slug: "kashmir-paradise" },
    { id: 21, title: "Rajasthan Backpacking", state: "Rajasthan", price: "14,999", image: "/images/rajasthan-backpacking.png", slug: "rajasthan-backpacking" },
    { id: 22, title: "Udaipur-Abu Trip", state: "Rajasthan", price: "7,999", image: "/images/udaipur-abu-trip.png", slug: "udaipur-abu-trip" },
    { id: 23, title: "Udaipur-Kumbhalgarh", state: "Rajasthan", price: "7,499", image: "/images/udaipur-kumbhalgarh.png", slug: "udaipur-kumbhalgarh" },
    { id: 24, title: "Jaisalmer-Longewala", state: "Rajasthan", price: "6,999", image: "/images/jaisalmer-longewala.png", slug: "jaisalmer-longewala" },
    { id: 25, title: "Kerala Backpacking", state: "Kerala", price: "13,999", image: "/images/kerala-backpacking.png", slug: "kerala-backpacking" },
    { id: 26, title: "Ooty-Coorg Escape", state: "Tamil Nadu / Karnataka", price: "11,499", image: "/images/ooty-coorg-escape.png", slug: "ooty-coorg-escape" },
    { id: 27, title: "Meghalaya Backpacking", state: "Meghalaya", price: "13,499", image: "/images/meghalaya-backpacking.png", slug: "meghalaya-backpacking" },
  ];

  const internationalTrips: trips[] = [
    { id: 1, title: "Bali", price: "45,800", image: "/images/bali.png" },
    {
      id: 2,
      title: "New Zealand",
      price: "89,999",
      image: "/images/newzealand.png",
    },
    { id: 3, title: "Dubai", price: "54,499", image: "/images/dubai.png" },
    {
      id: 4,
      title: "Thailand",
      price: "32,499",
      image: "/images/thailand.png",
    },
    {
      id: 5,
      title: "Maldives",
      price: "79,499",
      image: "/images/maldives.png",
    },
    {
      id: 6,
      title: "Singapore",
      price: "49,999",
      image: "/images/singapore.png",
    },
    { id: 7, title: "Vietnam", price: "38,499", image: "/images/vietnam.png" },
  ];

  return (
    <div className="position-relative">
      <div className="">
        <ReusableTripsCarousel
          trips={indiaTrips}
          bannerTitle="India Trips"
          bannerSubtitle="A Journey Through Time, Colour And Culture"
          bannerVideo="/videos/waterfall.mp4"
          bannerClass="india-trips-banner"
          currencySymbol="₹"
        />

      </div>
      <Banner />
      <TripsMap />
      <div>
        <ReusableTripsCarousel
          trips={internationalTrips}
          bannerTitle="International Trips"
          bannerSubtitle="Discover the World Beyond Borders"
          bannerVideo="/videos/international-trips-bg.mp4"
          bannerClass="international-trips-banner"
          currencySymbol="₹"
          autoScrollSpeed={4000}
        />
      </div>
      <WhyChooseUse />
      <div>
        <video
          className="w-100 object-fit-cover h-500px row g-0 p-lg-5"
          src="/videos/banner-video.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>

      <OurJourneys />
    </div>
  );
};

export default Home;
