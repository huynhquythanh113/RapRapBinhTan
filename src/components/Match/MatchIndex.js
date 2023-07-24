import React from "react";
import "./Match.css";
import ListMatch from "./ListMatch.js";
const MatchIndex = () => {
  return (
    <div className="header-fixed-match">
      <div className="header-search">
        <input
          type="text"
          className="input-match"
          placeholder="Search by name team ..."
        />
        <select className="select-match" defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disabled>
            Choose a salutation ...
          </option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <select className="select-match" defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disabled>
            Choose a salutation ...
          </option>
          <option value="duo">Đá đơn</option>
          <option value="team">Đá đội</option>
        </select>
        <button className="btn-search">Tìm kiếm</button>
        <button className="btn-search">Thêm</button>
      </div>
      <ListMatch />
    </div>
  );
};

export default MatchIndex;
