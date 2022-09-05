import React, { useState } from "react";
import styled from "styled-components";

import { motion, AnimatePresence } from "framer-motion";

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
        margin-right: 30px;
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

    @media ${(props) => props.theme.mobile} {
      li > i {
        font-size: 20px;
        padding: 20px;
      }

      li > span {
        font-size: 12px;
      }
    }
  }
`;

const MainWrapper = styled.main`
  position: relative;
`;

const Slider = styled.div`
  position: relative;
  height: 250px;

  .daily_text {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: absolute;
  width: 100%;

  i {
    position: absolute;
    top: 25%;
    right: 5%;

    font-size: 28px;

    cursor: pointer;
  }
`;

const Box = styled(motion.div)`
  background-color: transparent;
  height: 200px;
  width: 100%;

  img {
    width: 80px;
    min-height: 120px;
    margin: 0 auto;
    display: block;
    margin-bottom: 15px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Info = styled(motion.div)`
  width: 100%;

  text-align: center;
  .daily_title {
    font-size: 14px;
    margin-bottom: 7px;
  }
  .daily_authors {
    font-size: 12px;
    opacity: 0.7;
  }
  &:hover {
    cursor: pointer;
  }
`;

const rowVariants = {
  hidden: {
    x: window.innerWidth - 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth - 10,
  },
};

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    y: -30,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: "tween",
    },
  },
};

const offset = 3;

export default function Recommend() {
  const data = [
    {
      id: 0,
      title: "모던 자바스크립트",
      author: "이웅모",
      img: "https://img.ridicdn.net/cover/1160000024/xxlarge#1",
    },
    {
      id: 1,
      title: "부활",
      author: "레오 톨스토이",
      img: "https://img.ridicdn.net/cover/509001274/xxlarge#1",
    },
    {
      id: 2,
      title: "1984",
      author: "조지 오웰",
      img: "https://img.ridicdn.net/cover/509000032/xxlarge#1",
    },
    {
      id: 3,
      title: "고요함의 지혜",
      author: "에크하르트 톨레",
      img: "https://img.ridicdn.net/cover/1546000384/xxlarge#1",
    },
    {
      id: 4,
      title: "하마터면 열심히 살 뻔했다",
      author: "하완",
      img: "https://img.ridicdn.net/cover/606001759/xxlarge#1",
    },
    {
      id: 5,
      title: "불편한 편의점",
      author: "김호연",
      img: "https://img.ridicdn.net/cover/2177000101/xxlarge#1",
    },
  ];

  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalBooks = data.length;
      const maxIndex = Math.floor(totalBooks / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  return (
    <>
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
      <MainWrapper>
        <Slider className="daily_ready">
          <div>
            <h3 className="daily_text">오늘 레디의 발견</h3>
          </div>
          <AnimatePresence>
            <Row
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={rowVariants}
              transition={{ type: "tween", duration: 1 }}
              key={index}
            >
              {data
                .slice(offset * index, offset * index + offset)
                .map((a: any) => (
                  <Box
                    key={a.id}
                    initial="normal"
                    variants={boxVariants}
                    whileHover="hover"
                    transition={{ type: "tween" }}
                  >
                    <img src={a.img} alt="book image" />
                    <Info>
                      <h4 className="daily_title">{a.title}</h4>
                      <p className="daily_authors">{a.author} 저</p>
                    </Info>
                  </Box>
                ))}
              <i
                onClick={increaseIndex}
                className="ri-arrow-right-s-line icon-right"
              />
            </Row>
          </AnimatePresence>
        </Slider>
      </MainWrapper>
    </>
  );
}
