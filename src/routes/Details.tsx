import { Book } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import styled from "styled-components";
import { searchedAtom, filterAtom } from "../atom";

const Wrapper = styled.article`
  display: flex;
  @media ${(props) => props.theme.mobile} {
    padding: 12px;
    width: 100%;
  }
  padding: ${(props) => props.theme.desktopPadding};
`;

const DetailImgWrapper = styled.div`

@media ${(props) => props.theme.mobile} {
  padding: 12px;
  font-size: 12px;
  .detail_img {
    width: 200px;
    max-height: 313px;
    vertical-align: middle;
    outline: 0;
    padding: 0;
    color: black/
    font-weight: 400;
    letter-spacing: -0.03em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    font-size: 14px;
  }
  
   }

   @media ${(props) => props.theme.desktop} {
    padding: ${(props) => props.theme.desktopPadding};
    width: 200px;


   }


 

 
  .detail_img_box {
    display: block;
    width: 100%;
     position: relative;
 
    }
 

  .detail_img {
    width: 200px;
    max-height: 313px;
    vertical-align: middle;
    outline: 0;
    padding: 0;
    color: black/
    font-weight: 400;
    letter-spacing: -0.03em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    font-size: 14px;
  }

  .detail_preview_box {
    margin-top: 12px;
    width: 200px;
    text-align: center;
    color: #666;
    font-size: 12px;
    line-height: 1em;
    letter-spacing: -0.03em;
    -webkit-font-smoothing: antialiased;

    span {
      width: 130px;
      font-family: ridi-roboto, Helvetica Neue, Apple SD Gothic Neo, "나눔고딕",
        Nanum Gothic, "돋움", arial, Dotum, Tahoma, Geneva, sans-serif;
      letter-spacing: -0.03em;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      margin: 0;
      padding: 0;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
      appearance: none;
      border: 0;
      box-shadow: none;
      outline: 0;
      text-decoration: none;
      box-sizing: border-box;
      border-radius: 4px;
      font-weight: 700;
      display: inline-block;
      text-align: center;
      cursor: pointer;
      line-height: 1em;
      vertical-align: baseline;
      -webkit-transition: background 0.2s, color 0.2s;
      transition: background 0.2s, color 0.2s;
      color: #1f8ce6;
      background: #fff;
      border: 1px solid #1f8ce6;
      box-shadow: 0 1px 1px 0rgba (31, 140, 230, 0.3);
      font-size: 13px;
      padding: 12px 26px;
      color: #1f8ce6;

      background: #ebf6ff;
    }
  }
`;

