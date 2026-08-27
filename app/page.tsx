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
}
const Home = () => {
  const indiaTrips:trips[] = [
    {
      id: 1,
      title: "Leh Ladakh",
      price: "15,800",
      image: "/images/ladakh.png",
    },
    { id: 2, title: "Spiti", price: "17,999", image: "/images/spiti.png" },
    { id: 3, title: "Kashmir", price: "24,499", image: "/images/kashmir.png" },
    {
      id: 4,
      title: "Meghalaya",
      price: "13,499",
      image: "/images/meghalaya.png",
    },
    { id: 5, title: "Zanskar", price: "9,499", image: "/images/zanskar.png" },
    { id: 6, title: "Himachal", price: "7,999", image: "/images/himachal.png" },
    { id: 7, title: "Sikkim", price: "21,499", image: "/images/sikkim.png" },
  ];

  const internationalTrips:trips[] = [
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
          trips={internationalTrips}
          bannerTitle="International Trips"
          bannerSubtitle="Discover the World Beyond Borders"
          bannerVideo="/videos/international-trips-bg.mp4"
          bannerClass="international-trips-banner"
          currencySymbol="₹"
          autoScrollSpeed={4000}
        />
      </div>
      <Banner />
      <TripsMap />
      <div>
        <ReusableTripsCarousel
          trips={indiaTrips}
          bannerTitle="India Trips"
          bannerSubtitle="A Journey Through Time, Colour And Culture"
          bannerVideo="/videos/waterfall.mp4"
          bannerClass="india-trips-banner"
          currencySymbol="₹"
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
