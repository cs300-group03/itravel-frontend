import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { Notifications, ExpandMore } from "@material-ui/icons";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} alt="logo"></img>
        <h1 className="app-name">iTravel</h1>
      </div>

      <div className="header-menu">
        <h2> Home </h2>
        <h2> Explore services </h2>
      </div>

      <div className="header-right">
        <div className="header-info">
          <Avatar src="https://icdn.dantri.com.vn/2017/emma-watson-5-1488809769584.jpg" />
          <h4> Emma Watson </h4>
        </div>
        <div className="header-icon">
          <Notifications fontSize="large" />
          <ExpandMore fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Header;
