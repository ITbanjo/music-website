import React from "react";
import { Link } from "react-router-dom";
import fbIcon from "../images/fb-icon.png";
import igIcon from "../images/ig-icon.png";
import ytIcon from "../images/yt-icon.png";

function Header() {
  // const style = {
  //   fontSize: "calc(20px + 3vmin)",
  //   backgroundImage: "linear-gradient(to right, #050505 , #2F2B21)",
  // };

  const style = {
    fontSize: "calc(20px + 3vmin)",
    opacity: "60%",
  };

  return (
    <header className="App-header">
      <div className="header">
        <div className="p-5"></div>
        <div className="p-5"></div>
        <div className="p-5"></div>

        <div className="banner">
          <h1 className="text-center" style={style}>
            Isaac Taylor Music
          </h1>

          <div className="p-5"></div>
          <div className="p-5"></div>

          <nav
            className="navbar justify-content-center"
            style={{ background: "rgba(5, 5, 5, .5)" }}
          >
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Dates
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/media"}>
                  Media
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/contact"}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <ul className="nav justify-content-center pt-1">
        <li className="nav-item">
          <a href="https://www.facebook.com/ITbanjo" target="_blank">
            <img src={fbIcon} className="h-85 p-1 invert" />
          </a>
        </li>
        <li className="nav-item">
          <a href="https://www.instagram.com/itbanjo/" target="_blank">
            <img src={igIcon} className="h-85 p-1 invert" />
          </a>
        </li>
        {/* <li className="nav-item">
          <a href="https://www.youtube.com/@isaactaylor7553" target="_blank">
            <img src={ytIcon} className="h-85 p-1" />
          </a>
        </li> */}
      </ul>
    </header>
  );
}

export default Header;
