import React, { useEffect } from "react";

import { useState } from "react";

//component
import { Outlet, useNavigate } from "react-router-dom";
import Category from "../components/Category";
import Modal from "../components/Modal";

//style
import styled from "styled-components";

// components

import TopScrollImg from "../assets/scrollUp.png";

const Container = styled.div`
  color: ${(props) => props.theme.textColor};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-top: -8px;
  z-index: 8000;
  background-color: white;

  @media ${(props) => props.theme.desktop} {
    main {
      padding: 0 100px;
      position: relative;
      /* 홈 메인 데스크탑 패딩값 세팅 */
    }
  }
`;

const Buttons = styled.ul`
  display: flex;
  padding-bottom: 10px;
  padding-top: 8px;

  li {
    margin: 0;
    font-size: 17px;
    line-height: 17px;
    margin-right: 6px;
    padding: 10px;
    border-radius: 40px;

    /* 눌러졌을 때 배경, 컬러 변경 주기 */

    &:hover {
      cursor: pointer;
      color: gray;
      transition: 0.3s ease-in;
    }
  }

  .active {
    background-color: ${(props) => props.theme.accentColor};
    color: white;
  }
`;

const TopScroll = styled.i`
  position: fixed;
  right: 5%;

  img {
    width: 45px;
    cursor: pointer;
  }
`;

// main

export default function Home() {
  const navigate = useNavigate();
  const [change, setChange] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼상태

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 100) {
      setBtnStatus(true);
      // 100이상이면 버튼 보이게
    } else {
      setBtnStatus(false);
      // 100이하면 버튼이 사라지게
    }
  };
  // window 스크롤 값을 ScrollY에 저장

  useEffect(() => {
    console.log(scrollY); // scrollY 변화할 때마다 값을 콘솔에 출력
  }, [scrollY]);

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch(); // addEventListenr 함수를 실행
    return () => {
      window.removeEventListener("scroll", handleFollow);
      //여러번 실행할 때는 removeEventListenr 사용하기
      // 그렇지 않으면 여러번 호출되고, 메모리에 gabarge collect
    };
  });

  const clickTop = (e: any) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0); // scrollY값 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈
  };

  const [showModal, setShowModal] = useState(true);

  const handleClose = () => setShowModal(false);

  // 24시간 끄게 하는 거 구현해야함

  return (
    <Container>
      <Category />
      <main className="main">
        {/* 서브 라우터 */}
        <Buttons>
          <li
            onClick={() => {
              setChange(0);
              navigate("/");
            }}
            className={`${change === 0 ? "active" : ""}`}
          >
            추천
          </li>

          <li
            onClick={() => {
              setChange(1);
              navigate("event");
            }}
            className={`${change === 1 ? "active" : ""}`}
          >
            이벤트
          </li>
        </Buttons>
        <Outlet />

        {BtnStatus && (
          <TopScroll onClick={clickTop}>
            <img src={TopScrollImg} alt="page-up-scroll" />
          </TopScroll>
        )}
      </main>

      {showModal && <Modal />}
    </Container>
  );
}
