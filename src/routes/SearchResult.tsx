import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { searchedAtom, inputAtom, checkAtom, filteredAtom } from "../atom";
import Pagination from "../components/Pagination";

const SearchResultContainer = styled.section`
  @media ${(props) => props.theme.mobile} {
    padding: 16px;
  }

  @media ${(props) => props.theme.desktop} {
    padding: 10px 100px;
  }
`;

const SearchResultMain = styled.main`
  h2 {
    font-size: 18px;
    font-weight: bold;
    line-height: 21px;
    margin: 10px 0;

    overflow-wrap: break-word;
    //이건 무엇이지
  }
  nav {
    width: 200vw;
  }

  ul {
    width: 100%;
    display: flex;
    overflow-x: hidden;
    padding-left: 16px;
    padding-right: 16px;
  }
  .search_result_list {
    margin-right: 20px;
    padding: 8px 3px;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  .search_result_list:first-child {
    color: rgb(99, 108, 115);
    box-shadow: rgb(158 167 173) 0px -3px 0px inset;
  }

  .search_result_list:first-child span {
    opacity: 1;
  }

  .search_result_list > span {
    color: rgb(99, 108, 115);
    font-size: 14px;
    font-weight: normal;
    opacity: 0.7;
  }

  .select_box {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }

  select {
    width: 93px;
    height: 2.8em;
    padding: 7px;
    border: 1px solid rgb(209, 213, 217);
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    background: white;
    color: rgb(99, 108, 115);
    font-size: 12px;
    font-weight: bold;
    line-height: calc(2.8em - 14px);
  }

  .checkBox_box {
    font-size: 15px;
    font-weight: 700;
    color: rgb(99, 108, 115);
    display: inline-flex;
    align-items: center;
    padding: 6px 4px 6px 6px;
  }

  .checkBox_box input {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: 1px solid rgb(209, 213, 217);
    box-sizing: border-box;
    border-radius: 2px;
    background: white;
    transition: background 0.2s ease 0s;
    margin-right: 6px;
  }
`;

const SearchListContainer = styled.div``;

const SearchList = styled.li`
  list-style: none;
  display: flex;
  border-bottom: 1px solid rgb(209, 213, 217);

  .searchImgBox {
    padding: 20px 0;
    margin-right: 8px;
    img {
      display: block;
      width: 100%;
      max-height: 119px;
    }
    img:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

  .searchDetailsBox {
    padding: 20px 15px;

    h3 {
      font-size: 16px;
      font-weight: 500;
      color: black;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow-wrap: break-word;
      white-space: normal;
      word-break: keep-all;
      max-height: calc(2.8em);
      line-height: 1.4em;
      margin-bottom: 4px;

      &:hover {
        cursor: pointer;
        opacity: 0.4;
      }
    }
    p:first-child {
      font-weight: normal;
      line-height: 1.2em;
      overflow-wrap: break-word;
      padding-top: 1px;
      padding-bottom: 3px;
      font-size: 14px;
      margin-bottom: 2px;
      color: rgb(99, 108, 115);
    }
    p:nth-child(2) {
      font-weight: normal;
      line-height: 1.2em;
      overflow-wrap: break-word;
      font-size: 13px;
      color: rgb(128, 137, 145);
      padding-top: 1px;
      padding-bottom: 1px;
    }
    p:last-child {
      font-weight: normal;
      line-height: 1.2em;
      overflow-wrap: break-word;
      font-size: 13px;
      color: rgb(128, 137, 145);
      padding-top: 1px;
      padding-bottom: 1px;
      margin-top: 4px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      margin-bottom: 12px;
    }
  }
  .searchPriceBox {
    display: flex;
    align-items: center;

    span:first-child {
      margin-right: 3px;
      text-align: left;
      color: rgb(102, 102, 102);
      font-weight: normal;
      font-size: 14px;
    }
  }
  span:last-child {
    color: rgb(31, 140, 230);
    font-size: 16px;
    font-weight: 700;
  }
`;

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 200px 0px 360px;

  strong {
    font-size: 14px;
    color: rgb(128, 137, 145);
    flex: 0 0 auto;
    margin-bottom: 16px;
  }

  span {
    display: inline-flex;
    align-items: center;
    height: 40px;
    padding: 2px 48px;
    font-size: 14px;
    font-weight: bold;
    border: 1px solid rgb(30, 158, 255);
    border-radius: 3px;
    color: rgb(30, 158, 255);
    cursor: pointer;
  }
