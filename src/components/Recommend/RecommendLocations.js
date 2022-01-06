import React from "react";
import styled from "styled-components";
import service1 from "../../images/sapa.png";
import service2 from "../../images/dalat.png";
import service3 from "../../images/vungtau.png";
import service4 from "../../images/hanoi.png";

export default function Services() {
  const data = [
    {
      icon: service1,
      subtitle:  "Sa Pa",
    },
    {
      icon: service2,
      subtitle: "Da Lat",
    },
    {
      icon: service3,
      subtitle: "Vung Tau",
    },
    {
      icon: service4,
      subtitle: "Ha Noi",
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
            <p
          style={{
            textAlign: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            textAlignVertical: 'center',
            alignContent: 'center',
          }}>
          {service.subtitle}
        </p>
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