const DetailInfoWrapper = styled.div`
  width: 500px;
  @media ${(props) => props.theme.mobile} {
    padding: 30px;
    padding-left: 5;

    font-size: 13px;
    .info_title_box {
    h3 {
      font-size: 15px;
      line-height: 1.3em;
      color: #333;
      font-weight: 700;
      word-break: keep-all;
      word-wrap: break-word;
      margin-bottom: 20px;
     }
   
  }
 

  }

 
  @media ${(props) => props.theme.desktop} {
    padding: 25px 100px;
  
 
    .info_title_box {
    h3 {
      font-size: 30px;
      line-height: 1.3em;
      color: #333;
      font-weight: 700;
      word-break: keep-all;
      word-wrap: break-word;
      margin-bottom: 20px;
     }
  }
  }



  .info_authors_box {
    color: #666;
    font-size: 12px;
    line-height: 1em;
    letter-spacing: -0.03em;
    margin-bottom: 5px;
  }
  .info_publisher {
    font-size: 13px;
    color: #666;
    line-height: 17px;
    padding-bottom: 5px;
  }

  .info_price_box {
    margin: 15px 0;
  }

  .info_price_table {
    padding-bottom: 0;
    color: #666;
    font-size: 12px;
    line-height: 1em;
    letter-spacing: -0.03em;
    -webkit-font-smoothing: antialiased;
  }

  .price_table {
    width: 100%;
    display: table;

    border-collapse: collapse;
    border-top: 1px solid #e6e8eb;
    border-bottom: 1px solid #e6e8eb;
    color: #666;
    font-size: 12px;
    line-height: 1em;
    letter-spacing: -0.03em;
    -webkit-font-smoothing: antialiased;
  }

  tbody {
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid #e6e8eb;
    border-bottom: 1px solid #e6e8eb;
    color: #666;
    font-size: 12px;
  }

  .price_title {
    color: #40474d;
    border-right: 1px solid #e6e8eb;
    background: #f7fafc;
    width: 27.5%;
    min-height: 36px;
    padding: 7px 0;
    vertical-align: middle;
    font-size: 13px;
    box-sizing: border-box;
  }
  .price_type {
    width: 27.5%;
    text-align: right;
    font-weight: 700;
    padding: 7px 10px;
    white-space: nowrap;
    color: #808991;
    vertical-align: middle;
    font-size: 13px;
    box-sizing: border-box;
  }

  .selling_price_row {
    border-bottom: 1px solid #e6e8eb
    line-height: normal;
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
    border-collapse: collapse;
    color: #666;
    font-size: 12px;

  }
  .price_type {
    width: 25px;
    padding: 7px 10px;
    white-space: nowrap;
    color: #808991;
    min-height: 36px;
    vertical-align: middle;
    font-size: 13px;
    box-sizing: border-box;
    
  }
  .book_price {
    color: #1f8ce6;
    text-align: right;
    font-weight: 700;
    padding: 7px 10px;
    min-height: 36px;
    padding: 7px 0;
    vertical-align: middle;
    font-size: 13px;
    box-sizing: border-box;

    span {    

      line-height: normal;
      letter-spacing: -0.03em;
      color: #1f8ce6;
      text-align: right;
      font-weight: 700;
      white-space: nowrap;
     font-size: 13px;

    }

  


  }
  .nameData {
    font-size: 13px;
    color: black;
    font-weight: 600;

    span {
      color: rgba(0,0,0,0.5);
      font-weight: 400;


    }

   
  }
  .info_publisher {
       font-weight: 600;
    }

`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  overflow: auto;
  margin-top: 15px;
  color: #666;
  font-size: 12px;
  line-height: 1em;
  letter-spacing: -0.03em;

  .info_buttons {
    display: inline-table;
    white-space: nowrap;
    list-style: none;

    margin: 0;
    padding: 0;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    color: #666;
    font-size: 12px;
    line-height: 1em;
    letter-spacing: -0.03em;
    -webkit-font-smoothing: antialiased;
  }

  .rui_button_item {
    padding-left: 0;
    padding: 0 2px 0 3px;
    display: table-cell;
    color: #666;
    font-size: 12px;
    vertical-align: middle;
    margin: 0;
  }
  button {
    letter-spacing: -0.03em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    appearance: none;
    border: 0;
    box-shadow: none;
    outline: 0;
    text-decoration: none;
    box-sizing: border-box;
    border-radius: 4px;
    font-weight: 700;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    line-height: 1em;
    vertical-align: baseline;
    -webkit-transition: background 0.2s, color 0.2s;
    transition: background 0.2s, color 0.2s;
    color: #808991;
    background: #fff;
    border: 1px solid #d1d5d9;
    box-shadow: 0 1px 1px 0 rgb(209 213 217 / 30%);
    font-size: 16px;
    padding: 10px 13px;
  }

  span {
    font-weight: 400;
    font-style: normal;
    text-decoration: inherit;
    text-transform: none;
    line-height: 1;
    text-rendering: auto;
  }

  i {
    font-size: 17px;
  }

  .last {
    padding-right: 0;
    padding: 0 2px 0 3px;
    display: table-cell;
    vertical-align: middle;
    margin: 0;
    color: #666;
    font-size: 12px;
  }

  .last_text {
    padding: 0 16px;
    min-width: 112px;
    font-size: 15px;
    height: 48px;
    line-height: 46px;
    padding: 0;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    letter-spacing: -0.03em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    appearance: none;
    border: 0;
    box-shadow: none;
    outline: 0;
    text-decoration: none;
    box-sizing: border-box;
    border-radius: 4px;
    font-weight: 700;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    line-height: 1em;
    vertical-align: baseline;
    -webkit-transition: background 0.2s, color 0.2s;
    transition: background 0.2s, color 0.2s;
    color: #fff;
    background: #1f8ce6;
    border: 1px solid #0077d9;
    box-shadow: 0 1px 1px 0 rgb(31 140 230 / 30%);
    font-size: 14px;
    padding: 16px 34px;
  }
