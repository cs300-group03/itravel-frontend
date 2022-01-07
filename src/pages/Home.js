import React, { useEffect } from "react";
import Hero from "../components/HeroSection/HeroSection";
import scrollreveal from "scrollreveal";
import ScrollToTop from "../components/ScrollToTop";
import Services from "../components/Recommend/RecommendLocations";
import FeaturedSchedules from "../components/featuredSchedules/featuredSchedules";
import Addition from "../components/footer/homeAddition";
import Header from "../components/header/Header";

export default function Home() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        header,
        #hero,
        #services,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div>
      <Header/>
      <ScrollToTop />
      <Hero />
      <p
          style={{
            textAlign: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            textAlignVertical: 'center',
            alignContent: 'center',
            marginTop: '2rem'
          }}>
          Inspiration for your next trip
        </p>
        <Services />
        <p
          style={{
            textAlign: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            textAlignVertical: 'center',
            alignContent: 'center',
            marginTop: '2rem'
          }}>
          Discover featured experiences
        </p>
        <FeaturedSchedules/>
        <Addition/>
        
    </div>

  );
}
