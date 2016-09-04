const initialState = {
  email: "",
  password: "",
  token: undefined
};

export default function serverReducer(state = initialState, action) {
  switch (action.type) {
    case "login.change.email":
      return onChangeEmail(state, action.email);
    case "login.change.password":
      return onChangePassword(state, action.password);
    default:
      return state;
  }
}

function onChangeEmail(state, email) {
  return {
    ...state,
    email: email
  };
}

function onChangePassword(state, password) {
  return {
    ...state,
    password: password
  };
}