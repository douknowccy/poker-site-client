import React from "react";
import styled from "styled-components";
import SinglePlayer from "../components/SinglePlayer";
import Title from "../components/Title";
import Board from "../components/Board";
const data: DataType[] = [
  {
    id: 1,
    userName: "Elon",
    account: "Elon",
    moneyInPlay: 50,
  },
  {
    id: 2,
    userName: "Ezreal",
    account: "Ezreal",
    moneyInPlay: 50,
  },
  {
    id: 3,
    userName: "Darius",
    account: "Darius",
    moneyInPlay: 50,
  },
  {
    id: 4,
    userName: "Smith",
    account: "Smith",
    moneyInPlay: 50,
  },
  {
    id: 5,
    userName: "Eren",
    account: "Eren",
    moneyInPlay: 50,
  },
  {
    id: 6,
    userName: "Annie",
    account: "Annie",
    moneyInPlay: 50,
  },
];
function Room() {
  return (
    <RoomWrapper>
      {/* Title */}
      <Title />
      {/* Theme */}

      <SinglePlayer data={data} />

      {/* Board */}
      <Board />
      {/* Hero */}
    </RoomWrapper>
  );
}

const RoomWrapper = styled.main`
  width: 100vw;
  background-color: #3f551d;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export default Room;
