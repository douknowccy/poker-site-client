import React, { useReducer, useContext, createContext, useEffect } from "react";
import { GET_USER, USER_ACTION } from "./actions";
import reducer from "./reducer";
type ContextType = {
  state: UserType;
  dispatch?: ({ type }: { type: string }) => void;
  userAction: (props: string) => void;
};
const UserProvider = createContext({} as ContextType);

const initialState: UserType = {
  userName: "",
  account: "",
  auth: "",
  moneyInPlay: 0,
  BoardType: "",
  BoardTexture: [],
};
const CardData: any = {
  flop: [
    { id: 1, card: "Ac" },
    { id: 2, card: "9h" },
    { id: 3, card: "3d" },
  ],
  turn: [{ id: 4, card: "Js" }],

  river: [{ id: 5, card: "Ad" }],
};
export const UserProviderContext: React.FC<React.ReactNode> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setUser = () => {
    dispatch({
      type: GET_USER,
      payload: { userName: "Elon", account: "keddy406", moneyInPlay: 100 },
    });
  };
  const userAction = (userAction: string) => {
    let tempCardData = CardData[userAction];
    dispatch({
      type: USER_ACTION,
      payload: { userAction, tempCardData },
    });
  };
  useEffect(() => {
    setUser();
  }, []);

  return (
    <UserProvider.Provider value={{ state, userAction }}>
      {children}
    </UserProvider.Provider>
  );
};

const UseUserContext = () => useContext(UserProvider);

export default UseUserContext;