`;

export interface ResultType {
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

interface IProps {
  setPostsPerPage: () => void;
}

export default function SearchedResult() {
  const searchedResult = useRecoilValue<ResultType[]>(searchedAtom);
  //배열일때는 interface뒤에 []

  const checkValue = useRecoilValue<any>(checkAtom);
  const setCheck = useSetRecoilState<boolean>(checkAtom);

  const inputValue = useRecoilValue<any[]>(inputAtom);

  const [currentPage, setCurrentPage] = useState<any>(1);
  const [postsPerPage, setPostsPerPage] = useState<any>(10);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (searchedResult: any) => {
    let currentPost = [];
    currentPost = searchedResult.slice(indexOfFirst, indexOfLast);
    return currentPost;
  };

  let current = currentPosts(searchedResult);
  console.log(current);

  const [filter, setFilter] = useRecoilState(filteredAtom);

  useEffect(() => {
    setFilter(current);
  });

  // 여기로 페이지네이션 값 주기 => pagination component로 넘기기

  useEffect(() => {
    if (searchedResult.length === 0) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [searchedResult]);

  //엔터 눌렀을 때 다시 렌더링 하게 리팩토링

  // console.log(inputValue[inputValue.length - 1].text);

  // 최근 검색어중 최신 값 가져오기

  return (
    <SearchResultContainer>
      <SearchResultMain>
        <div className="search_result_title">
          {/* <h2>'{inputValue[inputValue.length - 1].text}' 검색 결과</h2> */}
        </div>
        <nav className="search_result_nav">
          <ul>
            <li className="search_result_list">
              <span>전체</span>
            </li>
            <li className="search_result_list">
              <span>청소년</span>
            </li>
            <li className="search_result_list">
              <span>정치/사회</span>
            </li>
            <li className="search_result_list">
              <span>인문</span>
            </li>
            <li className="search_result_list">
              <span>과학</span>
            </li>
            <li className="search_result_list">
              <span>역사</span>
            </li>
            <li className="search_result_list">
              <span>일반영어</span>
            </li>
            <li className="search_result_list">
              <span>종교</span>
            </li>
            <li className="search_result_list">
              <span>매거진</span>
            </li>
          </ul>
        </nav>
        {/* 이건 목업으로 대신 검색결과  */}
        <div className="select_box">
          <select>
            <option>인기순</option>
            <option>최신순</option>
          </select>
          <div className="checkBox_box">
            <input type="checkBox" />
            <span>대여</span>
          </div>
        </div>
        {/* 검색해서 array에 하나라도 있으면 그대로 보여주고
        빈 배열, 아무 결과 없으면 이 부분에 유저가 검색한 '~~~'에 대한 검색결과가 없습니다 띄우기 */}

        {/* 여기는 셀렉트 폼, 목업 or 발매날짜 최신순만 구현 */}

        {checkValue ? (
          <SearchListContainer>
            {currentPosts(searchedResult).map((book: ResultType) => (
              <Link to={`/detail/:id${book.isbn}`}>
                <SearchList key={book.isbn}>
                  <div className="searchImgBox">
                    <img src={book.thumbnail} alt="thumnail" />
                  </div>
                  <div className="searchDetailsBox">
                    <h3>{book.title}</h3>
                    <div>
                      <p>{book.authors}</p>
                      <p>{book.translators} 역</p>
                      <p>{book.publisher}</p>
                    </div>
                    <div className="searchPriceBox">
                      <span>소장</span>
                      <span>{book.price}</span>
                    </div>
                  </div>
                </SearchList>
              </Link>
            ))}

            {/* 검색결과를 map으로 + 페이지네이션 구현 */}
          </SearchListContainer>
        ) : (
          <Empty>
            {true ? (
              <>
                <strong>검색결과가 없습니다</strong>
                <span>작품 제안하기</span>
              </>
            ) : (
              <>
                {/* <strong>'{lastValue.text}'의 검색결과가 없습니다.</strong> */}
                <span>작품 제안하기</span>
              </>
            )}
          </Empty>
        )}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={searchedResult.length}
          paginate={setCurrentPage}
        />
      </SearchResultMain>
    </SearchResultContainer>
  );
}
