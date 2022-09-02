import React from "react";
import styled from "styled-components";

const PageNav = styled.nav`
  margin-top: 10px;
  margin: 10px auto;
`;

const PageUl = styled.ul`
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: black;
  background-color: white;
`;

const PageLi = styled.li`
  display: inline-block;
  background-color: whitesmoke;
  font-size: 14px;
  font-weight: 600;
  margin-right: 5px;
  border-radius: 5px;
  width: 30px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;

interface IProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (currentPage: number) => void;
}

// props 타입 에러 해결, 부모 요소에서 props로 컴포넌트에 명시한 것
// 그런데 Dispatch<SetStateAction<number>
// 이런 에러가 떴었는데
// interface로 타입을 명시해주고, 무엇보다
// **paginate setState 함수를 props로 받는데,
// 파라미터 값으로 state의 타입을 넣어줘야 해결되었음
// https://velog.io/@rohkorea86/Type-error-Type-Dispatch-SetStateAction-is-not-assignable-to-type-void.-TS2322

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
}: IProps) {
  const pageNumbers = [];
  //pageNumbers : 총 페이지 넘버 수를 계산한 뒤 웹 페이지에서 보여주기 위하여, 전체 포스트 갯수를 페이지 당 포스트 갯수로 나눈 값으로 배열을 만든 것입니다.

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  // console.log(pageNumbers);
  // console.log(totalPosts, postsPerPage);

  return (
    <div>
      <PageNav>
        <PageUl className="pagination">
          {pageNumbers.map((number) => (
            <PageLi key={number} className="page-item">
              <PageSpan onClick={() => paginate(number)} className="page-link">
                {number}
              </PageSpan>
            </PageLi>
          ))}
        </PageUl>
      </PageNav>
    </div>
  );
}
