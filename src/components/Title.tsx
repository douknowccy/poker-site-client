import React from "react";
import UseUserContext from "../context/UserContext";
function Title() {
  const { state, setName, setUserDefault } = UseUserContext()!;
  return (
    <>
      <p>{state.userName || " "}</p>
      <button type="button" onClick={setName}>
        set UserName to Elon
      </button>
      <button type="button" onClick={setUserDefault}>
        set UserName to ""
      </button>
    </>
  );
}

export default Title;
