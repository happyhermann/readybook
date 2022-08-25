import React from "react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { searchedAtom } from "../atom";
import { ResultType } from "../routes/SearchResult";

export default function Pagination() {
  const result = useRecoilValue<ResultType[]>(searchedAtom);
  console.log(result);

  const [totalPage, setTotalPage] = useState([] as any);
  // never [] 처리법 [] as any

  
  const makePageArray = () => {
    let pageArray = [];
    for (let i = 1; i <= result.length; i++) {
      pageArray.push(i);
    }
    setTotalPage(pageArray);
    console.log(pageArray);
  };

  let pageArr = [] as any;
  const pagination = () => {
    for (let i = 0; i < totalPage.length; i += 10) {
      pageArr.push(totalPage.slice(i, i + 10));
    }
    return pageArr;
  };
  pagination();

  return (
    <div>
      <h1>123</h1>
    </div>
  );

  // 모든 페이지가 해당 배열에 들어오도록하는 함수
}
