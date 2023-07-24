import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar.js";
import DialogInfoTeam from "./DialogInfoTeam";
function InfoTeam1() {
  return (
    <>
      <div className="dialog-info-player-attribute">
        <div className="dialog-info-name-type">
          <div> hương lộ 2 </div>
          <div> 0909090909</div>
        </div>
        <div className="dialog-info-player-value  ">
          <div> Câu lạc bộ: </div>
          <div> Số điện thoại:</div>
        </div>
      </div>
      <DialogInfoTeam />
    </>
  );
}

export default InfoTeam1;
