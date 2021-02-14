import React, { useReducer, useContext, createContext } from "react";
import { GET_USER, SET_USER_DEFAULT } from "./actions";
import reducer from "./reducer";

const UserProvider = createContext<ContextType | null>(null);

const initialState: UserType = {
  userName: "",
  account: "",
  auth: "",
  balance: 0,
  type: "",
};

export const UserProviderContext: React.FC<React.ReactNode> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setName = () => {
    dispatch({ type: GET_USER, payload: "Elon Chen" });
  };
  const setUserDefault = () => {
    dispatch({ type: SET_USER_DEFAULT, payload: "" });
  };
  return (
    <UserProvider.Provider value={{ state, setName, setUserDefault }}>
      {children}
    </UserProvider.Provider>
  );
};

const UseUserContext = () => useContext(UserProvider);

export default UseUserContext;
