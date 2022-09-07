import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NextArrow from "./NextArrow";

import { dataType } from "./BestSellers";

const Politics = styled.div`
  position: relative;
  margin-bottom: 35px;

  .best_title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .politic_list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .politic_list_img_box {
      width: 90px;
      margin-bottom: 7px;
    }
    img {
      display: block;
      margin: 0 auto;
      width: 100%;
    }
    h3 {
      width: 80%;
      font-size: 10.5px;
      margin-bottom: 4px;
      text-align: left;
    }
    p {
      font-size: 10px;
      opacity: 0.7;
      text-align: left;
    }

    @media ${(props) => props.theme.mobile} and (max-width: 800px) {
      .politic_list_img_box {
        width: 85px;
        margin-top: 10px;
        margin-bottom: 10px;
        cursor: pointer;
      }
    }

    @media ${(props) => props.theme.desktop} {
      .politic_list_img_box {
        width: 130px;
        margin-top: 10px;
        margin-bottom: 10px;
        cursor: pointer;
      }
      h3 {
        font-size: 13px;
        margin-bottom: 8px;
        cursor: pointer;
      }
      p {
        font-size: 12px;
        cursor: pointer;
      }
    }

    @media ${(props) => props.theme.fullSize} {
      .politic_list_img_box {
        width: 160px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
  }
`;

export default function PoliticBest() {
  const SEARCH_URL = "https://dapi.kakao.com/v3/search/book?target=title";
  const AUTH = "KakaoAK a8c449437a2e8ad317c59a7b97b40601";

  const politicArray = ["정치", "사회", "세계", "트럼프", "공정", "마르크스"];

  const [bestPolitic, bestSetPolitic] = useState<dataType[]>([]);
  const randomValues =
    politicArray[Math.floor(Math.random() * politicArray.length)];
  console.log(randomValues);

  const settings = {
    speed: 500,
    slidesToShow: 5,
    // 모바일일 때는 5개만 보여주는 걸로 리팩토링 하기
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
  };

  useEffect(() => {
    axios
      .get(SEARCH_URL, {
        params: {
          // 검색어
          query: randomValues,

          // 필수아닌 검색 조건들

          //결과 문서 정렬 방식
          //sort	String	, accuracy(정확도순) 또는 latest(발간일순), 기본값 accuracy

          //결과 페이지 번호
          //page	Integer	, 1~50 사이의 값, 기본 값 1

          //한 페이지에 보여질 문서 수
          //size	Integer	, 1~50 사이의 값, 기본 값 10

          //target	String	검색 필드 제한
          //사용 가능한 값: title(제목), isbn (ISBN), publisher(출판사), person(인명)
        },
        headers: {
          Authorization: AUTH,
        },
      })
      .then((res) => bestSetPolitic(res.data.documents))
      .catch((err) => console.log(err));
  }, []);

  console.log(bestPolitic);

  return (
    <Politics>
      <h3 className="best_title">정치/사회 베스트</h3>
      <Slider {...settings}>
        {bestPolitic.map((politics: dataType) => (
          <div className="politic_list" key={politics.datetime}>
            <div className="politic_list_img_box">
              <img
                className="politic_list_img"
                src={politics.thumbnail}
                alt="thumnail"
              />
            </div>
            <h3>{politics.title}</h3>
            <p>{politics.authors}</p>
          </div>
        ))}
      </Slider>
    </Politics>
  );
}
