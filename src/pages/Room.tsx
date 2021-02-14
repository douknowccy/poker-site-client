import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
function Room() {
  return (
    <RoomWrapper>
      {/* Title */}
      <Title />
      {/* Opponents */}
      {/* Board */}
      {/* Hero */}
    </RoomWrapper>
  );
}

const RoomWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: coral;
`;

export default Room;
