import React from "react";

import styled from "styled-components";

import "remixicon/fonts/remixicon.css";
import Carousel from "../components/Carousel";

const RecommendBox = styled.div`
  position: relative;
`;

const ButtonLists = styled.nav`
  width: 100%;

  ul {
    display: flex;
    justify-content: center;
    margin-top: 30px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 30px;
      width: 100%;
      &:hover {
        cursor: pointer;
      }

      @media ${(props) => props.theme.desktop} {
        margin-right: 20px;
        width: auto;
      }
    }

    li > i {
      font-size: 25px;
      margin-bottom: 15px;
      padding: 25px;
      background-color: rgba(0, 0, 0, 0.08);
      border-radius: 50%;
    }

    li > span {
      font-size: 16px;
    }
  }
`;

export default function Recommend() {
  return (
    <RecommendBox>
      <Carousel />
      {/* 슬라이더 아래부터  */}
      <ButtonLists>
        <ul>
          <li>
            <i className="ri-truck-line"></i>
            <span>신간</span>
          </li>
          <li>
            <i className="ri-cake-line"></i>
            <span>이벤트 모음</span>
          </li>{" "}
          <li>
            <i className="ri-book-line"></i>
            <span>스테디셀러</span>
          </li>{" "}
          <li>
            <i className="ri-map-pin-line"></i>
            <span>혜택지도</span>
          </li>{" "}
          <li>
            <i className="ri-ticket-line"></i>
            <span>위클리 쿠폰</span>
          </li>
          <li>
            <i className="ri-tablet-line"></i>
            <span>리디페이퍼4</span>
          </li>
        </ul>
      </ButtonLists>
    </RecommendBox>
  );
}
