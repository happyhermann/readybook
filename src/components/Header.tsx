import React from "react";
import styled from "styled-components";

import axios from "axios";

import { useEffect, useState } from "react";
import { useParams, useNavigate, Link, Navigate } from "react-router-dom";

import "remixicon/fonts/remixicon.css";

// MUI Icon
import Icon from "@mui/material/Icon";
import NavBar from "./NavBar";

import { useRecoilState, useRecoilValue } from "recoil";
import { LoginState } from "../LoginState";

// 헤더 컨테이너

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.bgDark};
  font-size: 15px;
  font-weight: 600;
  a {
    color: white;
    opacity: 0.3;
    /* default link text color */
    /* todo : 눌렀을 때 하얀색으로 바뀌도록 */
  }

  i {
    font-size: 20px;
  }

  .active {
    transition: 0.2s ease-in;
    opacity: 1;
  }

  /* 선택된 버튼 class */

  @media ${(props) => props.theme.mobile} {
    padding: 16px;
  }

  @media ${(props) => props.theme.desktop} {
    background-color: white;
    font-weight: 600;
    a {
      color: ${(props) => props.theme.textColor};
      opacity: 0.7;
      font-weight: bold;
    }
  }
`;

const Nav = styled.nav`
  @media ${(props) => props.theme.desktop} {
    display: flex;
    justify-content: space-between;
    padding: 16px 100px;
  }
`;

const ListContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Lists = styled.li`
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.desktop} {
    margin-right: 30px;
  }
`;

const User = styled.div`
  display: none;

  @media ${(props) => props.theme.desktop} {
    display: block;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 0.3px;
  background-color: rgba(0, 0, 0, 0.15);
`;

// 헤더는 모바일일 때는 다크모드 => 데스크톱에서는 디폴드 모드

export default function Header() {
  const navigate = useNavigate();
  const [logout, setLogout] = useRecoilState(LoginState);

  console.log(logout);

  const [tab, setTab] = useState(2);
  // 탭 컨트롤 state
  console.log(tab);

  let axios = require("axios"); // node.js쓸때 모듈 불러오기

  let config = {
    method: "post", //통신 방식
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/logout", //서버
    headers: {
      // 요청 헤더 설정
      "Content-Type": "application/json",
      apikey: process.env.REACT_APP_API_KEY,
      username: "eeeee",
    },
  };

  const isLoggedOut = () => {
    if (window.confirm("정말 로그아웃하시겠습니까?")) {
      alert("로그아웃되었습니다.");
      navigate("/");
      setLogout(false);
    } else {
      alert("취소합니다");
    }
  };

  const onLogOut = () => {
    axios(config).then(function (response: any) {
      console.log(response.data);
    });
    isLoggedOut();
  };

  // const KAKAO_KEY= "a8c449437a2e8ad317c59a7b97b40601";
  // const Kakao = axios.create({
  //     baseURL: 'https://dapi.kaka.com',
  //     headers: {
  //         Authorization: 'KakaoAK {KAKAO_KEY}',
  //     },
  // });

  // const kakaoSearch=params => {
  //     return Kakao.get("/v3/search/book", {params })
  // }

  // const [books, setBooks] = useState([]);

  // const getBooks=async()=> {

  //     const search=value
  //        try{
  //           if(search === "") {
  //             setBooks([])
  //           } else {
  //             const params= {
  //                 query: search,
  //                 size: 45,
  //              };
  //             const result = await kakaoSearch(params);

  //             if(result) {
  //                 setBooks(result.data.documents)
  //                 navigate('/market', {state : result.data.documents})
  //             } else {
  //                 console.log("fail")
  //             }
  //           }
  //        }catch(error) {
  //         console.log("error", error)
  //        }
  // }

  return (
    <>
      <HeaderContainer>
        <Nav>
          <ListContainer>
            <Lists>
              <Link
                onClick={() => {
                  setTab(0);
                }}
                className={`${tab === 0 ? "active" : ""}`}
                to="/webtoon"
              >
                웹툰/만화
              </Link>
            </Lists>
            <Lists>
              <Link
                onClick={() => {
                  setTab(1);
                }}
                className={`${tab === 1 ? "active" : ""}`}
                to="/novel"
              >
                웹소설
              </Link>
            </Lists>
            <Lists>
              <Link
                onClick={() => {
                  setTab(2);
                }}
                className={`${tab === 2 ? "active" : ""}`}
                to="/"
              >
                도서
              </Link>
            </Lists>
            <Lists>
              <Link to="/select">셀렉트</Link>
            </Lists>
          </ListContainer>
          {logout ? (
            <span style={{ cursor: "pointer" }} onClick={onLogOut}>
              로그아웃
            </span>
          ) : (
            <User>
              <Link style={{ marginRight: "15px" }} to="/login">
                회원가입
              </Link>
              <Link to="/login">로그인</Link>
            </User>
          )}
        </Nav>
        <Divider />
      </HeaderContainer>
      <NavBar />
    </>
  );
}
