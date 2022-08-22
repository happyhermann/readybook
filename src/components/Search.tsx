import React from "react";
import styled from "styled-components";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import { Divider } from "@mui/material";
import axios from "axios";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { inputAtom, searchedAtom } from "../atom";

interface IInput {
  input: string;
  id: number;
}

const SearchBox = styled.form`
  @media ${(props) => props.theme.mobile} {
    position: absolute;
    width: 95%;
    background-color: #f0f0f0;
    border-radius: 8px;
    margin-bottom: -100px;

    label {
      display: flex;
      align-items: center;
      height: 45px;
      padding: 0 11px;
    }

    i {
      font-size: 16px !important;
      color: black;
      opacity: 0.4;
      margin-right: 10px;
    }

    input {
      width: 100%;
      height: 100%;
      margin: 0;
      border-radius: 8px;
      border: none;
      background-color: transparent;
      appearance: none;
      box-shadow: none;
      outline: none;
    }
  }

  @media ${(props) => props.theme.desktop} {
    position: relative;
    width: 275px;
    background-color: #f0f0f0;
    margin-right: 14px;
    border-radius: 8px;

    label {
      display: flex;
      align-items: center;
      height: 45px;
      padding: 0 11px;
    }

    i {
      font-size: 16px !important;
      color: black;
      opacity: 0.4;
      margin-right: 10px;
    }

    input {
      width: 100%;
      height: 100%;
      margin: 0;
      border-radius: 8px;
      border: none;
      background-color: transparent;
      appearance: none;
      box-shadow: none;
      outline: none;
    }
  }
`;

const SearchHistory = styled.div`
  position: absolute;

  width: 464px;
  margin-top: 10px;
  padding-top: 6px;
  border: 1px solid rgb(240, 240, 240);
  border-radius: 8px;
  background: rgb(255, 255, 255);
  overflow: hidden;
  opacity: 1;
  transition: opacity 0.2s ease-in-out 0s;
  box-shadow: rgb(0 0 0 / 8%) 5px 5px 10px;
  z-index: 8000;
  padding: 10px 15px 0 15px;

  .search_recent {
    display: flex;
    justify-content: space-between;
    padding: 14px 5px 6px;
    font-size: 14px;
    opacity: 0.6;

    i {
      font-size: 20px !important;
    }
  }

  .search_text {
    display: flex;

    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 60px;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.01em;
    opacity: 0.5;
  }
  .search_button {
    opacity: 0.5;

    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
    border-top: 1px solid rgb(240, 240, 240);
    padding: 16px 0px;
    margin: 0px 16px;
    font-size: 16px;
    color: rgb(120, 120, 120);
  }
  .search_button_button {
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.01em;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .search_recent {
    display: flex;
    flex-direction: column;
  }
  .search_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 16px 6px;
    margin-bottom: 4px;

    h3 {
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: -0.01em;
      color: rgb(120, 120, 120);
    }
    span {
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: -0.01em;
      color: rgb(120, 120, 120);
    }
  }
  .search_recent_list {
    padding: 4px 16px 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .search_recent_list span {
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    white-space: normal;
    word-break: keep-all;
    max-height: calc(44px);
    font-size: 15px;
    color: black;
    letter-spacing: -0.01em;
  }
  .removeAll {
    cursor: pointer;
  }

  i {
    cursor: pointer;
  }
`;

export default function Search() {
  // const [input, setInput] = useState("");
  // const [search, setSearch] = useState("");
  // // input value
  // // const [result, setResult] = useState("");
  // // value 결과 summit
  // const [searched, setSearched] = useState("게임");

  // search data recoil

  const navigate = useNavigate();
  const [hidden, setHidden] = useState(false);
  const setSearched = useSetRecoilState<any>(searchedAtom);

  const inputValue = useRecoilValue<any[]>(inputAtom);

  // input data recoil

  const setInputValue = useSetRecoilState<any>(inputAtom);

  // const [data, setData] = useState<DataType[]>([]);
  useEffect(() => {
    axios
      .get("https://dapi.kakao.com/v3/search/book?target=title", {
        params: {
          // 검색어
          query: "",

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
          Authorization: "KakaoAK a8c449437a2e8ad317c59a7b97b40601",
        },
      })
      .then((res) => setSearched(res.data.documents))
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = (e: any) => {
    e.preventDefault();
    axios
      .get("https://dapi.kakao.com/v3/search/book?target=title", {
        params: {
          query: e.currentTarget.search.value,
          size: 50,
        },
        headers: {
          Authorization: "KakaoAK a8c449437a2e8ad317c59a7b97b40601",
        },
      })
      .then((res) => setSearched(res.data.documents))
      .catch((err) => console.log(err));
    setInputValue((oldInput: any) => {
      const input = e.currentTarget.search.value;
      return [...oldInput, { text: input, id: Date.now() }];
      // 이거 이해가 안됨 따라 쓰긴 했는데 이해하기
      // id를 가진 객체
    });
  };

  console.log(inputValue);

  const onClick = (e: any) => {
    setHidden(!hidden);
    console.log(e.target);
  };

  const onKeyDown = (e: any) => {
    if (e.key === "Enter") {
      setHidden(false);
      navigate("/search");
    }
  };

  // 검색창 누를 시, 히스토리 창 토글

  // 검색창 엔터 누를 시, 히스토리 창 끄기

  // 해결함 => input에 name주고 onsubmit에서 e.currentTarget + "name".value로 컨트롤

  const onRemove = (id: any) => {
    return (event: React.MouseEvent) => {
      setInputValue(inputValue.filter((inputs) => inputs.id !== id));
    };
  };

  // 와 이게 된다고? 이렇게 하니까 삭제가 되네? 뭐냐?

  // const onRemoveAll = () => {
  //   setInputValue(() => {
  //     inputValue.splice(0, inputValue.length);
  //   });
  // };
  // 모두 삭제하는 것 만들기

  return (
    <>
      <SearchBox onSubmit={onSubmit}>
        <label onClick={onClick}>
          <i className="ri-search-line"></i>
          <input name="search" onKeyDown={onKeyDown} type="text" />
        </label>
        {hidden && (
          <SearchHistory>
            {inputValue.length !== 0 ? (
              <div className="search_recent">
                <div className="search_header">
                  <h3>최근 검색어</h3>
                  <span className="removeAll">전체삭제</span>
                </div>
                <div className="search_recent_list_box">
                  {inputValue.map((searched) => (
                    <li key={searched.id} className="search_recent_list">
                      <span className="search_recent_list_text">
                        {searched.text}
                      </span>
                      <i
                        onClick={onRemove(searched.id)}
                        className="ri-close-line close"
                      ></i>
                    </li>
                  ))}
                </div>
              </div>
            ) : (
              <div className="search_text">최근 검색 내역이 없습니다.</div>
            )}

            <Divider />
            <div className="search_button">
              <button className="search_button_button">검색어 저장 끄기</button>
            </div>
          </SearchHistory>
        )}
      </SearchBox>
    </>
  );
}
