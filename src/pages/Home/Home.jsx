import "./Home.css";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
// import AdvetisementCarousel from "../../components/AdvetisementCarousel/AdvetisementCarousel";
// import TrendingNow from "../../components/TrendingNow/TrendingNow";
// import NewArrivals from "../../components/NewArrivals/NewArrivals";
// import Specials from "../../components/Specials/Specials";
// import BestSellers from "../../components/BestSellers/BestSellers";
// import { useEffect } from "react";
// import axios from "axios";

export default function Home() {


  return (
    <div className="home">
      <Navbar />
      {/* <AdvetisementCarousel />
      <TrendingNow />
      <NewArrivals />
      <Specials />
      <BestSellers /> */}
      <Footer />
    </div>
  );
}
