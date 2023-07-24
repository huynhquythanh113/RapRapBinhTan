import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar.js";
import InfoTeam1 from "./InfoTeam1";
import { Outlet, NavLink } from "react-router-dom";
import InfoTeam2 from "./InfoTeam2";
const TeamInfo = ({ showInfoTeam }) => {
  const [showInfo, setShowInfo] = useState(true);
  const transPage = () => {
    setStyleClass("dialog-btn-teaminfo btn-active");
    setStyleClass1("dialog-btn-teaminfo");
    setShowInfo(true);
  };
  const transPage1 = () => {
    setStyleClass1("dialog-btn-teaminfo btn-active");
    setStyleClass("dialog-btn-teaminfo");
    setShowInfo(false);
  };
  const [StyleClass, setStyleClass] = useState(
    "dialog-btn-teaminfo btn-active"
  );
  const [StyleClass1, setStyleClass1] = useState("dialog-btn-teaminfo");
  return (
    <div>
      <div className="dialog-info">
        <div className="dialog-info-player dialog-info-player1">
          <button
            className="btn-close-dialogInfoPlayer"
            onClick={() => showInfoTeam(false)}
          >
            {" "}
            X
          </button>
          <div className="dialog-info-title"> Thông tin của đội bóng </div>
          <div className="dialog-info-img">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} alt="" />
            <div className="dialog-info-img-looks">
              <div>Win : 10</div>
              <div>Lose : 5</div>
              <div>Tie : 3</div>
            </div>
          </div>
          <div className="dialog-info-player-all">
            <div className="dialog-info-header">
              <div className="header-pages header-pages1">
                <button className={StyleClass} onClick={transPage}>
                  Home
                </button>

                <button className={StyleClass1} onClick={transPage1}>
                  Match
                </button>
              </div>
            </div>
            {showInfo ? <InfoTeam1 /> : <InfoTeam2 />}
          </div>
          <button className="dialog-info-btn-action">Cáp kèo</button>
          <button className="dialog-info-btn-action1"> Liên hệ</button>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
