import React from "react";
import styled from "styled-components";
import service1 from "../../images/Group 12.png";
import service2 from "../../images/Group 13.png";
import service3 from "../../images/Group 14.png";
import service5 from "../../images/Group 16.png";
import service6 from "../../images/Group 17.png";
import service7 from "../../images/Group 18.png";
import service8 from "../../images/Group 19.png";


export default function ServicesLine() {
  const data = [
    {
      icon: service1,
    },
    {
      icon: service2,
    },
    {
      icon: service3,
    },

    {
        icon: service5,
      },
      {
        icon: service6,
      },
      {
        icon: service7,
      },
      {
        icon: service8,
      },
  ];
  return (
    <Section id="servicesLine">
        <p></p>
      {data.map((service, index) => {
        return (
          <div className="service">
            <div className="icon">
              <img
              src={service.icon} alt="" />
            </div>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  padding:  2rem ;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 1rem;
  .service {
    display: flex;
   justify-content: center;
   align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: white;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-0.4rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
    }
    .icon {
      img {
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    
      }
    }
  }
`;