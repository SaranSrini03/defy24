import React from "react";
import "./navbar.css";
import ConnectButton from '../ConnectButton/ConnectButton';

export const Navbar = () => {
  return (
    <div className="container">
        <div className="NavTop">
            <div className="logo"></div>
            {/* <img alt="logo" /> */}
            <ConnectButton title="Connect" />
        </div>
          <div id="Options">
            <button className="otherbtn1">Joint<br/>Event</button>
            <button className="otherbtn2">Create<br/>Event</button>
            <button className="otherbtn3">Profile</button>
          </div>  
    </div>
  );
};
