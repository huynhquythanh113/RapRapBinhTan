import React from "react";
import Slider from "./Slider/Slider.js";
import Match from "./Match/Match.js";
import Rank from "./Rank/Rank.js";
import Shop from "./Shop/Shop.js";
import "./all.css";
function home() {
  return (
    <>
      <div>
        <div className="home-components">
          <Slider />
        </div>
        <div className="column-components">
          <Rank />
          <Shop />
          <Match />
        </div>
      </div>
    </>
  );
}

export default home;
