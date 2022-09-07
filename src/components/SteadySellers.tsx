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

  // 스타일드 컴포넌트로 해당 width 값이 넘어 갔을 때
  // repeat를 3으로 늘리고 4로 늘려야하나?

  // 그렇다면 근본적인 문제는 모바일일때 아이템이 6개만 뜨게
  // 만들어야하는데 이때 이걸 어떻게 할 것인지?

  // major issue 데이터를 16개 객체를 받아오면
  // 6개를 전부 지금 바인딩하는 것이 문제다

  // 그 다음 수순은 다음 페이지로 넘어가게 하는 슬라이더 기능을 만들어야하는데
  // 이것은 어떻게 만들 것인가? 라이브러리를 쓸 것인가? 아니면 순수 JS와 리액트 문법으로
  // 구현해야하눈가?

  .item_container {
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .item {
    cursor: pointer;
    margin-bottom: 10px;

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

  @media ${(props) => props.theme.desktop} {
    .item {
      img {
        width: 80px;
      }
      .item_texts {
        h3 {
          font-size: 13px;
          margin-bottom: 8px;
        }
        p {
          font-size: 11px;
          margin-bottom: 3px;
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

  useEffect(() => {
    axios
      .all([
        axios.get(SEARCH_URL, {
          params: {
            query: "사회",
            size: 3,
          },
          headers: {
            Authorization: AUTH,
          },
        }),
        axios.get(SEARCH_URL, {
          params: {
            query: "인문",
            size: 3,
          },
          headers: {
            Authorization: AUTH,
          },
        }),
        axios.get(SEARCH_URL, {
          params: {
            query: "소설",
            size: 3,
          },
          headers: {
            Authorization: AUTH,
          },
        }),
        axios.get(SEARCH_URL, {
          params: {
            query: "톨스토이",
            size: 3,
          },
          headers: {
            Authorization: AUTH,
          },
        }),
        axios.get(SEARCH_URL, {
          params: {
            query: "역사",
            size: 3,
          },
          headers: {
            Authorization: AUTH,
          },
        }),
        axios.get(SEARCH_URL, {
          params: {
            query: "미니멀리즘",
            size: 3,
          },
          headers: {
            Authorization: AUTH,
          },
        }),
      ])
      .then(
        axios.spread((res1, res2, res3, res4, res5, res6) => {
          // console.log(res1, res2);

          console.log(
            res1.data.documents,
            res2.data.documents,
            res3.data.documents
          );
          const keyword1 = res1.data.documents;
          const keyword2 = res2.data.documents;
          const keyword3 = res3.data.documents;
          const keyword4 = res4.data.documents;
          const keyword5 = res5.data.documents;
          const keyword6 = res6.data.documents;

          const all = [
            ...keyword1,
            ...keyword2,
            ...keyword3,
            ...keyword4,
            ...keyword5,
            ...keyword6,
          ];
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
    rows: 3,
    slidesPerRow: 2,
    NextArrow: <NextArrow />,

    responsive: [
      // 반응형 웹 구현 옵션

      {
        breakpoint: 1900,
        settings: {
          slideToShow: 9,
          slidesPerRow: 3,
          rows: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slideToShow: 6,
          slidesPerRow: 2,
          rows: 3,
        },
      },
    ],
  };

  return (
    <SteadySeller>
      <h3 className="steady_title">스테디 셀러</h3>
      <Slider {...settings}>
        {steady.map((books: dataType, index) => (
          <div key={books.isbn} className="item">
            <div className="item_container">
              <div className="item_box">
                <img src={books.thumbnail} alt="something" />
              </div>
              <div className="item_texts">
                <h3>{books.title}</h3>
                <p>{books.authors}</p>
                <span>
                  <i className="ri-star-fill">{ratingRandomArray[index]}</i>
                  <span>{`(${reviewRandomArray[index]})`}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* 이제 남은 것은 그리드 슬라이더인데 
        what I have to solve 
        1. 모바일때는 2줄, 태블릿부터는 3줄로 하는 것을 먼저 바인딩하는 것
        2. 결과적으로 슬라이더는 모바일일때는 3번개의 슬라이더가 있어야함 들어가고 데스크탑에서는 2개다

        그래서 페이지당 바인딩 되는 것을 어떻게 나눌 것인가가 핵심인데
        
      */}
    </SteadySeller>
  );
}
