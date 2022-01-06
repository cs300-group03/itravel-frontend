import React, { useEffect } from "react";
import Hero from "../components/HeroSection/HeroSection";
import scrollreveal from "scrollreveal";
import ScrollToTop from "../components/ScrollToTop";
import styled from "styled-components";
import Services from "../components/Recommend/RecommendLocations";
import FeaturedSchedules from "../components/featuredSchedules/featuredSchedules";
import Addition from "../components/footer/homeAddition";

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
