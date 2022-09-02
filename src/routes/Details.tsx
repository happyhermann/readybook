import { Book } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import styled from "styled-components";
import { filteredAtom, searchedAtom } from "../atom";
import SearchedResult from "./SearchResult";

const Wrapper = styled.article`
  display: flex;
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

  .info_title_box {
    h3 {
      font-size: 30px;
      line-height: 1.3em;
      color: #333;
      font-weight: 700;
      word-break: keep-all;
      word-wrap: break-word;
      margin-top: 8px;
    }
  }
  .info_authors_box {
    color: #666;
    font-size: 12px;
    line-height: 1em;
    letter-spacing: -0.03em;
  }
  .info_publisher {
    font-size: 13px;
    color: #666;
    line-height: 17px;
    padding-bottom: 5px;
  }

  tbody {
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid #e6e8eb;
    border-bottom: 1px solid #e6e8eb;
    color: #666;
    font-size: 12px;
  }

  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
    line-height: normal;
  }

  th {
    color: #40474d;
    border-right: 1px solid #e6e8eb;
    background: #f7fafc;
    min-height: 36px;
    padding: 7px 0;
    vertical-align: middle;
    font-size: 13px;
    box-sizing: border-box;
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

export default function Details() {
  let { id } = useParams();

  console.log(id);

  const test = useRecoilValue<any>(filteredAtom);

  let findBook = test.find((books: any) => {
    return books.isbn !== id;
  });
  console.log(findBook);

  return (
    <Wrapper>
      <DetailImgWrapper>
        <div className="detail_img_box">
          <img
            src="https://img.ridicdn.net/cover/3945000009/xxlarge#1"
            alt="book thumnail"
          />
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
            <span></span>
            <span>번역가</span>
          </p>
        </div>
        <p className="info_publisher">출판사</p>
        <div className="info_price_box">
          <div className="info_price_table">
            <div>
              <table className="price_table normal_price_table">
                <tbody>
                  <tr>
                    <th className="price_title" rowSpan={3}>
                      <td className="price_type">종이책 정가</td>
                      <td className="book_price">
                        <span className="museo_sans">가격</span>
                      </td>
                    </th>
                  </tr>
                  <tr>
                    <td className="price_type">전자책 정가</td>
                    <td className="book_price">가격</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DetailInfoWrapper>
    </Wrapper>
  );
}
