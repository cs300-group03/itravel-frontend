import React, { useEffect } from "react";
import Hero from "../components/HeroSection/HeroSection";
import scrollreveal from "scrollreveal";
import ScrollToTop from "../components/ScrollToTop";
import styled from "styled-components";
import Services from "../components/Recommend/RecommendLocations";
import FeaturedSchedules from "../components/featuredSchedules/featuredSchedules";
import Addition from "../components/footer/homeAddition";
import { getProfile } from '../services';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from '../store/auth';

export default function Home() {
  const [trash, setTrash] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function firstAuthorize() {
      const response = await getProfile();
      if (response) {
        dispatch(setUser(response));
      } else {
        navigate('/landing');
      }
    };
    firstAuthorize();
  }, [trash]);

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
