import React from "react";
import "./Match.css";
import { NavLink } from "react-router-dom";
const Match = () => {
  return (
    <div className="border-components match">
      <div className="name-components"> Match </div>
      <div className="match-list">
        <NavLink to="match/1" className="navlink-match">
          <div className="match-info">
            <div className="info-team">
              <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
              <div className="des-info">
                <div className="name-team">Team : Hương lộ 2 FC</div>
                <div className="des">
                  Chi tiết : Anh em giao lưu là chính , thể thao là 10 . Xin chỉ
                  giáo ạ!
                </div>
              </div>
            </div>
            <div className="info-match">
              <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
              <div className="des-info">
                <div className="name-team">Sân : Tên gì đó</div>
                <div className="des">Địa chỉ : gì gì gì gì gì đó</div>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Match;
