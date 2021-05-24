export const token = (state, token) => {
  state.user.token = token;
  localStorage.setItem("Authtoken", token);
};
export const data = (state, data) => {
  state.user.data = data;
};
