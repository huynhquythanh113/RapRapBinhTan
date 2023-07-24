import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar.js";
import HiddenInfoMatch from "./HiddenInfoMatch.js";
import axios from "axios";
import cors from "cors";
const ListMatch = () => {
  const [mouseOver, setMouseOver] = useState(true);
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
    <div className="border-list-match">
      <div
        id={1}
        className="match"
        onMouseOver={() => handleOver(1)}
        onMouseLeave={handleLeave}
      >
        <div className="match-info">
          <div className="type-match">
            <div className="type-match-team">Đá đội</div>{" "}
            <div className="type-match-team">Kèo : 7/3</div>{" "}
          </div>
          <div className="info-team-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Team : Hương lộ 2 FC</div>
              <div className="des">
                Chi tiết : Anh em giao lưu là chính , thể thao là 10 . Xin chỉ
                giáo ạ!
              </div>
            </div>
          </div>
          <div className="info-match-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Sân : Tên gì đó</div>
              <div className="des">Địa chỉ : gì gì gì gì gì đó</div>
            </div>
          </div>
          <div className="btn">
            <button className="btn-info" onClick={helo}>
              Xem truoc{" "}
            </button>
            <button className="btn-info1">Cap ngay </button>
          </div>
        </div>
      </div>
      <div
        id={1}
        className="match"
        // onMouseOver={() => handleOver(1)}
        // onMouseLeave={handleLeave}
      >
        <div className="match-info">
          <div className="type-match">
            <div className="type-match-team">Đá đội</div>{" "}
            <div className="type-match-team">Kèo : 7/3</div>{" "}
          </div>
          <div className="info-team-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Team : Hương lộ 2 FC</div>
              <div className="des">
                Chi tiết : Anh em giao lưu là chính , thể thao là 10 . Xin chỉ
                giáo ạ!
              </div>
            </div>
          </div>
          <div className="info-match-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Sân : Tên gì đó</div>
              <div className="des">Địa chỉ : gì gì gì gì gì đó</div>
            </div>
          </div>
          <div className="btn">
            <button className="btn-info">Xem truoc </button>
            <button className="btn-info1">Cap ngay </button>
          </div>
        </div>
      </div>
      <div
        id={1}
        className="match"
        // onMouseOver={() => handleOver(1)}
        // onMouseLeave={handleLeave}
      >
        <div className="match-info">
          <div className="type-match">
            <div className="type-match-team">Đá đội</div>{" "}
            <div className="type-match-team">Kèo : 7/3</div>{" "}
          </div>
          <div className="info-team-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Team : Hương lộ 2 FC</div>
              <div className="des">
                Chi tiết : Anh em giao lưu là chính , thể thao là 10 . Xin chỉ
                giáo ạ!
              </div>
            </div>
          </div>
          <div className="info-match-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Sân : Tên gì đó</div>
              <div className="des">Địa chỉ : gì gì gì gì gì đó</div>
            </div>
          </div>
        </div>
      </div>
      <div
        id={1}
        className="match"
        // onMouseOver={() => handleOver(1)}
        // onMouseLeave={handleLeave}
      >
        <div className="match-info">
          <div className="type-match">
            <div className="type-match-team">Đá đội</div>{" "}
            <div className="type-match-team">Kèo : 7/3</div>{" "}
          </div>
          <div className="info-team-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Team : Hương lộ 2 FC</div>
              <div className="des">
                Chi tiết : Anh em giao lưu là chính , thể thao là 10 . Xin chỉ
                giáo ạ!
              </div>
            </div>
          </div>
          <div className="info-match-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Sân : Tên gì đó</div>
              <div className="des">Địa chỉ : gì gì gì gì gì đó</div>
            </div>
          </div>
        </div>
      </div>
      <div
        id={1}
        className="match"
        // onMouseOver={() => handleOver(1)}
        // onMouseLeave={handleLeave}
      >
        <div className="match-info">
          <div className="type-match">
            <div className="type-match-team">Đá đội</div>{" "}
            <div className="type-match-team">Kèo : 7/3</div>{" "}
          </div>
          <div className="info-team-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Team : Hương lộ 2 FC</div>
              <div className="des">
                Chi tiết : Anh em giao lưu là chính , thể thao là 10 . Xin chỉ
                giáo ạ!
              </div>
            </div>
          </div>
          <div className="info-match-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Sân : Tên gì đó</div>
              <div className="des">Địa chỉ : gì gì gì gì gì đó</div>
            </div>
          </div>
        </div>
      </div>
      <div
        id={1}
        className="match"
        // onMouseOver={() => handleOver(1)}
        // onMouseLeave={handleLeave}
      >
        <div className="match-info">
          <div className="type-match">
            <div className="type-match-team">Đá đội</div>{" "}
            <div className="type-match-team">Kèo : 7/3</div>{" "}
          </div>
          <div className="info-team-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Team : Hương lộ 2 FC</div>
              <div className="des">
                Chi tiết : Anh em giao lưu là chính , thể thao là 10 . Xin chỉ
                giáo ạ!
              </div>
            </div>
          </div>
          <div className="info-match-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Sân : Tên gì đó</div>
              <div className="des">Địa chỉ : gì gì gì gì gì đó</div>
            </div>
          </div>
        </div>
      </div>
      <div
        id={1}
        className="match"
        // onMouseOver={() => handleOver(1)}
        // onMouseLeave={handleLeave}
      >
        <div className="match-info">
          <div className="type-match">
            <div className="type-match-team">Đá đội</div>{" "}
            <div className="type-match-team">Kèo : 7/3</div>{" "}
          </div>
          <div className="info-team-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Team : Hương lộ 2 FC</div>
              <div className="des">
                Chi tiết : Anh em giao lưu là chính , thể thao là 10 . Xin chỉ
                giáo ạ!
              </div>
            </div>
          </div>
          <div className="info-match-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Sân : Tên gì đó</div>
              <div className="des">Địa chỉ : gì gì gì gì gì đó</div>
            </div>
          </div>
        </div>
      </div>
      <div
        id={1}
        className="match"
        // onMouseOver={() => handleOver(1)}
        // onMouseLeave={handleLeave}
      >
        <div className="match-info">
          <div className="type-match">
            <div className="type-match-team">Đá đội</div>{" "}
            <div className="type-match-team">Kèo : 7/3</div>{" "}
          </div>
          <div className="info-team-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Team : Hương lộ 2 FC</div>
              <div className="des">
                Chi tiết : Anh em giao lưu là chính , thể thao là 10 . Xin chỉ
                giáo ạ!
              </div>
            </div>
          </div>
          <div className="info-match-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Sân : Tên gì đó</div>
              <div className="des">Địa chỉ : gì gì gì gì gì đó</div>
            </div>
          </div>
        </div>
      </div>
      <div
        id={1}
        className="match"
        // onMouseOver={() => handleOver(1)}
        // onMouseLeave={handleLeave}
      >
        <div className="match-info">
          <div className="type-match">
            <div className="type-match-team">Đá đội</div>{" "}
            <div className="type-match-team">Kèo : 7/3</div>{" "}
          </div>
          <div className="info-team-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Team : Hương lộ 2 FC</div>
              <div className="des">
                Chi tiết : Anh em giao lưu là chính , thể thao là 10 . Xin chỉ
                giáo ạ!
              </div>
            </div>
          </div>
          <div className="info-match-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Sân : Tên gì đó</div>
              <div className="des">Địa chỉ : gì gì gì gì gì đó</div>
            </div>
          </div>
        </div>
      </div>
      <div
        id={1}
        className="match"
        // onMouseOver={() => handleOver(1)}
        // onMouseLeave={handleLeave}
      >
        <div className="match-info">
          <div className="type-match">
            <div className="type-match-team">Đá đội</div>{" "}
            <div className="type-match-team">Kèo : 7/3</div>{" "}
          </div>
          <div className="info-team-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Team : Hương lộ 2 FC</div>
              <div className="des">
                Chi tiết : Anh em giao lưu là chính , thể thao là 10 . Xin chỉ
                giáo ạ!
              </div>
            </div>
          </div>
          <div className="info-match-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Sân : Tên gì đó</div>
              <div className="des">Địa chỉ : gì gì gì gì gì đó</div>
            </div>
          </div>
        </div>
      </div>
      <div
        id={1}
        className="match"
        // onMouseOver={() => handleOver(1)}
        // onMouseLeave={handleLeave}
      >
        <div className="match-info">
          <div className="type-match">
            <div className="type-match-team">Đá đội</div>{" "}
            <div className="type-match-team">Kèo : 7/3</div>{" "}
          </div>
          <div className="info-team-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Team : Hương lộ 2 FC</div>
              <div className="des">
                Chi tiết : Anh em giao lưu là chính , thể thao là 10 . Xin chỉ
                giáo ạ!
              </div>
            </div>
          </div>
          <div className="info-match-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Sân : Tên gì đó</div>
              <div className="des">Địa chỉ : gì gì gì gì gì đó</div>
            </div>
          </div>
        </div>
      </div>
      <div
        id={1}
        className="match"
        // onMouseOver={() => handleOver(1)}
        // onMouseLeave={handleLeave}
      >
        <div className="match-info">
          <div className="type-match">
            <div className="type-match-team">Đá đội</div>{" "}
            <div className="type-match-team">Kèo : 7/3</div>{" "}
          </div>
          <div className="info-team-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Team : Hương lộ 2 FC</div>
              <div className="des">
                Chi tiết : Anh em giao lưu là chính , thể thao là 10 . Xin chỉ
                giáo ạ!
              </div>
            </div>
          </div>
          <div className="info-match-index">
            <img src={process.env.PUBLIC_URL + `Img/img1.jpg`} />
            <div className="des-info">
              <div className="name-team">Sân : Tên gì đó</div>
              <div className="des">Địa chỉ : gì gì gì gì gì đó</div>
            </div>
          </div>
        </div>
      </div>
      <HiddenInfoMatch />
    </div>
  );
};

export default ListMatch;
