interface UserType {
  userName: string;
  account: string;
  auth: string;
  balance: number;
  type: string;
}
type ContextType = {
  state: UserType;
  // dispatch?: React.Dispatch<Actions>;
  setUserDefault: () => void;
  setName: () => void;
};
// reducer
type Actions = {
  type: GET_USER;
  payload: any;
};

//  actions
type GET_USER = typeof GET_USER;
type SET_USER_DEFAULT = typeof SET_USER_DEFAULT;
