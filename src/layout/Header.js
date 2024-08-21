import React from "react";
import isaacbw from "../images/isaac-bw.jpeg";
import { Link } from "react-router-dom";

function Header() {
  const style = {
    fontSize: "calc(20px + 3vmin)",
    backgroundImage: "linear-gradient(to right, #050505 , #2F2B21)",
  };

  return (
    <header>
      <div
        className="d-md-flex d-flex-column  align-items-center border-bottom border-dark"
        style={style}
      >
        <div className="col-md-3 p-0">
          <img src={isaacbw} className="w-100" />
        </div>

        <div
          className="col-md-9 text-center py-2"
          style={{ fontSize: "calc(20px + 4vmin)" }}
        >
          Isaac Taylor Music
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
