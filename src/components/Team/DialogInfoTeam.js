import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar.js";

function DialogInfoTeam() {
  return (
    <div className="dialog-info-players">
      <div className="dialog-info-player-positionScore">
        <div>
          <div className="dialog-info-player-numer">29</div>{" "}
          <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} alt="" />
        </div>
        <div className="dialog-info-player-details">
          <div className="dialog-info-player-detail">Họ và Tên </div>
          <div className="dialog-info-player-detail"> Quốc tịch Age</div>
          <div className="dialog-info-player-detail">Vị trí </div>
          <div className="dialog-info-player-detail">
            chiều cao và cân nặng{" "}
          </div>
        </div>
        <div className="dialog-info-player-score">
          <div className="name">
            <div>Tiền đạo :</div>
            <div className="progress-bar1">
              {" "}
              <ProgressBar bgcolor={"#4746e0"} completed={30} />{" "}
            </div>{" "}
          </div>
          <div className="name">
            <div>Tiền đạo :</div>
            <div className="progress-bar1">
              {" "}
              <ProgressBar bgcolor={"#4746e0"} completed={30} />{" "}
            </div>{" "}
          </div>
          <div className="name">
            <div>Tiền đạo :</div>
            <div className="progress-bar1">
              {" "}
              <ProgressBar bgcolor={"#4746e0"} completed={30} />{" "}
            </div>{" "}
          </div>
          <div className="name">
            <div>Tiền đạo :</div>
            <div className="progress-bar1">
              {" "}
              <ProgressBar bgcolor={"#4746e0"} completed={30} />{" "}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DialogInfoTeam;
