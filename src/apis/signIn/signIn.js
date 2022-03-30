import API from "../../lib/API";

const signIn = (email, password) => API
  .post('/auth/sign-in', { email, password })
  .then((response) => response.data)

export default signIn;
