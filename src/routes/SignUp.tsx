import React, { useState } from "react";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";

import { checkId } from "../atom";
import { LoginState } from "../LoginState";

import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    margin-bottom: 20px;
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
  // ??????????????? ??????
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

export default function SignUp() {
  let navigate = useNavigate();

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
    displayName: nickname,
  });

  const config = {
    method: "post",
    url: "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup",
    headers: {
      "content-type": "application/json",
      apikey: "FcKdtJs202204",
      username: "eeeee",
    },
    data: data,
  };

  const handleValid = ({ nickname, id, password }: IFormData) => {
    setNickname(nickname);
    setId(id);
    setPassword(password);
    axios(config)
      .then((res: any) => {
        if (res.data) {
          navigate("/login");
        }
      })
      .catch((error: any) => {
        console.log("error");
      });
  };

  console.log(errors.id?.message);
  // +? ??? ???? ???????????? ?????? ?????? ?????? undefined??? ??????? ????????? ???????????? ?????????

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
                  {...register("nickname", {
                    required: "???????????? ???????????????",
                    maxLength: {
                      value: 20,
                      message: "20??? ???????????? ?????????",
                    },
                  })}
                  placeholder="?????????"
                />
              </label>
              <label className="input_label">
                <input
                  {...register("id", {
                    required: "???????????? ???????????????",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                      message: "????????? ????????? ????????????.",
                    },
                  })}
                  placeholder="?????????"
                />
              </label>
              <label className="input_label">
                <input
                  {...register("password", {
                    required: "??????????????? ???????????????",
                    minLength: {
                      value: 8,
                      message: "??????????????? 8??? ??????????????? ?????????",
                    },
                  })}
                  placeholder="????????????"
                  type="password"
                />
              </label>
              {/* <input {required: '??????????????? ???????????????'} placeholder="????????????" /> */}
            </div>
            <span>
              {errors?.nickname?.message ||
                errors?.id?.message ||
                errors?.password?.message}
            </span>
            {/*  +? ??? ???? ???????????? ?????? ??????
            ?????? undefined??? ??????? ????????? ???????????? ????????? */}
            {/* ????????? ????????? ???????????? ??? ?????????????????? ???????????? */}
            {/* <LoginButton className="login_button">?????????</LoginButton> */}
            <SignUpButton>???????????? ??????</SignUpButton>
          </form>
        </section>
      </section>
    </SignUpContainer>
  );
}
