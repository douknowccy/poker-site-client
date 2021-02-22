import { act } from "react-dom/test-utils";
import { GET_USER, USER_ACTION } from "./actions";
// reducer
type Actions =
  | {
      type: GET_USER;
      payload: any;
    }
  | { type: USER_ACTION; payload: any };

const reducer = (state: UserType, action: Actions): {} => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        account: action.payload.account,
        userName: action.payload.userName,
        moneyInPlay: action.payload.moneyInPlay,
      };
    case USER_ACTION:
      console.log(action.payload.tempCardData);

      return {
        ...state,
        BoardType: action.payload.userAction,
        BoardTexture: action.payload.tempCardData,
      };

    default:
      return state;
  }
};

export default reducer;
