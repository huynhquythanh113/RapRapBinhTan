import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar.js";

function DialogInfoTeam() {
  return (
    <div className="dialog-info-players">
      <div className="dialog-info-player-positionScore1">
        <div className="TeamInfoLeft">
          <div className="TeamInfoLeft-name">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} alt="" />
            <div className="TeamInfoName">
              <div className="NameClb"> Tên clb ádasdasdasd</div>
              <div className="TheMatch"> list thẻ </div>
            </div>
          </div>
          <div className="TeamInfoLeft-Players">
            {" "}
            Scrore
            <div className="PlayerGetScrore"> Huỳnh quy thanh 79' </div>
          </div>
        </div>
        <div className="SroreMatch">
          <div className="SroceMath-name">Giải Vô địch đông nam á</div>
          <div className="SroceMath-flex">
            <div className="SroceMath-Sroce">Tỉ số </div>
            <div className="SroceMath-Sroce1">1 - 2 </div>
            <div className="SroceMath-Sroce2">Status match </div>
          </div>
          <div className="SroceMath-Date">Ngày 29 tháng 11 năm 2011 , giờ</div>
        </div>
        <div className="TeamInfoRight">
          <div className="TeamInfoLeft-Players">
            {" "}
            Scrore
            <div className="PlayerGetScrore"> Huỳnh quy thanh 79' </div>
          </div>
          <div className="TeamInfoLeft-name">
            <img
              className="TeamInfoRight-img"
              src={process.env.PUBLIC_URL + `Img/img1.jpg`}
              alt=""
            />
            <div className="TeamInfoName1">
              <div className="NameClb"> Tên clbádasdasdasd</div>
              <div className="TheMatch"> list thẻ </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DialogInfoTeam;
