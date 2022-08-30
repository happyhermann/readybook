import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "remixicon/fonts/remixicon.css";

import ModalImg from "../assets/modal.jpeg";

const ModalBox = styled.article`
  position: absolute;
  left: 50%;
  top: 40%;
  z-index: 3;
  transform: translate(-50%, -50%);

  @media screen and ${(props) => props.theme.mobile} {
    display: none;
  }
  @media screen and ${(props) => props.theme.desktop} {
    display: block;
  }
`;

const ModalContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  z-index: 3;
  top: 20%;

  img {
    width: 700px;
    display: block;
    position: relative;
  }

  .checkbox {
    display: flex;
    align-items: center;
    position: absolute;
    color: white;
    top: 5%;
    font-size: 22px;
    z-index: 3;
    right: 5%;
  }
  .noShow {
    cursor: pointer;
    margin-right: 6px;
  }
  .ri-close-line {
    cursor: pointer;
    margin-right: 6px;
  }
`;

export default function Modal() {
  const [showPopUp, setShowPopUp] = useState(true);

  const onClickHandler = () => {
    setShowPopUp(false);
    // 버튼 누르면 트루값 반환
  };

  // 24시간동안 안보이게 하기, setTimeOut으로 해야하나?

  return (
    <>
      {showPopUp ? (
        <ModalBox className="modal_box">
          <ModalContainer>
            <div className="checkbox">
              <span style={{ fontSize: "15px", marginRight: "5px" }}>
                오늘 하루 그만보기
              </span>
              <input className="noShow" type="checkbox" />
              <span style={{ fontSize: "15px", marginRight: "5px" }}>
                창닫기
              </span>
              <i onClick={onClickHandler} className="ri-close-line"></i>
            </div>
            <div>
              <img src={ModalImg} alt="셀렉트 이벤트 광고창" />
            </div>
          </ModalContainer>

          <h1>container</h1>
        </ModalBox>
      ) : (
        <div>123</div>
      )}
    </>
  );
}
