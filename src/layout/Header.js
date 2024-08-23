import React from "react";
import { Link } from "react-router-dom";

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
    <header>
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
              <Link className="nav-link" to={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
