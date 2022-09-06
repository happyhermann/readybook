import React from "react";
import styled from "styled-components";

const Arrow = styled.div`
  margin-top: 10px;
  next-arrow {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .right {
    font-size: 18px;
    cursor: pointer;
  }

  .next {
    font-size: 15px;
    line-height: -20px;
  }
`;

interface NextArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
// 타입스크립트를 사용하기 때문에 onClick 이벤트를 props로 받아준다.
// className을 받아줄 수 도 있다. 그리고 부모 컴포넌트에서 설정해 줘도 된다.

export default function NextArrow({ onClick }: NextArrowProps) {
  return (
    <Arrow>
      <div className="next-arrow" onClick={onClick}>
        <i className="ri-arrow-right-s-line  right"></i>
        <span className="next">Next</span>
      </div>
    </Arrow>
  );
}
