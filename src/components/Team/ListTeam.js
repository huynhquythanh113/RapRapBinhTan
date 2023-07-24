import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar.js";
// import HiddenInfoMatch from "./HiddenInfoMatch.js";
import axios from "axios";
import cors from "cors";
const ListMatch = ({ typeSearch, dataInfo, dataInfo1 }) => {
  const [mouseOver, setMouseOver] = useState(true);
  const search = true;
  const data = "this is data";
  const data1 = "this is data1";
  function handleOver(item) {
    setMouseOver(false);
  }
  const handleLeave = () => {
    setMouseOver(true);
  };
  const helo = () => {
    alert("helo");
    axios
      .get("http://localhost:8080", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(function (response) {
        console.log("response is : " + response.data);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log(error.message);
        }
        console.log(error.config);
      });
  };
  return (
    <>
      <div className="border-list-match">
        {typeSearch == "Player" ? (
          <div
            onClick={() => dataInfo(data)}
            id={1}
            className="match1"
            onMouseOver={() => handleOver(1)}
            onMouseLeave={handleLeave}
          >
            <div className="match-info1">
              <div className="info-player">
                <div className="number-player1">29</div>
                <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} alt="" />
                <div className="info-attribute">
                  <div className="name">Huỳnh Quý Thanh</div>
                  <div className="name">
                    <div>Tiền đạo :</div>
                    <div className="progress-bar">
                      {" "}
                      <ProgressBar bgcolor={"#4746e0"} completed={30} />{" "}
                    </div>
                  </div>
                  <div className="name">
                    <div>Tiền đạo :</div>
                    <div className="progress-bar">
                      {" "}
                      <ProgressBar bgcolor={"#4746e0"} completed={30} />{" "}
                    </div>{" "}
                  </div>
                  <div className="name">
                    <div>Tiền đạo :</div>
                    <div className="progress-bar">
                      {" "}
                      <ProgressBar bgcolor={"#4746e0"} completed={30} />{" "}
                    </div>{" "}
                  </div>
                  <div className="name">
                    <div>Tiền đạo :</div>
                    <div className="progress-bar">
                      {" "}
                      <ProgressBar bgcolor={"#4746e0"} completed={30} />{" "}
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div
              onClick={() => dataInfo1(data1)}
              id={1}
              className="match"
              // onMouseOver={() => handleOver(1)}
              // onMouseLeave={handleLeave}
            >
              <div className="match-info height-set">
                <div className="type-match ">
                  <div className="type-match-team">Câu lạc bộ:</div>{" "}
                  <div className="type-match-team">Hương lộ 2</div>{" "}
                </div>
                <div className="info-team-index">
                  <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
                  <div className="des-info">
                    <div className="name-team">Coach : Huỳnh Quý Thanh</div>
                    <div className="des">Win :10 </div>
                    <div className="des"> Lose :5 </div>
                    <div className="des">Tie :2</div>
                  </div>
                </div>
                <div className="btn">
                  <button className="btn-info">Xem truoc </button>
                  <button className="btn-info1">Cap ngay </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* <HiddenInfoMatch /> */}
      </div>
    </>
  );
};

export default ListMatch;
