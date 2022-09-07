import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";

export interface dataType {
  title: string;
  authors: string;
  datetime: string;
  isbn: string;
  translators: string;
  price: number;
  publisher: string;
  status: string;
  thumbnail: string;
  url: string;
}

export const BestSeller = styled.div`

margin-bottom  : 35px;
// 박스 사이간격 margin-bottom


  .best_title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;

  }

  .novel_list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .novel_img_box {
      width: 90px;
      margin-bottom: 7px;
      cursor: pointer;
    }
    img {
      display: block;
      margin: 0 auto;
      width: 100%;
    }
    h3 {
      font-size: 10.5px;
      margin-bottom: 4px;
      text-align: left;
      cursor: pointer;

    }
    p {
      font-size: 10px;
      opacity: 0.7;
      text-align: left;
      cursor: pointer;

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
      .novel_img_box {
        width: 95px;
        margin-top: 10px;
        margin-bottom: 10px;
        
      }
      h3 {
        width: 80%;

        font-size: 13px;
        margin-bottom: 8px;
      }
      p {
        font-size: 12px;
      }
    }

    @media ${(props) => props.theme.fullSize} {
      .novel_img_box {
        width: 110px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
  }
  }

  // 데스크탑
`;

export default function BestSellers() {
  const SEARCH_URL = "https://dapi.kakao.com/v3/search/book?target=title";
  const AUTH = "KakaoAK a8c449437a2e8ad317c59a7b97b40601";

  const novelArray = ["헤세", "김진명", "한강", "조정래", "해리포터", "게이고"];

  const [bestSeller, setBestSeller] = useState<dataType[]>([]);
  const randomValue = novelArray[Math.floor(Math.random() * novelArray.length)];
  // console.log(randomValue);

  useEffect(() => {
    axios
      .get(SEARCH_URL, {
        params: {
          // 검색어
          query: randomValue,

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
      .then((res) => setBestSeller(res.data.documents))
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,

    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <BestSeller>
      <h3 className="best_title">지금 뜨는 작가</h3>
      <Slider {...settings}>
        {bestSeller.map((best: dataType) => (
          <div className="novel_list" key={best.datetime}>
            <div className="novel_img_box">
              <img className="novel_img" src={best.thumbnail} alt="thumnail" />
            </div>
            <h3>{best.title}</h3>
            <p>{best.authors}</p>
          </div>
        ))}
      </Slider>
    </BestSeller>
  );
}
