import axios, { AxiosResponse } from "axios";
import config from "../../config";

export type Action = {
  type: string;
  method: string;
  url: string;
  data?: object;
};

type Requests = {
  post: any;
  put: any;
  get: any;
};
const requests: Requests = {
  post: axios.post,
  put: axios.put,
  get: axios.get
};

const getMethod = (name: string) => {
  switch (name) {
    case "GET":
      return requests.get;
    case "PUT":
      return requests.put;
    default:
      return requests.post;
  }
};

export const createApiRequest = (action: Action) => (dispatch: ) => {
  const req = getMethod(action.method);
  req(`${config.baseUrl}${action.url}`)
    .then((res: AxiosResponse) =>
      dispatch({ type: `${action.type}_SUCCESS`, data: res.data })
    )
    .catch(dispatch(`${action.type}_FAILURE`));
};
