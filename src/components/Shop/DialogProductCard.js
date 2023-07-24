import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar.js";
import { Outlet, NavLink } from "react-router-dom";
// import InfoTeam2 from "./InfoTeam2";
// import InfoTeam1 from "./InfoTeam1";

const CardInfo = ({ showInfo }) => {
  //   const [showInfo, setShowInfo] = useState(true);
  //   const transPage = () => {
  //     setStyleClass("dialog-btn-teaminfo btn-active");
  //     setStyleClass1("dialog-btn-teaminfo");
  //     setShowInfo(true);
  //   };
  //   const transPage1 = () => {
  //     setStyleClass1("dialog-btn-teaminfo btn-active");
  //     setStyleClass("dialog-btn-teaminfo");
  //     setShowInfo(false);
  //   };
  const [StyleClass, setStyleClass] = useState(
    "dialog-btn-teaminfo btn-active"
  );
  const numbers = [1, 2, 3, 4];
  const numbers1 = [1, 2, 3];
  const filterNumber = numbers1.filter((number) => {
    return numbers.includes(number);
  });
  console.log(filterNumber);
  const [StyleClass1, setStyleClass1] = useState("dialog-btn-teaminfo");
  return (
    <div>
      <div className="dialog-info">
        <div className="dialog-info-player dialog-info-player1">
          <button
            className="btn-close-dialogInfoPlayer"
            onClick={() => showInfo(false)}
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
                {/* <button className={StyleClass} onClick={transPage}>
                  Home 
                </button>

                <button className={StyleClass1} onClick={transPage1}>
                  Match
                </button> */}
                <div className="input-info">
                  <label className="label-type">Size giày</label>
                  <select>
                    {" "}
                    {filterNumber.map((number) => (
                      <option>{number}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            {/* {showInfo ? <InfoTeam1 /> : <InfoTeam2 />} */}
          </div>
          <button className="dialog-info-btn-action">Cáp kèo</button>
          <button className="dialog-info-btn-action1"> Liên hệ</button>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
