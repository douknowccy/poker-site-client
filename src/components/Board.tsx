import React from "react";
import styled from "styled-components";
import UseUserContext from "../context/UserContext";

const Board = () => {
  const { state } = UseUserContext();
  return <BoardWrapper></BoardWrapper>;
};

const BoardWrapper = styled.div`
  width: 100vw;
  height: 10rem;
  background: coral;
`;
export default Board;
