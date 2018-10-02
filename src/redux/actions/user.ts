import { createApiRequest } from "../middleware";

export const GET_USER = "GET_USER";
export const getUser = () =>
  createApiRequest((dispatch: any) => {
    type: GET_USER,
    method: 'GET',
  });
