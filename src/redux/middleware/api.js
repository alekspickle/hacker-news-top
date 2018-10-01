import axios from "axios";

const requests = {
  post: axios.post,
  put: axios.put,
  get: axios.get
};

const getMethod = (name: string) => requests[`${name.toLowerCase}`];

export default action => {};
