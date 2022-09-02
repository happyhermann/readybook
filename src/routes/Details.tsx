import { Book } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import styled from "styled-components";
import { searchedAtom, filterAtom } from "../atom";

const Wrapper = styled.article`
  display: flex;
  padding: 40px 29px;
`;

const DetailImgWrapper = styled.div`
  width: 250px;

  .detail_img_box {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    background: #d9d9d9;

    img {
      width: 200px;
      max-height: 313px;
    }
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
  padding: 0 30px;

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

`;

const ButtonWrap = styled.div`
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
    speak: none;
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
  let { id } = useParams();

  console.log(id);

  const filterValue = useRecoilValue<any>(filterAtom);

  let findBook = filterValue.find((books: any) => {
    return books.datetime == id;
  });
  console.log(findBook);

  return (
    <Wrapper>
      <DetailImgWrapper>
        <div className="detail_img_box">
          <img src={findBook.thumbnail} alt="book thumnail" />
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
        <div className="info_authors_box">
          <p>
            <span>{findBook.authors[0]} 저</span>
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
                      <span className="museo_sans">{findBook.price} 원</span>
                    </td>
                  </tr>
                  <tr className="selling_price_row">
                    <td className="price_type">판매가</td>
                    <td className="book_price">
                      <span className="museo_sans">{findBook.price} 원</span>
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
              <button type="button" className="last">
                <span className="last_text">소장하기</span>
              </button>
            </li>
          </ul>
        </ButtonWrap>
      </DetailInfoWrapper>
    </Wrapper>
  );
}
