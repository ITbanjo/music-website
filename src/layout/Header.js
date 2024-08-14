import React from "react";
import isaacbw from "../images/isaac-bw.jpeg";
import { Link } from "react-router-dom";

function Header() {
  const style = {
    fontSize: "calc(30px + 2vmin)",
    backgroundImage: "linear-gradient(to right, #050505 , #2F2B21)",
  };

  return (
    <header>
      <div
        className="d-flex align-items-center border-bottom border-dark"
        style={style}
      >
        <div className="col-3">
          <img src={isaacbw} />
        </div>

        <div className="col-9">
          <h1>Isaac Taylor Music</h1>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#252120" }}
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
            <Link className="nav-link" to={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
