import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  let classname = "header-fixed";
  const [isSroll, setIsScroll] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <div className="header">
      <div className={isSroll ? "header-fixed1" : "header-fixed"}>
        <div className="header-pages">
          <NavLink
            className={({ isActive }) => (isActive ? "botton-link" : "")}
            to=""
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "botton-link" : "")}
            to="match"
          >
            Match
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "botton-link" : "")}
            to="team"
          >
            Team
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "botton-link" : "")}
            to="shop"
          >
            Shop
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
