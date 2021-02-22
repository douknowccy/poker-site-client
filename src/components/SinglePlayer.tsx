import React from "react";
import styled from "styled-components";
import UseUserContext from "../context/UserContext";

type Props = {
  data: DataType[];
};
const SinglePlayer: React.FC<Props> = ({ data }) => {
  const { state, userAction } = UseUserContext();
  return (
    <SinglePlayerWrapper>
      {data.map((user: DataType) => {
        const { account, id, moneyInPlay, userName } = user;
        if (state.userName === userName) {
          return (
            <div className="single_user" key={id}>
              <div>
                <h3>{state.account}</h3>
                <p>{state.userName}</p>
                <span>{state.moneyInPlay} $</span>
              </div>

              <div className="holecards">
                <div className="holecard card_1">Ks</div>
                <div className="holecard card_2">As</div>
              </div>
              <div className="actions">
                <button type="button" onClick={() => userAction("flop")}>
                  flop
                </button>
                <button onClick={() => userAction("turn")}>turn</button>
                <button onClick={() => userAction("river")}>river</button>
              </div>
            </div>
          );
        }
        return (
          <div className="single_user" key={id}>
            <div>
              <h3>{account}</h3>
              <p>{userName}</p>
              <span>{moneyInPlay} $</span>
            </div>
            <div className="holecards">
              <div className="holecard card_1">N/A</div>
              <div className="holecard card_2">N/A</div>
            </div>
          </div>
        );
      })}
    </SinglePlayerWrapper>
  );
};

const SinglePlayerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 60vh;
  width: 100vw;
  .single_user {
    margin: 1rem;
    color: white;
    height: 5rem;
    width: 8rem;
    background-color: #100e0e;
    border: 0.3rem solid grey;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;

    .holecards {
      margin-top: 2rem;
      height: 5rem;
      width: 8rem;

      display: flex;
      flex-direction: row;
      .holecard {
        height: 100%;
        width: 100%;
        background-color: #100e0e;
        border: 0.3rem solid grey;
        border-radius: 0.5rem;
      }
    }
  }
`;
export default SinglePlayer;
