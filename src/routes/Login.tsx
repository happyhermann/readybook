import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";

import { checkId } from "../atom";
import { LoginState, userState } from "../LoginState";

import axios from "axios";

const SignUpContainer = styled.section`
  z-index: 9999;

  background-color: #ebf6ff;
  width: 100vw;
  height: 100vw;
  position: fixed;
  top: 0;
  right: 0;

  header {
    width: 100%;
  }

  h1 {
    font-weight: 800;
    font-size: 22px;
    padding: 14px;
    text-align: center;
    color: ${(props) => props.theme.accentColor};
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  section {
    display: flex;
    margin: 0 auto;
    padding: 60px 0 70px;
    color: #666;
  }

  .signup_form {
    padding: 24px 10px;
  }

  .input_group {
    margin-bottom: 10px;
  }

  .input_label {
    display: block;
    width: 100%;
    position: relative;
  }

  .require {
    color: #e64938;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.5em;
    margin-bottom: 5px;
  }

  input {
    width: 302px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    padding: 16px 18px;
    overflow: hidden;
    border: 1px solid #d6deeb;
    border-style: solid;
    border-radius: 0;
    background-color: white;
    color: #313538;
    font-size: 15px;
    font-weight: 700;
    line-height: normal;
    appearance: none;
  }
`;

const LoginButton = styled.button`
  -webkit-box-shadow: 0 2px 4px 0 rgb(31 140 230 / 30%);
  display: block;
  width: 100%;
  padding: 16px 0;
  appearance: inherit;
  text-decoration: none;
  line-height: 1em;
  transition: background 0.2s, color 0.2s;
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #1f8ce6;
  -webkit-tap-highlight-color: transparent;
  margin-bottom: 10px;
  border-radius: 4px;
  cursor: pointer;

  &:active {
    background: #0077d9;
  }
`;

const SignUpButton = styled(LoginButton)`
  // 재활용하는 방법
  background-color: white;
  color: #808991;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  &:active {
    background: #0077d9;
  }
`;

type IFormData = {
  errors: {
    id: {
      message: string;
    };
  };
  nickname: string;
  id: string;
  password: string;

  extraError?: string;
};

interface IUserState {
  [Key: string]: string;
}

export default function Login() {
  let navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const [user, setUser] = useRecoilState<any>(userState);

  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    defaultValues: {},
  });

  const axios = require("axios");

  const data = JSON.stringify({
    email: id,
    password: password,
  });

  const config = {
    method: "post",
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login",
    headers: {
      "content-type": "application/json",
      apikey: "FcKdtJs202204",
      username: "eeeee",
    },
    data: data,
  };

  const setUserState = ({ user }: IUserState) => {
    setUser({
      nickname: nickname,
      id: id,
      password: password,
    });
  };

  console.log(user);

  const handleValid = ({ id, password }: IFormData) => {
    setId(id);
    setPassword(password);
    axios(config)
      .then((res: any) => {
        console.log(res.data);
        setUserState({ user });
        setNickname(res.data.user.displayName);
        if (res.data.accessToken) {
          setIsLoggedIn(true);
          navigate("/");
        }
      })
      .catch((error: any) => {
        console.log("error");
      });
  };

  // 해결해야 할 것
  // 로그인 한 정보들 atom persist에 넣어주는 것

  console.log(errors.id?.message);
  // +? 왜 ?를 붙이니까 되고 안될 때는 undefined가 뜨지? 옵셔널 체이닝에 대하여

  return (
    <SignUpContainer>
      <header>
        <h1 className="ridi_logo">RIDI</h1>
      </header>
      <section className="ridi_form_box">
        <section className="ridi_form">
          <form onSubmit={handleSubmit(handleValid)} className="signup_form">
            <div className="input_group">
              <label className="input_label">
                <input
                  {...register("id", {
                    required: "이메일을 적어주세요",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                      message: "이메일 형식이 아닙니다.",
                    },
                  })}
                  placeholder="이메일"
                />
              </label>
              <label className="input_label">
                <input
                  {...register("password", {
                    required: "비밀번호를 적어주세요",
                    minLength: {
                      value: 8,
                      message: "비밀번호는 8자 이상이여야 합니다",
                    },
                  })}
                  placeholder="비밀번호"
                  type="password"
                />
              </label>
              {/* <input {required: '비밀번호를 적어주세요'} placeholder="비밀번호" /> */}
            </div>
            <span>{errors?.id?.message || errors?.password?.message}</span>
            {/*  +? 왜 ?를 붙이니까 되고 안될
            때는 undefined가 뜨지? 옵셔널 체이닝에 대하여 */}
            {/* 이것도 아이디 비밀번호 폼 발리데이션꺼 집어넣기 */}
            <LoginButton className="login_button">로그인</LoginButton>
            <SignUpButton
              onClick={() => {
                navigate("/signup");
              }}
            >
              회원가입
            </SignUpButton>
          </form>
        </section>
      </section>
    </SignUpContainer>
  );
}
