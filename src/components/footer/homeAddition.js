import React from "react";
import styled from "styled-components";
import cur from "../../images/group39.png";
import cur2 from "../../images/Group 46.png";

export default function Addition() {
  const data = [
    {
      icon: cur,
    },
    {
      icon: cur2,
    },
   
  ];
  return (
    <Section id="services">
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
  grid-template-columns: repeat(6, 1fr);
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