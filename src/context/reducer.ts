import { GET_USER, SET_USER_DEFAULT } from "./actions";

const reducer = (state: UserType, action: Actions) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, userName: action.payload };
    case SET_USER_DEFAULT:
      return { ...state, userName: "" };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export default reducer;
