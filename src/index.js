import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Toggles from "./Toggles";
import reportWebVitals from "./reportWebVitals";
import questions from "./mockQuestions";

// Can create custom questions in ./mockQuestions, then select by index here. 'currentQuestion' will then be passed to the component
const currentQuestion = questions[0];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toggles {...currentQuestion} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
