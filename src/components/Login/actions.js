export function onChangeEmail(evt) {
  return {type: "login.change.email", email: evt.target.value}
}

export function onChangePassword(evt) {
  return {type: "login.change.password", password: evt.target.value}
}