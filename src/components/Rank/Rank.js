import React from "react";
import "./Rank.css";
import { NavLink } from "react-router-dom";
const Rank = () => {
  return (
    <div className="border-components rank">
      <div className="name-components">Rank</div>
      <div className="name-team-rank">
        <div className="name-team-ranking">
          {" "}
          <NavLink to="team/1" className="">
            {" "}
            Tên nhóm bóng đá 1{" "}
          </NavLink>{" "}
        </div>
        <div className="name-team-ranking"> Tên nhóm bóng đá 1 </div>
        <div className="name-team-ranking"> Tên nhóm bóng đá 1 </div>
        <div className="name-team-ranking"> Tên nhóm bóng đá 1 </div>
        <div className="name-team-ranking"> Tên nhóm bóng đá 1 </div>
      </div>
    </div>
  );
};

export default Rank;
