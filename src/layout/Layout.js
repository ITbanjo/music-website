import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import ShowsList from "../shows/ShowsList";
import "@fontsource/roboto/300.css";
import "./Layout.css";
import About from "../about/About";

function Layout() {
  return (
    <div className="App-header">
      <Header />
      <body className="container bg-transparent">
        <Routes>
          <Route exact={true} path="/" element={<ShowsList />}></Route>
          <Route exact={true} path="/about" element={<About />}></Route>
        </Routes>
      </body>
    </div>
  );
}

export default Layout;
