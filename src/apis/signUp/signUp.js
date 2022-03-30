import API from "../../lib/API";

const signUp = (email, password) => API
  .post('/auth/sign-up', { email, password })
  .then((response) => response.data)

export default signUp;
