const { authActionTypes } = require("./action-types");

exports.login = (user) => {
    console.log(
        'user: ' + JSON.stringify(user)
    )
  return async (dispatch) => {
    dispatch({
      type: authActionTypes.LOGIN_REQUEST,
      payload: {
        ...user
      },
    });
  };
};
