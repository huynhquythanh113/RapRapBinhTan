import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar.js";

const PLayerInfo = ({ showInfo, dataPlayer }) => {
  console.log(dataPlayer);
  return (
    <div>
      <div className="dialog-info">
        <div className="dialog-info-player">
          <button
            className="btn-close-dialogInfoPlayer"
            onClick={() => showInfo(false)}
          >
            {" "}
            X
          </button>
          <div className="dialog-info-title"> Thông tin của cầu thủ </div>
          <div className="dialog-info-img">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} alt="" />
            <div className="dialog-info-img-looks">
              <div> Chiều cao:</div>
              <div> Cân nặng:</div>
            </div>
          </div>
          <div className="dialog-info-player-all">
            <div className="dialog-info-player-attribute">
              <div className="dialog-info-name-type">
                <div> Ho va ten </div>
                <div> Quốc tịch </div>
                <div> Năm sinh </div>
                <div> Số áo</div>
                <div> Số điện thoại</div>
                <div> Câu lạc bộ</div>
              </div>
              <div className="dialog-info-player-value  ">
                <div> Ho va ten: </div>
                <div> Quốc tịch: </div>
                <div> Năm sinh: </div>
                <div> Số áo: </div>
                <div> Số điện thoại:</div>
                <div> Câu lạc bộ:</div>
              </div>
            </div>
            <div className="dialog-info-player-positionScore2">
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
          <button className="dialog-info-btn-action"> Chiêu mộ</button>
          <button className="dialog-info-btn-action1"> Liên hệ</button>
        </div>
      </div>
    </div>
  );
};

export default PLayerInfo;
