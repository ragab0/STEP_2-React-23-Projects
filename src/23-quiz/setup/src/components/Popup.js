import React from "react";
import { useGlobalContext } from "../utils/context";


export default function Popup() {
  const { appState, appDispatch } = useGlobalContext();
  const { currentCounter, currentCorrectCounter } = appState;
  function clickHandler(e) {
    appDispatch({type: "reset"});
  }
  return (
    <div className="modal-container isOpen">
      <div className="modal-content">
        <h2>congrats!</h2>
        <p>You answered {currentCorrectCounter / currentCounter * 100}% of questions correctly</p>
        <button className="close-btn" onClick={clickHandler}>play again</button>
      </div>
    </div>
  );
}
