import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import Search from "./Search";

// Remix Icons
import "remixicon/fonts/remixicon.css";

const NavContainer = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;

  margin-bottom: 45px;
  /* absolute로 뜬 height값 */

  i {
    font-size: 30px;
    font-weight: 300;
    margin-right: 18px;
  }

  .lastIcons {
    margin-right: 0;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 20px 15px;

    i {
      font-size: 24px;
      font-weight: 300;
      margin-right: 18px;
    }
  }

  @media ${(props) => props.theme.desktop} {
    padding: ${(props) => props.theme.desktopPadding};
    margin-bottom: 0;
  }
`;

const LogoBox = styled.div`
  width: 50%;
  display: flex;
  font-weight: 700;
`;

const LogoText = styled.h1`
  font-size: 35px;
  margin-right: 5px;
  cursor: pointer;

  @media ${(props) => props.theme.mobile} {
    font-size: 24px;
    font-weight: 800;
    margin-right: 2px;
    letter-spacing: -1px;
  }
`;
const LogoTextSub = styled(LogoText)`
  color: ${(props) => props.theme.accentColor};
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 50%;
`;

const MenuButtons = styled.ul`
  display: flex;
`;

const Buttons = styled.li`
  color: ${(props) => props.theme.textColor};
  &:hover {
    cursor: pointer;
  }
`;

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <>
      <NavContainer>
        <LogoBox
          onClick={() => {
            navigate("/");
          }}
        >
          <LogoText>READY</LogoText>
          <LogoTextSub>BOOKS</LogoTextSub>
        </LogoBox>
        <MenuBox>
          <Search />
          <MenuButtons>
            <Buttons>
              <i className="ri-notification-line icons"></i>
            </Buttons>
            <Buttons>
              <i className="ri-shopping-cart-line icons"></i>
            </Buttons>
            <Buttons>
              <i className="ri-book-open-line icons"></i>
            </Buttons>
            <Buttons>
              <i className="ri-user-3-line lastIcons"></i>
            </Buttons>
          </MenuButtons>
        </MenuBox>

        {/* 이 지점에서 nested Router를 만들고 
        여기서 기본 recommend (home), event, search */}
      </NavContainer>
    </>
  );
}
