import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import ShowsList from "../shows/ShowsList";
import "@fontsource/roboto/300.css";
import "./Layout.css";
import About from "../about/About";

import Contact from "../contact/Contact";
import Media from "../media/Media";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route exact={true} path="/" element={<ShowsList />}></Route>
          <Route exact={true} path="/about" element={<About />}></Route>
          <Route exact={true} path="/contact" element={<Contact />}></Route>
          <Route exact={true} path="/media" element={<Media />}></Route>
        </Routes>
      </div>

      <div className="p-5"></div>
    </>
  );
}

export default Layout;
