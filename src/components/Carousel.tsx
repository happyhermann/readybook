import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import "remixicon/fonts/remixicon.css";
import { ViewWeek } from "@mui/icons-material";

const Container = styled.div`
  overflow: hidden;
  border-radius: 10px;

  .left {
    font-size: 40px;
    background-color: white;
    cursor: pointer;
    background: #ffffff;
    box-shadow: 2px 4px 8px rgb(0 0 0 / 6%);
    border-radius: 50%;
    border: 1px solid #f0f0f0;
    position: absolute;
    top: 33%;
    pointer-events: auto;
    left: -23px;
    &:hover {
      color: gray;
      transition: 0.3s ease-in;
    }
  }

  .right {
    font-size: 40px;
    background-color: white;
    cursor: pointer;
    background: #ffffff;
    box-shadow: 2px 4px 8px rgb(0 0 0 / 6%);
    border-radius: 50%;
    border: 1px solid #f0f0f0;
    position: absolute;
    top: 33%;
    pointer-events: auto;
    right: -23px;
    &:hover {
      color: gray;
      transition: 0.3s ease-in;
    }
  }

  .sliderTextBox {
    position: absolute;
    bottom: 1%;
    color: white;
    line-height: 40px;
    cursor: pointer;
  }

  .sliderTextTitle {
    padding: 0 30px;
    font-size: 35px;
    font-weight: bold;
  }
  .sliderTextSub {
    padding: 2px 37px;
    font-size: 22px;
    font-weight: 400;
    opacity: 0.8;
  }

  .sliderPage {
    color: white;
    font-weight: 600;
    transform: translate(92%, -80px);
    border-radius: 15px;
    padding-top: 2px;
    padding: 6px 8px;
    font-size: 16px;
    font-weight: 600;
    line-height: 17px;
    background: rgba(0, 0, 0, 0.05);
  }
`;

const CarouselBox = styled.div<{ move: number }>`
  width: 400vw;
  height: 400px;
  display: flex;
  transition: 0.8s cubic-bezier(0.52, 0.48, 0.8, 0.27);
  transform: ${(props) => `translatex(${props.move}vw)`};
  &:hover {
    cursor: pointer;
  }

  /* 클릭시 translate 움직이기 */
`;

const SliderBox = styled.div`
  width: 100vw;

  img {
    width: 100%;
    height: 500px;
  }
`;

interface moveProps {
  move: number;
}

export default function Carousel() {
  const [move, setMove] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  console.log(move, page);

  const Back = () => {
    setMove(move + 100);
    setPage(page - 1);
  };

  const Next = () => {
    setMove(move - 100);
    setPage(page + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (page < 4) {
        setMove(move - 100);
        setPage(page + 1);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  //클리어 함수를 넣으니까 계속 넘어가려는게 해결되었다 무엇때문일까?

  //  upgrade : setInterval 통해 자동 슬라이더 넘김 구현하기
  // * 문제점 : 구현은 했으나, clearTimeout 이후에도 계속 버튼이 눌려짐

  const slides = [
    {
      id: 0,
      title: "해리포터 20주년 개정판",
      subtitle: "21세기의 고전 《해리포터》를 고전답게 재해석하다!",
      img: "https://images.ctfassets.net/usf1vwtuqyxm/3Tha0nbSjB8OCTHNR8yAe9/a80b2ce8b78995a24f76f64b85cd6021/hp-b1-pmp-crop.jpg?fm=jpg&q=70&w=2560",
      url: "",
    },
    {
      id: 1,
      title: "레디페이퍼4",
      subtitle:
        "미니멀 디자인의 RIDIPAPER 4는 시간, 공간, 그리고 당신의 감각까지 그대로 반영합니다.",
      img: "https://blog.kakaocdn.net/dn/U9nld/btrydzi6oWE/Tsc8QVBMAw1VK01oo5tEU1/img.png",
      url: "",
    },
    {
      id: 2,
      title: "레디 웹툰 공모전",
      subtitle: "1등 1억, 지금 당장 도전하세요!",
      img: "https://ridicorp.com/wp-content/uploads/2021/09/bg.jpg",
      url: "",
    },
    {
      id: 3,
      title: "샌더스 돌풍의 주역, 버니 샌더스의 모든 것",
      subtitle: "99%를 위한 사회를 외친 샌더스, 그는 누구인가?",
      img: "https://wallpapercave.com/wp/wp5432358.png",
      url: "",
    },
  ];

  return (
    <Container>
      <CarouselBox move={move}>
        {slides.map((slide) => (
          <SliderBox>
            <img src={slide.img} />
            <div className="sliderTextBox">
              <h2 className="sliderTextTitle">{slide.title}</h2>
              <p className="sliderTextSub">{slide.subtitle}</p>
            </div>
          </SliderBox>
        ))}
      </CarouselBox>
      <i
        onClick={() => {
          move !== 0 && Back();
        }}
        className="ri-arrow-left-s-line icon left"
      ></i>
      <i
        onClick={() => {
          move !== -300 && Next();
          // 삼항 연산자 : -300이 아니면 true, 그러므로 다음 것을 실행해줌
          // -300이 되면 false, 그러므로 Next를 실행시키지 않고 move에서 끝남
        }}
        className="ri-arrow-right-s-line icon right"
      ></i>

      <div className="sliderPage">
        <span>{page} / 4</span>
      </div>
    </Container>
  );
}
