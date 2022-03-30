import API from "../../lib/API";

const getUser = () => API
  .get('/auth')
  .then((response) => response.data)

export default getUser;
