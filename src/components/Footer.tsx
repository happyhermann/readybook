import React from "react";

import "remixicon/fonts/remixicon.css";
import styled from "styled-components";

const Footers = styled.div`
  @media ${(props) => props.theme.mobile} {
    padding-top: 30px;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 50px;
    .listWrapper {
    }
    .listUl {
      width: 100%;
      width: auto;
      margin-bottom: 30px;
      display: flex;
    }
    .customer,
    .notice {
      display: flex;
      align-items: center;
      width: 50%;
      letter-spacing: -0.01em;
      color: #787878;
    }
    .customer i,
    .notice i {
      font-size: 22px;
      margin-right: 8px;
      font-weight: 400;
    }
    .customer span,
    .notice span {
      font-size: 14px;
      line-height: 16px;
      font-weight: 600;
    }

    .listsBox {
      display: flex;

      ul {
        padding: 0;
        margin-bottom: 16px;
        font-size: 12px;
        line-height: 14px;
        color: #787878;
        font-weight: 700;
      }

      li {
        padding: 7px 0;
        font-size: 12px;
        line-height: 14px;
        color: #787878;
        font-weight: 400;
        cursor: pointer;
      }
      h3 {
        padding: 0;
        margin-bottom: 16px;
        font-size: 13px;
        line-height: 14px;
        font-weight: 500;
        color: #787878;
      }
    }
    .listsBox_left {
      width: 50%;
    }

    .bottomBox {
      margin-top: 55px;
      .bottomBtn {
        color: #787878;
        font-size: 12px;
        font-weight: 700;
        line-height: 14px;
        letter-spacing: -0.01em;
        border: none;
        background-color: white;
      }
      .bottomLists {
        margin-top: 10px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        li {
          font-size: 10px;
          line-height: 18px;
          color: #787878;
          margin-right: 8px;
        }
      }
      .bottomCorp {
        font-size: 10px;
        font-weight: 400;
        line-height: 12px;
        margin-top: 9px;
        color: #787878;
      }
      .socialMedias {
        visibility: hidden;
      }
    }
  }

  @media ${(props) => props.theme.desktop} {
    padding: 16px 100px;
    position: relative;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    .listUl {
      margin-top: 30px;
      width: 80%;
      margin-bottom: 10px;
      display: flex;
      position: relative;
    }
    .customer,
    .notice {
      display: flex;
      align-items: center;
      width: 50%;
      letter-spacing: -0.01em;
      color: #787878;
      margin-bottom: 15px;
    }
    .customer i,
    .notice i {
      font-size: 16px;
      margin-right: 8px;
      font-weight: 400;
    }
    .customer span,
    .notice span {
      font-size: 12px;
      line-height: 16px;
      font-weight: 600;
    }

    .listsBox {
      width: 80%;
      display: flex;

      ul {
        padding: 0;
        font-size: 12px;
        line-height: 14px;
        color: #787878;
        font-weight: 700;
      }

      li {
        padding: 7px 0;
        font-size: 12px;
        line-height: 14px;
        color: #787878;
        font-weight: 400;
        cursor: pointer;
      }
      h3 {
        padding: 0;
        margin-bottom: 13px;
        font-size: 13px;
        line-height: 14px;
        font-weight: 500;
        color: #787878;
      }
      .listsBox_left {
        width: 50%;
      }

      .socialMedias {
        width: 20%;
        display: flex;
        padding: 0 4px;
        list-style: none;
        position: absolute;
        top: 35px;
        right: -182px;

        li {
          color: #787878;
        }
        li > i {
          font-size: 12px;
          font-weight: 200;
          padding: 8px;
          border: 1px solid #e6e6e6;
          border-radius: 22px;
          margin-right: 5px;
        }
      }
    }

    // footer bottom은 mobile / desktop 차이 없음
    .bottomBox {
      text-align: center;
      margin-top: 60px;
      .bottomBtn {
        color: #787878;
        font-size: 12px;
        font-weight: 700;
        line-height: 14px;
        letter-spacing: -0.01em;
        border: none;
        background-color: white;
      }
      .bottomLists {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;

        li {
          font-size: 10px;
          line-height: 18px;
          color: #787878;
          margin-right: 8px;
        }
      }
      .bottomCorp {
        font-size: 10px;
        font-weight: 400;
        line-height: 12px;
        margin-top: 9px;
        color: #787878;
      }
    }
  }
  @media ${(props) => props.theme.mobile} {
    .socialMedias {
      display: none;
    }
  }
`;

const FooterHr = styled.div`
  hr {
    display: block;
    width: 100%;
    height: 1px;
    background: #f0f0f0;
    border: none;
  }
  margin-bottom: 35px;
`;

export default function Footer() {
  return (
    <Footers>
      <FooterHr>
        <hr />
      </FooterHr>
      <div className="listWrapper">
        <ul className="listUl">
          <li className="customer">
            <i className="ri-customer-service-2-line"></i>
            <span>고객센터</span>
          </li>
          <li className="notice">
            <i className="ri-newspaper-line"></i>
            <span>공지사항</span>
          </li>
        </ul>
        <div className="listsBox">
          <div className="listsBox_left">
            <h3>서비스</h3>
            <ul>
              <li>레디페이퍼</li>
              <li>제휴카드</li>
              <li>뷰어 다운로드</li>
              <li>CP사이트</li>
              <li>레디셀렉트 B2B</li>
            </ul>
          </div>
          <div className="listsBox_right">
            <h3>기타 문의</h3>
            <ul>
              <li>콘텐츠 제공 문의</li>
              <li>사업 제휴 문의</li>
            </ul>
            <div>
              <h3>회사</h3>
              <ul>
                <li>회사 소개</li>
                <li>인재채용</li>
              </ul>
            </div>
          </div>
          <div className="socialMedias">
            <li>
              <i className="ri-facebook-fill"></i>
            </li>
            <li>
              <i className="ri-instagram-line"></i>
            </li>
            <li>
              <i className="ri-youtube-line"></i>
            </li>
          </div>
        </div>
        <div className="bottomBox">
          <div className="bottomBtn">레디북스(주) 사업자 정보</div>
          <ul className="bottomLists">
            <li>이용약관</li>
            <li>개인정보 처리방침</li>
            <li>청소년보호정책</li>
            <li>사업자정보확인</li>
          </ul>
          <div className="bottomCorp">
            <span>(주)레디 Corp.</span>
          </div>
        </div>
      </div>
    </Footers>
  );
}
