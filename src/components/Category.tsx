import React from "react";

import styled from "styled-components";

const CategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.accentColor};
  font-size: 20px;
  font-weight: 600;

  @media ${(props) => props.theme.mobile} {
    padding: 12px;

    .category_menu span {
      display: none;
    }
  }

  .category_menu {
    display: flex;
    color: ${(props) => props.theme.textColor};
    cursor: pointer;
  }

  .category_menu i {
    font-size: 24px;
    margin-right: 5px;
  }

  @media ${(props) => props.theme.desktop} {
    padding: 25px 100px;
    display: flex;
    font-weight: 500;
    font-size: 26px;

    .category_menu {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: ${(props) => props.theme.textColor};
    }
  }
`;

export default function Category() {
  return (
    <CategoryBox>
      <div className="category_text">
        <h3>도서</h3>
      </div>
      <div className="category_menu">
        <i className="ri-menu-line"></i>
        <span>전체 카테코리</span>
      </div>
    </CategoryBox>
  );
}
