import { authActionTypes } from "../actions/action-types";

const initialState = {
  name: "mukesh1",
  email: "mukesh1@gmail.com",
};

const authReducer = (state = initialState, action) => {
    console.log('action: ' + JSON.stringify(action))
  switch (action.type) {
    case authActionTypes.LOGIN_REQUEST:
      state = {
        ...state,
        ...action.payload,
      }
      break;
  }

  return state;
};
export default authReducer;