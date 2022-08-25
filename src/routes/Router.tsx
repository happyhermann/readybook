import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

import Header from "../components/Header";
import Recommend from "./Recommend";
import Event from "./Event";
import SearchedResult from "./SearchResult";
import Details from "./Details";
import Footer from "../components/Footer";

import Login from "./Login";
import SignUp from "./SignUp";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="search" element={<SearchedResult />} />
          <Route path="books" element={<Details />} />
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Recommend />} />
            <Route path="event" element={<Event />} />
          </Route>

          {/* 도서 Home만 구현 */}
          {/* <Route path="/webtoon" element={<div>webtoon</div>} />
          <Route path="/novel" element={<div>novel</div>} />
          <Route path="/select" element={<div>select</div>} /> */}
        </Routes>{" "}
        <Footer />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
