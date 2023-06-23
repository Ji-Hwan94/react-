import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

const 체중 = 100;

// redux 사용
// reducer란, 상태와 관리를 용이하게 하기 위해서 수정요청을 하는 부분
function reducer(state = 체중, action) {
  if (action.type === "증가") {
    state++;
    return state;
  } else if (action.type === "감소") {
    state--;
    return state;
  } else {
    return state;
  }
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
