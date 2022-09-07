import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";
import "remixicon/fonts/remixicon.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { dataType } from "./BestSellers";

import NextArrow from "./NextArrow";

const SteadySeller = styled.div`
  /* .steady_list {
    display: grid;
    grid-template-columns: repeat(3, 3fr);
  } */

  // pure grid test

  margin-bottom: 35px;

  .steady_title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  align-items: stretch;

  .grid_test {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    gap: 10px;
  }

  // 스타일드 컴포넌트로 해당 width 값이 넘어 갔을 때
  // repeat를 3으로 늘리고 4로 늘려야하나?

  // 그렇다면 근본적인 문제는 모바일일때 아이템이 6개만 뜨게
  // 만들어야하는데 이때 이걸 어떻게 할 것인지?

  // major issue 데이터를 16개 객체를 받아오면
  // 6개를 전부 지금 바인딩하는 것이 문제다

  // 그 다음 수순은 다음 페이지로 넘어가게 하는 슬라이더 기능을 만들어야하는데
  // 이것은 어떻게 만들 것인가? 라이브러리를 쓸 것인가? 아니면 순수 JS와 리액트 문법으로
  // 구현해야하눈가?

  .item {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 50px;
      margin-right: 30px;
    }
    .item_texts {
      h3 {
        font-size: 12px;
        margin-bottom: 3px;
      }
      p {
        font-size: 11px;
        margin-bottom: 3px;
        opacity: 0.6;
      }
      span {
        font-size: 11px;

        i {
          font-size: 12px;
          color: red;
          margin-right: 2px;
        }
        span {
          opacity: 0.6;
        }
      }
    }
  }
`;

export default function SteadySellers() {
  const SEARCH_URL = "https://dapi.kakao.com/v3/search/book?target=title";
  const AUTH = "KakaoAK a8c449437a2e8ad317c59a7b97b40601";

  const [steady, setSteady] = useState<dataType[]>([]);

  // overall = [], 전체적으로 합쳐질 배열 생성

  // 자동으로 키워드를 바꿔서 계속해서 더해 줘야하나?

  // 평점 랜덤 값

  let ratingRandomArray = [""];

  for (let i = 0; i < 18; i++) {
    let ratingRandom = Math.random() * (5 - 4) + 4;
    let fixedRandom = ratingRandom.toFixed(1);
    ratingRandomArray.push(fixedRandom);
  }

  // 리뷰수 랜덤 값

  let reviewRandomArray: number[] = [];

  for (let i = 0; i < 18; i++) {
    let reviewRandom = Math.floor(Math.random() * (1500 - 300) - 1);
    reviewRandomArray.push(reviewRandom);
  }

  // useEffect(() => {
  //   axios
  //     .get(SEARCH_URL, {
  //       params: {
  //         // 검색어
  //         query: "사회",
  //         size: 18,

  //         // 필수아닌 검색 조건들

  //         //결과 문서 정렬 방식
  //         //sort	String	, accuracy(정확도순) 또는 latest(발간일순), 기본값 accuracy

  //         //결과 페이지 번호
  //         //page	Integer	, 1~50 사이의 값, 기본 값 1

  //         //한 페이지에 보여질 문서 수
  //         //size	Integer	, 1~50 사이의 값, 기본 값 10

  //         //target	String	검색 필드 제한
  //         //사용 가능한 값: title(제목), isbn (ISBN), publisher(출판사), person(인명)
  //       },
  //       headers: {
  //         Authorization: AUTH,
  //       },
  //     })
  //     .then((res) => setSteady(res.data.documents))
  //     .catch((err) => console.log(err));
  // }, []);

  // axios 요청 여러개 해서 하나의 배열로 사용하게 하는 것

  useEffect(() => {
    axios
      .all([
        axios.get(SEARCH_URL, {
          params: {
            query: "사회",
            size: 6,
          },
          headers: {
            Authorization: AUTH,
          },
        }),
        axios.get(SEARCH_URL, {
          params: {
            query: "인문",
            size: 6,
          },
          headers: {
            Authorization: AUTH,
          },
        }),
        axios.get(SEARCH_URL, {
          params: {
            query: "소설",
            size: 6,
          },
          headers: {
            Authorization: AUTH,
          },
        }),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          // console.log(res1, res2);

          console.log(
            res1.data.documents,
            res2.data.documents,
            res3.data.documents
          );
          const test1 = res1.data.documents;
          const test2 = res2.data.documents;
          const test3 = res3.data.documents;

          const all = [...test1, ...test2, ...test3];
          setSteady(all);

          // const res1 = res1.data;
          // const res2 = res2.data;
          // const res3 = res3.data;
          // const res = [...res1, ...res2, ...res3];
          // console.log(res);
        })
      )
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 3,

    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <SteadySeller>
      <h3 className="steady_title">스테디 셀러</h3>
      {/* <Slider {...settings}>
        {steady.map((test: dataType) => (
          <ul className="steady_list" key={test.datetime}>
            <li className="li">
              <div className="steady_img_box">
                <img
                  className="steady_img"
                  src={test.thumbnail}
                  alt="thumnail"
                />
              </div>
              <h3>{test.title}</h3>
              <p>{test.authors}</p>
            </li>
          </ul>
        ))}
      </Slider> */}
      <div className="grid_test">
        {steady.map((test: dataType, index) => (
          <div className="item">
            <div className="item_box">
              <img src={test.thumbnail} alt="something" />
            </div>

            <div className="item_texts">
              <h3>{test.title}</h3>
              <p>{test.authors}</p>
              <span>
                <i className="ri-star-fill">{ratingRandomArray[index]}</i>
                <span>{`(${reviewRandomArray[index]})`}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </SteadySeller>
  );
}
