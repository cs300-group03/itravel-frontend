import React, { useEffect } from "react";
import Hero from "../../components/HeroSection/HeroSection";
import scrollreveal from "scrollreveal";
import ScrollToTop from "../../components/ScrollToTop";
import styled from "styled-components";
import SearchService from '../../components/searchbox/search-service'
import ServicesLine from "../../components/service-line";
import FeaturedServices from "../../components/featuredServices";
export default function Explore() {

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
        #servicesearch,
        #cates
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
      <Section id="title">
      <div className="title">
          <h1>iTravel</h1>
          <p>
            Let's explore some highlight services
          </p>
        </div> 
    </Section>  
      <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
       }}>
      <SearchService/>
       </div>
      <h2
          style={{
            textAlign: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            textAlignVertical: 'center',
            alignContent: 'center',
            marginTop: '2rem'
          }}>
          Categories
        </h2>
        <ServicesLine />
        <h2
          style={{
            textAlign: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            textAlignVertical: 'center',
            alignContent: 'center',
            marginTop: '2rem'
          }}>
          Featured services
        </h2>
        {//<FeaturedServices/>
}

    </div>

  );
}
const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

    .title {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1rem;
      }   
    }
  }
`;

