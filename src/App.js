import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  //-------------------------------문법 설명 start---------------------------------------------

  // [불러올 이름, 변경될 이름] state -> 일반변수와 state의 차이점 : 변수값이 변경되는 경우 자동으로 렌더링이 된다. (자주 변경되는 값들을 state로 만드는 것이 좋아)
  let [글제목, b] = useState("상남자 코트 추천");

  // destructing 문법
  let num = [1, 2];
  let [a, c] = num; // let a = num[0]; let c = num[1]; 과 같은 문법

  //--------------------------------문법 설명 end----------------------------------------------

  let [blogNm1, setNm1] = useState("남자 코트 추천");
  let [blogNm2, setNm2] = useState("강남 우동 맛집");
  let [blogNm3, setNm3] = useState("파이썬 독학");

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "yellow", fontSize: "16px" }}>Make Blog</h4>
      </div>
      <div className="list">
        <h4>{blogNm1}</h4>
        <p>{a}월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{blogNm2}</h4>
        <p>{a}월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{blogNm3}</h4>
        <p>{a}월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
