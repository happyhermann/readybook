import React from "react";
import styled from "styled-components";

const Arrow = styled.div`
  margin-top: 10px;
  position: absolute;
  z-index: 1;
  top: 25%;
  right: 4.5%;
  transform: translate(4px);
  next-arrow {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .right {
    cursor: pointer;
    font-size: 30px;
    cursor: pointer;

    position: absolute;
    pointer-events: auto;
    right: -45px;
    &:hover {
      color: gray;
      transition: 0.3s ease-in;
    }
  }

  @media ${(props) => props.theme.desktop} {
    .right {
      font-size: 35px;
      right: -65px;
    }
  }
  @media ${(props) => props.theme.fullSize} {
    .right {
      font-size: 40px;
      right: -55px;
    }
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
      </div>
    </Arrow>
  );
}
