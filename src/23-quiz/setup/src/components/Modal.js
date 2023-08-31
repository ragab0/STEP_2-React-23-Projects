import React from "react";
import { useGlobalContext } from "../utils/context";
import Popup from "./Popup";


export default function Modal() {
  const { appState, appDispatch } = useGlobalContext();
  const { currentResult, currentCounter, currentCorrectCounter, currentAnswer, choices=[] } = appState;

  function submitHandler(e) {
    currentAnswer && appDispatch({
      type: "submitHandler",
      payload: e.target.value
    })
  }

  function setAnswer(e) {
    appDispatch({
      type: "setAnswer",
      payload: e.target.value,
    })
  }


  const {question="Question DONE ^_^"} = currentResult ?? {};
  return (
    <>
      {!currentResult && <Popup />}
      <section className="quiz">  
        <p className="correct-answers">correct answers : {currentCorrectCounter}/{currentCounter}</p>
        <article className="container">
          <h2>{question}</h2>
          <div className="btn-container">
            {
              choices.map((answer, i) => (
                <button key={i} className={`answer-btn ${answer === currentAnswer ? "active" : ""}`} name={answer} value={answer} onClick={setAnswer}>{answer}</button>
              ))
            }
          </div>
        </article>
        <button className={`next-question ${currentAnswer ? "" : "disabled"}`} onClick={submitHandler} value={currentAnswer}>next question</button>
      </section>
    </>
  );
}
