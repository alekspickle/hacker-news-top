

export const GET_USER = 'GET_USER'
export const getUser = ()=> {
  return dispatch => {
    type: GET_USER
  };
}