`;

const IntroduceBook = styled.article`
  @media ${(props) => props.theme.mobile} {
    padding: 10px;
  }
  display: block;
  margin: 0;
  padding: 0;
  color: #666;
  font-size: 12px;
  line-height: 1em;
  letter-spacing: -0.03em;
  -webkit-font-smoothing: antialiased;

  @media ${(props) => props.theme.desktop} {
    padding: ${(props) => props.theme.desktopPadding};
  }

  .introduce_text {
    margin-bottom: 15px;
    padding: 10px 0 8px 0;
    border-bottom: 2px solid #7d8e9e;
  }
  .introduce_title {
    display: inline-block;
    font-size: 20px;
    color: #59667a;
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  .introduce_content {
    color: #666;
    font-size: 12px;
    line-height: 1em;
    letter-spacing: -0.03em;
    -webkit-font-smoothing: antialiased;
  }

  .introduce_p {
    width: 100%;
    height: 186px;
    overflow: hidden;
    line-height: 1.8em;
    font-size: 13px;
    color: #333;
    word-break: keep-all;
    letter-spacing: -0.03em;

    word-wrap: break-word;
  }
`;

const RankAside = styled.aside`
  @media ${(props) => props.theme.mobile} {
    display: none;
  }

  display: table-cell;
  width: 207px;
  background: 0 0;
  vertical-align: top;
  border-left: 1px solid #e6e8eb;

  img {
    margin-bottom: 25px;
  }

  .aside_best {
    padding: 0 18px;
    margin-bottom: 45px;

    h2 {
      line-height: 1.5em;
      color: #333;
      font-weight: 700;
      font-size: 12px;
      border-bottom: 1px solid #ddd;
      padding-bottom: 3px;
    }
    li {
      padding: 5px 0;
      border-bottom: 1px solid #ddd;
      position: relative;
    }

    a {
      display: table;
      table-layout: fixed;
      height: 19px;
      width: 100%;
      overflow: hidden;
    }
    .rank {
      width: 33px;
      color: #e64938;

      font-weight: 700;
      font-size: 12px;
    }

    .rank_title {
      width: 138px;
      font-size: 12px;
      line-height: 1.5em;
      display: table-cell;
    }
    .rank_title_title {
      height: 19px;
      font-weight: 400;
      white-space: nowrap;
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
      word-break: keep-all;
      white-space: normal;
    }
    .rank_title_fadeout {
      display: block;
      position: absolute;
      width: 20%;
      height: 100%;
      right: 0;
      top: 0;
    }
  }
`;

interface ResultType {
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

export default function Details(props: any) {
  const mockUp = [
    "사피엔스",
    "해리포터",
    "이방인",
    "자본론",
    "삶으로 다시 떠오르기",
    "장자",
    "선악의 저편",
    "아비투스",
    "코스모스",
    "자유로부터의 도피",
  ];

  let { id } = useParams();
  const [isTrue, setIsTrue] = useState(false);
  // console.log(mockUp);

  // console.log(id);

  const filterValue = useRecoilValue<any>(filterAtom);

  let findBook = filterValue.find((books: any) => {
    return books.datetime == id;
  });
  // console.log(findBook);

  console.log(findBook.translators[0]);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  // 3초만에 해결 함, 렌더링 될 때 마다 맨 위로 가게 함

  return (
    <>
      <Wrapper>
        <>
          <DetailImgWrapper>
            <div className="detail_img_box">
              <div className="thumnail_image">
                <img
                  className="detail_img"
                  src={findBook.thumbnail}
                  alt="book thumnail"
                />
              </div>
            </div>
            <div className="detail_preview_box">
              <span>미리보기</span>
            </div>
          </DetailImgWrapper>
          <DetailInfoWrapper>
            <div className="info_title_box">
              <h3>{findBook.title}</h3>
            </div>
            {/* <div className="info_rated_box">
          <p>평점</p>
        </div> */}
            <div style={{ marginBottom: "12px" }} className="info_authors_box">
              <p style={{ display: "flex", flexDirection: "column" }}>
                <span className="nameData" style={{ marginBottom: "8px" }}>
                  {findBook.authors[0]} <span>저</span>
                </span>
                {isTrue && (
                  <span className="nameData">
                    {findBook.translators[0]} <span>역</span>
                  </span>
                )}
              </p>
            </div>
            <p className="info_publisher">{findBook.publisher} 출판</p>
            <div className="info_price_box">
              <div className="info_price_table">
                <div>
                  <table className="price_table normal_price_table">
                    <tbody>
                      <tr>
                        <th className="price_title" rowSpan={2}>
                          소장
                        </th>

                        <td className="price_type">전자책 정가</td>
                        <td className="book_price">
                          <span className="museo_sans">
                            {findBook.price} 원
                          </span>
                        </td>
                      </tr>
                      <tr className="selling_price_row">
                        <td className="price_type">판매가</td>
                        <td className="book_price">
                          <span className="museo_sans">
                            {findBook.price} 원
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <ButtonWrap>
              <ul className="info_buttons">
                <li className="rui_button_item">
                  <button type="button" className="">
                    <i className="ri-heart-fill"></i>
                  </button>
                </li>
                <li className="rui_button_item">
                  <button type="button" className="">
                    <i className="ri-shopping-cart-2-fill"></i>
                  </button>
                </li>
                <li className="rui_button_item">
                  <button type="button" className="">
                    <i className="ri-gift-fill"></i>
                  </button>
                </li>
                <li className="rui_button_item">
                  <span className="last_text">소장하기</span>
                </li>
              </ul>
            </ButtonWrap>
          </DetailInfoWrapper>
          <RankAside>
            <div className="aside_banner">
              <img
                style={{ width: "207px", display: "block" }}
                src="https://active.ridibooks.com/ridibooks_banner_book_detail/20220831083433_1661902473711.jpg"
                alt="레디 이벤트"
              />
            </div>
            <div className="aside_best">
              <h2 className="aside_contents_title">베스트 셀러</h2>
              <ul className="aside_contents_ul">
                <li className="aside_contents_li">
                  <a href="#">
                    <span className="rank">1위</span>
                    <span className="rank_title">
                      <span className="rank_title_title">사피엔스</span>
                      <span className="rank_fadeout"></span>
                    </span>
                  </a>
                </li>
                <li className="aside_contents_li">
                  <a href="#">
                    <span className="rank">1위</span>
                    <span className="rank_title">
                      <span className="rank_title_title">
                        내가 틀릴 수도 있습니다
                      </span>
                      <span className="rank_fadeout"></span>
                    </span>
                  </a>
                </li>
                <li className="aside_contents_li">
                  <a href="#">
                    <span className="rank">2위</span>
                    <span className="rank_title">
                      <span className="rank_title_title">이방인</span>
                      <span className="rank_fadeout"></span>
                    </span>
                  </a>
                </li>
                <li className="aside_contents_li">
                  <a href="#">
                    <span className="rank">3위</span>
                    <span className="rank_title">
                      <span className="rank_title_title">크눌프</span>
                      <span className="rank_fadeout"></span>
                    </span>
                  </a>
                </li>
                <li className="aside_contents_li">
                  <a href="#">
                    <span className="rank">4위</span>
                    <span className="rank_title">
                      <span className="rank_title_title">코스모스</span>
                      <span className="rank_fadeout"></span>
                    </span>
                  </a>
                </li>
                <li className="aside_contents_li">
                  <a href="#">
                    <span className="rank">5위</span>
                    <span className="rank_title">
                      <span className="rank_title_title">
                        하마터면 열심히 살 뻔 했다
                      </span>
                      <span className="rank_fadeout"></span>
                    </span>
                  </a>
                </li>
                <li className="aside_contents_li">
                  <a href="#">
                    <span className="rank">6위</span>
                    <span className="rank_title">
                      <span className="rank_title_title">
                        12가지 인생의 법칙
                      </span>
                      <span className="rank_fadeout"></span>
                    </span>
                  </a>
                </li>
                <li className="aside_contents_li">
                  <a href="#">
                    <span className="rank">7위</span>
                    <span className="rank_title">
                      <span className="rank_title_title">
                        장하준의 경제학 특강
                      </span>
                      <span className="rank_fadeout"></span>
                    </span>
                  </a>
                </li>
                <li className="aside_contents_li">
                  <a href="#">
                    <span className="rank">8위</span>
                    <span className="rank_title">
                      <span className="rank_title_title">어떻게 살 것인가</span>
                      <span className="rank_fadeout"></span>
                    </span>
                  </a>
                </li>
                <li className="aside_contents_li">
                  <a href="#">
                    <span className="rank">9위</span>
                    <span className="rank_title">
                      <span className="rank_title_title">리액트 입문</span>
                      <span className="rank_fadeout"></span>
                    </span>
                  </a>
                </li>
                <li className="aside_contents_li">
                  <a href="#">
                    <span className="rank">10위</span>
                    <span className="rank_title">
                      <span className="rank_title_title">우승은 맨유</span>
                      <span className="rank_fadeout"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </RankAside>
        </>
      </Wrapper>

      <IntroduceBook>
        <div className="introduce_text">
          <h3 className="introduce_book">작품 소개</h3>
        </div>
        <div className="introduce_content">
          <p className="introduce_p">{findBook.contents}</p>
        </div>
      </IntroduceBook>
    </>
  );
}
