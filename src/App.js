/*eslint-disable*/

import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  //-------------------------------문법 설명 start---------------------------------------------

  // [불러올 이름, 변경될 이름] state -> 일반변수와 state의 차이점 : 변수값이 변경되는 경우 자동으로 렌더링이 된다. (자주 변경되는 값들을 state로 만드는 것이 좋아)
  let [글제목, b] = useState("상남자 코트 추천");

  // state 변경 함수의 특징
  // 1. 기존 state == 신규 state의 경우 변경을 해주지 않는다.
  // 2. array, object 데이터는 변수에 데이터를 담는 것이 아니라, array나 object이 어디에 있는지를 알려주는 것이다.(변수1과 변수2가 가르키는 화살표가 같은 경우, 변수1 == 변수2는 true )

  // destructing 문법
  let num = [1, 2];
  let [a, c] = num; // let a = num[0]; let c = num[1]; 과 같은 문법

  // redux 문법 (데이터를 어느 컴포넌트에서 꺼내서 사용하는 방법)
  // 선언은 index.js에서 한다.
  const reduxVal = useSelector((state) => state);

  // 컴포넌트에서 state 수정을 요청하기 위해서 사용하기 위한 것
  const dispatch = useDispatch();

  //--------------------------------문법 설명 end----------------------------------------------

  let [blogNm1, setNm1] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);

  let [like, likePlus] = useState(0);

  function sortingName() {
    let forSort = [...blogNm1];
    forSort.sort();
    setNm1(forSort);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "yellow", fontSize: "16px" }}>Make Blog</h4>
      </div>

      <button onClick={sortingName}>이름순 정렬</button>
      <div className="list">
        <h4>
          {/* state 변경함수 사용 방법 */}
          {blogNm1[0]} <span onClick={() => likePlus(like + 1)}>👍</span> {like}
        </h4>
        <p>
          {a}월 17일 발행{" "}
          <button
            onClick={() => {
              let copy = [...blogNm1]; // state가 array/object면 독립적인 카피본을 만들어서 수정해야한다. (shallow copy)
              copy[0] = "여자 코트 추천";
              setNm1(copy);
            }}
          >
            👩
          </button>
        </p>
      </div>
      <div className="list">
        <h4>{blogNm1[1]}</h4>
        <p>{a}월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{blogNm1[2]}</h4>
        <p>{a}월 17일 발행</p>
      </div>
      <div className="list">
        <h4>Redux 문법을 사용하여 받은 데이터</h4>
        <p>{reduxVal}</p>
        <div>
          <h4>dispatch를 사용해서 state의 값을 변화</h4>
          <button onClick={() => dispatch({ type: "증가" })}>더하기</button>
          <button onClick={() => dispatch({ type: "감소" })}>빼기</button>
        </div>
      </div>
      <Modal />
    </div>
  );
}

// 컴포넌트 문법
// 1. 반복적 html 축약할 때
// 2. 큰 페이지들
// 3. 자주 변경되는 것들
const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default App;
