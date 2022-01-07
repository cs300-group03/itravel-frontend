import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Select from 'react-select'

import homeImage from "../../images/img-1.jpg";
const { useState } = React;


export default function Hero() {
  const options = [
    { value: 'HoChiMinh', label: 'Ho Chi Minh, Viet Nam' },
    { value: 'HaNoi', label: 'Ha Noi, Viet Nam' },
    { value: 'DaNang', label: 'Da Nang, Viet Nam' }
  ]
  const [count, setCount] = useState(0);
  const user = useSelector(state => state.auth.user);

  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>iTravel</h1>
          <p>
            {`Hi ${user.name}, let's explore some schedules to give it a go!`}
          </p>
        </div>
        <div className="search">
          <div className="container">
          <label htmlFor="">Destination</label>

          <Select options={options} />
          </div>
          <div className="container">
            <label htmlFor="">Duration</label>
            
      <div className="button__wrapper">
        <button onClick={() => setCount(count - 1)}>-</button>
         <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>
        {count}
        </h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
          </div>
          <button1>Design your own schedule</button1>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  .background {
    height: 100%;
    img {
      width: 100%;
      height: 50%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {

      h1 {
        font-size: 4rem;
        letter-spacing: 0.2rem;
        color: white
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
        color: white

      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #125C13;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      .button__wrapper {
        display: flex;
        gap: 1rem;
        align-items: center;
          alignSelf: 'center',
                borderRadius: 10,

        & > * {
          border: none;
          background-color: white;
          box-shadow: 0px 0px 10px $clr-gray200;
          font-weight: bold;
          font-size: 1rem;
          color: inherit;
          border-radius: 50%;
          outline: none;
          height: 2rem;
          width: 2rem;
          cursor: pointer;
          transition: background-color 250ms ease-in-out, transform 50ms ease-in-out;
      
          &:hover {
            background-color: $clr-gray200;
          }
      
          &:active {
            transform: scale(0.9);
          }
      
          &:focus {
            box-shadow: 0 0 0 3px $clr-gray500;
          }
        }
      }
      button1 {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #125C13;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #F4A442;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: #125C13;
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;